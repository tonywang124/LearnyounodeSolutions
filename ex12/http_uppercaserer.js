var http = require('http');
var map = require('through2-map');

var server = http.createServer(function (req, res) {
	if (req.method != 'POST') {
		return res.end('send POST only');
	}
	req.pipe(map(function (string) {
		return string.toString().toUpperCase();
	})).pipe(res);
})
server.listen(process.argv[2])