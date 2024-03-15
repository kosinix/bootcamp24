---
sidebar_position: 6
---

# Chapter 4 - Form Submit
A staple of every web app is the ability to submit data from forms.

We already have a login page. However, we dont have a route to receive the submitted data.

Try clicking the Login button in the login page. You'll get a `Cannot POST /login`. Notice that its a POST request.

## Capturing POST Data

POST data in web applications refers to the information sent from a client (such as a web browser) to a web server using the HTTP POST method. When a user submits a form on a website, the data entered into the form fields is typically sent to the server via a POST request. This data can include various types of information such as user input, file uploads, or other parameters.


## Express Post Routes
By far, we have been using only GET routes in express.

Let's add a route to handle our submitted form data. 

1. Add this below the GET login route. Notice that its an `app.post` route instead of an `app.get`:

    ```javascript
    app.post('/login', (req, res) => {
        res.send('Form submit handled!')
    })
    ```

1. Restart the app and try logging in again. 

Now we have a post route for login. However we need to process the submitted data. Let's try and show it.

1. Replace the post login route code with this:

    ```javascript
    app.post('/login', (req, res) => {
        let post = req.body

        res.send(post)
    })
    ```

1. Restart the app. Did you get a blank screen after submit?

This is because express does not have a way to handle POST data yet. Data submitted from our login form is not processed.

## Body Parser

1. Now lets install the body parser package.

    ```javascript
    npm install body-parser
    ```

1. Add this below `const session = require('express-session')`:

    ```javascript
    const bodyParser = require('body-parser')
    ```

1. Setup the body parser with express. Under `const app = express()`, add this code:

    ```javascript
    // Parse http body
    app.use(bodyParser.json()) // to support JSON-encoded bodies
    app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
        extended: true
    }))
    ```

1. Restart the app and submit the login form again.

Did you get the string 

```json
{"email":"developers@example.com","password":"password123"}
```

?


Good. Now we can process post data. The only thing left to do is to check if the email and password are correct, and set the session.

Change the post login route to this:

```javascript
app.post('/login', (req, res) => {
    let post = req.body
    if(post.email !== 'developers@example.com'){
        throw new Error('Wrong email')
    }
    if(post.password !== 'password123'){
        throw new Error('Wrong password')
    }
    req.session.login = true
    res.redirect('/protected')
})
```

Now you the web app works as expected when you logged in correctly. However, it doesn't look good when you give it the wrong login credentials:

```text
Error: Wrong email
    at C:\nodejs\node-zero-to-hero\index.js:54:15
    at Layer.handle [as handle_request] (C:\nodejs\node-zero-to-hero\node_modules\express\lib\router\layer.js:95:5)
    at next (C:\nodejs\node-zero-to-hero\node_modules\express\lib\router\route.js:149:13)
    at Route.dispatch (C:\nodejs\node-zero-to-hero\node_modules\express\lib\router\route.js:119:3)
    at Layer.handle [as handle_request] (C:\nodejs\node-zero-to-hero\node_modules\express\lib\router\layer.js:95:5)
    at C:\nodejs\node-zero-to-hero\node_modules\express\lib\router\index.js:284:15
    at Function.process_params (C:\nodejs\node-zero-to-hero\node_modules\express\lib\router\index.js:346:12)
    at next (C:\nodejs\node-zero-to-hero\node_modules\express\lib\router\index.js:280:10)
    at C:\nodejs\node-zero-to-hero\node_modules\body-parser\lib\read.js:137:5
    at AsyncResource.runInAsyncScope (node:async_hooks:206:9)
```

or

```text
Error: Wrong password
    at C:\nodejs\node-zero-to-hero\index.js:57:15
    at Layer.handle [as handle_request] (C:\nodejs\node-zero-to-hero\node_modules\express\lib\router\layer.js:95:5)
    at next (C:\nodejs\node-zero-to-hero\node_modules\express\lib\router\route.js:149:13)
    at Route.dispatch (C:\nodejs\node-zero-to-hero\node_modules\express\lib\router\route.js:119:3)
    at Layer.handle [as handle_request] (C:\nodejs\node-zero-to-hero\node_modules\express\lib\router\layer.js:95:5)
    at C:\nodejs\node-zero-to-hero\node_modules\express\lib\router\index.js:284:15
    at Function.process_params (C:\nodejs\node-zero-to-hero\node_modules\express\lib\router\index.js:346:12)
    at next (C:\nodejs\node-zero-to-hero\node_modules\express\lib\router\index.js:280:10)
    at C:\nodejs\node-zero-to-hero\node_modules\body-parser\lib\read.js:137:5
    at AsyncResource.runInAsyncScope (node:async_hooks:206:9)
```

## Sending Data To View

In order to send data back into our template views (the files used by our templating engine),
we pass a second parameter into `res.render`:

1. Replace the code for the post login route with this:

    ```javascript
    app.post('/login', (req, res, next) => {
        try {
            let post = req.body
            if(post.email !== 'developers@example.com'){
                throw new Error('Invalid email or password.')
            }
            if(post.password !== 'password123'){
                throw new Error('Invalid email or password.')
            }
            req.session.login = true
            res.redirect('/protected')
        } catch(err){
            res.render('login.html', {
                error: err.message
            })
        }
    })
    ```

1. In your `data/view/login.html` template view file, add these lines in between the heading and the form tag:
    ```html
    <h1 class="h2">Login</h1>
    {% if error %}
        <div class="alert alert-danger">{{error}}</div>
    {% endif %}
    <form method="POST" action="/login">
    ```
1. Restart the app. Now try logging in. Did you get to the protected page?

1. Now try changing the email or password to something else. Did you get the nice `Invalid email or password.` error?

1. Now try after logging in successfully, open a different browser and go to the secure page. Were you able to visit it or not? You shouldnt be able to visit it. Why? Since a session is tied to the browser you used to login.

## Logout
To finish this off, lets add a logout. Every session needs a logout.

```javascript
app.get('/logout', (req, res) => {
    req.session.login = false
    res.redirect('/')
})
```
Restart the app by typing `CTRL+C` and `node index.js` in the Terminal.

:::tip
## Autorestart

By now you are probably tired of restarting the app every time you have made changes. Say no more!

1. Run

    ```bash
    npm install nodemon -g
    ```
    Notice that the nodemon package was not added into your package.json. This is because of the global parameter `-g`. 
    It will install nodemon globally in your operating system and not at the application level.

1. In your `package.json`, change the  `scripts` entry into

    ```json
    "scripts": {
        "dev": "nodemon index.js",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    ```
1. Stop any running nodejs tasks by typing `CTRL+C` in the terminal.

1. Now in the terminal type: 

    ```bash
    npm run dev`
    ```

This will start nodemon once, and everytime your app code changes, the app automatically restarts, saving you time.
:::

## Congratulations!

You've just cracked the form submission puzzle