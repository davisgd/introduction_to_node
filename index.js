// index.js
var express = require('express');
var app = express();

// req --> request
// res --> response
// '/greeting' --> location of resource
app.get('/greeting', function(req, res){
  res.send("W00t! You found the greeting endpoint!")
});

// :name --> Means it is a req parameter

app.get('/greeting/:name', function(req, res){
  var yourName = req.params.name;
  res.send("Nice to meet you, " + yourName + ", i just stole ur stuffz")
});

// Challenge: define a response that can send back your favorite color

app.get('/favorite/:color', function(req, res){
  var favColor = req.params.color;
  res.send(favColor + " is 4 dweebs.")
})

// Challenge: Define a salutation endpoint

app.get('/salutations', function(req, res){
  res.send("i r in ur compooter, steelin' ur filez :)")
});



app.listen(3000, function(){
  console.log("listening on port 3000")
});
