
var map = (function (App) {

    var mapview;
    var mapwatch;
    var marker;

    var follow = true;

    var onPositionSuccess = function(position) {
        if (follow) {
            var lat = position.coords["latitude"];
            var lng = position.coords["longitude"];
            if (mapview) {
                mapview.setCenter(new google.maps.LatLng(lat, lng));
            }
            if (marker) {
                marker.setPosition(new google.maps.LatLng(lat, lng));
            }
        }
    };

    var onPositionError = function(error) {
        console.log('GPS Location error: ', error);
    };

    var geoData = function(url) {
        //mapview.data.loadGeoJson(url);
        var dataLayer = new google.maps.Data();
        dataLayer.loadGeoJson(url);
        dataLayer.setMap(mapview);
        return dataLayer;
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

            App.loaded();

        }, onPositionError);

        mapwatch = navigator.geolocation.watchPosition(onPositionSuccess, onPositionError);
    };

    return {
        init: init,
        geoData: geoData
    };

})(App);