$(document).ready(function(){
	$('.brigade-slider').owlCarousel({
		loop:true,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		dots: true,
		dotsClass: 'slider-dots brigade-slider__dots',
		dotClass: 'slider-dot',
		items:1
	})
	$('.reviews-slider').owlCarousel({
		loop:true,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		dots: true,
		dotsClass: 'slider-dots reviews-slider__dots',
		dotClass: 'slider-dot',
		margin: 220,
		responsive: {
			0: {
				items: 1
			},
			992: {
				items: 2
			}
		}
	})
});