$(document).ready(function() {

	var wins = 0;
	var losses = 0;
	var totalScore = 0; 

// * There will be four crystals displayed as buttons on the page.

 //   * The player will be shown a random number at the start of the game.
 // * The random number shown at the start of the game should be between 19 - 120.
 
	 var randomNumber = Math.floor(Math.random() * 102) + 19;
	 $("#random-number").text(randomNumber);

 //   * When the player clicks on a crystal, 
 // it will add a specific amount of points to the player's total score. 
 // * Each crystal should have a random hidden value between 1 - 12.
 	var crystalRandom1 = Math.floor(Math.random() * 12) + 1;
 	var crystalRandom2 = Math.floor(Math.random() * 12) + 1;
 	var crystalRandom3 = Math.floor(Math.random() * 12) + 1;
 	var crystalRandom4 = Math.floor(Math.random() * 12) + 1;

 //     * Your game will hide this amount until the player clicks a crystal.
 //     * When they do click one, update the player's score counter.

 	$("#button-1").on("click", function() {
 		totalScore = totalScore + crystalRandom1;
 		if (totalScore === randomNumber) {
 			$("#result").text(totalScore);
 			win();
 		} else if (totalScore > randomNumber) {
 			$("#result").text(totalScore);
			lose();
 		} else if (totalScore < randomNumber) {
 			$("#result").text(totalScore);
 		}
 	});


 	$("#button-2").on("click", function() {
 		totalScore = totalScore + crystalRandom2;
 		if (totalScore === randomNumber) {
 			$("#result").text(totalScore);
 			win();
 		} else if (totalScore > randomNumber) {
 			$("#result").text(totalScore);
			lose();
 		} else if (totalScore < randomNumber) {
 			$("#result").text(totalScore);
 		}
 	});

 	$("#button-3").on("click", function() {
 		totalScore = totalScore + crystalRandom3;
 		if (totalScore === randomNumber) {
 			$("#result").text(totalScore);
 			win();
 		} else if (totalScore > randomNumber) {
 			$("#result").text(totalScore);
			lose();
 		} else if (totalScore < randomNumber) {
 			$("#result").text(totalScore);
 		}
 	});

 	$("#button-4").on("click", function() {
 		totalScore = totalScore + crystalRandom4;
 		if (totalScore === randomNumber) {
 			$("#result").text(totalScore);
 			win();
 		} else if (totalScore > randomNumber) {
 			$("#result").text(totalScore);
			lose();
 		} else if (totalScore < randomNumber) {
 			$("#result").text(totalScore);
 		}
 	});


 //   * The player wins if their total score matches the random number from the beginning of the game.
// 

 //   * The player loses if their score goes above the random number. - done

 //   * The game restarts whenever the player wins or loses. - done
	 function reset() {
	 	totalScore = 0;
	 	randomNumber = Math.floor(Math.random() * 102) + 19;
		 $("#random-number").html(randomNumber);
		crystalRandom1 = Math.floor(Math.random() * 12) + 1;
	 	crystalRandom2 = Math.floor(Math.random() * 12) + 1;
	 	crystalRandom3 = Math.floor(Math.random() * 12) + 1;
	 	crystalRandom4 = Math.floor(Math.random() * 12) + 1;
	 }

	 function win() {
	 	wins++;
	 	$("#score-win").text(wins);
	 	$("#score-message").text("You win!");
	 	reset();
	 }

	 function lose() {
	 	losses++;
	 	$("#score-loss").text(losses);
	 	$("#score-message").text("You lose!");
	 	reset();
	 }
});
 //     * When the game begins again, the player should see a new random number. - done
 // Also, all the crystals will have four new hidden values.  - done
 // Of course, the user's score (and score counter) will reset to zero. - done

 //   * The app should show the number of games the player wins and loses.  - done
 // To that end, do not refresh the page as a means to restart the game.