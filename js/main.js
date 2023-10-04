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

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#colorlib-offcanvas, .js-colorlib-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-colorlib-nav-toggle').removeClass('active');
				
	    	}
	    
	    	
	    }
		});

	};


	var offcanvasMenu = function() {

		$('#page').prepend('<div id="colorlib-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle colorlib-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#colorlib-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#colorlib-offcanvas').append(clone2);

		$('#colorlib-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#colorlib-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-colorlib-nav-toggle').removeClass('active');
				
	    	}
		});
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-colorlib-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};
	

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		$(".colorlib-loader").fadeOut("slow");
	};


	var sliderMain = function() {
		
	  	$('#colorlib-hero .flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 5000,
			directionNav: true,
			start: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

	  	});

	};

	// Owl Carousel
	var owlCrouselFeatureSlide = function() {
		var owl = $('.owl-carousel');
		owl.owlCarousel({
		   loop: true,
		   margin: 30,
		   nav: true,
		   dots: false,
		   autoplay: true,
		   autoplayHoverPause: true,
		   smartSpeed: 500,
		   responsive:{
		      0:{
		         items:1
		      },
	         600:{
		         items:2
		      },
		      1000:{
		         items:3
		      }
		   },
		   navText: [
		      "<i class='icon-chevron-left owl-direction'></i>",
		      "<i class='icon-chevron-right owl-direction'></i>"
	     	]
		});

		var owl2 = $('.owl-carousel2');
		owl2.owlCarousel({
			animateOut: 'fadeOut',
		   animateIn: 'fadeIn',
		   autoplay: true,
		   loop:true,
		   margin:0,
		   nav:true,
		   dots: false,
		   autoHeight: true,
		   items: 1,
		   navText: [
		      "<i class='icon-chevron-left owl-direction'></i>",
		      "<i class='icon-chevron-right owl-direction'></i>"
	     	]
		});
	};

	var parallax = function() {

		if ( !isMobile.any() ) {
			$(window).stellar({
				horizontalScrolling: false,
				hideDistantElements: false, 
				responsive: true

			});
		}
	};

	var datePicker = function() {
		// jQuery('#time').timepicker();
		jQuery('.date').datepicker({
		  'format': 'm/d/yyyy',
		  'autoclose': true
		});
	};

	
	$(function(){
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		sliderMain();
		dropdown();
		goToTop();
		loaderPage();
		owlCrouselFeatureSlide();
		parallax();
		datePicker();
	});


}());

/////FORM SUBMISSION (FLIGHT FLORM)/////////////////

document.addEventListener("DOMContentLoaded", function () {
	const form = document.querySelector("#booking-form");
	const confirmationMessage = document.querySelector("#confirmation-message");
	const nameInput = document.getElementById("name");
	const emailInput = document.getElementById("email");
	const tourInput = document.getElementById("tour");
	const guestsInput = document.getElementById("guests");
	const dateInput = document.getElementById("date");
  
	form.addEventListener("submit", function (event) {
	  event.preventDefault(); // Prevent the default form submission behavior
  
	  const name = nameInput.value;
	  const email = emailInput.value;
	  const tour = tourInput.value;
	  const guests = guestsInput.value;
	  const date = dateInput.value;
  
	  const message = `
		Thank you for booking!
		Name: ${name}
		Email: ${email}
		Tour Package: ${tour}
		Number of Guests: ${guests}
		Travel Date: ${date}
	  `;
  
	  // Display the confirmation message
	  confirmationMessage.textContent = message;
	  confirmationMessage.style.display = "block";
  
	  // Optionally, clear the form fields
	  nameInput.value = "";
	  emailInput.value = "";
	  tourInput.value = "";
	  guestsInput.value = "";
	  dateInput.value = "";
  
	  // Redirect to the homepage after a delay (e.g., 3 seconds)
	  setTimeout(function () {
		window.location.href = "./index.html"; // Replace with your homepage URL
	  }, 3000); // 3000 milliseconds (3 seconds) delay
	});
  });
  
  // Get references to payment method select and containers
  const paymentMethodSelect = document.getElementById("payment-method");
  const paypalContainer = document.getElementById("paypal-container");
  const mpesaContainer = document.getElementById("mpesa-container");
  
  // Add an event listener to the payment method select
  paymentMethodSelect.addEventListener("change", function () {
	const selectedMethod = paymentMethodSelect.value;
  
	// Hide all payment containers
	paypalContainer.style.display = "none";
	mpesaContainer.style.display = "none";
  
	// Show the selected payment container
	if (selectedMethod === "paypal") {
	  paypalContainer.style.display = "block";
	} else if (selectedMethod === "mpesa") {
	  mpesaContainer.style.display = "block";
	}
  });
  
  // JavaScript for form submission and redirection
  const checkoutForm = document.getElementById("checkout-form");
  
  checkoutForm.addEventListener("submit", function (event) {
	event.preventDefault(); // Prevent the default form submission behavior
  
	// Process the form data (e.g., validation and payment processing)
  
	// Redirect to the confirmation page after processing
	window.location.href = "confirmation.html";
  });
  
  // Add a JavaScript event listener to the "Book Now" button
  document.querySelector(".book-button").addEventListener("click", function() {
	// Redirect the user to the booking form page when the button is clicked
	window.location.href = "tours-place-booking.html";
  });
  
  // Event listeners to recalculate total based on package and guests
  document.querySelector('select[name="pack"]').addEventListener('change', calculateTotal);
  document.querySelector('input[name="guests"]').addEventListener('change', calculateTotal);
  
  // Calculate function
  function calculateTotal() {
	// Get form values
	const pack = document.querySelector('select[name="pack"]').value;
	const guests = document.querySelector('input[name="guests"]').value;
  
	// Calculate total
	let total = 0;
  
	if (pack === 'pack5') {
	  total = 5 * guests;
	} else if (pack === 'pack10') {
	  total = 10 * guests;
	} else if (pack === 'pack15') {
	  total = 15 * guests;
	}
  
	// Display total
	document.querySelector('.show-total-number.show-amount').textContent = '$' + total;
  }



  