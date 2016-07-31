
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

    var geoData = function(object) {
        //mapview.data.loadGeoJson(url);

        var dataLayer = new google.maps.Data();
        dataLayer.loadGeoJson(object.url);

        dataLayer.setStyle({
            icon: object.marker,
            fillColor: '#8B008B',
            strokeColor: '#8B008B'
        });

        dataLayer.setMap(mapview);
        return dataLayer;
    };

    var init = function () {
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords["latitude"];
            var lng = position.coords["longitude"];


            var styles = [{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#e9e5dc"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"poi.medical","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"poi.sports_complex","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54},{"visibility":"off"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"water","elementType":"all","stylers":[{"saturation":43},{"lightness":-11},{"color":"#89cada"}]}];

            mapview = new google.maps.Map(document.getElementById('map'), {
                center: {lat: lat, lng: lng},
                scrollwheel: false,
                zoom: 16,
                disableDefaultUI: true
            });

            mapview.setOptions({styles: styles});

            var image = './img/user-marker.png';
            marker = new google.maps.Marker({
                map: mapview,
                position: {lat: lat, lng: lng},
                icon: image
            });

            App.loaded();

        }, onPositionError);

        mapwatch = navigator.geolocation.watchPosition(onPositionSuccess, onPositionError);
    };

    var addMarker = function(options) {
        var mapmarker = new google.maps.Marker(options);
        mapmarker.setMap(mapview);
        return mapmarker;
    }

    return {
        init: init,
        geoData: geoData,
        addMarker: addMarker,
        getView: function () {
            return mapview;
        }
    };

})(App);