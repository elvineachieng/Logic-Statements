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