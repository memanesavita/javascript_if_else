

let readlineSync = require("readline-sync");
var month=readlineSync.questionInt("enter the month: ")
switch(month){
    case 1:
        username="january";
        break
    case 2:
        username="february";
        break
    case 3:
        username="march";
        break
    case 4:
        username="april";
        break
    case 5:
        username="may";
        break
    case 6:
        username="june";
        break
    case 7:
        username="july";
        break
    case 8:
        username="august";
        break
    case 9:
        username="september";
        break
    case 10:
        username="october";
        break
    case 11:
        username="november";
        break
    case 12:
        username="december";
        break
        default:
        username="undifinde";   
}
console.log(username)




