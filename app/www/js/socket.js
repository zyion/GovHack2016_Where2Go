

var server = (function () {

    var socket;

    var connect = function() {
        socket = io.connect('http://64.137.223.40:1337');

        socket.on('connect', function(data) {
            console.log(data);
        });

        socket.on('connect_error', function(data) {
            console.log(data);
        });




        socket.on('event', function(data) {
            console.log(data);
        });

    };

    return {
        connect: connect
    };

})();