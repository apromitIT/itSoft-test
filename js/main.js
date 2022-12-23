document.addEventListener("DOMContentLoaded", function () {

	const btnMenuOpen = document.querySelector('.icon-menu-open');
	const btnMenuClose = document.querySelector('.icon-menu-close');
	const navBar = document.querySelector('.nav');
	const modal = document.querySelector('.pop-up');
	const closeModal = document.querySelector('.btn-close');

	console.log(document.querySelector('.icon-info'));

	btnMenuOpen.addEventListener('click', () => {
		navBar.classList.toggle('hidden');
	});

	btnMenuClose.addEventListener('click', () => {
		navBar.classList.toggle('hidden');
	});

	closeModal.addEventListener('click', () => {
		modal.classList.toggle('hidden');
	});

	document.querySelector('.icon-info').addEventListener('mouseenter', () => {
		document.querySelector('.info-details').classList.toggle('hidden');
	});

	document.querySelector('.icon-info').addEventListener('mouseout', () => {
		document.querySelector('.info-details').classList.toggle('hidden');
	});

	document.getElementById('modalSlideOne').addEventListener('click', () => {
		document.querySelector('.modal-one').classList.toggle('hidden');
	});

	document.querySelector('.modal-one-close').addEventListener('click', () => {
		document.querySelector('.modal-one').classList.toggle('hidden');
	});

	document.getElementById('modalSlideTwo').addEventListener('click', () => {
		document.querySelector('.modal-two').classList.toggle('hidden');
	});

	document.querySelector('.modal-two-close').addEventListener('click', () => {
		document.querySelector('.modal-two').classList.toggle('hidden');
	});

	document.getElementById('modalSlideThree').addEventListener('click', () => {
		document.querySelector('.modal-three').classList.toggle('hidden');
	});

	document.querySelector('.modal-three-close').addEventListener('click', () => {
		document.querySelector('.modal-three').classList.toggle('hidden');
	});






	const swiperIntro = new Swiper('.swiper-intro', {
		// effect: "coverflow",
		centeredSlides: true,
		grabCursor: true,
		// loop: true,

		slidesPerView: "3",
		coverflowEffect: {
			rotate: 30,
			stretch: 0,
			depth: 50,
			modifier: 0,
			slideShadows: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

	});

	const sliderExperts = new Swiper('.experts-opinion', {
		width: 847,

		loop: true,
		centeredSlides: true,
		slidesPerView: 1,
		keyboard: true,

		autoplay: {
			delay: 2000,
		},


		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	});




}); //DOMContentLoaded