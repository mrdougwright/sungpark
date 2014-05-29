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
    var unhideElem = elem.find('hidden');
    elem.addClass('hidden');
    unhideElem.removeClass('hidden');
  });
});

$(function() {
  $("img.lazy").lazyload({
    effect: "fadeIn"
  });
});
