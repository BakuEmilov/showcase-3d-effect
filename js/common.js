document.addEventListener('DOMContentLoaded', function() {


	const showSlide = new Swiper('.showcase-carousel' , {
		loop: true,
		slidesPerView: 3,
		speed: 1800,
		centeredSlides: true,
		navigation: {
     nextEl: '.showcase-navigation__next',
		 prevtEl: '.showcase-navigation__prev',
		}
	})
	

	document.querySelector('video').playbackRate = 2

})
