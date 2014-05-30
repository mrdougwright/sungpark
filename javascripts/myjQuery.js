
$(document).ready(function(){
  $('li.dropdown').click(function(){
    var ul = $(this).next("ul");
      if (ul.is(":hidden")) {
        ul.slideDown();
      } else {
        ul.slideUp();
      }
  });

  var foo = $('#videos');
  foo.poptrox();
  
});

$(function() {
  $("img.lazy").lazyload({
    effect: "fadeIn"
  });
});

$("img.lazy").each(function() {
  $(this).attr("data-original",$(this).attr("src"));
  $(this).removeAttr("src");
});