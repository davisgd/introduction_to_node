## Intro To Node



A __node_module__ is a Lego block of code. Everything in a node app is modular, meaning it is made up of many different, smaller parts that work toward the end functionality.

__NPM__ stands for Node Package Manager. It's a tool that allows us to easily access the node module ecosystem and add them to our project.

Example node_module: [Moment.js](https://momentjs.com/)

Every node app has a __package.json__, which is the master file that keeps track of all node modules your project cares about.

To add a 'package.json' to you project, run the command 'npm init', and accept all defaults.

---
`git add -A`

`git commit -m "intro definitions for node"`

`git push origin master`

---

### Node HTTP Server

We used the node module HTTP to build a simple web server, that we can then run and connect using the web address: `http://localhost:3000`.

To run the server, use the command `node index.js`

```js
var http = require('http');

http.createServer(function(request, response){
  response.writeHead(200,{'Content-Type': 'text/plain'});
  response.end('Hello world!');
}).listen(3000, function(){
  console.log('App is listening on port 3000')
});

```

#### Express Web server
[Express API](http://expressjs.com/)

To add express node module to our app:
`npm install --save express`

To ensure it was added successfully:

```js
"dependencies": {
  "express": "^4.15.3",
  "save": "^2.3.1"
}
```

This also gives us a ton of code that we don't want to track in our GitHub in the `node_modules/` folder.

To ignore this code:

`touch .gitignore`

add `node_modules/` to `.gitignore`

__express server__

```js
// index.js
var express = require('express');
var app = express();

// req --> request
// res --> response
// '/greeting' --> location of resource
app.get('/greeting', function(req, res){
  res.send("W00t! You found the greeting endpoint!")
})

// Challenge: Define a salutation endpoint

app.get('/salutations', function(req, res){
  res.send("i r in ur compooter, steelin' ur filez :)")
})

app.listen(3000, function(){
  console.log("listening on port 3000")
});
```

__request parameter__

Request parameter takes client data entered in the form of ':someText' and slaps it into the website along with whatever stuff you want to be with it.
```js
// :name --> Means it is a req parameter

app.get('/greeting/:name', function(req, res){
  var yourName = req.params.name;
  res.send("Nice to meet you, " + yourName + ", i just stole ur stuffz")
});
```
