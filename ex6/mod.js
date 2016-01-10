var path = require('path');
var fs = require('fs');

module.exports = function sort(dir, ext, callback) {
		fs.readdir(dir, function (err,data) {
			if (err) return callback(err);
			var final_list = [];
			data.forEach(function(element) {
				if(path.extname(element) === '.' + ext) final_list.push(element)
			})
			callback(null, final_list);
		});
	}

//  Cannot use a variable to substitue the bulk of this function. dir and callback are within 
//	the scpoe of the sort function.

/*
function exportList(err, data) {
	if (err) return callback(err);
	var final_list = [];
	data.forEach(function(element,index,array) 
		{if(path.extname(element) === '.' + ext) final_list.push(element)
	})
	callback(null, data);
}
*/

// learnyounode solution

var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, callback) {
	fs.readdir(dir, function (err, data) {
		if (err) return callback(err);
		list = list.filter(function (file) {
			return path.extname(file) === '.' + ext
		})
	callback(null, data);
	})
}