const add = function(a, b) {
	return a + b;
}

const multiply = function(a, b) {
	return a * b;
}

const subtract = function(a, b) {
	return a - b;
}

const divide = function(a, b) {
	return a % b;
}

const isEven = function(a) {
	return a % 2 == 0;
}

const isOdd = function(a) {
	return !isEven(a);
}

exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.isEven = isEven;
exports.isOdd = isOdd;
