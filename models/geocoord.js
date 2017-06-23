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
	}, function(err, results){
		var lat1 = results[0].lat;
		var lat2 = results[1].lat;
		var lon1 = results[0].lon;
		var lon2 = results[1].lon;
		var R = 6371e3; // metres
		var φ1 = lat1.toRadians();
		var φ2 = lat2.toRadians();
		var Δφ = (lat2-lat1).toRadians();
		var Δλ = (lon2-lon1).toRadians();

		var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
		Math.cos(φ1) * Math.cos(φ2) *
		Math.sin(Δλ/2) * Math.sin(Δλ/2);
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

		var d = R * c;
		console.log(d);
	return callback(d);
		//callback(results);
		//results.send(d);
		// save value to DB
	});
	return callback(0);
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

/** Converts numeric degrees to radians */
if (typeof(Number.prototype.toRadians) === "undefined") {
  Number.prototype.toRadians = function() {
    return this * Math.PI / 180;
  }
}