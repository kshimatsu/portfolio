$(document).ready(function() {

	function randomColor() {
		return '#' + Math.random().toString(16).slice(2,8);
	}

	$('#bgBtn').on("click", function(event) {
		event.preventDefault();
		console.log("Hello World!");

		$('.navbar').css('background', randomColor());
	});


});