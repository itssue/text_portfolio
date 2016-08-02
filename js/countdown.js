window.onload = function() {

	var election = new Date('11/08/2016 01:00:00 EDT');

	function daysLeft() {
	    var now = new Date();
	    var remaining = election - now;

	    var days = Math.floor(remaining /(1000*60*60*24));

	    document.getElementById("days").innerHTML = days;
	}

	daysLeft();

}