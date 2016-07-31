
var dal = (function() {

    function GeoData(name, url, catergory, marker) {
        this.name = name;
        this.url = url;
        this.catergory = catergory;
        this.marker = marker;
    }


    var catergories = [];

    catergories.push('Boating And Fishing');
    catergories.push('Cycling');
    catergories.push('Facility');
    catergories.push('Parking');
    catergories.push('Parks And Recreation');
    

    var list = [];

    list.push(new GeoData('Artificial Reef', './data/Artificial_Reef.geojson', 'Boating And Fishing', './img/fishing-marker.png'));
    list.push(new GeoData('Barbeque', './data/Barbeque.geojson', 'Parks And Recreation', './img/park-marker.png'));
    list.push(new GeoData('Bicycle Fitting', './data/Bicycle_Fitting.geojson', 'Cycling', './img/bike-marker.png'));
    list.push(new GeoData('Boating Facility', './data/Boating_Facility.geojson', 'Boating And Fishing', './img/fishing-marker.png'));   
    list.push(new GeoData('Cycleway Guide', './data/Cycleway_Guide.geojson', 'Cycling', './img/bike-marker.png'));
    list.push(new GeoData('Fish Cleaning Station', './data/Fish_Cleaning_Station.geojson', 'Boating And Fishing', './img/fishing-marker.png'));
    list.push(new GeoData('Fitness Equipment', './data/Fitness_Equipment.geojson', 'Parks And Recreation', './img/park-marker.png'));
    list.push(new GeoData('Parking Area', './data/Parking_Area.geojson', 'Parking', './img/parking-marker.png'));
    list.push(new GeoData('Parks Shelters', './data/Parks_Shelters.geojson', 'Parks And Recreation', './img/park-marker.png'));
    list.push(new GeoData('Public Showers', './data/Public_Showers.geojson', 'Facility', './img/facility-marker.png'));
    list.push(new GeoData('Seat', './data/Seat.geojson', 'Parks And Recreation', './img/park-marker.png'));
    list.push(new GeoData('Softfall Play Area', './data/Softfall_Play_Area.geojson', 'Parks And Recreation', './img/park-marker.png'));
    list.push(new GeoData('Tap', './data/Tap.geojson', 'Facility', './img/facility-marker.png'));
    // list.push(new GeoData('Building', './data/Building.geojson', '#9932CC'));


    function listOf(catergory) {
        var catList = [];

        for (var i = 0; i < list.length; i++){
            if (list[i].catergory == catergory)
                catList.push(list[i]);
        }

        return catList;
    }


    return {
        getList: list, 
        getCatergories: catergories,
        getListOf: listOf
    };
})();