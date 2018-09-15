document.getElementById('tally-count').addEventListener('click', addTallyCount);
document.getElementById('tally-reset').addEventListener('click', resetTallyCount);

function getTallyNumber() {
	numbers = document.getElementsByClassName('number-block');
	// lastDigit = document.getElementsByClassName('number-block-last');
	// tallyNumber = parseInt(lastDigit[0].textContent);
	tallyNumber=0;
	exp=0
	for (var i=numbers.length-1; i>=0; i--) {
		tallyNumber = tallyNumber + parseInt(numbers[i].textContent)*(10**exp);
		exp=exp+1;
	}
	return tallyNumber;
}

function getTallyElements() {
	var elements = document.getElementsByClassName('number-block');
	var revElements = elements;
	for (var i=elements.length-1; i>=0; i--) {
		revElements[elements.length-1-i] = elements[i];
	}
	return revElements;
}

function addTallyCount(){
	tallyNumber = getTallyNumber();
	tallyElements = getTallyElements();
	tallyNumber++;
	var digit=0;
	for (var i=tallyElements.length-1; i>=0; i--) {
		digit=tallyNumber%10;
	    tallyNumber = parseInt(tallyNumber/10);
	    if (parseInt(tallyElements[i])!=digit) {
	        tallyElements[i].textContent = digit.toString();
	    }
	}
}

function resetTallyCount() {
	tallyElements = getTallyElements();
	number=0;
	for (var i=tallyElements.length-1; i>=0; i--) {
		if (parseInt(tallyElements[i])!=0) {	// can change this line to RESET at a value other than 0
			tallyElements[i].textContent = number.toString();
		}
	}
}