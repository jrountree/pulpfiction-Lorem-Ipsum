//var renderer = require("./renderer.js");
var large = largeParagraph;
var small = smallParagraph;
var sentence = sentence;
var userType = "";
var userNumber = "";
var type = "";
var selection = "";
var selectNum = "";
var resultText = "";
var target = document.getElementById('copyText');

//Submit button
$("#userSubmit").submit(function(event){
	event.preventDefault();
	//Button Switch
	$('.submitBtn').css('display','none');
	$('#clearAll').css('display','block');
	//Get type or types of paragraphs/sentences
	userType = $( "input:checked" ).val();
	//Get number provided by user on form submission 	
	userNumber = $('#usrInput').val();
	//Generate chosen type in chosen quantity into window
	//Verify number 
	if((userNumber < 1) || (userNumber === " ") || (isNaN(userNumber))) {
		//Error Message for no number entered
		resultText = "Please use an actual number (ie '1', '2', '3'...etc) higher than zero";
		target.innerHTML += resultText;
	} else {
		//Set User Selected Type
		if(userType == 'large' || userType == 'small' || userType == 'sentence') {
			if(userType == 'large') {
				type = largeParagraph;
			} else if(userType == 'small') {
				type = smallParagraph;
			} else {
				type = sentence;
			} 
		//Print To HTML inside textArea
		for (var i = 0; i < userNumber; i++){
			var paragraphBreak = '\n';
			resultText = selection + paragraphBreak + paragraphBreak;
			//Randomnly choose a quote inside the chosen type
			selectNum = Math.floor(Math.random() * type.length);
			selection = type[selectNum];
			//target.innerHTML += "STEP STEP STEP STEP" + i;
			target.innerHTML += resultText;
		}
		//Error for not selecting a size
		} else {
			resultText = "Please choose the size of text you want ('Large Paragraphs', 'Small Paragraphs', or 'Sentences')";
			target.innerHTML += resultText;
		}	
	} 
	//Check Console for working code
	console.log(selectNum);
	console.log(userNumber);
	console.log(selection);
	console.log(type);
});


//Clear button
$("#clearAll").click(function(event){
	event.preventDefault();
	//$('.results').val('');
	//$("#userSubmit").trigger('reset');
	$(this).css('display','none');
	$('.submitBtn').css('display','block');
	location.reload();

});


//::::::::::::::::::::::::: GENERAL SCRIPTS ::::::::::::::::::::::::::

//Change background on hover
$('.btn > p').mouseenter(function(){
	$('.results').css('background', '#d3d3d3');
});
$('.btn > p').mouseleave(function(){
	$('.results').css('background', '#fff');
});
