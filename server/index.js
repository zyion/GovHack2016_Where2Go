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


// socket init
io.on('connection', function (socket) {

	socket.emit('event', "A local event");

	socket.on('disconnect', function () {
		console.log("client logged out");
	});

	socket.on('event', function (data) {
		console.log(data);
		socket.emit('event', data);

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