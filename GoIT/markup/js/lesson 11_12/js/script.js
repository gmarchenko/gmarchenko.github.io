$(function(){

  var html = $( '#template' ).html();
  var users = [
    {
      userName: 'German Marchenko',
      userIcon: 'user01.jpg',
      userPosition: 'frontend researcher',
      userDescription: 'I am GoIT student learning JS',
      userTel: '+380996291732',
      mealPic1: 'image01.jpg',
      mealPic2: 'image02.jpg',
      mealPic3: 'image03.jpg',
      mealPic4: 'image04.jpg',
      mealPic5: 'image05.jpg'
    },
    {
      userName: 'Markiz',
      userIcon: 'user02.jpg',
      userPosition: 'cat',
      userDescription: 'I like crackers',
      userTel: '+380672174210',
      mealPic1: 'image11.jpg',
      mealPic2: 'image12.jpg',
      mealPic3: 'image13.jpg',
      mealPic4: 'image14.jpg',
      mealPic5: 'image15.jpg'
    }
  ];

  i = 0;

  var content = tmpl( html, {
    data: users[i]
  });

  var $body = $( 'body' );
  $body.append( content );

  $body.on( 'click', '.user-change__1', function(e){
    e.preventDefault();
    i = 0;
    content = tmpl( html, {
      data: users[i]
    });
    $(' .wrapper ').remove();
    $body.append( content );
    currentLeftValue = 0;
    // return i;
  });

  $body.on( 'click', '.user-change__2', function(e){
    e.preventDefault();
    i = 1;
    content = tmpl( html, {
      data: users[i]
    });
    $(' .wrapper ').remove();
    $body.append( content );
    currentLeftValue = 0;
    // return i;
  });

  console.log('i= ',i);

  // var leftUIEl = $( '.carousel-arrow-left' );
  // var rightUIEl = $( '.carousel-arrow-right' );
  var elementsList = $( '.carousel-list' );

  var pixelsOffset = 225;
  var currentLeftValue = 0;
  var elementsCount = elementsList.find('li').length;
  console.log( 'elCount' + elementsCount );
  var minimumOffset = - ( ( elementsCount - 3 ) * pixelsOffset );
  console.log( 'minOS=' + minimumOffset );
  var maximumOffset = 0;

  $body.on( 'click', '.carousel-arrow-left', function(e) {
      e.preventDefault();
      if ( currentLeftValue != maximumOffset ) {
          currentLeftValue += 225;
          $( '.carousel-list' ).animate({ left : currentLeftValue + "px"}, 500);
      }
  });

  $body.on( 'click', '.carousel-arrow-right', function(e) {
      e.preventDefault();
      if ( currentLeftValue != minimumOffset ) {
          currentLeftValue -= 225;
          $( '.carousel-list' ).animate( { left : currentLeftValue + "px"}, 500 );
      }
  });

});
