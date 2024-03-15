---
sidebar_position: 7
---

# Chapter 5 - SQLite
SQLite is a lightweight, self-contained, serverless relational database management system (RDBMS) that operates as a small, fast, and efficient library. 

Unlike client-server database management systems, SQLite is embedded into the application that uses it, requiring no separate server process or configuration. 

It's widely used in embedded systems, mobile applications, and small-scale database needs due to its simplicity, portability, and reliability. 


## Refactoring Our Code

### Install Needed Packages
We need to install packages in order to use SQLite as our database.

Lets try and install multiple packages at once:
```bash
npm install sqlite3 sequelize express-session-sequelize
```
Check your `package.json` to confirm the addition of these packages.


### Create Directories

Create new directories:
1. `data/src` - this will contain our app source files
1. `data/src/models` - this will contain our model files for `Sequelize` our Object-Relational Mapping (ORM) tool.

### Setting-up the Database

We need to create 2 new files:
* `data/src/db-connect.js` - This will hold our database connection
* `data/src/models/user.js` - This is the model file for our authenticated users

Place this code inside `db-connect.js`:
```javascript
const { Sequelize } = require('sequelize')

module.exports = {
    connect: async () => {
        try {

            const sequelize = new Sequelize({
                dialect: 'sqlite',
                storage: __dirname + '/app.db',
                logging: false,
            });

            await sequelize.authenticate()
            console.log(`Database connected.`);

            return sequelize
        } catch (error) {
            console.log('Connection error:', error.message)
        }
    },
    attachModels: async (sequelize) => {
        try {
            return {
                User: require('./models/user')('User', sequelize),
            }
        } catch (error) {
            console.log('Connection error:', error.message)
        }
    }
}
```
Place this code inside `data/src/models/user.js`:
```javascript
const { DataTypes } = require('sequelize')

module.exports = (modelName, sequelize) => {
    return sequelize.define(modelName, {
        email: {
            type: DataTypes.STRING
        },
        passwordHash: {
            type: DataTypes.STRING
        },
        salt: {
            type: DataTypes.STRING
        }
    }, {
        // Other model options go here
    })
}
```

In the `index.js` include the db-connect file. Place it just below the `const port = 3000` line:
```javascript
// Modules
const db = require('./data/src/db-connect')
```
Next, initialize the database and save its references. Place it just below the `nunjucksEnv.express(app)` line:
```javascript
// Connect to db
const dbInstance = await db.connect()
const dbModels = await db.attachModels(dbInstance)
app.locals.db = {
    instance: dbInstance,
    models: dbModels,
}
```

Try running your web app. Did you get this error?

:::danger[Error]
```bash
const dbInstance = await db.connect()
                   ^^^^^

SyntaxError: await is only valid in async functions and the top level bodies of modules

```
:::

This is because we use `await` outside of an `async` function.

To fix this, wrap the `index.js` in an immediately-invoked function expression (IIFE):

```javascript
(async () => {
// Code goes here
})()
```
Notice the `async` keyword.

### Sessions in Database
Right now the sessions are stored in memory. Notice that the login is lost when you restart the web app.

To fix this we will store are session in our app database.

1. Create a new file `/data/src/session.js`.
1. Place this code:

    ```javascript
    //// Core modules

    //// External modules
    const session = require('express-session'); // Session engine
    const SessionStore = require('express-session-sequelize')(session.Store);

    // Use the session middleware
    // See options in https://github.com/expressjs/session
    module.exports = (database) => {
        return session({
            name: 'gsu_node_zero_hero_app_sid',
            store: new SessionStore({
                db: database,
            }),
            secret: 'eD4qGBVHPjnsFqhNnvwuN9fmWdUFetnv',
            cookie: {
                "httpOnly": false,
                "maxAge": 86400000,
                "secure": false
            },
            resave: false,
            saveUninitialized: false
        });
    }
    ```


Back in `index.js`:

1. Remove `const session = require('express-session')`
1. After dbconnect add this line `const session = require('./data/src/session')`
1. Replace :

    ```javascript
        app.use(session({
        secret: 'secret',
        resave: false,
        saveUninitialized: false
    }))
    ```

    with

    ```javascript
    app.use(session(app.locals.db.instance));
    ```

1. Restart the web app.

## User Data

1. Create `data/src/password-man.js`:
    ```javascript
    /**
     * Generates random string and password hashing
    */
    const crypto = require('crypto')

    module.exports = {
        randomString: (length = 32) => {
            let bytes = crypto.randomBytes(length / 2);
            return bytes.toString('hex');
        },
        hashPassword: (password, salt) => {
            return crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
        },
    }
    ```

1. Include it in `index.js` after the session package

    ```javascript
    const passwordMan = require('./data/src/password-man')
    ```

1. Modify the `login`, `logout` and `protected` routes

    ```javascript
    app.get('/login', (req, res) => {
        if (req.session.authUserId) {
            return res.redirect('/protected')
        }
        res.render('login.html')
    })

    app.post('/login', async (req, res, next) => {
        try {
    
            let post = req.body;
    
            let email = post.email
            let password = post.password
    
            // Find admin
            let user = await req.app.locals.db.models.User.findOne({ where: { email: email } })
            if (!user) {
                throw new Error('Incorrect email.')
            }
    
            // Check password
            let passwordHash = passwordMan.hashPassword(password, user.salt);
            if (passwordHash !== user.passwordHash) {
                throw new Error('Incorrect password.')
            }
    
            // Save user id to session
            req.session.authUserId = user.id
            res.redirect('/protected')
        } catch (err) {
            res.render('login.html', {
                error: err.message
            })
        }
    })

    app.get('/logout', (req, res) => {
        req.session.authUserId = null
        res.redirect('/')
    })

    app.get('/protected', (req, res) => {
        if (!req.session.authUserId) {
            return res.redirect('/login')
        }
        res.render('protected.html')
    })
    ```

1. Add the `install-users.js` script in the root directory

    ```javascript
    (async () => {

        /**
         * Insert default users.
         * Usage: node install-users.js
         */
        //// Core modules
        const fs = require('fs');

        //// External modules

        //// Modules
        const passwordMan = require('./data/src/password-man');
        const dbConn = require('./data/src/db-connect');
        let dbInstance = await dbConn.connect()

        try {
            console.log('Clearing users...')

            let User = require('./data/src/models/user')('User', dbInstance)
            await User.drop()
            await User.sync()

            let email = 'developers@example.com'
            let password = 'password123'
            let salt = passwordMan.randomString(20)
            let passwordHash = passwordMan.hashPassword(password, salt)
            let data = {
                passwordHash: passwordHash,
                salt: salt,
                email: email,
            }
            await User.create(data)
            data.password = password
            console.log(data)
        } catch (err) {
            console.error(err)
        } finally {
            dbInstance.close();
        }
    })()
    ```

1. Type `node install-users.js` to run it.

1. Restart the web app


## Where to go from here?
:::tip

**This bootcamp is only 4 days. There is 365 days in a year. Its what you do after that matters.**

**A teacher can only open the door, but the student has to walk through it.**

**Wisdom is not merely bestowed, but embraced through individual journey.**

**The 10k Hour Rule: Achieving mastery in any field typically requires around 10,000 hours of deliberate practice.**

**Read. Write code. Git good.**

***Good Luck Have Fun ~ Nico Amarilla 2024***
:::