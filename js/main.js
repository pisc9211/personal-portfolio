;(function () {
	
	'use strict';



	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var clickMenu = function() {

		$('#navbar a:not([class="external"])').click(function(event){
			console.log('asdfadsfsd')
			var section = $(this).data('nav-section'),
				navbar = $('#navbar');
			console.log(section)
				if ( $('[data-section="' + section + '"]').length ) {
			    	$('html, body').animate({
			        	scrollTop: $('[data-section="' + section + '"]').offset().top - 55
			    	}, 500);
			   }

		    if ( navbar.is(':visible')) {
		    	navbar.removeClass('in');
		    	navbar.attr('aria-expanded', 'false');
		    	$('.js-colorlib-nav-toggle').removeClass('active');
		    }

		    event.preventDefault();
		    return false;
		});


	};

	// Reflect scrolling in navigation
	var navActive = function(section) {

		var $el = $('#navbar > ul');
		$el.find('a').removeClass('active');
		$el.each(function(){
			$(this).find('a[data-nav-section="'+section+'"]').closest('a').addClass('active');
		});

	};

	var navigationSection = function() {

		var $section = $('section[data-section]');
		
		$section.waypoint(function(direction) {
		  	
		  	if (direction === 'down') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
	  		offset: '150px'
		});

		$section.waypoint(function(direction) {
		  	if (direction === 'up') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
		  	offset: function() { return -$(this.element).height() + 155; }
		});

	};






	// var sliderMain = function() {
		
	//   	$('#colorlib-hero .flexslider').flexslider({
	// 		animation: "fade",
	// 		slideshowSpeed: 5000,
	// 		directionNav: true,
	// 		start: function(){
	// 			setTimeout(function(){
	// 				$('.slider-text').removeClass('animated fadeInUp');
	// 				$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
	// 			}, 500);
	// 		},
	// 		before: function(){
	// 			setTimeout(function(){
	// 				$('.slider-text').removeClass('animated fadeInUp');
	// 				$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
	// 			}, 500);
	// 		}

	//   	});

	// };

	// var stickyFunction = function() {

	// 	var h = $('.image-content').outerHeight();

	// 	if ($(window).width() <= 992 ) {
	// 		$("#sticky_item").trigger("sticky_kit:detach");
	// 	} else {
	// 		$('.sticky-parent').removeClass('stick-detach');
	// 		$("#sticky_item").trigger("sticky_kit:detach");
	// 		$("#sticky_item").trigger("sticky_kit:unstick");
	// 	}

	// 	$(window).resize(function(){
	// 		var h = $('.image-content').outerHeight();
	// 		$('.sticky-parent').css('height', h);


	// 		if ($(window).width() <= 992 ) {
	// 			$("#sticky_item").trigger("sticky_kit:detach");
	// 		} else {
	// 			$('.sticky-parent').removeClass('stick-detach');
	// 			$("#sticky_item").trigger("sticky_kit:detach");
	// 			$("#sticky_item").trigger("sticky_kit:unstick");

	// 			$("#sticky_item").stick_in_parent();
	// 		}
			

			

	// 	});

	// 	$('.sticky-parent').css('height', h);

	// 	$("#sticky_item").stick_in_parent();

	// };

	// var owlCrouselFeatureSlide = function() {
	// 	$('.owl-carousel').owlCarousel({
	// 		animateOut: 'fadeOut',
	// 	   animateIn: 'fadeIn',
	// 	   autoplay: true,
	// 	   loop:true,
	// 	   margin:0,
	// 	   nav:true,
	// 	   dots: false,
	// 	   autoHeight: true,
	// 	   items: 1,
	// 	   navText: [
	// 	      "<i class='icon-arrow-left3 owl-direction'></i>",
	// 	      "<i class='icon-arrow-right3 owl-direction'></i>"
	//      	]
	// 	})
	// };

	// Document on load.
	$(function(){

		clickMenu();
		// navActive();
		navigationSection();
		// windowScroll();


		// mobileMenuOutsideClick();
		// sliderMain();
		// stickyFunction();
		// owlCrouselFeatureSlide();
	});


}());