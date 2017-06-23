var mongoose = require('mongoose');
//geocoord
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

var geocoordSchema = mongoose.Schema({
	lat:{
		type:Number
	},
	lon:{
		type:Number
	}
});

geocoordSchema.plugin(autoIncrement.plugin, 'GeoCoord');
var GeoCoord = module.exports = mongoose.model('GeoCoord', geocoordSchema);

// Add book
module.exports.addGeoCoord = function(geocoord, callback){
	GeoCoord.create(geocoord, callback);
};

module.exports.calculateGCircle = function(firstID, secondID, callback){
	var firstCoord, secondCoord;
	GeoCoord.find({
	    '_id': { $in: [
	        firstID,
	        secondID
	    ]}
	}, function(err, docs){
	     console.log(docs);
	});
	/*GeoCoord.findById(firstID, function(err, secondID, firstCoord){
		if(err){ throw err; }
		console.log(firstCoord);
		var secondCoord;
		
	});


	GeoCoord.findById(secondID, function(err, secondCoord){
		if(err){ throw err; }
		console.log(secondCoord);
	});
	//return callback(0);

		//console.log(firstCoord);
	//	console.log(secondCoord);

	var R = 6371e3; // metres
	var φ1 = firstCoord.lat.toRadians();
	var φ2 = secondCoord.lat.toRadians();
	var Δφ = (secondCoord.lat-firstCoord.lat).toRadians();
	var Δλ = (secondCoord.lon-firstCoord.lon).toRadians();

	var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
	        Math.cos(φ1) * Math.cos(φ2) *
	        Math.sin(Δλ/2) * Math.sin(Δλ/2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

	var d = R * c;
console.log(d);*/
	return callback(0);
	//res.send(distance);
};




/*var R = 6371e3; // metres
var φ1 = lat1.toRadians();
var φ2 = lat2.toRadians();
var Δφ = (lat2-lat1).toRadians();
var Δλ = (lon2-lon1).toRadians();

var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ/2) * Math.sin(Δλ/2);
var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

var d = R * c;*/