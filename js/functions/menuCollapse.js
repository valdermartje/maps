module.exports = {
	mobileMenu: function() {
		let strepen = document.querySelectorAll('.streep');
		let menu = document.querySelector('.overlay-menu');

		if (menu.style.display === 'none') {
			menu.style.display = 'block';
			strepen[0].style.transform = 'rotate(-45deg)';
			strepen[1].style.display = 'none';
			strepen[2].style.transform = 'rotate(45deg)';
			strepen[2].style.marginTop = '-7px';
		} else {
			menu.style.display = 'none';
			strepen[0].style.transform = 'rotate(0deg)';
			strepen[1].style.display = 'block';
			strepen[2].style.transform = 'rotate(0deg)';
			strepen[2].style.marginTop = '0px';
		}
	}
};
