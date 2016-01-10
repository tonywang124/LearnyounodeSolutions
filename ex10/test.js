console.log(create_date)
var foo = foo();
console.log(foo);

function create_date () {
	d = new Date()
	year = d.getFullYear().toString();
	month = (d.getMonth() + 1).toString();
	day = d.getDay().toString();
	hour = d.getHours().toString();
	minute = d.getMinutes().toString();
	date = [year,month,day,hour,minute];
	date.forEach(function (element) {
		if (element < 10) {
			spacer = 0;
			date[date.indexOf(element)] = spacer.toString() + element;
		}
	})
	return (date[0] + "-" + date[1] + "-" + date[2] + " " + date[3] + ":" + date[4] + "\n");

}

function foo () {
	return 'foo';
}