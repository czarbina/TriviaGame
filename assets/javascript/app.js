// Just... always.
$(document).ready(function(){

// Some global variables and functions that I can access and call
// when necessary.
	var countdownTimer = 60;    
    var intervalId;

// Stops the decrementing of my timer.
    function stop() {
    	clearInterval(intervalId);
    }

// Made these two variables global so I can access them when I 
// "grade" my quiz.
    var totalQs = 5;
    var correctAs = 0;

// Apparently radios are treated as arrays in a way when 
// multiple radios fall into a particular name group. So
// I had to check each individual question for the "correct"
// answer and add each one to the correctAs var that I stored
// globally. I believe the "break" causes it treat each radio
// q group separately instead of running them all at once.
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

// I don't think this if/else statement is necessary. But it helped me
// figure out if I was on the right track.            
    	if(correctAs == totalQs) {
    		console.log("Nailed it.");
    	}

    	else {
    		console.log("You got " + correctAs + " out of " + totalQs + " correct!");		
    	}		

    }	

// I run my start function after clicking the button to being the test.
	$("#startButton").on("click", start);

// This function does several things. It hides the #start div 
// to reveal the form and it's questions. It also begins the timer 
   	function start() {
   		$("#mainSection").css("display","block");
   		$("#start").hide();

      	intervalId = setInterval(decrement, 1000);
    
// As a part of the start function, the time interval is decreasing.
// Once the timer hit's zero, we call the stop function (to prevent the timer
// from going into the negatives) and the grade function which tallies up
// the score. We also hide the form to reveal said score.    
    	function decrement() {
	    	countdownTimer--;
	    	$("span").text(" " + countdownTimer); 
	    	if (countdownTimer === 0) {
	    	stop();
	    	grade();
	    	$("#results").css("display","block").text(correctAs);
			$("#mainSection").hide();
    		}
    	}	
	}		

// If the user finishes the quiz before time is up, the clicking of the doneBtn
// will trigger a funciton that will also stop the timer, tabulate the results, 
// and display the score.
	$("#doneBtn").on("click", function(){
		stop();
		grade();
        $("#results").css("display","block").text(correctAs);
		$("#mainSection").hide();

	});

});	





