
$(function() {

}).on('deviceready', function() {

    App.loadMenu();
    server.connect();

    $('#events').click(function() {
        App.displayPage('events');
    });
    $('#accom').click(function() {
        App.displayPage('accom')
    });
    $('#coupon').click(function() {
        App.displayPage('coupon');
    });
    $('#emergency').click(function() {
        App.displayPage('emergency');
    });
    $('#safety').click(function() {
        App.displayPage('safety');
    });
    $('#display-map').click(function() {
        App.displayMap();
    });

});
