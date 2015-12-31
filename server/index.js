////////////////
//DEPENDENCIES//
////////////////
var mongoose = require('mongoose');
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');


//////////////
//MIDDLEWARE//
//////////////
var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/../public'));

/////////////
//ENDPOINTS//
/////////////


///////////////
//CONNECTIONS//
///////////////

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('connected to port ', port);
});