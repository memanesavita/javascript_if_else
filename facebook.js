console.log("create facebook account:")
let x = require("readline-sync");
var language=x.question("enter the language: ")
if (language="english"||language=="hindi"||language=="marathi"){
    console.log("carrect your language")
    var name=x.question("enter the name:")
    if (name="savita_memane"){
        console.log("carrect name")
        var email_id=x.question("enter the email_id")
        if (email_id=="savitamemane74@gmail.com"){
            console.log("carrect email_id")
            var passord=x.questionInt("enter the password")
            if (passord>=1||passord<=9){
                console.log("carrect your password")
                var gender=x.question("enter the gender")
                if (gender="male"||gender=="female"||gender=="others"){
                    console.log("valid")         
                }else{
                    console.log("invalid")
                }
            }else{
                console.log("not carrect password")
            }
        }else{
            console.log("not carrect email_id")
        }
    }else{
        console.log("not carrect name")
    }
}else{
    console.log("not carrect language")
}










// console.log("create facebook account")
// var readlineSync=require("readline-sync")
// var language=readlineSync.question("enter the language")
// if (language=="english" || "hindi" || "marathi"){
//     var name=readlineSync.question("enter your name and surname")
//     if (name=="gauriindalkar"){
//         var email_id=readlineSync.question("enter your email id")
//         if (email_id=="indalkargauri@gmail.com"){
//             var password=readlineSync.question("enter password")
//             if (password==password){
//                 var gender=readlineSync.question("enter the gender")
//                 if (gender=="male" || "female" || "others"){
//                     console.log("vaild")
//                 }else{
//                     console.log("invaild")
//                 }
//             }else{
//                 console.log("invaild")
//             }
//         }else{
//             console.log("invaild")
//         }
//     }else{
//         console.log("invaild")
//     }
// }else{
//     console.log("invaild")}