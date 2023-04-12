const shape = require("../src/square.js");
const test = require("../lib/testing.js");

const testSquare = function() {
  test.assertEquality("****\n****\n****\n****\n", shape.square(4), 'should give square of given length');
}

testSquare();
