var fs = require('fs');
fs.readFile(process.argv[2], 'utf8', callback_func)

function callback_func(error, data) {
	if (error) return console.error(error);
	data = data.split('\n');
	console.log(data.length - 1)
}

