$(document).ready(function(){
	$('#promoOwl').owlCarousel({
		items: 1,
		dots: true,
		dotsContainer: '#promoDots',
		autoplay: true,
		autoplayTimeout: 4000,
		rewind: true,
		onDragged: promoAttention,
		//touchDrag: false
	});
	function promoAttention() {
		$('#promoOwl').trigger('stop.owl.autoplay');
		setTimeout(promoUnAttention,15000)
	}
	function promoUnAttention() {
		$('#promoOwl').trigger('play.owl.autoplay')
	}
	$('#promoDots, .promo-container').on('click',promoAttention);

	$('#servicesOwl').owlCarousel({
		dotsContainer: '#servicesDots',
		margin: 20,
		dots: true,
		responsive: {
			0: {
				items: 1,
				stagePadding: 20
			},
			480: {
				items: 1,
				stagePadding: 50
			},
			800: {
				items: 2,
				stagePadding: 50
			}
		}
	});
});