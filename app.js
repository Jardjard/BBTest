var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


GeoCoord = require('./models/geocoord');

// Connect to mongoose
mongoose.connect('mongodb://localhost/bitbakery');
var db = mongoose.connection;

var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(db);

app.post('/', function(req, res){
	var genre = req.body;
	GeoCoord.addGeoCoord(geocoord, function(err, geocoord){
		if(err){ throw err;}
		res.json(geocoord);
	});
});