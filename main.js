var $display = $('input');
var isThereDot = false;
var needNewNum = true;
var firstMemory = 0;
var secondMemory = 0;
var operator = "";

$('.numbtn').on('click', function(){
	if(needNewNum){
		$display.val('');
	}

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

$('.operbtn').on('click', function(){
	firstMemory = $display.val();
	operator = $(this).text();
	needNewNum = true;
	console.log('firstMemory', firstMemory);
	console.log('operator', operator);
});

$('.equal').on('click', function(){
	secondMemory = $display.val();
	if(operator === "+"){
		$display.val(Number(firstMemory) + Number(secondMemory));
	} else if(operator === "-"){
		$display.val(Number(firstMemory) - Number(secondMemory));
	} else if(operator === "*"){
		$display.val(Number(firstMemory) * Number(secondMemory));
	} else if(operator === "/"){
		if(secondMemory === "0"){
			$display.val('Error');
		} else {
			$display.val(Number(firstMemory) / Number(secondMemory));
		}	
	}
	needNewNum = true;

	
});
