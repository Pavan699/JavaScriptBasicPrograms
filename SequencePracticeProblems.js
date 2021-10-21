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
console.log("Dice Numbers Are : "+Dice1+" And "+Dice2);
let Result = Dice1 + Dice2;
console.log("Addition of Two random Dice is : "+Result);

//Problem-4: Write a program that reads 5 Random 2 Digit values , then find their sum and the average
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
let Random1 = Math.floor(Math.random() * 90 )+ 10;
let Random2 = Math.floor(Math.random() * 90 )+ 10;
let Random3 = Math.floor(Math.random() * 90 )+ 10;
let Random4 = Math.floor(Math.random() * 90 )+ 10;
let Random5 = Math.floor(Math.random() * 90 )+ 10;
console.log("Two digits Numbers are : "+Random1+","+Random2+","+Random3+","+Random4+","+Random5)
let Sum = Random1+Random2+Random3+Random4+Random5;
console.log("Sum of Five Numbers is : "+Sum);
let average = Sum / 5;
console.log("Average of Five numbers is : "+average);

//Problem-5: Unit Conversion
//Conversion of Inches into feets
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
let One_Feet = 12;//1 feet = 12 inches
let One_Meter = 3.28;//1 meter = 3.28 feet
let Total_Plots = 25;
let feet = 42 / One_Feet;
console.log("42 inches in feet is : "+feet);
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
//Conversion of Rectanguler plot from feets to meters
let length = 60;//feets
let width = 40;//feets
console.log("Length and Width are "+length+" and "+width);
let Area_Feets = length * width;
console.log("Area of Plot in feets is : "+Area_Feets);
let Area_In_Meter = Area_Feets / One_Meter;
console.log("Area of Plot in Meters is : "+Area_In_Meter);
let Total_Area = Area_In_Meter * Total_Plots;
console.log("Total Area of "+Total_Plots+" Plots is "+Total_Area);
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");