

var express = require('express')
var app = express();
var path = require('path');

// app.use(express.static(__dirname='/../client'));
var pathName = '/Users/udaraweerasinghege/personal/BattleHacks/paypalCalc/client'

app.use(express.static(pathName));

app.listen(3000);
console.log("Express server listening on port 3000");