
var dal = (function() {

    function GeoData(name, url, color) {
        this.name = name;
        this.url = url;
        this.color = color;
    }
    
    var list = [];

    list.push(new GeoData('Artificial Reef', './data/Artificial_Reef.geojson', '#8A2BE2'));
    list.push(new GeoData('Barbeque', './data/Barbeque.geojson', '#D2691E'));
    list.push(new GeoData('Bicycle Fitting', './data/Bicycle_Fitting.geojson', '#008B8B'));
    list.push(new GeoData('Boating Facility', './data/Boating_Facility.geojson', '#8B008B'));

    list.push(new GeoData('Building', './data/Building.geojson', '#D2691E'));
    list.push(new GeoData('Cycleway Guide', './data/Cycleway_Guide.geojson', '#008B8B'));
    list.push(new GeoData('Fish Cleaning Station', './data/Fish_Cleaning_Station.geojson', '#8B008B'));
    list.push(new GeoData('Fitness Equipment', './data/Fitness_Equipment.geojson', '#D2691E'));
    list.push(new GeoData('Parking Area', './data/Parking_Area.geojson', '#008B8B'));
    list.push(new GeoData('Parks Shelters', './data/Parks_Shelters.geojson', '#8B008B'));
    list.push(new GeoData('Public Showers', './data/Public_Showers.geojson', '#D2691E'));
    list.push(new GeoData('Seat', './data/Seat.geojson', '#008B8B'));
    list.push(new GeoData('Softfall Play Area', './data/Softfall_Play_Area.geojson', '#8B008B'));
    list.push(new GeoData('Tap', './data/Tap.geojson', '#8B008B'));

    return {
        getList: list
    };
})();