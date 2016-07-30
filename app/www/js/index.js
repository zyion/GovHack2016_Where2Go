

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

    return {
        displayPage: displayPage,
        displayMap: displayMap
    };
})();

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
