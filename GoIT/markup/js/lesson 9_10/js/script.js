$(function(){

  var showDropdown = function () {
    $(this).children('.sub_menu')
      .show(200)
      .animate({
        backgroundColor: "#AE7844",
      }, 200)
    ;
  };

  var hideDropdown = function () {
    $(this).children('.sub_menu')
      .hide(200)
      .animate({
        backgroundColor: "#D69456",
      }, 200)
    ;
  };

  $('li.main_dropdown').hover( showDropdown, hideDropdown );

  var changeColor = function () {
    $(this).animate({
      color: 'black'
    }, 100);
  };

  var changeColorBack = function () {
    $(this).animate({
      color: 'white'
    }, 100);
  };

  $('.sub_menu--link').hover( changeColor, changeColorBack );

  $('.jcarousel')
    .jcarousel({
      animation: 'slow',
      wrap: 'circular'
    })

    .jcarouselAutoscroll({
      interval: 3000,
      target: '+=1',
      autostart: true
    })
  ;

  $('.jcarousel_prev').jcarouselControl({
    target: '-=1'
  });

  $('.jcarousel_next').jcarouselControl({
    target: '+=1'
  });

  $('.jcarousel_pagination')
    .jcarouselPagination({
        item: function(page) {
            return '<a class = "jcarousel_page" href="#' + page + '"></a>';
        }
    })

    .on('jcarouselpagination:active', 'a', function() {
        $(this).addClass('active');
    })

    .on('jcarouselpagination:inactive', 'a', function() {
        $(this).removeClass('active');
    })
  ;

  $('.jquery_checkbox input, select').styler();

});