

var App = (function() {

    var templates = {};
    var populateTemplate = function(template, data) {
        return Handlebars.compile($(template).html())(data);
    };
    var loadTemplate = function(url, callback) {
        if (url in templates) {
            callback(templates[url]);
        } else {
            $.ajax({
                method: 'GET',
                url: url,
                datatype: 'html'
            }).done(function(html) {
                templates[url] = html;
                callback(html);
            });
        }
    };

    var loadCsv = function (url, callback) {
        $.ajax({
            method: 'GET',
            url: url,
            datatype: 'text'
        }).done(function(html) {
            callback(html);
        });
    };

    var parseCsv = function (csv, callback) {
        var lines = csv.split('\n');
        var headers = lines[0].split(',');
        var records = [];
        for (var i = 1; i < lines.length; i++) {
            var record = {};
            if (lines[i] !== "") {
                var row = lines[i].split(',');
                if (row.length == headers.length) {
                    for (var j = 0; j < headers.length; j++) {
                        record[headers[j].trim()] = row[j].trim();
                    }
                    records.push(record);
                }
            }
        }
        callback(records);
    };

    var layers = [];
    var markers = [];

    var clearMarkers = function () {
        while (markers.length > 0) {
            markers.pop().setMap(null);
        }
    };

    var loadDataLayer = function(name) {
        while (layers.length > 0) {
            layers.pop().setMap(null);
        }
        var list = dal.getListOf(name);
        for (var i in list) {
            if (i > 5) break; // Google maps limit of 10 data layers
            layers.push(map.geoData(list[i]));
        }
    };

    var loadMenu = function() {
        loadTemplate('./views/toggle_list.html', function(template) {
            if (template) {
                $('#toggle-list').append(populateTemplate(template, {data: dal.getCatergories}));
            } else {
                console.log('toggle_list.html not found!');
            }
        });
        $(document).on('click', '.toggle-item', function (event) {
            clearMarkers();
            loadDataLayer(event.target.id);
        });

        // Transport
        $(document).on('click', '#transport', function (event) {
            clearMarkers();
            while (layers.length > 0) {
                layers.pop().setMap(null);
            }

            var trafficLayer = new google.maps.TrafficLayer();
            trafficLayer.setMap(map.getView());

            var transitLayer = new google.maps.TransitLayer();
            transitLayer.setMap(map.getView());

            var bikeLayer = new google.maps.BicyclingLayer();
            bikeLayer.setMap(map.getView());

            layers.push(bikeLayer);
            layers.push(transitLayer);
            layers.push(trafficLayer);
            
            /*
            loadCsv('./data/SEQ_GTFS/stops.txt', function(csv) {
                parseCsv(csv, function (records) {
                    console.log(records);
                    for (var i in records) {
                        var record = records[i];
                        map.addMarker({
                            position: {
                                lat: parseFloat(record['stop_lat']),
                                lng: parseFloat(record['stop_lng'])
                            },
                            title: record['stop_name'],
                            label: 'Stop'
                        });
                    }

                });
            });
            */
            
        });

        var addMarkerInfo = function (mapview, marker, record) {
            marker.addListener('click', function() {
                loadTemplate('./views/comm_info.html', function(template) {
                    var infowindow = new google.maps.InfoWindow({
                        content: populateTemplate(template, record)
                    });
                    infowindow.open(mapview, marker);
                });
            });
        };

        // Comm Games Venues
        $(document).on('click', '#commonwealthGames', function (event) {
            clearMarkers();
            while (layers.length > 0) {
                layers.pop().setMap(null);
            }
            loadCsv('./data/gold-coast-2018-commonwealth-games-competition-venues.csv', function(csv) {
                parseCsv(csv, function (records) {
                    for (var i in records) {
                        var record = records[i];
                        console.log(record);
                        var marker = map.addMarker({
                            position: {
                                lat: parseFloat(record['Latitude']),
                                lng: parseFloat(record['Longitude'])
                            },
                            title: record['Venue'],
                            label: record['Sport']
                        });
                        addMarkerInfo(map.getView(), marker, record);
                        markers.push(marker);
                    }
                });
            });
        });

        // Beaches
        $(document).on('click', '#beaches', function (event) {
            clearMarkers();
            while (layers.length > 0) {
                layers.pop().setMap(null);
            }
            $.ajax({
                url: 'https://data.qld.gov.au/api/action/datastore_search',
                datatype: 'jsonp'
            }).done(function(data) {
                console.log(data)
            });

            //loadCsv('https://data.qld.gov.au/dataset/e9a4670f-4d1f-4c56-9855-dbcb103cebfd/resource/2bbef99e-9974-49b9-a316-57402b00609c/view/db26be1e-a115-497b-85b6-e5970dac7c2d', function(csv) {
            loadCsv('https://data.qld.gov.au/dataset/coastal-data-system-near-real-time-wave-data/resource/2bbef99e-9974-49b9-a316-57402b00609c', function(csv) {
                parseCsv(csv, function (records) {

                    //console.log(records);

                });
            });
            
        });
    };

    var displayPage = function(page) {
        $('#map-wrapper').removeClass('shown');
        $('#map-wrapper').addClass('hidden');
        $('#page-wrapper').removeClass('hidden');
        $('#page-wrapper').addClass('shown');

        loadTemplate('./views/' + page + '.html', function(template) {
            if (template) {
                $('#page').html(populateTemplate(template, {}));
            } else {
                console.log('Page not found: ' + page);
            }
        });
    };

    var displayMap = function() {
        $('#page-wrapper').removeClass('shown');
        $('#page-wrapper').addClass('hidden');
        $('#map-wrapper').removeClass('hidden');
        $('#map-wrapper').addClass('shown');
    };


    var loaded = function() {



    };


    return {
        displayPage: displayPage,
        displayMap: displayMap,
        loadMenu: loadMenu,
        loaded: loaded
    };
})();
