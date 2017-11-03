
$(document).ready(function(){

	var countdownTimer = 60;    
    var intervalId;

    function stop() {
    	clearInterval(intervalId);
    }

    var totalQs = 5;
    var correctAs = 0;

    function grade() {
    	var i;

    	var a1 = document.getElementsByName("q1");
    		for (i = 0; i < a1.length; i++) {
    			if (a1[i].checked) {
    				if(a1[i].value == "1") {
    					correctAs++;
    					break;
    				}
    			}
    		}

    	var a2 = document.getElementsByName("q2");
    		for (i = 0; i < a2.length; i++) {
    			if (a2[i].checked) {
    				if(a2[i].value == "2") {
    					correctAs++;
    					break;
    				}
    			}
    		}
    		
    	var a3 = document.getElementsByName("q3");
    		for (i = 0; i < a3.length; i++) {
    			if (a3[i].checked) {
    				if(a3[i].value == "3") {
    					correctAs++;
    					break;
    				}
    			}
    		}
    	var a4 = document.getElementsByName("q4");
    		for (i = 0; i < a4.length; i++) {
    			if (a4[i].checked) {
    				if(a4[i].value == "4") {
    					correctAs++;
    					break;
    				}
    			}
    		}

    	var a5 = document.getElementsByName("q5");
    		for (i = 0; i < a5.length; i++) {
    			if (a5[i].checked) {
    				if(a5[i].value == "1") {
    					correctAs++;
    					break;
    				}
    			}
    		}	
    	if(correctAs == totalQs) {
    		console.log("Nailed it.");
    	}

    	else {
    		console.log("You got " + correctAs + " out of " + totalQs + " correct!");		
    	}		

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
	    	grade();
	    	$("#results").css("display","block")
			$("#mainSection").hide();
    		}
    	}	
	}		

	$("#doneBtn").on("click", function(){
		stop();
		grade();
        $("#results").css("display","block").text(correctAs);
		$("#mainSection").hide();

	});

});	





