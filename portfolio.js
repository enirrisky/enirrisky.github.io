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
    
  $('.send').click(function(){
     var subject = encodeURI($('#subject').val());
     var name = encodeURI($('#name').val());
     var body = encodeURI($('#body').val());
     var href = 'mailto:'+mail+'?subject='+name+': '+subject+'&body='+body;
	 window.open(href,'_blank');
  });
  
  $('.reset').click(function(){
    $("#name").val('');
    $("#mail").val('');
    $("#comment").val('');
    $('#response').html('');
  })
      
}