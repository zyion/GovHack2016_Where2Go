
var map = (function () {

    var mapview;
    var mapwatch;
    var marker;

    var onPositionSuccess = function(position) {
        console.log(position);
        if (mapview) {
            var lat = position.coords["latitude"];
            var lng = position.coords["longitude"];
            mapview.setCenter({lat: lat, lng : lng, alt: 0});
            marker.setPosition({lat: lat, lng : lng});
        }
    };

    var onPositionError = function(error) {
        console.log('GPS Location error: ', error);
    };

    var init = function () {

        var lat;
        var lng;
        
        navigator.geolocation.getCurrentPosition(function() {
            lat = position.coords["latitude"];
            lng = position.coords["longitude"];
        });

        mapview = new google.maps.Map(document.getElementById('map'), {
            center: {lat: lat, lng: lng},
            scrollwheel: false,
            zoom: 8
        });

        marker = new google.maps.Marker({
            map: mapview,
            position: {lat: lat, lng: lng}
        });

        mapwatch = navigator.geolocation.watchPosition(onPositionSuccess, onPositionError);
    };

    return {
        init: init
    };

})();