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
	GeoCoord.findById(firstID, function(err, firstCoord){
		if(err){ throw err; }
		console.log(firstCoord);
		//res.json(geocoord);
	});
	GeoCoord.findById(secondID, function(err, secondCoord){
		if(err){ throw err; }
		console.log(secondCoord);
		//res.json(geocoord);
	});
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