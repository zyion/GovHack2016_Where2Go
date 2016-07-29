
$(function() {
    console.log('Cordova Ready!');

}).on('deviceready', function() {
    console.log('Cordova Ready!');

    var socket = io.connect('http://192.168.0.23:1337');

    socket.on('event', function(data) {
        console.log(data);
    });

    socket.on('connect', function(data) {
        console.log(data);
    });

    socket.on('connect_error', function(data) {
        console.log(data);
    });

});
