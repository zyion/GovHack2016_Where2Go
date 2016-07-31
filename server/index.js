var express = require('express'),
	app = express(),
	http = require('http').Server(app),
	io = require('socket.io')(http),
	hbs = require('hbs'),
	bodyParser = require('body-parser');

// middleware config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
// hbs view engine
app.set('view engine', 'html');
app.engine('html', hbs.__express);
hbs.registerPartials(__dirname + '/views/partials');
// static files
app.use(express.static(__dirname + '/www'));

var count = -1;
// socket init
io.on('connection', function (socket) {
	count++;
	console.log(count);
	//socket.emit('event', "sending initial event");

	io.emit('connections', count);

	socket.on('disconnect', function () {
		count--;
		io.emit('dc', count);
		console.log("client logged out");
	});

	socket.on('event', function (data) {
		console.log(data);
		io.emit('event', data);

	});

	socket.on('emergency', function (data) {
		console.log(data);
		io.emit('emergency', data);

	});

	socket.on('roadBlock', function (data) {
		console.log(data);
		io.emit('roadBlock', data);

	});

});

// server init
var server = http.listen(1337, function (error) {
	if (error) {
		console.log(error);
	} else {
		var serverInfo = {
			host: server.address().address,
			port: server.address().port
		};
		console.log('');
		console.log('Server listening on: ' + JSON.stringify(serverInfo));
	}
});