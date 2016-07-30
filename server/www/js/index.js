$(function () {

	var socket = io.connect('http://64.137.223.40:1337');

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
	// World's largest Halal Snack pack :D

});