// Experience has taught me to always have this... 
// So until I fully comprehend why I will now always have my logic in a ready function.
$( document ).ready(function() {
    console.log( "ready!" );

// Something to hold our countdown timer. May want to eventually "convert" s to min.
    var countdownTimer = 300;
  
 // Will store a value for decrement value that will be used in a start funciton on a click
 // method.   
    var intervalId;

 // Creating a button click event that will start the game, and begin the countdownTimers.
	$("button").on("click", start); 
	
	function start() {
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
    	countdownTimer--;
    	console.log(countdownTimer);
    }
	
	

});