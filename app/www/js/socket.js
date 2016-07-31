var server = (function () {

	var socket;

	var connect = function () {
		socket = io.connect('http://64.137.223.40:1337');

		socket.on('connect', function (data) {
			console.log(data);
		});

		socket.on('connect_error', function (data) {
			console.log(data);
		});




		socket.on('event', function (data) {
			var myLatlng = new google.maps.LatLng(data.lat, data.long);
			console.log(data);
			map.addMarker({
				position: myLatlng,
				map: map,
				title: "event",
				label: "E"
			});
		});

		socket.on('emergency', function (data) {
			var myLatlng = new google.maps.LatLng(data.lat, data.long);
			console.log(data);
			map.addMarker({
				position: myLatlng,
				map: map,
				title: "Emergency",
				label: "F"
			});
		});

		socket.on('roadBlock', function (data) {
			var myLatlng = new google.maps.LatLng(data.lat, data.long);
			console.log(data);
			map.addMarker({
				position: myLatlng,
				map: map,
				title: "Road Block",
				label: "RB"
			});
		});

	};

	return {
		connect: connect
	};

})();