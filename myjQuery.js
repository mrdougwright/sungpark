$(document).ready(function(){
  $('li.dropdown').click(function(){
    var ul = $(this).next("ul");
      if (ul.is(":hidden")) {
        ul.slideDown();
      } else {
        ul.slideUp();
      }
  });
});

$(function() {
  $("img.lazy").lazyload({
    effect: "fadeIn"
  });
});

// 'ul.mini_dropdown'
