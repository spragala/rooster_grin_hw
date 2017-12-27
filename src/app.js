import $ from 'jquery'
import Home from '../views/index.pug'
import Styles from '../styles/main.scss'

// Slide-in on Checkerboard Section
$(document).on('scroll', function () {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();

  $.each($('.col-3'), function () {
    var $target = $(this);
    var targetTop = $target.offset().top;

    if (targetTop < pageBottom - 100) {
      $target.addClass('visible show');
    } else {
      $target.removeClass('visible show');
    }
  });
});

// Clear form inputs
$('#modal-btn').on('click', function () {
  $('form')[0].reset();
});

// fix the CTA button at the max page width
// if window is larger than 1440px
$(window).on('resize', function () {
  if ($(window).width() > 1440) {

    var newWindWidth = $(window).width();
    var rightPgEdge = Math.floor(Math.abs(newWindWidth - 1440)/2);
    var rightPos = newWindWidth - rightPgEdge;

    var left = rightPos - 50 + 'px';
    var pulseLeft = rightPos - 45 + 'px';

    $('.cta').css({left: left});
    $('.pulse, .pulse2').css({left: pulseLeft});
  } else {
    $('.cta, .pulse, .pulse2').removeAttr('style');
  }
});

// Remove pulsing once CTA button is clicked
$('.cta').on('click', function () {
  $('.pulse').removeClass('pulse');
  $('.pulse2').removeClass('pulse2');
});

// Number counting animation
$('.data-button > .btn').on('click', function () {
  //Hat-tip to S. Shivasurya
  $('.count').each(function () {
      $(this).prop('Counter', 100).animate({
          Counter: $(this).text()
      }, {
          duration: 7000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
  });
});
