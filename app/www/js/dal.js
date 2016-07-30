
var dal = (function() {

    function GeoData(name, url, catergory, color) {
        this.name = name;
        this.url = url;
        this.catergory = catergory;
        this.color = color;
    }


    var catergories = [];

    catergories.push('Boating And Fishing');
    catergories.push('Cycling');
    catergories.push('Facility');
    catergories.push('Parking');
    catergories.push('Parks And Recreation');
    

    var list = [];

    list.push(new GeoData('Artificial Reef', './data/Artificial_Reef.geojson', 'Boating And Fishing', '#8A2BE2'));
    list.push(new GeoData('Barbeque', './data/Barbeque.geojson', 'Parks And Recreation', '#D2691E'));
    list.push(new GeoData('Bicycle Fitting', './data/Bicycle_Fitting.geojson', 'Cycling', '#008B8B'));
    list.push(new GeoData('Boating Facility', './data/Boating_Facility.geojson', 'Boating And Fishing', '#8B008B'));   
    list.push(new GeoData('Cycleway Guide', './data/Cycleway_Guide.geojson', 'Cycling', '#DAA520'));
    list.push(new GeoData('Fish Cleaning Station', './data/Fish_Cleaning_Station.geojson', 'Boating And Fishing', '#4B0082'));
    list.push(new GeoData('Fitness Equipment', './data/Fitness_Equipment.geojson', 'Parks And Recreation', '#ADD8E6'));
    list.push(new GeoData('Parking Area', './data/Parking_Area.geojson', 'Parking', '#FFA07A'));
    list.push(new GeoData('Parks Shelters', './data/Parks_Shelters.geojson', 'Parks And Recreation', '#20B2AA'));
    list.push(new GeoData('Public Showers', './data/Public_Showers.geojson', 'Facility', '#FFE4E1'));
    list.push(new GeoData('Seat', './data/Seat.geojson', 'Parks And Recreation', '#6A5ACD'));
    list.push(new GeoData('Softfall Play Area', './data/Softfall_Play_Area.geojson', 'Parks And Recreation', '#4682B4'));
    list.push(new GeoData('Tap', './data/Tap.geojson', 'Facility', '#00008B'));
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