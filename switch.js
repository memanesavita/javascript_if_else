
let readlineSync = require("readline-sync");
var day=readlineSync.questionInt("enter the number: ")

switch(day){
    case 1:
        lname="sunday";
        break;
    case 2:
        lname="monday";
        break;
    case 3:
        lname="tuesday";
        break;
    case 3:
        lname="wednesday";
        break;
    case 4:
        lname="thursday";
        break;
    case 5:
        lname="friday";
        break;
    case 6:
        lname="saturday";
        break;
    default:
        lname="wrong";
} 
console.log(lname);


 