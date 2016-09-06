var windowObjectReference = null;

$(function($) {
  $(window).resize(reSize);
  
  //large
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade:true,
    speed:0
  });

  //small
  $('.slider-forr').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  });
  
  //SMOOTH SCROLL
 $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });  
 
  //PROGRAM LINKS
  $('.display').on('click touch', function() {
    window.open($(this).data('url'));
  });
  $('.displayy').on('click touch', function() {
    window.open($(this).data('url'));
  });
  
  //EMAIL FUNCTION
  $('.send').click(function(){
	if(windowObjectReference == null || windowObjectReference.closed){
     var subject = encodeURI($('#subject').val());
     var name = encodeURI($('#name').val());
     var body = encodeURI($('#body').val());
     var href = 'mailto:sirrineprogramming@gmail.com?subject='+name+': '+subject+'&body='+body;
     windowObjectReference = window.open(href,'_blank');
	 console.log(windowObjectReference);
	}
	else{
     windowObjectReference.focus();
	};
  });
  
  $('.reset').click(function(){
    $("#subject").val('');
    $("#name").val('');
    $("#body").val('');
    $('#response').html('');
	windowObjectReference = null;
  });
  
    reSize();
});
  
  
function reSize() {
  
  //size circle picture
  var bioWidth = $('#bioimage').width();
  $('#bioimage').css('height', bioWidth);
  
  //size window picture
  var jumboWidth = $('.jumbotron').width();
  $('.jumbotron').css('height', jumboWidth / 2);
  
  //size displayy
  var displayyWidth = $('.displayy').width();
  $('.displayy').css('height', displayyWidth * 0.5);

  //carol sizing
  var displayWidth = $('.displayBox').width();
  var displayHeight = displayWidth * 0.57;
  var screenHeight = displayHeight * 0.46;
  $('.displayBox').css('height', displayHeight);
  $('.display').css('height', screenHeight);

  
  var width = $('.containment').width();
  if (width >= 977) {
    //Large
    $('.largeScreen').show();
    $('.smallScreen').hide();
  } else {
    //Small
    $('.largeScreen').hide();
    $('.smallScreen').show();
  }
      
}

var offset = $('.dropdown').offset();
console.log('dropdown offset: '+offset);
$(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop();
	console.log(scrollTop);
	if(scrollTop >= 50){
		$('.dropdown').css({
			'position':'fixed',
			'top':'0em',
			'right':'0em'
		});
		$('.dropdown-menu').html(
		'<li><a href="#Top">Top</a></li>'+
        '<li><a href="#Programs">Programs</a></li>'+
        '<li><a href="#Bio">Bio</a></li>'+
        '<li><a href="#Contact">Contact</a></li>';
		);
	}
	else{
		$('.dropdown').css({
			'position':'static'
		});
		$('.dropdown-menu').html(
        '<li><a href="#Programs">Programs</a></li>'+
        '<li><a href="#Bio">Bio</a></li>'+
        '<li><a href="#Contact">Contact</a></li>';
		);
	}
	
	/*
    $('.background1, .background2').each(function() {
        var topDistance = $(this).offset().top;

        if ( (topDistance+100) < scrollTop ) {
            alert( $(this).text() + ' was scrolled to the top' );
        }
    });
	*/
});