var http = require('http');

http.get(process.argv[2], collect);

function collect(response) {
	total = [];
	response.on('data', function (data) {
		total.push(data);
	})
	response.on('end', function () {
		total_char = 0;
		total_str = '';
		total.forEach(function(element) {
			total_char += element.length
		})
		total.forEach(function(element) {
			total_str += element
		})
		console.log(total_char);
		console.log(total_str);
	})
}

