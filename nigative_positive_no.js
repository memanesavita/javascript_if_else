

let readlineSync = require("readline-sync");
var max=readlineSync.questionInt("enter the number: ")
if (max>0){
    console.log("it is a positive number")
}
else{
    console.log("it ia a nigative  number")
}