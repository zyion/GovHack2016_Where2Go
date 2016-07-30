
$(function() {

}).on('deviceready', function() {

    server.connect();


    $('#events').click(function() {
        App.displayPage('events');
    });
    $('#accom').click(function() {
        App.displayMap();
    });
    $('#emergency').click(function() {
        App.displayPage('events');
    });
    $('#safety').click(function() {
        App.displayMap();
    });

});
