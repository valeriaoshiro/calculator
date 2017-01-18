//make it keyboard friendly

var $display = $('input');
var isThereDot = false;
var needNewNum = true;
var firstMemory = 0;
var secondMemory = 0;
var operator = "";
var chain = false;
var numEntered = false;

function add(firstNum, secondNum){
	return firstNum + secondNum;
}

function substract(firstNum, secondNum){
	return firstNum - secondNum;
}

function multiply(firstNum, secondNum){
	return firstNum * secondNum;
}

function divide(firstNum, secondNum){
	return (secondNum === 0) ? 'Error' : (firstNum / secondNum);
}

function showOnDisplay(arg){
	if(isNaN(arg)){
		$display.val('Error');
	}
	else {
		$display.val(arg);
	}
}

function numClicked(e){
	//do you need to start a new number? if so, clear the display
	if(needNewNum){
		showOnDisplay('');
	}
	// if(e.type === 'keypress'){
	// 	showOnDisplay($display.val() + String.fromCharCode(e.which));
	// } else {
		showOnDisplay($display.val() + $(this).text());
		numEntered = true;
	// }
	
	needNewNum = false;
}

function dotClicked(){
	if(needNewNum){
		showOnDisplay('0');
	}
	//check if there is already a dot on the display
	if(isThereDot === false){
		showOnDisplay($display.val() + '.');
		isThereDot = true;
	}
	numEntered = true;
	needNewNum = false;
}

//when an operator is clicked, it puts the number in memory 
//to wait for the second number
//chain variable helps to determine if you are doing math with more than 2 numbers
function operClicked(){
	if((chain === false)){
		firstMemory = Number($display.val());
	} else if(numEntered){
		if(operator === "+"){
			firstMemory = add(firstMemory, Number($display.val()));
		} else if(operator === "-"){
			firstMemory = substract(firstMemory, Number($display.val()));
		} else if(operator === "×"){
			firstMemory = multiply(firstMemory, Number($display.val()));
		} else if(operator === "÷"){
			firstMemory = divide(firstMemory, Number($display.val()));	
		}
	} 

	operator = $(this).text();
	console.log(operator);
	chain = true;
	needNewNum = true;
	isThereDot = false;
	numEntered = false;
}

//when equal is clicked, it does the operation and saves the result in
//memory1 and erases memory2. 
//Sometimes people use the last result to do more math
function equalClicked(){
	secondMemory = Number($display.val());
	if(operator === "+"){
		firstMemory = add(firstMemory, secondMemory);
	} else if(operator === "-"){
		firstMemory = substract(firstMemory, secondMemory);
	} else if(operator === "×"){
		firstMemory = multiply(firstMemory, secondMemory);
	} else if(operator === "÷"){
		firstMemory = divide(firstMemory, secondMemory);	
	}
	showOnDisplay(firstMemory);
	secondMemory = 0;
	needNewNum = true;
	isThereDot = false;
	chain = false;
	numEntered = false;
}

//AC, clears memory1 and memory2
function acClicked(){
	firstMemory = 0;
	secondMemory = 0;
	showOnDisplay('');
	needNewNum = true;
	chain = false;
	numEntered = false;
}

//CE, clears last entry, keeps other ones
function ceClicked(){
	$display.val('');
	needNewNum = true;
	numEntered = false;
}



/* ---------------- Event Listeners ---------------- */

$('.numbtn').on('click',  numClicked);

$('.dot').on('click', dotClicked);

$('.operbtn').on('click', operClicked);

$('.equal').on('click', equalClicked);

$('.ac').on('click', acClicked);

$('.ce').on('click', ceClicked);

// $(document).keypress(function(e){
// 	console.log(e);
// 	switch(e.which) {
// 		case 48:
// 		case 49:
// 		case 50:
// 		case 51:
// 		case 52:
// 		case 53:
// 		case 54:
// 		case 55:
// 		case 56:
// 		case 57:
// 			numClicked(e);
// 			break;
// 		case 190:	
// 			dotClicked();
// 			break;

// 	}

// });