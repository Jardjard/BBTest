var mongoose = require('mongoose');
//geocoord
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

var geocoordSchema = mongoose.Schema({
	lat:{
		type:Number
	},
	long:{
		type:Number
	}
});


 //var Book = module.exports = mongoose.model('Book', bookSchema);


geocoordSchema.plugin(autoIncrement.plugin, 'GeoCoord');
var GeoCoord = module.exports = mongoose.model('GeoCoord', geocoordSchema);

// Add book
module.exports.addGeoCoord = function(geocoord, callback){
	Geocoord.create(geocoord, callback);
}