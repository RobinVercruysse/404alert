function displayGreetings() {
	document.getElementById('content').innerHTML = "Greetings!";
}

document.addEventListener('DOMContentLoaded', function() {
	displayGreetings();
});