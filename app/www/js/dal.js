
var dal = (function() {

    function GeoData(name, url) {
        this.name = name;
        this.url = url;
    }
    
    var list = [];

    list.push(new GeoData('Artificial Reef', './data/Artificial_Reef.geojson'));

    return {
        getList: list
    };
})();