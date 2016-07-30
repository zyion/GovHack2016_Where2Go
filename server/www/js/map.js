var map = (function () {

	var mapview;
	var marker;



	var init = function () {


		mapview = new google.maps.Map(document.getElementById('map'), {
			center: {
				lat: -28.027789,
				lng: 153.399719
			},
			scrollwheel: false,
			zoom: 10
		});

		mapview.addListener("click", function (data) {
			//console.log(overlay);
			// display the lat/lng in your form's lat/lng fields
			//$("#lat").val = latLng.lat();
			document.getElementById("lat").value = data.latLng.lat();
			document.getElementById("long").value = data.latLng.lng();
		});

	};

	return {
		init: init
	};

})();