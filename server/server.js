

var express = require('express')
var app = express();
var path = require('path');

// app.use(express.static(__dirname='/../client'));
var pathName = 'c:/Users/anam/documents/github/paypalCalc/client';

app.use(express.static(pathName));

app.get('/postPayPal', function(req, res) {
  console.log('i got it');
});

app.listen(3000);
console.log("Express server listening on port 3000");