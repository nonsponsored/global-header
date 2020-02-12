export class GlobalHeader {
	constructor(selector) {
		
		// Wait for DOM
		document.addEventListener('DOMContentLoaded', () => {
			
			if ( document.body.contains( document.querySelector(selector) ) ) {		
				const html = document.getElementsByTagName('html')[0],
					  header = document.querySelector(selector),
					  nav = header.querySelector('.global-header__nav'),
					  menuButton = header.querySelector('.js-openMenu');
			
				// Menu Button : Show / Hide Small Screen Nav
				menuButton.addEventListener('click', (e) => {
					e.preventDefault();
					
					// Toggle Button State
					e.currentTarget.classList.toggle('menu-button--active');
					
					// Toggle Aria
					if(!nav.hasAttribute('aria-expanded')) {
					    nav.setAttribute('aria-expanded','true');	
					} else {
					    nav.removeAttribute('aria-expanded');
					}
						
					// Freeze Page Scroll
					html.classList.toggle('freeze');
				}, false );
				
				// Escape Key  : Show / Hide Small Screen Nav
				document.addEventListener('keydown', (evt) => {
					if ( menuButton.classList.contains('menu-button--active') ) {
						evt = evt || window.event;
						if (evt.keyCode == 27) {
							// Rest Menu Button
							menuButton.classList.remove('menu-button--active');
							
							// Remove Aria
							nav.removeAttribute('aria-expanded');
							
							// Remove Page Freeze
							html.classList.remove('freeze');
						}
					}
				})
			}
		})
	}
}