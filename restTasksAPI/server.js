// require
const express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path'),
    app = express();

// use
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public'));

// //catch index
// app.all('*', function(req, res) {
//     res.sendFile(path.resolve('./public/dist/public/index.html'));
// });

// connect    
mongoose.connect('mongodb://localhost/restTasksAPI', { useNewUrlParser: true});

// mongoose
require('./server/config/mongoose');

// routes
require('./server/config/routes')(app);


// server listen
app.listen(8000, function() {
    console.log('listening on port 8000');
})

