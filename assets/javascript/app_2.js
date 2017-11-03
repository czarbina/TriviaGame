
$(document).ready(function(){

	var countdownTimer = 5;    
    var intervalId;

    function stop() {
    	clearInterval(intervalId);
    }

	$("#startButton").on("click", start);

   	function start() {
   		$("#mainSection").css("display","block");
   		$("#start").hide();

      	intervalId = setInterval(decrement, 1000);
    
    	function decrement() {
	    	countdownTimer--;
	    	$("span").text(" " + countdownTimer); 
	    	if (countdownTimer === 0) {
	    	stop();
	    	$("#results").css("display","block")
			$("#mainSection").hide();
    		}
    	}	
	}	

	$("#doneBtn").on("click", function(){
		stop();
        $("#results").css("display","block")
		$("#mainSection").hide();

	});
});	

