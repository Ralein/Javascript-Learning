for(var i = 1;i<=4;i++){
    if(i==1){
        console.log("Gold medal");
        
    }else if(i==2){
        console.log("Silver medal");
    }
    else if(i==3){
        console.log("Bronze medal");
    }
    else{
        console.log(i)
    }
}

for(var i =1; i<=4;i++){
    switch(i){
        case 1:
            console.log("Gold medal");
            break;

        case 2:
            console.log("Silver medal");
            break;
        case 3:
            console.log("Bronze medal");
            break;
        default:
            console.log(i+"th place");
    }
}


for (var j=1;j<=4;j++){
    if(j==1){
        console.log("Pizza");
    }
    else if(j==2){
        console.log("Burger");
    }
    else if(j==3){
        console.log("French Fries");
    }
    else{
        console.log("Pasta");
    }
}

for(var i =1;i<=4;i++){
    switch(i){
        case 1:
            console.log("Pizza");
            break;
        case 2:
            console.log("Burger");
            break;
        case 3:
            console.log("French Fries");
            break;
        default:
            console.log("Pasta");
    }
}