


let readlineSync = require("readline-sync");
var number=readlineSync.question("enter the season: ")
if(number=="november" || number=="december" || number=="january" || number=="febraury"){
    console.log("it is a winner season")
}
else if (number=="march" || number=="april" || number=="may"){
    console.log("it is summer season")
}
else if( number=="june"|| number=="july"|| number=="august"){
    console.log("it is rainy season")
}
else{
    console.log("nowarrys")
}





