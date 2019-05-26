const globalHeader = function(selector) {
	'use strict';

	if ( document.body.contains( document.querySelector(selector) ) ) {		
		let header = document.querySelector(selector),
			menuButton = header.querySelector('.js-openMenu');
	
		// Show / Hide Small Screen Nav
		menuButton.addEventListener('click', function(e) {
			e.preventDefault();
			
			// Toggle Aria
			if(this.getAttribute('aria-expanded') === 'false') {
		        this.setAttribute('aria-expanded','true');	
		    } else {
			    this.setAttribute('aria-expanded','false');
		    }
					
			// Freeze Page Scroll
			document.getElementsByTagName('html')[0].classList.toggle('freeze');
		}, false );
	}
};

window.addEventListener('load', function() {
	globalHeader('.global-header');
}, false);