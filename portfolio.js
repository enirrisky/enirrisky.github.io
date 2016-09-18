var windowObjectReference = null;

$(function($) {
  $(window).resize(reSize);
  
  //large
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
	accesability: true,
    fade:true,
    speed:0
  });

  //small
  $('.slider-forr').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  });
  
  //SMOOTH SCROLL
 $('.dropdown-menu').on('click','a[href*="#"]:not([href="#"])',function() {
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
  
  //var handle = setInterval(changePic, 7000);
  changePic();
  setTimeout(changePic, 1500);
  
  reSize();
});
  
var images = [
	"http://i1168.photobucket.com/albums/r494/Jonathan_Sirrine/portfolioPic_zpsltigo7s1.jpg",
	"http://i1168.photobucket.com/albums/r494/Jonathan_Sirrine/profile_zpswvc55ubg.jpg",
	"http://i1168.photobucket.com/albums/r494/Jonathan_Sirrine/profilevolcom%202_zpsgrwrdthq.jpg",
	"http://i1168.photobucket.com/albums/r494/Jonathan_Sirrine/taco%20jon_zpsc21leva3.jpg"
];  
  
var picInd = 1;
function changePic(){
  $('#bioimage').css({
	  "background-image":"URL("+images[picInd]+")"
  });
  if(picInd >= images.length - 1){
	  picInd = 0;
  }else{
	  picInd++;
  }
}  
  
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
  } else{
    //Small
    $('.largeScreen').hide();
    $('.smallScreen').show();
  }
      
}

var flip = true;
var offset = $('.dropdown').offset();
$(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop();
	if(scrollTop >= 50 && flip){
		$('.dropdown').css({
			'position':'fixed',
			'top':'0em',
			'right':'0em'
		});
		var menu = '<li><a href="#Top">Top</a></li>'+
		'<li><a href="#Programs">Programs</a></li>'+
		'<li><a href="#Bio">Bio</a></li>'+
		'<li><a href="#Contact">Contact</a></li>';
		$('.dropdown-menu').html(menu);
		flip = false;
	}
	else if(scrollTop < 50 && !flip){
		$('.dropdown').css({
			'position':'relative'
		})
		var menu = '<li><a href="#Programs">Programs</a></li>'+
		'<li><a href="#Bio">Bio</a></li>'+
		'<li><a href="#Contact">Contact</a></li>';
		$('.dropdown-menu').html(menu);
		flip = true;
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


