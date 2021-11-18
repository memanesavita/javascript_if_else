// Take two numbers as input from the user. Console the number which is greater.
let readlineSync = require("readline-sync");

var x=readlineSync.questionInt("enter the number: ")
var y=readlineSync.questionInt("enter the number")
if(x>y){
    console.log("it is greater than")
}
else{
    console.log("it is not greater than")
}