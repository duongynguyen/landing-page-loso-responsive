/* Show and hide menu */
$(document).ready(function() {
  'use strict';

  $(window).scroll(function() {
    'use strict';

    if($(window).scrollTop() < 80) {
      $('.navbar').css({
        'margin-top': '-100px',
        'opacity': '0',
        'background-color': 'rgba(59, 59, 59, 0)'
      });
    } else {
      $('.navbar').css({
        'margin-top': '0px',
        'opacity': '1',
        'background-color': 'rgba(59, 59, 59, 0.7)',
        'border-color': '#444'
      });
    }
  })
});

/* Smooth scrolling */
$(document).ready(function() {
  'use strict';

  $('.nav-item')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
      }
    }
  });
});

/* active menu item on click */
$(document).ready(function() {
  'use strict';

  $('.navbar-nav li a').click(function() {
    'use strict';

    $('.navbar-nav li').removeClass('active');
    $(this).parents('li').addClass('active');
  });
});

/* highlight menu item on scroll */
$(document).ready(function() {
  'use strict';

  $(window).scroll(function() {
    'use strict';

    $('section').each(function() {
      'use strict';

      var bb = $(this).attr('id'); // ABOUT, CONTACT, DOWNLOAD
      var hei = $(this).outerHeight();
      var grttop = $(this).offset().top - 70;
      if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei) {
        $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");
      } else {
        $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");
      }
    });
  });
});

/* add auto padding to header */
$(document).ready(function() {
  'use strict';

  setInterval(function() {
    'use strict';

    var windowHeight = $(window).height();
    var containerHeight = $('.header-container').height();
    var padTop = windowHeight - containerHeight;

    $('.header-container').css({
      'padding-top': Math.round(padTop/2) + 'px',
      'padding-bottom': Math.round(padTop/2) + 'px'
    });
  }, 10);
});

/* Add bx slider to screens */
$(document).ready(function() {
  $('.bxslider').bxSlider({
    slideWidth: 292.5,
    auto: true,
    minSlides: 1,
    maxSlides: 3,
    slideMargin: 50
  });
});

/* Add counter up */
$(document).ready(function() {
  $('.counter-number').counterUp({
    delay: 10,
    time: 2000
  });
});

/* Add animation / Initialize Wow */
$(document).ready(function() {
  new WOW().init();
});