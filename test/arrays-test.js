
const testSelectEvenNumbers = function() {
	test.assertListsEqual([2, 4, 6], selectEvenNumbers([1,2,3,4,5,6,7]), "Select even numbers");
}

testSelectEvenNumbers();
