

          /*  centerMode: true,
            focusOnSelect: true,
            variableWidth: true,     */
$(document).ready(function(){

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
      centerMode: true,
      slidesToShow: 3,
      dots: true,
      speed: 300,
      centerPadding: '0px',
      responsive: [
        {
        breakpoint: 480,
          settings: {
            centerMode: true,
            slidesToShow: 1,
            centerPadding: '0'
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 2
          }
        }
      ]
      /*responsive: [
        {
        variableWidth: true,
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
        variableWidth: true,
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        }
      ]   */
  });

  var $images = $('.Collage');

  $('.Collage').collagePlus({
          'targetHeight' : 130,
          'allowPartialLastRow' : true
      }
  );

$('img').hover(function(){
  var yoffset = $('#wedding-party').height();
  var height = $(this).height();
  var width = $(this).width();
  var coords = $(this).offset();
  $('#caption').css('line-height', height + 'px');
  $('#caption').html($(this).data('caption'))
      .width(width+2)
      .height(height+2)
      .animate({
          top: coords.top - (yoffset*4 -3),
          left: coords.left -2
      }, 0, function(){
          $(this).animate({
              opacity: 'show'
          });
      });
});

$('img').mouseout(function(){
    $('#caption').animate({
        opacity: 'hide'
    }, 100);
});

  var $weddingParty = $('#wedding-party');
  var $infoClose = $('.infoClose');
  var showInfo = false;
  var friendsInfo = false;
  var currInfo = '';
  var $timeline = $('#carousel-inner');

  $timeline.bind('click', function(event){
    event.preventDefault();
    if(!showInfo){
      var href = event.target.getAttribute('href');
      href = href.replace('#','');
      currInfo = document.getElementById(href);
      currInfo.classList.add('show-info');
      showInfo = true;
    }
    else{
      var currClass = event.target.getAttribute('class');
      if(currClass.includes('info-close')){
        currInfo.classList.remove('show-info');
        currInfo.classList.add('hide-info');

        setTimeout(function(){
          currInfo.classList.remove('hide-info');
        },2000);

        showInfo=false;
      }
    }
  });

  $weddingParty.bind('click', function(event){
    event.preventDefault();
    if(!friendsInfo){
      var href = event.target.getAttribute('href');
      href = href.replace('#','');
      currInfo = document.getElementById(href);
      currInfo.classList.add('show-info');
      friendsInfo = true;
    }
    else{
      var currClass = event.target.getAttribute('class');
      if(currClass.includes('info-close')){
        currInfo.classList.remove('show-info');
        currInfo.classList.add('hide-info');

        setTimeout(function(){
          currInfo.classList.remove('hide-info');
        },2000);

        friendsInfo=false;
      }
    }
  });
});

  var viewInfoButton = document.getElementsByClassName("history-more");
  var info = document.getElementsByClassName("info");
  $('.carousel').carousel({
    interval: false
});

    // Init Skrollr
    // var s = skrollr.init();
    // s.refresh($('.homeSlide'));

ANIMATION_SPEED = 400;

$.easing.def = "easeInOutCubic";

$(function(){

	// if(!Modernizr.touch) {
	// 	var skrl = skrollr.init({
	//         easing: 'sqrt'
	//     });
	// }

    $('.image', '#home').progressiveBG();

    $('a[href^="#"]', '#navigation').on('click',function (e) {
		console.log('hello');
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
	$("img[data-original]").lazyload();
});


function lazyLoad(parent) {
    $('[data-original]', $(parent)).each(function(){
        var $img = $(this);
        $img.attr('src', $img.attr('data-original'));
        $img.removeAttr('data-original');
    });
}

function bgLazyLoad(el){
    var $div = $(el).filter('[data-bg]');
    if($div.length) {
    	$div.css('background', 'url(' + $div.attr('data-bg') + ') no-repeat left top');
		var $temp = $('<img>');
		$temp
			.css({
				position: 'absolute',
				left: '-9999px',
				top: 0
			})
			.attr('src', $div.attr('data-bg'))
			.load(function(){
				$div.removeAttr('data-bg');
			});
    }
}
