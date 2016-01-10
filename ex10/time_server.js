var net = require('net');
var server = net.createServer(function (socket) {
	socket.end(create_date());
})
server.listen(process.argv[2])

function create_date () {
	d = new Date()
	year = d.getFullYear();
	month = (d.getMonth() + 1);
	day = d.getDate();
	hour = d.getHours();
	minute = d.getMinutes();
	date = [year,month,day,hour,minute];
	date.forEach(function (element) {
		if (element < 10) {
			spacer = 0;
			date[date.indexOf(element)] = spacer.toString() + element;
		}
	})
	return (date[0] + "-" + date[1] + "-" + date[2] + " " + date[3] + ":" + date[4] + "\n");

}