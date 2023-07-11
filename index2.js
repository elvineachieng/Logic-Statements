let dynamicNumber = 42; // This is the dynamic number value you can change

let userNumber = prompt("Please enter a number:");

if (isNaN(userNumber)) {
  console.log("Invalid input. Please enter a valid number.");
} else {
  userNumber = Number(userNumber);

  if (userNumber > dynamicNumber) {
    console.log(userNumber + " is greater than " + dynamicNumber);
  } else if (userNumber < dynamicNumber) {
    console.log(userNumber + " is less than " + dynamicNumber);
  } else {
    console.log(userNumber + " is equal to " + dynamicNumber);
  }
}
let userName = prompt("Please enter your name:");

let confirmationMessage = "";

switch (userName) {
  case "Alice":
    confirmationMessage = "Welcome, friend! You are known.";
    break;
  case "Peshi":
    confirmationMessage = "Welcome, friend! You are known.";
    break;
  case "Elvine":
    confirmationMessage = "Welcome, friend! You are known.";
    break;
  default:
    confirmationMessage = "Sorry, I don't know you.";
    break;
}

console.log(confirmationMessage);

let options = ["Rock", "Paper", "Scissors"];

let playerIndex = Math.floor(Math.random() * 3);
let computerIndex = Math.floor(Math.random() * 3);

let playerSelection = options[playerIndex];
let computerSelection = options[computerIndex];

let resultMessage = "Player: " + playerSelection + " | Computer: " + computerSelection + " | ";

if (playerSelection === computerSelection) {
  resultMessage += "It's a tie!";
} else {
  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    resultMessage += "Player wins!";
  } else {
    resultMessage += "Computer wins!";
  }
}

console.log(resultMessage);
