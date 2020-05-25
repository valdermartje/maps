const getLocation = (coordinates) => {
	console.log('verbonden');
	let id = document.getElementById('conditions-read');
	let lat, long, message;
	message = 'Something went wrong';

	function add(content) {
		let alert = document.createElement('div');
		let close = document.createElement('div');
		close.classList.add('close');
		alert.classList.add('alert');
		let element = document.getElementById('error');

		let alerts = document.querySelectorAll('.alert');

		if (alerts.length < 1) {
			alert.appendChild(content);
			alert.appendChild(close);
			element.appendChild(alert);
		}
		close.onclick = () => {
			let el;
			el = document.querySelector('.alert');
			el.classList.add('fadeOut');
			el.remove();
		};
	}

	if (id.checked === true) {
		console.log('U heeft de algemene voorwaarden geaccepteerd');

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				function myLocation(position) {
					lat = position.coords.latitude;
					long = position.coords.longitude;
					coordinates({
						latitude: lat,
						longitude: long
					});
					return coordinates;
				},
				function(error) {
					switch (error.code) {
						case error.PERMISSION_DENIED:
							message = document.createTextNode('User denied the request for Geolocation.');
							break;
						case error.POSITION_UNAVAILABLE:
							message = document.createTextNode('Location information is unavailable.');
							break;
						case error.TIMEOUT:
							message = document.createTextNode('The request to get user location timed out.');
							break;
						case error.UNKNOWN_ERROR:
							message = document.createTextNode('An unknown error occurred.');
							break;
					}
					setTimeout(add(message), 300);
				}
			);
		} else {
			setTimeout(add('Geolocation is no supported in your browser'), 300);
		}
	} else {
		message = document.createTextNode(
			'Voordat u gebruik wilt maken met Maps moet u toestemming geven aan de Algemene Voorwaarden!'
		);
		add(message);
	}
};

module.exports = { getLocation };
