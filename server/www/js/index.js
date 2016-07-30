$(function () {

	var connectionCount = -1;

	var socket = io.connect('http://localhost:1337');

	console.log("testing if zyion is correct");
	//console.log($("#title").val());

	$("#postEvent").on("click", function () {

		var data = {
			title: $("#title").val(),
			description: $("#description").val(),
			sTime: $("#startTime").val(),
			eTime: $("#endTime").val(),
			date: $("#eventDate").val(),
			sDate: $("#startAd").val(),
			eDate: $("#endAd").val(),
			lat: $("#lat").val(),
			long: $("#long").val()
		}

		socket.emit('event', data);

		//console.log(data);

	});

	$("#emergency").on("click", function () {

		var data = {
			title: $("#title").val(),
			sTime: $("#startTime").val(),
			eTime: $("#endTime").val(),
			sDate: $("#startAd").val(),
			eDate: $("#endAd").val(),
			lat: $("#lat").val(),
			long: $("#long").val()
		}

		socket.emit('emergency', data);

		//console.log(data);

	});

	$("#roadBlock").on("click", function () {

		var data = {
			sTime: $("#startTime").val(),
			eTime: $("#endTime").val(),
			sDate: $("#startAd").val(),
			eDate: $("#endAd").val(),
			lat: $("#lat").val(),
			long: $("#long").val()
		}

		socket.emit('roadBlock', data);

		//console.log(data);

	});

	socket.on('connections', function (data) {

		console.log("I am getting connections");

		$("#count").html(data);

	});

	socket.on('dc', function (data) {


		$("#count").html(data);
	});
	// World's largest Halal Snack pack :D

});