$(window).scroll(function (event) {
	var scroll = $(window).scrollTop();
	WorkFrameTopDistance = $('#work-frame').offset().top;
	distanceOfStaticBoxFromTop = (WorkFrameTopDistance - scroll);
	if (scroll > window.innerHeight) {
		$('#particles-js').css("display", "none");
	} else {
		$('#particles-js').css("display", "initial");
	}
	if (distanceOfStaticBoxFromTop <= 50) {
		$('#dev-profile').css("position", "fixed");
		$('#dev-profile').css("top", "50px");
		$('#dev-profile').css("bottom", "auto");
		$('#dev-profile').css("transform", "translateX(1010px)");
	} else {
		$('#dev-profile').css("position", "static");
		$('#dev-profile').css("top", "auto");
		$('#dev-profile').css("right", "auto");
		$('#dev-profile').css("transform", "none");
	}
	if ((WorkFrameTopDistance + $('#work-frame').height()) <= ($('#dev-profile').offset().top + $('#dev-profile').height())) {
		$('#dev-profile').css("position", "absolute");
		$('#dev-profile').css("display", "block");
		$('#dev-profile').css("bottom", "0px");
		$('#dev-profile').css("top", "auto");
		$('#dev-profile').css("right", "none");
		$('#dev-profile').css("transform", "translateX(1010px)");
	}
	if (($('.lede-parent').eq(0).offset().top - scroll - window.innerHeight) <= -300) {
		$('.lede-image').eq(0).addClass("animated fadeIn");
		$('.text-3-ed').eq(0).addClass("animated fadeInDown");
		$('.text-2-ed').eq(0).addClass("animated fadeInDown");
		$('.text-1-ed').eq(0).addClass("animated fadeInDown");
		$('.lede-button').eq(0).addClass("animated fadeInLeft");
	}
	if (($('.lede-parent').eq(1).offset().top - scroll - window.innerHeight) <= -300) {
		$('.lede-image').eq(1).addClass("animated fadeIn");
		$('.text-3-ed').eq(1).addClass("animated fadeInDown");
		$('.text-2-ed').eq(1).addClass("animated fadeInDown");
		$('.text-1-ed').eq(1).addClass("animated fadeInDown");
		$('.lede-button').eq(1).addClass("animated fadeInLeft");
	}
	if (($('.lede-parent').eq(2).offset().top - scroll - window.innerHeight) <= -300) {
		$('.lede-image').eq(2).addClass("animated fadeIn");
		$('.text-3-ed').eq(2).addClass("animated fadeInDown");
		$('.text-2-ed').eq(2).addClass("animated fadeInDown");
		$('.text-1-ed').eq(2).addClass("animated fadeInDown");
		$('.lede-button').eq(2).addClass("animated fadeInLeft");
	}
	if (($('.lede-parent').eq(3).offset().top - scroll - window.innerHeight) <= -300) {
		$('.lede-image').eq(3).addClass("animated fadeIn");
		$('.text-3-ed').eq(3).addClass("animated fadeInDown");
		$('.text-2-ed').eq(3).addClass("animated fadeInDown");
		$('.text-1-ed').eq(3).addClass("animated fadeInDown");
		$('.lede-button').eq(3).addClass("animated fadeInLeft");
	}
	if (($('.lede-parent').eq(4).offset().top - scroll - window.innerHeight) <= -300) {
		$('.lede-image').eq(4).addClass("animated fadeIn");
		$('.text-3-ed').eq(4).addClass("animated fadeInDown");
		$('.text-2-ed').eq(4).addClass("animated fadeInDown");
		$('.text-1-ed').eq(4).addClass("animated fadeInDown");
		$('.lede-button').eq(4).addClass("animated fadeInLeft");
	}
});

function isElementInViewport(el) {
	if (typeof jQuery === "function" && el instanceof jQuery) {
		el = el[0];
	}
	var rect = el.getBoundingClientRect();
	return (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth));
}
$(function () {
	$('a[href*=#]:not([href=#])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 750);
				return false;
			}
		}
	});
});