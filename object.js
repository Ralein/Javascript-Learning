var assistantManager={
    Performance: 3,
    socialSkills: 30,
    streetSmart: 20,
    health: 40,
    specialAbility:"young and ambitious",
    greeting:"Let's make some money"

}

var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
}

console.log(table);
console.log(table.color);


var house ={
    rooms: 3,
    color: "brown",
    priceUSD: 10000
}


    console.log(house);
    house.windows =10;
    console.log(house);



    var arr1=['speed','color','altitude'];
    var drone ={
        speed: 100,
        altitude: 200,
        color: "red"

    }
    for(var i =0; i<arr1.length;i++){
        console.log(drone[arr1[i]])
    }