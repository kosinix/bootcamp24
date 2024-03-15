---
sidebar_position: 4
---

# Chapter 2 - Nunjucks

## Templating Engine
In the previous chapter, we served the HTML directly from our route. With this approach, `index.js` could become a very large file when we add more and more pages for our app. Also what happens if we want to share the same HTML for different pages?

This is where a Templating Engine comes in.

**Nunjucks** is a templating engine for JavaScript. A templating engine simplifies the management of your HTML files.

Lets try and use Nunjucks:

1. Start by installing it

    ```bash
    npm install nunjucks
    ```

1. Go ahead and check your `package.json`. You now have `nunjucks` together with `express` under dependencies. That means that your app now depends on `express` and `nunjucks` to work properly.

## Setting up Nunjucks
Let's setup Nunjucks with Express.

1. Start by replacing the content of your `index.js` with the code below:

    ```javascript
    // Required packages
    const express = require('express')
    const nunjucks = require('nunjucks')

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

    // Static public files
    app.use(express.static(__dirname + '/data/public'));

    app.get('/', (req, res) => {
        res.render('index.html')
    })
    app.listen(port, () => {
        console.log(`App running on http://localhost:${port}`)
    })
    ```

1. Stop anu running node app: `CTRL + C`
1. Run your express app: `node index.js`

Voila it still looks the same in the frontend, but our template code is now managed by nunjucks!


## Dissecting our index.js

First we include the packages we need, express and nunjucks

```javascript
// Required packages
const express = require('express')
const nunjucks = require('nunjucks')
```

Then we declare constant variables that will be used by our app. 

Constants are used because these values wont change during the lifetime of our app.
```javascript
// Constants
const appDir = __dirname // Path to app directory
const dirView = appDir + '/data/view' // Path to app directory
const port = 3000
```


Next we create express
```javascript
const app = express()
```

We setup Nunjucks. 

We tell the FileSystemLoader where our view directory is specified by `dirView`. 
The option `noCache` tells it to recompile the template files when it changes.

```javascript
let loaderFsNunjucks = new nunjucks.FileSystemLoader(dirView, {
    noCache: true
})
let nunjucksEnv = new nunjucks.Environment(loaderFsNunjucks)
```

Next we hook up express and nunjucks
```javascript
nunjucksEnv.express(app)
```

We use the `express.static` middleware to serve public static files such as CSS and JS
```javascript
app.use(express.static(__dirname + '/data/public'));
```

Then we replace `res.send` with `res.render` to render the `index.html` file.
```javascript
app.get('/', (req, res) => {
    res.render('index.html')
})
```

Then we finally run our server.
```javascript
app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`)
})
```

That's it.

## Exercise - Adding Routes
Go ahead and click the "Protected Page" in the navigation of our web app.

Did you get a `Cannot GET /protected` error?

This is because the route does not exist yet.

### Protected Page Route

Go ahead and add the route for the protected page. 

1. The path is: `/protected`
1. The code must be placed after the home page route.
1. Use the template file found in `data/view/protected.html`

## Congratulations! 
You've just used a template engine!

:::tip

**Checkpoints**

If for some reason, you didnt get it right, you can check the correct code in the `checkpoints` branch. This one is on a commit named `chapter-02`.
:::