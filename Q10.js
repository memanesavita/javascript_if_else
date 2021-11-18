

    // Take two numbers as input from the user in variables varx and vary.

    // Check whether varx is divisible by vary.

    // If yes, console Divisible else console Not Divisible.

let readlineSync = require("readline-sync");

var x=readlineSync.questionInt("enter the number: ")
var y=readlineSync.questionInt("enter the number")
if(x%y==0){
    console.log("it is a divisible")
}
else{
    console.log("it is not divisible")
}