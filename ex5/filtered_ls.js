//old version of the code without path module

/*
var fs = require('fs');
var path = process.argv[2];

fs.readdir(path, callback)

function callback(error, list) {
	var filter = process.argv[3];
	for (i = 0; i <= list.length; i ++) { 
		var file_ext = list[i].slice(list[i].indexOf('.'))
		if (file_ext === ('.' + filter)) {
			console.log(list[i])
		}
	}
}
*/


var fs = require('fs');
var path = require('path');
var file_path = process.argv[2];

fs.readdir(file_path, callback);

function callback(error, list) {
	var filter = process.argv[3];
	for (i = 0; i <= list.length; i ++) {
		if (path.extname(list[i]) === '.' + filter) {
			console.log(list[i])
		}
	}
}

