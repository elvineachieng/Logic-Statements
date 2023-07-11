//Self check quiz
const q = '1';
switch (q){
    case 1:
        answer = "one";
        break;
    case 2:
        answer = "this is the one";
        break;
    case 3:
        answer = `1`;    
    default:
        answer = "not working";
           break;
        }
console.log(answer);
//boolean variable login is declared and assigned the value false 
//the variable represents the log in status of the user
let login = false;
//empty string variable is declared and will e used to store the output message based on the 'login' status
let outputHolder = "";
/*This is the conditional (ternary) operator used to assign a value to the userOkay variable. It checks the value of login:
If login is true, the value assigned to userOkay will be the result of outputHolder = "logout".
If login is false, the value assigned to userOkay will be the result of outputHolder = "login".
In both cases, the value assigned to outputHolder is also determined simultaneously. So, if login is true, outputHolder will be set to "logout", and if login is false, outputHolder will be set to "login" */
let userOkay = login ? outputHolder = "logout" : outputHolder="login";
console.log(userOkay);
let myTime = 9;
let output;
if (myTime >= 8 && myTime < 12) {
 output = "Wake up, it's morning";
} else if (myTime >= 12 && myTime < 13) {
 output = "Go to lunch";
} else if (myTime >= 13 && myTime <= 16) {
 output = "Go to work";
} else if (myTime > 16 && myTime < 20) {
 output = "Dinner time";
} else if (myTime >= 22) {
 output = "Time to go to sleep";
} else {
 output = "You should be sleeping";
}
console.log(output);//wake up its morning
const userNames = ["Mike", "John", "Larry"];
const userInput = "John";
let htmlOutput = "";
if (userNames.indexOf(userInput) > -1) {
 htmlOutput = "Welcome, that is a user";
} else {
    htmlOutput = "Denied, not a user ";
   }
   console.log(htmlOutput + ": " + userInput);
   let a = 5;
   let b = 10;
   let c = 20;
   let d = 30;
   //\\ returns true if either conditions is true
   console.log(a > b || b > a);
   //$$ returns true if both conditions are true
   console.log(a > b && b > a);
   //true
   console.log(d > b || b > a);
   //true
   console.log(d > b && b > a);