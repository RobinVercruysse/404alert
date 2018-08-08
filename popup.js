var counter = 0;

function display404s() {
	counter += 1;
	document.getElementById('content').innerHTML = "Hello world x" + counter;
}

document.addEventListener('DOMContentLoaded', function() {
	display404s();
});