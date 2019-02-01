// // require
// const express = require('express'),
//     bodyParser = require('body-parser'),
//     mongoose = require('mongoose'),
//     app = express();

// // connect
// mongoose.connect('mongodb://localhost/restTasksAPI');

// allows you to connect to any model that you create
var path = require('path');
var fs = require('fs');
// create a variable that points to the models folder
var models_path = path.join(__dirname, './../models');
// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    // require the file (this runs the model file which registers the schema)
    require(models_path + '/' + file);
   }
})