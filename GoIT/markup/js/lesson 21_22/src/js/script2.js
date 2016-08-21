'use strict';

$(function(){

let test = [
  {
    title: 'What is HTML?',
    points: 1,
      answers: [{
      answer: 'Hypertext Markup Language',
      right: true
    },
    {
      answer: 'Objective Programming Language',
      right: false
    },
    {
      answer: 'How To Make Landingpage',
      right: false
    }
  ]},
  {
    title: 'What is CSS?',
    points: 1,
    answers: [{
      answer: 'Censor Sold Solar System',
      right: false
    },
    {
      answer: 'Central Sugar Station',
      right: false
    },
    {
      answer: 'Cascading Style Sheets',
      right: true
    }]
  },
  {
    title: 'What is JavaScript?',
    points: 1,
    answers: [{
      answer: 'Analog of Java with more functions',
      right: false
    },
    {
      answer: 'High-level interpreted programming language',
      right: true
    },
    {
      answer: 'Language of Javas in Star Wars',
      right: false
    }]
  }
];

let preparedTest = JSON.stringify( test );
let localTest = localStorage.setItem( "test", preparedTest );

let recievedTest = localStorage.getItem( "test" );
let actualTest = JSON.parse( recievedTest );

let $html = $( '#template' ).html();
let tmpl = _.template( $html );

let content = tmpl({
  data: actualTest
});

let $form = $( '#test' );
$form.prepend( content );

let $inputs = $('input:checkbox');

$inputs.on( 'click', disableCheckboxes);

function disableCheckboxes() {
  $(this).parent().siblings().children().each(function(){
    if ( $(this).attr('disabled') ) {
      $(this).attr('disabled', false);
    } else {
      $(this).attr('disabled', true);
    }
  });
}

let checkResults = function(e) {
  e.preventDefault();

  let rightAnswers = [];
  let givenAnswers = [];
  let answered = 0;
  let questionsQuantity = 0;
  let testOK= false;

  let getRightAnswers = function() {
    for (let i = 0; i < actualTest.length; i++ ) {
      let testAnswers = actualTest[i].answers;
      for (let j = 0; j < testAnswers.length; j++) {
        let currentAnswer = actualTest[i].answers[j].right;
        rightAnswers.push(currentAnswer);
      }
    }
    return rightAnswers;
  };

  let getGivenAnswers = function() {
    $inputs.each(function () {
      if ( $(this).prop('checked') ) {
        givenAnswers.push(true);
      } else {
        givenAnswers.push(false);
      }
    });
    return givenAnswers;
  };

  let check = function () {
    for (let i = 0; i < rightAnswers.length; i++) {
      if ( rightAnswers[i] === true ) {
        if ( rightAnswers[i] === givenAnswers[i] ) {
          answered++;
        }
      }
    }
    return answered;
  };

  let sumQuestions = function () {
    for (let i = 0; i < actualTest.length; i++) {
      questionsQuantity++;
    }
    return questionsQuantity;
  };

  let testPassed = function () {
    let passed = answered /questionsQuantity;

    if ( passed > 0.65 ) {
      testOK = true;
    }
    return testOK;
  };

  let showModal = function () {
    let $body = $( 'body' );
    let message;

    if ( testOK ){
      message = 'You passed the test!';
    } else {
      message = 'You didn\'t pass the test!';
    }

    let modal = (`<div class="mymodal"><div class="mymodal-inner">
      <h1 class="text-center">${message}</h1>
      <h1 class="text-center">Right is ${answered}, from ${questionsQuantity}</h1>
      <a class="center-block btn btn-primary" id="exit">Exit</a>
      </div></div>`);

    $body.append(modal);

    let $exit = $( '#exit' );

    let reset = function() {
      $( 'input:checkbox' ).prop( 'checked', false ).prop( 'disabled', false );
      let $modal = $( '.mymodal' );
      $modal.remove();

      return false;
    };

    $exit.on( 'click', reset );
  };

  getRightAnswers();
  getGivenAnswers();
  check();
  sumQuestions();
  testPassed();
  showModal();
};

let $checkResults = $( '#check-results' );
$checkResults.on( 'click', checkResults );

});
