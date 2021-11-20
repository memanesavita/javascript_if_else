let readlineSync = require("readline-sync");
var day=readlineSync.question("enter the day: ")
var choice=readlineSync.question("enter the choice:")
switch(day){
    case "monday":
        switch(choice){
        case "breakfast":   
            console.log("ege")
            break
        case "lunch":
            console.log("panir puri")
            break
        case "dinner":
            console.log("mutten bhakri")
            break
        case "snaks":
            console.log("banana")
            break
        }
        break

    case "tuesday":
    switch(choice){ 
    case "breakfast":
            console.log("poha");
            break
        case "lunch":
            console.log("chhole puri");
            break
        case "snaks":
            console.log("bheal")
            break
        case "dinner":
            console.log("dal rice")
                break
        }
        break
    case "wednesday":
        switch(choice){
        case "breakfast":
            console.log("tea bread");
            break
        case "lunch":
            console.log("paneer tikka roty")
            break
        case "snaks":
            console.log("goava");
            break
        case "dinner":
            console.log("lemonchikan chpati");
            break
        }
        break
    case  "thursday":
        switch(choice){
        case "breakfast":
            console.log("khichadi");
            break
        case "lunch":
            console.log("palak panir rice");
            break
        case "snaks":
            console.log("tomato sup")
            break
        case " dinner":
            console.log("fish carri ,rice chapati");
            break

        }
        break
    case  "friday":
        switch(choice){
        case "breakfast":
            console.log("noodales");
            break
        case "lunch":
            console.log("kadipakoda joary bhakri");
            break
        
        case "snaks":
            console.log("panirchilli")
            break
        case "dinner":
            console.log("fried rice");
            break
        }
        break
    case "saturday":
        switch(choice){
        case "breakfast":
            console.log("edali samber");
            break
        case "lunch":
            console.log("dal makhani rice");
            break
        case "snaks":
            console.log("tandur chikan");
            break
        case "denner":
            console.log("gavran chikan rice roty");
            break
        }
        break

    case "sunday":
        switch(choice){
        case "breakfast":
            console.log("pizza");
            break
        case "lunch":
            console.log("batter chikan ,romali roty,jira rice")
            break
        case "snaks":
            console.log("french chili");
            break
        case "dinner":
            console.log("mungdal khichadi");
            break
        }
    default:
        username="undifinde"
        break
}

    
