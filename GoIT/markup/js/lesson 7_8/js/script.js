$(function () {

// TabHolder

$('.tabAnchor1').on( 'click', function() {

  $('.tabAnchor').removeClass('tabAnchor__active');

  $(this).addClass('tabAnchor__active');

  $('.tabArticle1').addClass('tabText__active');
  $('.tabArticle2').removeClass('tabText__active');
  $('.tabArticle3').removeClass('tabText__active');

} );

$('.tabAnchor2').on( 'click', function() {

  $('.tabAnchor').removeClass('tabAnchor__active');

  $(this).addClass('tabAnchor__active');

  $('.tabArticle2').addClass('tabText__active');
  $('.tabArticle1').removeClass('tabText__active');
  $('.tabArticle3').removeClass('tabText__active');

} );

$('.tabAnchor3').on( 'click', function() {

  $('.tabAnchor').removeClass('tabAnchor__active');

  $(this).addClass('tabAnchor__active');

  $('.tabArticle3').addClass('tabText__active');
  $('.tabArticle2').removeClass('tabText__active');
  $('.tabArticle1').removeClass('tabText__active');

} );

// Form

var firstname = $('#firstname').attr('title');
var lastname = $('#lastname').attr('title');
var address = $('#address').attr('title');

var firstnameTooltip = ('<div class = "tooltip firstnameTooltip">' + firstname + '</div>');
var lastnameTooltip = ('<div class = "tooltip lastnameTooltip">' + lastname + '</div>');
var addressTooltip = ('<div class = "tooltip addressTooltip">' + address + '</div>');

var firstnameTooltipRemove = function() {
  $('.firstnameTooltip').remove();
};

var lastnameTooltipRemove = function() {
  $('.lastnameTooltip').remove();
};

var addressTooltipRemove = function() {
  $('.addressTooltip').remove();
};

var firstnameTooltipVisible = function() {
  $(this).removeAttr('title');
  if ( !$('div').is('.firstnameTooltip') ) {
      $('.formField1').append(firstnameTooltip);
      $('.firstnameTooltip').animate({
        opacity: 1
      }, 300);
  }
};

var firstnameTooltipHide = function() {
  $(this).attr('title', firstname);
  $('.firstnameTooltip').animate({
    opacity: 0
  }, 300, firstnameTooltipRemove);
};

var lastnameTooltipVisible = function() {
  $(this).removeAttr('title');
  if ( !$('div').is('.lastnameTooltip') ) {
    $('.formField2').append(lastnameTooltip);
    $('.lastnameTooltip').animate({
      opacity: 1
    }, 300);
  }
};

var lastnameTooltipHide = function() {
  $(this).attr('title', lastname);
  $('.lastnameTooltip').animate({
    opacity: 0
  }, 300, lastnameTooltipRemove);
};

var addressTooltipVisible = function() {
  $(this).removeAttr('title');
  if ( !$('div').is('.addressTooltip') ) {
    $('.formField3').append(addressTooltip);
    $('.addressTooltip').animate({
      opacity: 1
    }, 300);
  }
};

var addressTooltipHide = function() {
  $(this).attr('title', firstname);
  $('.addressTooltip').animate({
    opacity: 0
  }, 300, addressTooltipRemove);
};

$('#firstname').on({
    mouseover: firstnameTooltipVisible,
    mouseout: firstnameTooltipHide
  })
;

$('#lastname').on({
    mouseover: lastnameTooltipVisible,
    mouseout: lastnameTooltipHide
})
;

$('#address').on({
    mouseover: addressTooltipVisible,
    mouseout: addressTooltipHide
})
;

var tooltipVisible = function(event) {
  event.preventDefault();
  $('input').removeAttr('title');

  if ( !$('div').is('.firstnameTooltip') ) {
    $('.formField1').append(firstnameTooltip);
    $('.firstnameTooltip').animate({
      opacity: 1
    }, 300);
  }

  if ( !$('div').is('.lastnameTooltip') ) {
    $('.formField2').append(lastnameTooltip);
    $('.lastnameTooltip').animate({
      opacity: 1
    }, 300);
  }

  if ( !$('div').is('.addressTooltip') ) {
    $('.formField3').append(addressTooltip);
    $('.addressTooltip').animate({
      opacity: 1
    }, 300);
  }
};

$('.button').on({
  click: tooltipVisible
});


});