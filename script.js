let menu = document.querySelector('.header__menu-inner ._active');
if (menu) {
	document.body.addEventListener('click', e => {
		e.preventDefault();

		if (e.target !== menu) {
			menu.classList.remove('_active');
		}
	});
}

const burger = document.querySelector(".burger");
if (burger) {
	const menuBody = document.querySelector(".header__menu-inner");
	burger.addEventListener("click", function () {
		document.body.classList.toggle("_lock");
		burger.classList.toggle("burger-active");
		menuBody.classList.toggle("_active");
	});
}

$(function () {

	$('.slider-main__item').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		verticalSwiping: true,
		focusOnSelect: true,
		arrows: false,
		fade: true,
		autoplay: true,
		asNavFor: '.carousel__slider'
	});

	$('.carousel__slider').slick({
		infinite: true,
		slidesToShow: 3,
		centerMode: true,
		autoplay: true,
		vertical: true,
		infinite: true,
		slidesPerRow: 3,
		slidesToShow: 3,
		speed: 500,
		asNavFor: '.slider-main__item',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			}
		]
	});

});
