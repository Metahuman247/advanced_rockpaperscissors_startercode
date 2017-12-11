//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES



//FUNCTIONS


// DOCUMENT READY FUNCTION

  var userChoice = '';
  var computerChoice = '';
  var winner = '';
  var choices = ["rock", "paper", "scissors"];
  
  $(document).ready(function(){
          $("#click").click(function(){
                var playerChoice = $("#text").val();
                $("#playerchoice").html("player: " + playerChoice);
                computerChoice = choices[Math.floor(Math.random() * choices.length)];
                $("#computerchoice").html("computer: " + computerChoice);
                
                if(playerChoice == "rock" && computerChoice == "scissors"){
                        winner = "The winner is the Batman/Rock";
                
                } else if(playerChoice == "rock" && computerChoice =="paper"){
                        winner ="The winner is the Scarecrow/Paper";
                        
                }else if(playerChoice =="rock" && computerChoice == "rock"){
                        winner =" A tie";
                }
                 if(playerChoice == "paper" && computerChoice == "rock"){
                        winner="The winner is the Scarecrow/Paper"
                 }else if(playerChoice == "paper" && computerChoice == "paper"){
                         winner ="A tie";
                 }else if(playerChoice == "paper" && computerChoice == "scissors"){
                         winner="The winner is the Joker/Scissors"
                 }
                 if(playerChoice =="scissors" && computerChoice == "rock"){
                            winner =" The winner is the Batman/Rock";
                        }else if(playerChoice =="scissors" && computerChoice =="paper"){
                        winner= "The winner is the Joker/Scissors";
                             }else if(playerChoice =="scissors" && computerChoice =="scissors"){
                                 winner="A tie";
                             }
                             
                $("#winner").html(winner);
          });
  });

                 
          

        
