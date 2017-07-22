$(document).ready(function(){

  // Init Skrollr
  var s = skrollr.init();
  
   //Stick navbar on scroll
  var stickyToggle = function(sticky, stickyWrapper, scrollElement) {
  var stickyHeight = sticky.outerHeight();
  var stickyTop = stickyWrapper.offset().top;
  if (scrollElement.scrollTop() >= stickyTop){
   stickyWrapper.height(stickyHeight);
   sticky.addClass("is-sticky");
  } else{
     sticky.removeClass("is-sticky");
     stickyWrapper.height('auto');
    }
  };

  // Find all data-toggle="sticky-onscroll" elements
  $('[data-toggle="sticky-onscroll"]').each(function() {
    var sticky = $(this);
    var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
    sticky.before(stickyWrapper);
    sticky.addClass('sticky');

    // Scroll & resize events
    $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function() {
     stickyToggle(sticky, stickyWrapper, $(this));
  });

  // On page load
  stickyToggle(sticky, stickyWrapper, $(window));
  });

  $('.engagementPictures').slick({
      slidesToShow: 3,
      dots: true,
      speed: 300,
      focusOnSelect: true,
      variableWidth: true,
      responsive: [
        {
        breakpoint: 480,
          settings: {
            centerMode: true,
            slidesToShow: 1,
            centerPadding: '0px'
          }
        },
        {
          breakpoint: 768,
          settings: {
            centerMode: true,
            arrows: false,
            centerPadding: '0px',
            slidesToShow: 1
          }
        }
      ]
  });

    $('.slick-dots li').first().click();

  var $weddingParty = $('#wedding-party');
  var $infoClose = $('.infoClose');
  var friendsInfo = false;
  var currInfo = '';

  $("#show-info").click(function() {
    var href = event.target.getAttribute('data-target');
    $(href).modal('show');

  });

  $weddingParty.bind('click', function(event){
    event.preventDefault();
    var href = event.target.getAttribute('data-target');
    $(href).modal('show');
  });
});

  var viewInfoButton = document.getElementsByClassName("history-more");
  var info = document.getElementsByClassName("info");
  $('.carousel').carousel({
    interval: false
});

ANIMATION_SPEED = 400;

$.easing.def = "easeInOutCubic";

$(function(){

    $('a[href^="#"]', '#navigation').on('click',function (e) {
		e.preventDefault();
		var target = this.hash,
			$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
			}, 1000, function () {
        window.location.hash='';
			//window.location.hash = target;
		});
	});

	$("#navigation li").on('activate', function() {
		bgLazyLoad('#' + $($(this).find('a').attr('href')).next().next().attr('id'));
		bgLazyLoad('#' + $($(this).find('a').attr('href')).next().attr('id'));
		bgLazyLoad($(this).find('a').attr('href'));
	});

    $('#history, #gallery, #festivities-carousel').carousel({
		interval: false
    });
    $('#our-story')
    	.on('click', function(){
    		lazyLoad('#our-story');
    	});
});
