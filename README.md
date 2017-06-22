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
