console.log("If-Else Practice Problems.....")
//Flip Coin Print Heads or Tails
let Coin = Math.floor(Math.random() * 2);
if(Coin == 0)
{
    console.log("Tails");
}else
{
    console.log("Heads");
}


//Leap Year check
const year1 = 2020;
const year2 = 2021;

function LeapYear(Y)
{
    if(Y % 4 == 0)
    {
        console.log("The Year "+Y+" is a Leap Year");
    }else{
        console.log("The Year "+Y+" is not a Leap Year");
    }
}
//Calling Function and passing years
LeapYear(year1);
LeapYear(year2);

//Print Five Three-digit numbers and Maxinum and Minimum number in between the numbers
let Random1 = Math.floor(Math.random() * 900 )+ 100;
console.log(Random1)
let Random2 = Math.floor(Math.random() * 900 )+ 100;
console.log(Random2)
let Random3 = Math.floor(Math.random() * 900 )+ 100;
console.log(Random3)
let Random4 = Math.floor(Math.random() * 900 )+ 100;
console.log(Random4)
let Random5 = Math.floor(Math.random() * 900 ) + 100;
console.log(Random5)

function Maximum ()
{
if(Random1 > Random2 && Random1 > Random3 && Random1 > Random4 && Random1 > Random5)
   { console.log(Random1 + " is Greater")}
if(Random2 > Random1 && Random2 > Random3 && Random2 > Random4 && Random2 > Random5)
    {console.log(Random2 + " is Greater")}
if(Random3 > Random1 && Random3 > Random2 && Random3 > Random4 && Random3 > Random5)
    {console.log(Random3 + " is Greater")}
if(Random4 > Random1 && Random4 > Random2 && Random4 > Random3 && Random4 > Random5)
    {console.log(Random4 + " is Greater")}
if(Random5 > Random1 && Random5 > Random2 && Random5 > Random3 && Random5 > Random4)
    {console.log(Random5 + " is Greater")}
}

function Minimum ()
{
if(Random1 < Random2 && Random1 < Random3 && Random1 < Random4 && Random1 < Random5)
   { console.log(Random1 + " is Smallest")}
if(Random2 < Random1 && Random2 < Random3 && Random2 < Random4 && Random2 < Random5)
    {console.log(Random2 + " is Smallest")}
if(Random3 < Random1 && Random3 < Random2 && Random3 < Random4 && Random3 < Random5)
    {console.log(Random3 + " is Smallest")}
if(Random4 < Random1 && Random4 < Random2 && Random4 < Random3 && Random4 < Random5)
    {console.log(Random4 + " is Smallest")}
if(Random5 < Random1 && Random5 < Random2 && Random5 < Random3 && Random5 < Random4)
    {console.log(Random5 + " is Smallest")}
}

Maximum();
Minimum();