// ---------------------Imports--------------------------
import $ from "jquery";
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import ScrollReveal from 'scrollreveal'

// import './css/fonts.css';
import './sass/input.sass';

// ---------------------Slick_Carousel--------------------------
$('.slick_slider').slick({
	infinite: true,
	slidesToScroll: 3,
	slidesToShow: 3,
	dots: true,
	autoplay: true,
	centerMode: true,
	centerPadding: '-2px',
	autoplaySpeed: 2000,
	arrows: false,
	// nextArrow: '<span class="slick-next"><i class="fas fa-heart"></i><i class="fas fa-angle-double-right"></i></span>',
	// prevArrow: '<span class="slick-prev"><i class="fas fa-angle-double-left"></i><i class="fas fa-heart"></i></span>',
	responsive: [{

		breakpoint: 1200,
		settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
		}
}, {

		breakpoint: 860,
		settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
		}

}, {

		breakpoint: 640,
		settings: {
				slidesToShow: 0,
				slidesToScroll: 0
		}	}]
});

// // ---------------------Menu Hid--------------------------
// $("#menuwrap").click(function() {
// 	$("#menu").addClass(function(index, currentClass) {
// 		if (currentClass === "hid")
// 			$("#menu").removeClass("hid").addClass("active");
// 		else
// 			$("#menu").removeClass("active").addClass("hid");
// 	});
// 	$("#menuwrap").addClass(function(index, currentClass) {
// 	  	if (currentClass === "hid2")
// 			$("#menuwrap").removeClass("hid2").addClass("active2");
// 	  	else
// 			$("#menuwrap").removeClass("active2").addClass("hid2");
// 	});
// 	$("#text").addClass(function(index, currentClass) {
// 	  	if (currentClass === "hidtext")
// 			$("#text").removeClass("hidtext").addClass("shotext");
// 	  	else
// 			$("#text").removeClass("shotext").addClass("hidtext");
// 	});
// })

// // ---------------------Scroll Behavior--------------------------
// ScrollReveal().reveal('.hidden-show-element', {
// 	delay: 700,
// 	duration: 500,
// 	reset: true,
// 	easing: 'cubic-bezier(0.5, 0, 0, 1)',
// 	interval: 0,
// 	opacity: 0,
// 	origin: 'bottom',
// });

// // ---------------------Video Poster--------------------------
// var videoPlayButton,
// 	videoWrapper = document.getElementsByClassName('video-wrapper')[0],
// 	video = document.getElementsByTagName('video')[0],
// 	videoMethods = {
// 		renderVideoPlayButton: function() {
// 			if (videoWrapper.contains(video)) {
// 				this.formatVideoPlayButton()
// 				video.classList.add('has-media-controls-hidden')
// 				videoPlayButton = document.getElementsByClassName('video-overlay-play-button')[0]
// 				videoPlayButton.addEventListener('click', this.hideVideoPlayButton)
// 			}
// 		},
// 		formatVideoPlayButton: function() {
// 			videoWrapper.insertAdjacentHTML('beforeend', '\
// 			<svg class="video-overlay-play-button" viewBox="0 0 200 200" alt="Play video">\
// 				<circle cx="100" cy="100" r="90" fill="none" stroke-width="15" stroke="#fff"/>\
// 				<polygon points="70, 55 70, 145 145, 100" fill="#fff"/>\
// 			</svg>\
// 			')
// 		},
// 		hideVideoPlayButton: function() {
// 			video.play()
// 			videoPlayButton.classList.add('is-hidden')
// 			video.classList.remove('has-media-controls-hidden')
// 			video.setAttribute('controls', 'controls')
// 		}
// 	}
// 	videoMethods.renderVideoPlayButton()

var menu = $('.wrapper a');

menu.on('click', function() {
  var menuNum = $(this).data('menu');
  $(this).toggleClass('menu-'+ menuNum +'-active');
})

$(document).ready(function () {
    $('#menu-1').click(function () {
        $('#menu__button_onclick').toggleClass('show');
    });
});