/**
 * Module dependencies.
 */

var express = require('express')
var routes = require('routes')
var http = require('http');

var app = express();
var server = app.listen(3000);

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});


console.log("Express server listening on port 3000");