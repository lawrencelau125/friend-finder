var express = require("express");
var mysql = require("mysql");
var bodyParser = require('body-parser');

// Creates express app instance
var app = express();

// Specified the port
var port = process.env.port || 3000;










// Initiated the Listener
app.listen(port, function () {
	console.log('App listening on PORT ' + port);
});