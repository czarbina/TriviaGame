
$(document).ready(function(){

	var countdownTimer = 60;    
    var intervalId;

	$("#startButton").on("click", function(){
   		$("#mainSection").css("display","block");
   		$("#start").hide();

   		function start() {
      		intervalId = setInterval(decrement, 1000);
    
    		function decrement() {
	    		countdownTimer--;
	    		$("span").text(" " + countdownTimer); 
	    		if (countdownTimer === 0) {
	    		stop();
    			}
    		}	
		}
	});	

	$("#doneBtn").on("click", function(){
		$("#results").css("display","block")
		$("#mainSection").hide();
	});

});