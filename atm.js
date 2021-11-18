// console.log("Welcome To SBI Bank")
// let a = require("readline-sync");
// var Bankname= a.question("enter the Bankname: ")
// if(Bankname=="SBI"){
//     console.log("carrect name")
//     var card=a.question("enter the card")
//     if(card=="ATM"){
//         console.log("processing start")
//         var language=a.question("enter the language")
//         if(language=="hinde"||language=="english"){
//             console.log("carrect language")
//             var pin=a.questionInt("enter the pin")
//             if(pin>=1||pin<=9){
//                 console.log("carrect pin number")
//                 var password=a.questionInt("enter the passord")
//                 if(password>1||password<=9){
//                     console.log("carrect pasword")
//                     var tran=a.question("ente the transaction ")
//                     if (tran=="cash withdrawal"){
//                         console.log("select type of account")
//                         var type=a.question("ente the tyape")
//                         if(type="current acount" || "saving acount"){
//                             console.log("currect acount")
//                             var balance=a.questionInt("enter the ammount")
//                             if (balance>=1000){
//                                 console.log("carrect balance")
//                                 var num=a.question("Did you colleced your cash:")
//                                 if (num=="yes"){
//                                     console.log("Take a c,if needed")
//                                 }
//                                 else {
//                                     console.log("no,i dident collected my cash")
                                
//                                 }
//                             }
//                             else{
//                                 console.log("not sufficient balance")
//                                 }
//                         }
//                         else{
//                             console.log("this type is not detected")
//                         }
//                     }
//                     else{
//                         console.log("this transaction was not detected")
//                     }
//                 }
//                 else{
//                     console.log("wrong password")
//                 }
//             }
//             else{
//                 console.log("sorry,this language is not available")
//             }
//         }
//         else{
//             console.log("sorry,your card was not detected")
//         } 
//     }
//     else{
//         console.log("error")
//     }
// }
// else{
//     console.log("thank")
// }

console.log("Welcome To SBI Bank")
let a = require("readline-sync");
var Bankname= a.question("enter the Bankname: ")
if(Bankname=="SBI"){
    console.log("correct_name")
    var card=a.question("insert the card")
    if (card=="ATM"){
        console.log("processing_start")
        var Account=a.question("Wich Account You Have.\n1.creadit_Account\n2.Debit_Account")
        if(Account=="1"||Account=="2"){
            console.log("ok")
            var language=a.question("enter the language\n1.English\n2.hindi")
            if (language=="1"){
                console.log("correct_language")
                var pin=a.questionInt("enter the pin")
                if (pin=="1234"){
                    console.log("correct_pin")
                    var type=a.question("wich is is your Account\n1.Current_Account\n2.Saving_Account")
                    if(type=="1"||type=="2"){     
                        console.log(1,"frequent_deposits_and_withdrawals_by_cheque")
                        var trans=a.question("enter you transaction\n1.CASH_WITHDRAWAL\n2.BALANCE_ENQR")
                        if (trans=="1"){
                            console.log("Ok")
                            var Ammount=a.question("enter the Ammount")
                            if(Ammount%2==0){
                                console.log("take your cash plz")
                                var num=a.question("If your resipt")
                                if(num=="yes"){
                                    console.log("take your want risipt")
                                }else{
                                    console.log("no")
                                }
                            }else{
                                console.log("faild")
                            }
                        }else{
                            console.log("not ok")
                        }
                    
                    }else{
                        console.log("not ok")
                    }
                }else{
                    console.log("forgot your pin")
                }
            }else{
                if (language=="2"){
                    console.log("correct_language")
                    var pin=a.questionInt("कृपया अपना 4 अंकों का पिन कोड दर्ज करें")
                    if (pin=="1234"){
                        console.log("सही पिन कोड है।")
                        var type=a.question("आपका कौन सा अकाउंट है?\n1.Current_Account\n2.Saving_Account")
                        if(type=="1"||type=="2"){
                            console.log("सही है।")
                            var trans=a.question("अपनी निकासी राशि दर्ज करें\n1.cash_withdrawal")
                            if (trans=="1"){
                                console.log("सही है।")
                                var Ammount=a.question("अपनी निकासी राशि दर्ज करें")
                                if(Ammount%2==0){
                                    console.log("अपना कैश ले लो।")
                                    var num=a.question("आपको पर्ची चाहिए।")
                                    if(num=="Ha"){
                                        console.log("आप की पर्ची ले लो।")
                                    }else{
                                        console.log("नहीं")
                                    }
                                
                                }else{
                                    
                                    console.log("विफल")
                                }
                            }else{
                                console.log("ठीक नहीं है")
                            }
                        
                        }else{
                            console.log("ठीक नहीं है")
                        }
                    }else{
                        console.log("अपना पिन कोड भूल गए")
                    }
                }
            }
        }else{
            console.log("not_ok")
        }          
    }else{
        console.log("not_process_start")
    }
}else{
    console.log("not_correct_name")
}




