$(document).ready(function() {
  "use strict";
  $(window).scroll(function() {
    var scrolling = $(this).scrollTop();
    if (scrolling > 5) {
      $(".navbar").addClass("scroll-bg");
    } else {
      $(".navbar").removeClass("scroll-bg");
    }
  });
  $("a.nav-link").click(function() {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top
        },
        1000,
        "easeInSine"
      );
  });
});
