const btnHamburger = document.querySelector('#js-btnHamburger');
const header = document.querySelector('.js-header');
const overlay = document.querySelector('.js-overlay');

btnHamburger.addEventListener('click', function(){
	console.log('on click hamburger');
	if(header.classList.contains('open')){
		header.classList.remove('open');
		overlay.classList.add('fade-out');
		overlay.classList.remove('fade-in');
	}else{
		header.classList.add('open');
		overlay.classList.add('fade-in');
		overlay.classList.remove('fade-out');
	}
})