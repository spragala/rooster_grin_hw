import $ from 'jquery'
import Home from '../views/index.pug'
import Styles from '../styles/main.scss'

// Slide-in on Checkerboard Section
$(document).on("scroll", function () {

  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();

  $.each($('.col-3'), function() {
    var $target = $(this);
    var targetTop = $target.offset().top;

    if (targetTop < pageBottom - 100) {
      $target.addClass('visible')
    } else {
      $target.removeClass('visible')
    }
  })

});
