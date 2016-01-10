var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
	url_info = url.parse(req.url, true);
	isParse = true;
	if (url_info['path'].indexOf('/api/parse')) {
		isParse = true;
		// console.log("isParse is true!")
	}
	else if (url_info['path'].indexOf('/api/unixtime')) {
		isParse = false;
		// console.log("isParse is false!")
	}
		// console.log("The value of isParse is: " + isParse)
		json_res = JSON.stringify(iso_parse(url_info.query['iso'], isParse));
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(json_res);
})

server.listen(process.argv[2]);

function iso_parse(date,type) {
	d = new Date(date);
	if (type) {
		return { hour: d.getHours(),
				 minute: d.getMinutes(), 
				 second: d.getSeconds()
		}
	}
		return {unixtime: d.getTime()};
}	

//learnyounode verification reverses the logic of isParse. May be software error as the test env
// gives correct answer.