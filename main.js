$(document).on('ready', function() {
  
});


//Question 1: Write a function firstReverse that takes a single string parameter and returns the string in reverse order.
function firstReverse (myStr) {
	var original = myStr.split('');
	var reversed = [];
	var j = 0;
	for (var i = original.length - 1; i > -1; i--) {
		reversed[j] = original[i];
		j++;
	}
	var returned = reversed.join('');
	return returned;
}

console.log(firstReverse('This is a string'));

// Question 2: Write a function swapCase that takes a single string parameter and swaps the case of each character. For example: if a string is "Hello World" the output should be "hELLO wORLD". Let numbers and symbols stay the way they are.

function swapCase (caseswap) {
	var caseswapped = "";
	for (var i = 0; i < caseswap.length; i++) {
		if (caseswap[i] === caseswap[i].toUpperCase()){
			caseswapped += caseswap[i].toLowerCase();
		}
		else {
			caseswapped += caseswap[i].toUpperCase();
		}
	}
	return caseswapped;
}

console.log(swapCase('This is a Test String'));