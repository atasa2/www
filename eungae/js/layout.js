

// import { bs_navbar } from './bs_navbar.js';

// new bs_navbar();


		 
document.addEventListener("DOMContentLoaded", function(){
	
	const header = document.querySelector('#main_header');
	const header_h = header.offsetHeight;

	const navbar = document.querySelector('#main_navbar');
	
	window.addEventListener('scroll', function() {
		const navbar_h = navbar.offsetHeight;
	   
		if (window.scrollY > header_h) {
			navbar.classList.add('fixed_top');
			document.body.style.paddingTop = navbar_h + 'px';
		} else {
			navbar.classList.remove('fixed_top');
			document.body.style.paddingTop = '0';
		} 
	});
});
   



// export { bootnavbar };

/*

		if (window.scrollY > header_h) {
			document.getElementById('main_navbar').classList.add('fixed_top');
			// add padding top to show content behind navbar
			document.body.style.paddingTop = navbar_h + 'px';
		} else {
			document.getElementById('main_navbar').classList.remove('fixed_top');
			 // remove padding top from body
			document.body.style.paddingTop = '0';
		} 

*/



