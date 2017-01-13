
//CE, clears last entry, keeps other ones
//need %


var $display = $('input');
var isThereDot = false;
var needNewNum = true;
var firstMemory = 0;
var secondMemory = 0;
var operator = "";

$('.numbtn').on('click', function(){
	//do you need to start a new number? if so, clear the display
	if(needNewNum){
		$display.val('');
	}

	//check if there is already a dot on the display
	if($(this).text() === "."){
		if(isThereDot === false){
			$display.val($display.val() + $(this).text());
			isThereDot = true;
		}
	}
	else {
		$display.val($display.val() + $(this).text());
	}

	needNewNum = false;
});

//when an operator is clicked, it puts the number in memory 
//to wait for the second number
$('.operbtn').on('click', function(){
	firstMemory = $display.val();
	operator = $(this).text();
	needNewNum = true;
});

//when equal is clicked, it does the operatrion and saves the result in
//memory1 and erases memory2. 
//Sometimes people use the last result to do more math
$('.equal').on('click', function(){
	secondMemory = $display.val();
	if(operator === "+"){
		firstMemory = (Number(firstMemory) + Number(secondMemory)).toString();
	} else if(operator === "-"){
		firstMemory = (Number(firstMemory) - Number(secondMemory)).toString();
	} else if(operator === "*"){
		firstMemory = (Number(firstMemory) * Number(secondMemory)).toString();
	} else if(operator === "/"){
		if(secondMemory === "0"){
			$display.val('Error');
		} else {
			firstMemory = (Number(firstMemory) / Number(secondMemory)).toString();
		}	
	}
	$display.val(firstMemory);
	secondMemory = 0;
	needNewNum = true;
});

//AC, clears memory1 and memory2
$('.ac').on('click', function(){
	firstMemory = 0;
	secondMemory = 0;
	$display.val('');
	needNewNum = true;
});
