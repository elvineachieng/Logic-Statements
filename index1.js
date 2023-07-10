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
   