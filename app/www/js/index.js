
$(function() {
    console.log('jQuery Ready!');


}).on('deviceready', function() {
    console.log('Cordova Ready!');

    var socket = io.connect('http://64.137.223.40:1337');

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
