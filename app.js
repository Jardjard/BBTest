var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

GeoCoord = require('./models/geocoord');

// Connect to mongoose
mongoose.connect('mongodb://localhost/bitbakery');
var db = mongoose.connection;



app.post('/', function(req, res){
	var geocoord = req.body;
	GeoCoord.addGeoCoord(geocoord, function(err, geocoord){
		if(err){ throw err; }
		res.json(geocoord);
	});
});

app.get('/', function(req, res){
	//console.log(req.query.firstID);
	var distance = 0;
	GeoCoord.calculateGCircle(req.query.firstID, req.query.secondID, function(err, distance){
		if(err) { throw err;}
		res.json(distance);
	});
	//res.send('Please use ?firstID=#&secondID=#');
});
/*
app.get('/:firstID/:secondID', function(req, res){
	console.log(req);
	var distance = 0;
	GeoCoord.calculateGCircle(req.params.firstID, req.params.secondID, function(err, distance){
		if(err) { throw err;}
		res.json(distance);
	});
});*/

app.listen(3000);

console.log('Running on port 3000...');