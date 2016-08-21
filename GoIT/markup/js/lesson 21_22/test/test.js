var chai = require('chai');
var pow = require('../build/js/script');

describe("pow testing", function() {

  describe("возводит x в степень n, n > 0 -- ", function() {

    function testPowMore(x) {
      var expected = x * x * x * x;
      it("при возведении " + x + " в степень 3 результат: " + expected, function() {
        chai.assert.equal(pow(x, 4), expected);
      });
    }

    for (var x = 1; x <= 5; x++) {
      testPowMore(x);
    }
  });

  describe("возводит x в степень n, n = 0 -- ", function() {

    function testPowZero(x) {
      var expected = 1;
      it("при возведении " + x + " в степень 0 результат: " + expected, function() {
        chai.assert.equal(pow(x, 0), expected);
      });
    }

    for (var x = 1; x <= 5; x++) {
      testPowZero(x);
    }
  });

  describe("возводит x в степень n, n < 0 -- ", function() {

    function testPowLess(x) {
      var expected = 1 / ( x * x *x );
      it("при возведении " + x + " в степень -3 результат: " + expected, function() {
        chai.assert.equal(pow(x, -3), expected);
      });
    }

    for (var x = 1; x <= 5; x++) {
      testPowLess(x);
    }
  });

  describe("выводит сообщение об ошибке, если n или x не число -- ", function() {

    function testPowNaNx(x) {
      var expected = x + " is not a number!";
      it("при возведении " + x + " в степень -3 результат: " + expected, function() {
        chai.assert.equal(pow(x, -3), expected);
      });
    }

    function testPowNaNn(n) {
      var expected = n + " is not a number!";
      it("при возведении 5 в степень " + n + " результат: " + expected, function() {
        chai.assert.equal(pow(5, n), expected);
      });
    }

    testPowNaNx('Some string');
    testPowNaNn(null);
  });

    describe("возводит x в степень n, x и n не заданы -- ", function() {

      function testPowWoArgs() {
        var expected = 1;
        it("при возведении x в степень n результат: " + expected, function() {
          chai.assert.equal(pow(), expected);
        });
      }

      testPowWoArgs();
  });
});
