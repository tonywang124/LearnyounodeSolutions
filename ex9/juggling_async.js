var http = require('http');
var bl = require('bl');
var total = [];

var counter = 3;
var args = [2,3,4];

args.forEach(function (i) {
	collection(i);
 })

function collection (index) {
	http.get(process.argv[index], function (response) {
		var url_data = '';
		response.setEncoding('utf8');

		response.on('data', function (data) {
			url_data += data;
		})

		response.on('end', function () {
			counter--;
			total[index] = url_data;
			if (counter === 0 ) {
				total.forEach(function (string) {
					console.log(string);
				})
			}
		})
	}
)}

// Completed using buffer list library

// function collection (index) {
// 	http.get(process.argv[index], function (response) {
// 		response.pipe(bl(function (err, data) {
// 			if (err) console.error(err);
// 			data = data.toString();
// 			total[index] = data;
// 			counter --;
// 			if (counter === 0) {
// 				total.forEach(function (string) {
// 					console.log(string);
// 				})
// 			}
// 		} ))
// 	})
// }