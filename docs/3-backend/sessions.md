---
sidebar_position: 5
---

# Chapter 3 - Sessions

By design, web apps doesn't have a way to remember you. It treats every visit to it as unique. In order to differentiate your request among others, we use sessions.

:::info
Sessions are used to maintain stateful information about a user's activities across multiple requests and responses between the client (typically a web browser) and the server.
:::

The most common use of session, is to identify if a user is logged-in or not.

A login is used to secure a portion of a web app. Meaning you can only view it if you are logged in.

## Session Package

To use sessions in express, install the session package.

1. Run this in the terminal:

    ```bash
    npm install express-session
    ```

1. Include the session module:

    ```javascript
    const session = require('express-session')
    ```

1. Next we register the session middleware. 

    Add the code below before the `app.use(express.static(__dirname + '/data/public'));` middleware:

    ```javascript
    app.use(session({
        secret: 'secret',
        resave: false,
        saveUninitialized: false
    }))
    ```


## Protecting a Page Using Session

The `req.session` property is now available within routes to store and access session data.

Let's go ahead and protect the protected page using session data. 

Here we will attach a boolean variable into our `req.session`.

If the value is falsy, we will redirect the page to the login page:

    ```javascript
    app.get('/protected', (req, res) => {
        if(!req.session.login){
            return res.redirect('/login')
        }
        res.render('protected.html')
    })
    ```

Restart the app and go to the protected page. You will now be redirected to the login page. 

However the login page is non existent, so let's add it. 

## Login Page

Add this route just before the protected page route:

```javascript
app.get('/login', (req, res) => {
    res.render('login.html')
})
```

The combined code in `index.js` should look like this:
```javascript
// Required packages
const express = require('express')
const nunjucks = require('nunjucks')
const session = require('express-session')

// Constants
const appDir = __dirname // Path to app directory
const dirView = appDir + '/data/view' // Path to app directory
const port = 3000

// Express initialization
const app = express()

// Setup templating engine
// Setup nunjucks loader. See https://mozilla.github.io/nunjucks/api.html#loader
let loaderFsNunjucks = new nunjucks.FileSystemLoader(dirView, {
    "noCache": true
})
// Setup nunjucks environment. See https://mozilla.github.io/nunjucks/api.html#environment
let nunjucksEnv = new nunjucks.Environment(loaderFsNunjucks)
nunjucksEnv.express(app) // Hook up express and nunjucks

// Use the session middleware
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}))

// Static public files
app.use(express.static(__dirname + '/data/public'));

app.get('/', (req, res) => {
    res.render('index.html')
})

app.get('/login', (req, res) => {
    res.render('login.html')
})

app.get('/protected', (req, res) => {
    if(!req.session.login){
        return res.redirect('/login')
    }
    res.render('protected.html')
})

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`)
})
```

Restart the app. Now everytime you go to the Protected Page, you are redirected to the login page

:::tip
These view files are in the `data/view` directory already. So everything just works.
:::

## Congratulations!

You've just protected a page using sessions


