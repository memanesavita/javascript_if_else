

// Takes a number as user input. Check if this number is divisible by 5 and 15 both

// If it is divisibe by both prints "Divisible by both".

// else prints "Not divisible by both"

let readlineSync = require("readline-sync");
var myNumber=readlineSync.questionInt("enter the number: ")
if(myNumber%5==0 && myNumber%15==0){
    console.log("it is divisible by both ")
}
else{
    console.log("not divisible bye both")
}