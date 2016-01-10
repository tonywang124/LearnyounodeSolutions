var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function (response) {
	response.pipe(bl(function (err, data) {
		if (err) {
			console.error(err);
		}
		data_string = data.toString();
		console.log(data_string.length);
		console.log(data_string);
	}))
})