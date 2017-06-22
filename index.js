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
