'use strict'; 
var express = require('express'); 
var path = require('path'); 
var port = process.env.PORT || 3000; 
var app = express();
app.listen(port);
console.log('lhapptool started on port ' + port); 
