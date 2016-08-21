'use strict';

$(function () {

  var test = [{
    title: 'What is HTML?',
    points: 1,
    answers: [{
      answer: 'Hypertext Markup Language',
      right: true
    }, {
      answer: 'Objective Programming Language',
      right: false
    }, {
      answer: 'How To Make Landingpage',
      right: false
    }] }, {
    title: 'What is CSS?',
    points: 1,
    answers: [{
      answer: 'Censor Sold Solar System',
      right: false
    }, {
      answer: 'Central Sugar Station',
      right: false
    }, {
      answer: 'Cascading Style Sheets',
      right: true
    }]
  }, {
    title: 'What is JavaScript?',
    points: 1,
    answers: [{
      answer: 'Analog of Java with more functions',
      right: false
    }, {
      answer: 'High-level interpreted programming language',
      right: true
    }, {
      answer: 'Language of Javas in Star Wars',
      right: false
    }]
  }];

  var preparedTest = JSON.stringify(test);
  var localTest = localStorage.setItem("test", preparedTest);

  var recievedTest = localStorage.getItem("test");
  var actualTest = JSON.parse(recievedTest);

  var $html = $('#template').html();
  var tmpl = _.template($html);

  var content = tmpl({
    data: actualTest
  });

  var $form = $('#test');
  $form.prepend(content);

  var $inputs = $('input:checkbox');

  $inputs.on('click', disableCheckboxes);

  function disableCheckboxes() {
    $(this).parent().siblings().children().each(function () {
      if ($(this).attr('disabled')) {
        $(this).attr('disabled', false);
      } else {
        $(this).attr('disabled', true);
      }
    });
  }

  var checkResults = function checkResults(e) {
    e.preventDefault();

    var rightAnswers = [];
    var givenAnswers = [];
    var answered = 0;
    var questionsQuantity = 0;
    var testOK = false;

    var getRightAnswers = function getRightAnswers() {
      for (var i = 0; i < actualTest.length; i++) {
        var testAnswers = actualTest[i].answers;
        for (var j = 0; j < testAnswers.length; j++) {
          var currentAnswer = actualTest[i].answers[j].right;
          rightAnswers.push(currentAnswer);
        }
      }
      return rightAnswers;
    };

    var getGivenAnswers = function getGivenAnswers() {
      $inputs.each(function () {
        if ($(this).prop('checked')) {
          givenAnswers.push(true);
        } else {
          givenAnswers.push(false);
        }
      });
      return givenAnswers;
    };

    var check = function check() {
      for (var i = 0; i < rightAnswers.length; i++) {
        if (rightAnswers[i] === true) {
          if (rightAnswers[i] === givenAnswers[i]) {
            answered++;
          }
        }
      }
      return answered;
    };

    var sumQuestions = function sumQuestions() {
      for (var i = 0; i < actualTest.length; i++) {
        questionsQuantity++;
      }
      return questionsQuantity;
    };

    var testPassed = function testPassed() {
      var passed = answered / questionsQuantity;

      if (passed > 0.65) {
        testOK = true;
      }
      return testOK;
    };

    var showModal = function showModal() {
      var $body = $('body');
      var message = void 0;

      if (testOK) {
        message = 'You passed the test!';
      } else {
        message = 'You didn\'t pass the test!';
      }

      var modal = '<div class="mymodal"><div class="mymodal-inner">\n      <h1 class="text-center">' + message + '</h1>\n      <h1 class="text-center">Right is ' + answered + ', from ' + questionsQuantity + '</h1>\n      <a class="center-block btn btn-primary" id="exit">Exit</a>\n      </div></div>';

      $body.append(modal);

      var $exit = $('#exit');

      var reset = function reset() {
        $('input:checkbox').prop('checked', false).prop('disabled', false);
        var $modal = $('.mymodal');
        $modal.remove();

        return false;
      };

      $exit.on('click', reset);
    };

    getRightAnswers();
    getGivenAnswers();
    check();
    sumQuestions();
    testPassed();
    showModal();
  };

  var $checkResults = $('#check-results');
  $checkResults.on('click', checkResults);
});