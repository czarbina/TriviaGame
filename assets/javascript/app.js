// Experience has taught me to always have this... 
// So until I fully comprehend why I will now always have my logic in a ready function.
$( document ).ready(function() {
    console.log( "ready!" );

// Something to hold our countdown timer. May want to eventually "convert" s to min.
    var countdownTimer = 60;    
    var intervalId;
    var userAnswers = [];

        $(".quiz").each(function() {

            var questionID = $(this).attr("id");
            var answer = $("input[name='choice']:checked", $(this)).val();

            if (answer !==undefined) {
                userAnswers.push({
                    question: questionID,
                    answer: answer
                });
            }
        });  

$("#startButton").on("click", start); 

    function start() {
      intervalId = setInterval(decrement, 1000);
    
    function decrement() {
    	countdownTimer--;
    	$("span").text(" " + countdownTimer); 
    	if (countdownTimer === 0) {
    		stop();
    	// Find way to display correct answers.
    	// Hide questions and countdown timer
    	}
    }
    // $.each($("input[name='choice']:checked"), function(){
        
    // }
    
$("#doneButton").on("click", stop);

    function stop() {
    	clearInterval(intervalId);
        
     }     
        
console.log(userAnswers);
console.log("You stopped the timer!");
};
});
    


    	
	
	// if (countdownTimer===0 || ) {}
	
