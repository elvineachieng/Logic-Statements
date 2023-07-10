//if and if else statements
//if *some condition is true*, then *a certain action will happen*, else *another action will happen*
let rains = true;
if (rains){
    console.log("Taking my umbrella when i need to go outside");
}
else {
    console.log("I can leave my umbrella at home");
}
//practise exercise 4.1
let myVariable=true;
console.log(myVariable);
if (myVariable){
    console.log("The variabe is true");
}
if (!myVariable){
    console.log("The variable is not true!");
}
myVariable=!myVariable;
console.log(myVariable);
//else if statements
 //If *a value falls into a certain category*, then *a certain action will happen*, else if *the value falls into a different category than the previous statement*, then *a certain action will happen*, else if *the value falls into a different category than either of the previous brackets*,then *a certain action will happen*
 let age = 10;
 let cost = 0;
 let message;
 if (age<3){
    cost=0;
    message="Acces is free under three.";
 }else if (age>=3 && age<12){
        cost=5;
        message="With the child discount, the fee is dollars";
    }else if(age>=12 && age<65){
        cost=10;
        message="A regular ticket cost 10 dollars";
    }else {
        cost=7;
        message="A ticket is 7 dollars.";
    }
    console.log(message);
    console.log("Your Total "+cost);
    if(age < 3){
    console.log("Access is free under three.");
       } else if(age < 12) {
        console.log("With the child discount, the fee is 5 dollars");
       } else if(age < 65) {
        console.log("A regular ticket costs 10 dollars.");
       } else if(age >= 65) {
        console.log("A ticket is 7 dollars.");
       }
       //another exercise
    let age1 = prompt("Please enter your age");
       age1=Number(age);
    let message1;
    if (age>=21){
        message1="You are allowed entry to the venue and you can purchase alcohol.";
    }
       else if(age>=19){
        message1="You are allowed entry to the venue but cannot purchase alcohol.";
    }
       else{
        message1="You are denied entry to the venue.";
    }
    console.log(message1)
       //conditional ternary opetrators
       //f *operand1*, then *operand2*, else *operand3*
    let acces = age2 < 18 ? "denied":"allowed";
    //exercise 4.3
    let hasValidID=true;
    let message2 = hasValidID? "You are allowed entry to the venue.":"You are denied entry to the venue.";
    console.log(message);



