---
sidebar_position: 3
---

# Chapter 1 - Express.js

:::info
The following softwares are required before proceeding:
1. Visual Studio Code
1. Node.js
1. Git

See *Prerequisites*.
:::

## Setting Up the Work Environment
1. Start by creating a work directory of your choice. This tutorial used: `C:/nodejs`
1. Open the `Command Prompt` inside your work directory.
1. Clone the tutorial repo: `git clone https://github.com/kosinix/node-zero-to-hero.git`
1. You should see a directory with just a `.gitignore` file and a `data` directory.

1. Start `Visual Studio Code`
1. Open the directory `node-zero-to-hero`
1. Open the Visual Studio Code terminal in `Terminal > New Terminal`. Or use the shortcut `CTRL + (backtick)`

## Let's Begin!
1. In the Visual Studio Code terminal run:
    ```bash
    npm init
    ```
1. Enter the following details:

    ```bash
        name: node-zero-to-hero

        version: 1.0.0

        description: 

        entry point: index.js

        test command: 
        
        repository: https://github.com/kosinix/node-zero-to-hero.git

        keywords: 

        author: 

        license: MIT
        
        Is this Ok?    Just hit enter
    ```
This will create a `package.json` file that contains info about this package:

```json
{
  "name": "node-zero-to-hero",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "MIT"
}
```

:::tip
**NPM** stands for Node Package Manager.
:::

:::tip
The package.json file is handled by NPM, avoid editing it manually.
:::

## Installing Express.js
Express.js is a framework for creating web apps. We can write web apps without using Express but we would write a lot more code. 

1. Start by installing Express.js. 
1. We use the following command: 
    ```bash
    npm install express
    ```
1. This does 3 things:

    * Adds a `package-lock.json` file. This file is used by node to keep track of its dependencies.
    * Create a `node_modules` directory. This is where packages are installed.
    * Update `package.json` and add `express` under `dependencies`.

:::tip
**Package** - *A piece of code that we can re-use. Express.js is just another package.*

**Dependencies** - *Are packages written by other people that our app "depends" on.*
:::


## Creating An Entry-Point to Our Code

1. Go to Visual Studio Code's Explorer panel. 
1. Click an empty space in the Explorer panel.
1. Click the New File icon and type `index.js`
1. In the terminal type: `node index.js`. Since index.js is empty it will do nothing and exit immediately. 
    Let's add some code to it.
1. Open `index.js` by clicking on it in the Explorer panel.
1. Inside it, add the following code:

```javascript
const express = require('express')

const port = 3000
const app = express()
app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`)
})
```

1. Now run again `node index.js`. 
1. You should see the message `App running on http://localhost:3000`

:::info
### What is a Port?
****

Port numbers refer to specific endpoints through which applications communicate over a network. Ports are identified by 16-bit unsigned numbers, ranging from 0 to 65535.

Port 0 to 49151 are reserved.

Port 49152 to 65535 can be used by apps.

Port 3000 for Node.js applications has become a convention in the Node.js ecosystem.

:::

## Adding routes


Routes are the functionality that allows you to map HTTP methods and URLs to corresponding handler functions.

In simpler terms, when a client makes a request to a specific URL on your server (e.g., http://localhost:3000/), Express.js routes that request to the appropriate piece of code, known as a route handler, based on the URL and HTTP method used (GET, POST, PUT, DELETE, etc.).

Express.js provides methods to define routes for different HTTP methods, such as GET, POST, PUT, DELETE, etc.

Our app is now running, but it doesn't have any routes. Its basically useless. Let's go ahead and add some routes.

1. Replace the code in `index.js` with the following:

    ```javascript
    const express = require('express')

    const port = 3000
    const app = express()
    app.get('/', (req, res) => {
        res.send('Hello world!')
    })
    app.listen(port, () => {
        console.log(`App running on http://localhost:${port}`)
    })
    ```
1. Stop the previously running app by hitting `CTRL + C` in the terminal.
1. Run the app again by typing: `node index.js`.
1. Open Google Chrome or Firefox and go to `http://localhost:3000/`
1. You should be greeted with a message `Hello world!`.

### Parts of a Route
* Path: '/'
* Callback: (req, res) => {}
    * Request: req
    * Response: res

:::info
### Commonly Used HTTP Methods
****

**GET**: Requests data from a specified resource. It retrieves data without modifying it, making it safe and idempotent.

**POST**: Submits data to be processed to a specified resource. It is often used when submitting form data or uploading a file, and it can change the state of the server or create a new resource.

**PUT**: Uploads a representation of the specified resource. It replaces the current representation of the target resource with the uploaded content. It is idempotent, meaning multiple identical PUT requests will have the same effect as a single request.

**DELETE**: Deletes the specified resource. It removes the resource from the server. It is idempotent, meaning multiple identical DELETE requests will have the same effect as a single request.

**PATCH**: Applies partial modifications to a resource. It is used to apply partial modifications to a resource, rather than replacing the entire resource. It is typically used to update resources.
:::

## Sending HTML
Lets try displaying an actual web page instead of just hello world. 

1. Open our home page view file in `data > view > index.html`.
1. Inside it copy all its contents. `CTRL + A` + `CTRL + C`

1. Go back to `index.js` and replace the string `'Hello world!'` in `res.send('Hello world!')` with the contents of `index.html` wrap in backticks "`".

1. Your code should look like this:

    ```javascript
    const express = require('express')

    const port = 3000
    const app = express()
    app.get('/', (req, res) => {
        res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Node Zero to Hero</title>
        
            <!-- Bootstrap CSS -->
            <link rel="stylesheet" href="/css/bootstrap.min.css">
        </head>
        
        <body>
            <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
                <div class="container">
                    <a class="navbar-brand" href="/">
                        <svg style="width:32px;height:32px" viewBox="0 0 24 24"><path fill="#77C043" d="M12,1.85C11.73,1.85 11.45,1.92 11.22,2.05L3.78,6.35C3.3,6.63 3,7.15 3,7.71V16.29C3,16.85 3.3,17.37 3.78,17.65L5.73,18.77C6.68,19.23 7,19.24 7.44,19.24C8.84,19.24 9.65,18.39 9.65,16.91V8.44C9.65,8.32 9.55,8.22 9.43,8.22H8.5C8.37,8.22 8.27,8.32 8.27,8.44V16.91C8.27,17.57 7.59,18.22 6.5,17.67L4.45,16.5C4.38,16.45 4.34,16.37 4.34,16.29V7.71C4.34,7.62 4.38,7.54 4.45,7.5L11.89,3.21C11.95,3.17 12.05,3.17 12.11,3.21L19.55,7.5C19.62,7.54 19.66,7.62 19.66,7.71V16.29C19.66,16.37 19.62,16.45 19.55,16.5L12.11,20.79C12.05,20.83 11.95,20.83 11.88,20.79L10,19.65C9.92,19.62 9.84,19.61 9.79,19.64C9.26,19.94 9.16,20 8.67,20.15C8.55,20.19 8.36,20.26 8.74,20.47L11.22,21.94C11.46,22.08 11.72,22.15 12,22.15C12.28,22.15 12.54,22.08 12.78,21.94L20.22,17.65C20.7,17.37 21,16.85 21,16.29V7.71C21,7.15 20.7,6.63 20.22,6.35L12.78,2.05C12.55,1.92 12.28,1.85 12,1.85M14,8C11.88,8 10.61,8.89 10.61,10.39C10.61,12 11.87,12.47 13.91,12.67C16.34,12.91 16.53,13.27 16.53,13.75C16.53,14.58 15.86,14.93 14.3,14.93C12.32,14.93 11.9,14.44 11.75,13.46C11.73,13.36 11.64,13.28 11.53,13.28H10.57C10.45,13.28 10.36,13.37 10.36,13.5C10.36,14.74 11.04,16.24 14.3,16.24C16.65,16.24 18,15.31 18,13.69C18,12.08 16.92,11.66 14.63,11.35C12.32,11.05 12.09,10.89 12.09,10.35C12.09,9.9 12.29,9.3 14,9.3C15.5,9.3 16.09,9.63 16.32,10.66C16.34,10.76 16.43,10.83 16.53,10.83H17.5C17.55,10.83 17.61,10.81 17.65,10.76C17.69,10.72 17.72,10.66 17.7,10.6C17.56,8.82 16.38,8 14,8Z" /></svg> 
                        <span style="color:#77C043; font-size: 17px">Node Zero to Hero</span>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
        
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="/protected">Protected Page</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="container">
                <div class="row">
                    <div class="col-md-12 ml-auto mr-auto">
                        <h1 class="h2">Home Page</h1>
                        <p>Node Zero to Hero is a short course for aspiring Node.js developers.</p>
                    </div>
                </div>
            </div>
        
            <!-- jQuery and Bootstrap Bundle (includes Popper) -->
            <script src="/js/jquery.slim.min.js"></script>
            <script src="/js/bootstrap.bundle.min.js"></script>
        </body>
        
        </html>`)
    })
    app.listen(port, () => {
        console.log(`App running on http://localhost:${port}`)
    })
    ```

1. Stop any currently running node in your terminal: `CTRL + C`
1. Now try running your app: `node index.js` and refresh your browser.

You can see that we now have the HTML rendered.
However, the styles and scripts are broken. This is because we are pulling these assets from the `css/` and `js/` directories.

For these to work, we need to tell Express to serve static content from our `data/public` directory.

## Middlewares

To serve static files such as images, CSS files, and JavaScript files, use the `express.static` built-in middleware function in Express.

```javascript
// Static public files
app.use(express.static(__dirname + '/data/public'));
```

* **app.use** is an express function that accepts a middleware. 
* **express.static** is a built-in express middleware function
* **__dirname** is a built-in Node.js variable that holds the current directory of your running script. In this case `index.js`.


Insert this snippet before your `app.get` route. Your code in your index.js should look like this:

```javascript
const express = require('express')

const port = 3000
const app = express()

// Static public files
app.use(express.static(__dirname + '/data/public'));

app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Node Zero to Hero</title>
    
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="/css/bootstrap.min.css">
    </head>
    
    <body>
        <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
            <div class="container">
                <a class="navbar-brand" href="/">
                    <svg style="width:32px;height:32px" viewBox="0 0 24 24"><path fill="#77C043" d="M12,1.85C11.73,1.85 11.45,1.92 11.22,2.05L3.78,6.35C3.3,6.63 3,7.15 3,7.71V16.29C3,16.85 3.3,17.37 3.78,17.65L5.73,18.77C6.68,19.23 7,19.24 7.44,19.24C8.84,19.24 9.65,18.39 9.65,16.91V8.44C9.65,8.32 9.55,8.22 9.43,8.22H8.5C8.37,8.22 8.27,8.32 8.27,8.44V16.91C8.27,17.57 7.59,18.22 6.5,17.67L4.45,16.5C4.38,16.45 4.34,16.37 4.34,16.29V7.71C4.34,7.62 4.38,7.54 4.45,7.5L11.89,3.21C11.95,3.17 12.05,3.17 12.11,3.21L19.55,7.5C19.62,7.54 19.66,7.62 19.66,7.71V16.29C19.66,16.37 19.62,16.45 19.55,16.5L12.11,20.79C12.05,20.83 11.95,20.83 11.88,20.79L10,19.65C9.92,19.62 9.84,19.61 9.79,19.64C9.26,19.94 9.16,20 8.67,20.15C8.55,20.19 8.36,20.26 8.74,20.47L11.22,21.94C11.46,22.08 11.72,22.15 12,22.15C12.28,22.15 12.54,22.08 12.78,21.94L20.22,17.65C20.7,17.37 21,16.85 21,16.29V7.71C21,7.15 20.7,6.63 20.22,6.35L12.78,2.05C12.55,1.92 12.28,1.85 12,1.85M14,8C11.88,8 10.61,8.89 10.61,10.39C10.61,12 11.87,12.47 13.91,12.67C16.34,12.91 16.53,13.27 16.53,13.75C16.53,14.58 15.86,14.93 14.3,14.93C12.32,14.93 11.9,14.44 11.75,13.46C11.73,13.36 11.64,13.28 11.53,13.28H10.57C10.45,13.28 10.36,13.37 10.36,13.5C10.36,14.74 11.04,16.24 14.3,16.24C16.65,16.24 18,15.31 18,13.69C18,12.08 16.92,11.66 14.63,11.35C12.32,11.05 12.09,10.89 12.09,10.35C12.09,9.9 12.29,9.3 14,9.3C15.5,9.3 16.09,9.63 16.32,10.66C16.34,10.76 16.43,10.83 16.53,10.83H17.5C17.55,10.83 17.61,10.81 17.65,10.76C17.69,10.72 17.72,10.66 17.7,10.6C17.56,8.82 16.38,8 14,8Z" /></svg> 
                    <span style="color:#77C043; font-size: 17px">Node Zero to Hero</span>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
    
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/protected">Protected Page</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="container">
            <div class="row">
                <div class="col-md-12 ml-auto mr-auto">
                    <h1 class="h2">Home Page</h1>
                    <p>Node Zero to Hero is a short course for aspiring Node.js developers.</p>
                </div>
            </div>
        </div>
    
        <!-- jQuery and Bootstrap Bundle (includes Popper) -->
        <script src="/js/jquery.slim.min.js"></script>
        <script src="/js/bootstrap.bundle.min.js"></script>
    </body>
    
    </html>`)
})
app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`)
})
```
1. Stop any currently running node in your terminal: `CTRL + C`
1. Now try running your app: `node index.js` and refresh your browser.
Your CSS and JS should now be loaded properly.

The `express.static` is an example of a middleware. 

Middleware functions can perform tasks such as modifying request and response objects, executing any code, ending the request-response cycle, and calling the next middleware function in the stack.

## Congratulations!

Looks good ey!

You have just created your first Node.js web app. You are one step ahead to becoming a Node.js developer.

:::tip
**Checkpoints**

If for some reason, you didnt get it right, you can check the correct code in the `checkpoints` branch. This one is on a commit named `"chapter-01"`.
:::