// If water in the filter is less than 1L then more water needs to be filled. 
// If the water quantity is between 1L and 10L then there is no need to fill water. 
// If water is more than 10L then the water will overflow. take user input in 
// a variable named water .


let readlineSync = require("readline-sync");

var yourName= readlineSync.questionInt("enter the number: ")
if(yourName==10){
    console.log(yourName,"thear is not need to water fell 10")
}
else if(yourName<10){
    console.log(yourName-10,"thear is needs to feeld 10")
}
else{
    console.log(yourName-10,"the water will overflow 10")
}







