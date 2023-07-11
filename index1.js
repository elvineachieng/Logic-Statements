//switch statements
/*syntax switch(expression) {
 case value1:
    // code to be executed
    break;
    case value2:
    // code to be executed
    break;
    case value-n:
    // code to be executed
    break;
   }
   */
  let activity;
   switch(activity) {
    case "Get up":
    console.log("It is 6:30AM");
    break;
    case "Breakfast":
    console.log("It is 7:00AM");
    break;
    case "Drive to work":
    console.log("It is 8:00AM");
    break;
    case "Lunch":
    console.log("It is 12:00PM");
    break; 
    case "Drive home":
    console.log("It is 5:00PM");
    break; 
    case "Dinner":
    console.log("It is 6:30PM");
    break;
   }
   //default case
   //combining cases
   let grade;
   switch(grade){
    case "F":
    case "D":
    console.log("You've failed!");
    break;
    case "C":
    case "B":
    console.log("You've passed!");
    break;
    case "A":
    console.log("Nice!");
    break;
    default:
    console.log("I don't know this grade.");
   }
   //This is more readable than the alternative if-else statement:
if(grade === "F" || grade === "D") {
    console.log("You've failed!");
   } else if(grade === "C" || grade === "B") {
    console.log("You've passed!");
   } else if(grade === "A") {
    console.log("Nice!");
   } else {
    console.log("I don't know this grade.");
   }
   //practise exercise 4.5
   let prize=prompt("select a value between 0 and 10");;
   prize=Number(prize);
   let messageOutput ="My Selection";
   let outputMessage5;
   switch(prize){
     case 0:
      outputMessage+="Congratulations! You won a vacation to Hawaii!";
      break;
    case 1:
      outputMessage += "Congratulations! You won a brand new car!";
      break;
    case 2:
      outputMessage += "Congratulations! You won a $500 shopping spree!";
      break;
    case 3:
      outputMessage += "Congratulations! You won a weekend getaway!";
      break;
    case 4:
      outputMessage += "Congratulations! You won a year's supply of chocolate!";
      break;
    case 5:
      outputMessage += "Congratulations! You won a VIP concert ticket!";
      break;
    case 6:
      outputMessage += "Congratulations! You won a tech gadget of your choice!";
      break;
   
   }
   console.log(outputMessage);
