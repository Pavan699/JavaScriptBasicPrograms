console.log("Sequence Practice Problems...");

//Problem-1: Print a single digit number
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
let single_Digit = Math.floor(Math.random() * 10); 
console.log("Single Digit number is : "+single_Digit);

//Problem-2: Print a dice number from 1-6 using random
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
let Dice = Math.floor(Math.random() * 6 ) + 1;
console.log("Dice Number is : "+Dice);


//Problem-3: Add two Random Dice Number and Print the Result
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
let Dice1 = Math.floor(Math.random() * 6 ) + 1;
let Dice2 = Math.floor(Math.random() * 6 ) + 1;
console.log("Numbers Are : "+Dice1+" And "+Dice2);
let Result = Dice1 + Dice2;
console.log("Addition of Two random Dice is : "+Result);