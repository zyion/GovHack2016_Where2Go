
var map = (function () {

    var mapview;
    var mapwatch;
    var marker;

    var onPositionSuccess = function(position) {
        var lat = position.coords["latitude"];
        var lng = position.coords["longitude"];
        if (mapview) {
            mapview.setCenter(new google.maps.LatLng(lat, lng));
        }
        if (marker) {
            marker.setPosition(new google.maps.LatLng(lat, lng));
        }
    };

    var onPositionError = function(error) {
        console.log('GPS Location error: ', error);
    };

    var init = function () {
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords["latitude"];
            var lng = position.coords["longitude"];

            mapview = new google.maps.Map(document.getElementById('map'), {
                center: {lat: lat, lng: lng},
                scrollwheel: false,
                zoom: 16
            });

            marker = new google.maps.Marker({
                map: mapview,
                position: {lat: lat, lng: lng}
            });

        }, onPositionError);

        mapwatch = navigator.geolocation.watchPosition(onPositionSuccess, onPositionError);
    };

    return {
        init: init
    };

})();