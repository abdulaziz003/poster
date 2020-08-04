$(window).on('load', function () {
    "use strict";
    $('#loader').fadeOut();
  });
/******************************************************* */
$(document).ready(function () {
	$("#sidebar").mCustomScrollbar({
		theme: "minimal"
	});

	$('#dismiss, .overlay').on('click', function () {
		$('#sidebar').removeClass('active');
		$('.overlay').fadeOut();
	});

	$('#sidebarCollapse').on('click', function () {
		$('#sidebar').addClass('active');
		$('.overlay').fadeIn();
		$('.collapse.in').toggleClass('in');
		$('a[aria-expanded=true]').attr('aria-expanded', 'false');
	});
});
	/* ---------------------------------------------
     Scrool To Top Button Function
    --------------------------------------------- */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $(".toTop").css("right", "20px");
        } else {
            $(".toTop").css("right", "-100px");
        }
    });

    $(".toTop").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });


	/******************************************************************************* */

	$(document).ready(function () {

		var owl1 = $("#clients-slider");

		



		$('#clients-slider').owlCarousel({
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			autoplayHoverPause: true,
			loop: true,
			items: 4,
			slideSpeed: 1500,
			autoplay: false,
			dots: false,
			nav: true,
			navigation:true,
			navText: ["<i class='prev fa fa-angle-left'></i>", "<i class='next fa fa-angle-right'></i>"],
			responsiveClass: true,
			responsive: {
				0: {
					items: 2,
					
				},
				900: {
					items: 3,
					
				},
				1000: {
					items: 4,
					
				}
			}
		});
		










		

		window.onscroll = function() {myFunction()};
		var navbar = document.getElementById("navbar");
		var sticky = navbar.offsetTop;

		function myFunction() {
		if ($(this).scrollTop() > 100) {
			navbar.classList.add("sticky")
		} else {
			navbar.classList.remove("sticky");
			
		}
		}
		
		







	});
	$(document).ready(function(){
		$("nav a").on('click',function(){
		  var link = $(this).attr('href');
		  $('html,body').animate({scrollTop: ($(link).offset().top - 90)},'slow');
		  return false;
		});
	  });
	/*******************************************************************/


/*********************************************************************** */
/* ---------------------------------------------
     Loader Screen
    --------------------------------------------- */
    // $(window).load(function () {
    //     $("body").css('overflow-y', 'auto');
    //     $('#loading').fadeOut(1000);
    // });
	//
    //