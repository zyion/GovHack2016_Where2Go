
var dal = (function() {

    function GeoData(name, url, catergory, color) {
        this.name = name;
        this.url = url;
        this.catergory = catergory;
        this.color = color;
    }


    var catergories = [];

    catergories.push('boatingAndFishing');
    catergories.push('cycling');
    catergories.push('facility');
    catergories.push('parking');
    catergories.push('parksAndRecreation');
    

    var list = [];

    list.push(new GeoData('Artificial Reef', './data/Artificial_Reef.geojson', 'boatingAndFishing', '#8A2BE2'));
    list.push(new GeoData('Barbeque', './data/Barbeque.geojson', 'parksAndRecreation', '#D2691E'));
    list.push(new GeoData('Bicycle Fitting', './data/Bicycle_Fitting.geojson', 'cycling', '#008B8B'));
    list.push(new GeoData('Boating Facility', './data/Boating_Facility.geojson', 'boatingAndFishing', '#8B008B'));   
    list.push(new GeoData('Cycleway Guide', './data/Cycleway_Guide.geojson', 'cycling', '#DAA520'));
    list.push(new GeoData('Fish Cleaning Station', './data/Fish_Cleaning_Station.geojson', 'boatingAndFishing', '#4B0082'));
    list.push(new GeoData('Fitness Equipment', './data/Fitness_Equipment.geojson', 'parksAndRecreation', '#ADD8E6'));
    list.push(new GeoData('Parking Area', './data/Parking_Area.geojson', 'parking', '#FFA07A'));
    list.push(new GeoData('Parks Shelters', './data/Parks_Shelters.geojson', 'parksAndRecreation', '#20B2AA'));
    list.push(new GeoData('Public Showers', './data/Public_Showers.geojson', 'facility', '#FFE4E1'));
    list.push(new GeoData('Seat', './data/Seat.geojson', 'parksAndRecreation', '#6A5ACD'));
    list.push(new GeoData('Softfall Play Area', './data/Softfall_Play_Area.geojson', 'parksAndRecreation', '#4682B4'));
    list.push(new GeoData('Tap', './data/Tap.geojson', 'facility', '#00008B'));
    // list.push(new GeoData('Building', './data/Building.geojson', '#9932CC'));

    return {
        getList: list, 
        getCatergories: catergories
    };
})();