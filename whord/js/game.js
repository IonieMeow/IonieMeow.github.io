$(document).ready(function() {
	var pointsearned = 0;

  $("#q1").show();
  
  setInterval(function(){
  	$("#score").html(pointsearned);
  }, 1000);

  //var score = 0;
  
 // $("#loadq2").click(function() {
  //   $("#q1").hide();
  //  $("#q2").show();
  //   score++;
 // });

//gabocode

//QUESTION ONE
	$("#loadq2").click(function(){
	
	var q1 = document.getElementById("textfield").value.toLowerCase();

	 //This is what happens if you answer correctly 
	if (q1 === "wave") {
		  $(".tickcount").show();
		  alert("Correct!");
		  pointsearned += 10;
		  alert("Level 1 Completed!");
		  
		  $( "#q1" ).fadeOut("slow");
		  $( "#q2" ).fadeIn("slow");
		  $(".tickcount").hide();
	  }
  
	else
	  {
	  	alert("Oops!");
	  	pointsearned -= 5;
	  }

	});

//QUESTION TWO
 $("#loadq3").click(function(){
	
	var q2 = document.getElementById("textfield2").value.toLowerCase();
    
	 //This is what happens if you answer correctly 
	if (q2 === "bat") {
		 $(".tickcount").show();
		  alert("Awesome!");
		  pointsearned += 10;
		  alert("Level 2 Completed");
		 
		  $( "#q2" ).fadeOut("slow");
		  $( "#q3" ).fadeIn("slow");
		  $(".tickcount").hide();
	  }
  
	else
	  {
	  	alert("Try Again!");
	  	pointsearned -= 5;
	  }

	});

//QUESTION THREE
$("#loadq4").click(function(){
	
	var q3 = document.getElementById("textfield3").value.toLowerCase();

	 //This is what happens if you answer correctly 
	if (q3 === "train") {
		  $(".tickcount").show();
		  alert("Great!");
		  pointsearned += 10;
		  alert("Level 3 Completed");
		  
		  $( "#q3" ).fadeOut("slow");
		  $( "#q4" ).fadeIn("slow");
		  $(".tickcount").hide();
	  }
  
	else
	  {
	  	alert("Try Again!");
	  	pointsearned -= 5;
	  }

	});

//QUESTION FOUR
$("#loadq5").click(function(){
	
	var q4 = document.getElementById("textfield4").value.toLowerCase();

	 //This is what happens if you answer correctly 
	if (q4 === "watch") {
		  $(".tickcount").show();
		  alert("Correct!");
		  pointsearned += 10;
		  alert("Level 4 Completed");
		
		  $( "#q4" ).fadeOut("slow");
		  $( "#q5" ).fadeIn("slow");
		  $(".tickcount").hide();
	  }
  
	else
	  {
	  	alert("Incorrect!");
	  	pointsearned -= 5;
	  }

	});

//QUESTION FIVE
$("#loadq6").click(function(){
	
	var q5 = document.getElementById("textfield5").value.toLowerCase();

	 //This is what happens if you answer correctly 
	if (q5 === "plank") {
		  $(".tickcount").show();
		  alert("That's Right!");
		  pointsearned += 10;
		  alert("Level 5 Completed");
		 
		  $( "#q5" ).fadeOut("slow");
		  $( "#q6" ).fadeIn("slow");
		  $(".tickcount").hide();
	  }
  
	else
	  {
	  	alert("Wrong! Hint: 5 letters");
	  	pointsearned -= 5;
	  }

	});

//QUESTION SIX
$("#loadq7").click(function(){
	
	var q6 = document.getElementById("textfield6").value.toLowerCase();

	 //This is what happens if you answer correctly 
	if (q6 === "puzzle") {
		  $(".tickcount").show();
		  alert("Great!");
		  pointsearned += 10;
		  alert("Level 6 Completed");
		 
		  $( "#q6" ).fadeOut("slow");
		  $( "#q7" ).fadeIn("slow");
		  $(".tickcount").hide();
	  }
  
	else
	  {
	  	alert("Try Again!");
	  	pointsearned -= 5;
	  }

	});

//QUESTION SEVEN
$("#loadq8").click(function(){
	
	var q7 = document.getElementById("textfield7").value.toLowerCase();

	 //This is what happens if you answer correctly 
	if (q7 === "flake") {
		 $(".tickcount").show();
		  alert("Correct!");
		  pointsearned += 10;
		  alert("Level 7 Completed");
		 
		  $( "#q7" ).fadeOut("slow");
		  $( "#q8" ).fadeIn("slow");
		  $(".tickcount").hide();
	  }
  
	else
	  {
	  	alert("Wrong! Hint: 5 letters");
	  	pointsearned -= 5;
	  }

	});

//QUESTION EIGHT
$("#loadq9").click(function(){
	
	var q8 = document.getElementById("textfield8").value.toLowerCase();

	 //This is what happens if you answer correctly 
	if (q8 === "pollution") {
		$(".tickcount").show();  
		  alert("Hooray!");
		  pointsearned += 10;
		  alert("Level 8 Completed");
		 
		  $( "#q8" ).fadeOut("slow");
		  $( "#q9" ).fadeIn("slow");
		  $(".tickcount").hide();
	  }
  
	else
	  {
	  	alert("Hint: Starts with P");
	  	pointsearned -= 5;
	  }

	});

//QUESTION NINE
$("#loadq10").click(function(){
	
	var q9 = document.getElementById("textfield9").value.toLowerCase();

	 //This is what happens if you answer correctly 
	if (q9 === "leather") {
		  $(".tickcount").show();
		  alert("Correct!");
		  pointsearned += 10;
		  alert("Level 9 Completed");
		  
		  $( "#q9" ).fadeOut("slow");
		  $( "#q10" ).fadeIn("slow");
		  $(".tickcount").hide();
	  }
  
	else
	  {
	  	alert("Try Again! Hint: Starts with L");
	  	pointsearned -= 5;
	  }

	});

//QUESTION TEN
$("#loadq11").click(function(){
	
	var q10 = document.getElementById("textfield10").value.toLowerCase();

	 //This is what happens if you answer correctly 
	if (q10 === "temperature") {
		  $(".tickcount").show();
		  alert("Correct!");
		  pointsearned += 10;
		  alert("Level 10 Completed");
		  
		  $( "#q10" ).fadeOut("slow");
		  $( "#q11" ).fadeIn("slow");
		  $(".tickcount").hide();
	  }
  
	else
	  {
	  	alert("Try Again!");
	  	pointsearned -= 5;
	  }

	  alert("You have completed the game! Your total score is" + " "+ pointsearned);
	  window.location.href = "gameover.html";



	});

		  

});