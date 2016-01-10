
var mod = require('./mod.js');

mod(process.argv[2],process.argv[3],logData);

function logData(err, data) {
	if (err) return console.error(err);
	data.forEach(function(element){
		console.log(element)
	});
	
}

// learnyounode solution

/*
var mod = require('./mod.js');
var dir = process.argv[2];
var ext = process.argv[3];

mod(dir, ext, function(err, data) {
	if (err) {
		return console.error('There was an error. Please fix.', err);
	}
	data.forEach(function (file) {
		console.log(file)
	})
})
*/