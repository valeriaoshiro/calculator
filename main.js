
//make it keyboard friendly
//need %
//chain operators


var $display = $('input');
var isThereDot = false;
var needNewNum = true;
var firstMemory = 0;
var secondMemory = 0;
var operator = "";

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


/* ---------------- Event Listeners ---------------- */

$('.numbtn').on('click', function(){
	//do you need to start a new number? if so, clear the display
	if(needNewNum){
		showOnDisplay('');
	}
	showOnDisplay($display.val() + $(this).text());
	needNewNum = false;
});

$('.dot').on('click', function(){
	if(needNewNum){
		showOnDisplay('0');
	}
	//check if there is already a dot on the display
	if(isThereDot === false){
		showOnDisplay($display.val() + '.');
		isThereDot = true;
	}
	needNewNum = false;
});

//when an operator is clicked, it puts the number in memory 
//to wait for the second number
$('.operbtn').on('click', function(){
	firstMemory = Number($display.val());
	operator = $(this).text();
	needNewNum = true;
	isThereDot = false;
});

//when equal is clicked, it does the operatrion and saves the result in
//memory1 and erases memory2. 
//Sometimes people use the last result to do more math
$('.equal').on('click', function(){
	secondMemory = Number($display.val());
	console.log($display.val());
	if(operator === "+"){
		firstMemory = add(firstMemory, secondMemory);
	} else if(operator === "-"){
		firstMemory = substract(firstMemory, secondMemory);
	} else if(operator === "*"){
		firstMemory = multiply(firstMemory, secondMemory);
	} else if(operator === "/"){
		firstMemory = divide(firstMemory, secondMemory);	
	}
	showOnDisplay(firstMemory);
	secondMemory = 0;
	needNewNum = true;
	isThereDot = false;
});

//AC, clears memory1 and memory2
$('.ac').on('click', function(){
	firstMemory = 0;
	secondMemory = 0;
	showOnDisplay('');
	needNewNum = true;
});

//CE, clears last entry, keeps other ones
$('.ce').on('click', function(){
	$display.val('');
	needNewNum = true;
});