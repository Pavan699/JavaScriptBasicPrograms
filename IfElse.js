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