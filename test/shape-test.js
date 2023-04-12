const test = require("../src/square.js");

const testSquare = function() {
  test.assertEquality("****\n****\n****\n****\n", square(4), 'should give square of given length');
}

testSquare();
