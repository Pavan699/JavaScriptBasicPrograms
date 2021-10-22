//Print Single Digit number 
let One_Digit = Math.floor(Math.random() * 10);
console.log("Number is : "+One_Digit);
switch(One_Digit)
{
    case 0 : 
        console.log("Zero");  
        break;
    case 1 : 
        console.log("One");  
        break;    
    case 2 : 
        console.log("Two"); 
        break;    
    case 3 : 
        console.log("Three"); 
        break;         
    case 4 : 
        console.log("Four"); 
        break;       
    case 5 : 
        console.log("Five"); 
        break;         
    case 6 : 
        console.log("Six");
        break;    
    case 7 : 
        console.log("Seven");  
        break;
    case 8 : 
        console.log("Eigth");
        break;    
    case 9 : 
        console.log("Nine");  
        break;                            
    default:
        console.log("Wrong Input :) "); 
        break;             
}

//Number from 1 to 7 and Print the Day of week by using switch-case
let Day = Math.floor(Math.random() * 7) + 1;
console.log("Number is : "+Day);
switch(Day)
{
    case 1 : 
        console.log("Monday");  
        break;    
    case 2 : 
        console.log("Tuesday "); 
        break;    
    case 3 : 
        console.log("Wednesday"); 
        break;         
    case 4 : 
        console.log("Thursday"); 
        break;       
    case 5 : 
        console.log("Friday"); 
        break;         
    case 6 : 
        console.log("Saturday");
        break;    
    case 7 : 
        console.log("Sunday");  
        break;                           
    default:
        console.log("Wrong Input :) "); 
        break;             
}

//Print Unit of the Number in Words
const num = 100000;
console.log("Number is : "+num);
switch(num)
    {
        case 1 : 
            console.log("One Unit");  
            break;    
        case 10 : 
            console.log("Ten "); 
            break;    
        case 100 : 
            console.log("Hundred"); 
            break;         
        case 1000 : 
            console.log("Thousand "); 
            break;       
        case 10000 : 
            console.log("Ten Thousand"); 
            break;         
        case 100000 : 
            console.log("One Lakh");
            break;    
        case 1000000 : 
            console.log("Ten Lakh");  
            break;        
        case 10000000 : 
            console.log("One Crore");  
            break;             
        default:
            console.log("Wrong Input :) "); 
            break;             
    }