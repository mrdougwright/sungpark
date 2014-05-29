
$(document).ready(function(){
  $('li.dropdown').click(function(){
    var ul = $(this).next("ul");
      if (ul.is(":hidden")) {
        ul.slideDown();
      } else {
        ul.slideUp();
      }
  });

  $('.show_vid').click(function(){
    var elem = $(this);
    var video = elem.find('.video');

    elem.children('a').addClass('hidden');
    video.children().removeClass('hidden');
  });
  
});

$(function() {
  $("img.lazy").lazyload({
    effect: "fadeIn"
  });
});
