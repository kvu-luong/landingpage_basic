const btnHamburger = document.querySelector('#js-btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.js-header');
// const overlay = document.querySelector('.js-overlay');
const fadeElems = document.querySelectorAll('.js-has-fade');

btnHamburger.addEventListener('click', function(){
	console.log('on click hamburger');
	if(header.classList.contains('open')){
		body.classList.remove('noscroll');
		header.classList.remove('open');
		fadeElems.forEach(function(element){
			element.classList.add('fade-out');
			element.classList.remove('fade-in');
		})
		
	}else{
		body.classList.add('noscroll');
		header.classList.add('open');
		fadeElems.forEach(function(element){
			element.classList.add('fade-in');
			element.classList.remove('fade-out');
		})
		
	}
})