
let readlineSync = require("readline-sync");
var max1=readlineSync.questionInt("enter the number: ")
if(max1<5){
    console.log("you can go to school above")
}
else if(max1<18){
    console.log("You can vote in elections")
}
else if(max1<21){
    console.log("People 21 years and above in age can drive a car.")
} 
else if(max1<24){
    console.log("People 24 years and above in age can marry.")
}
else {
    console.log("People 25 years and above in age can legally drink.")

}
