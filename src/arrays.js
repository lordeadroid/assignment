const isEven = function (number) {
  if (number % 2 === 0) {
    return true;
  }

  return false;
}

const isOdd = function (number) {
  return !(isEven(number));
}

const selectEvenNumbers = function(numbers) {
	const evenNumbers = [];
	for(const number of numbers) {
		if (isEven(number)) {
			evenNumbers.push(number);
		}
	}
	return evenNumbers;
}

const selectOddNumbers = function(numbers) {
	const evenNumbers = [];
	for(const number of numbers) {
		if (isOdd(number)) {
			evenNumbers.push(number);
		}
	}
	return evenNumbers;
}

exports.selectOddNumbers = selectOddNumbers;
exports.selectEvenNumbers = selectEvenNumbers;
