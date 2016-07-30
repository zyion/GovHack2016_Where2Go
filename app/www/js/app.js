

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

    var layers = [];

    var loadDataLayer = function(name) {
        
        console.log(name);

/*
        while (layers.length > 0) {
            layers.pop().setMap(null);
        }

        for (var i in list) {
            if (i > 5) break; // Google maps limit of 10 data layers
            layers.push(map.geoData(list[i]['url']));
        }
*/

    };

    var loadMenu = function() {
        loadTemplate('./views/toggle_list.html', function(template) {
            if (template) {
                $('#toggle-list').html(populateTemplate(template, {data: dal.getCatergories}));
            } else {
                console.log('toggle_list.html not found!');
            }
        });
        $(document).on('click', '.toggle-item', function (event) {
            loadDataLayer(event.target.id);
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
