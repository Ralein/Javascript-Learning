var clothes = [];

clothes.push("prada");
clothes.push("allen solly");
clothes.push("US Pole");
clothes.push("Fila");
clothes.push("Nike");
clothes.push("Levis");


console.log(clothes);
clothes.pop(5);
console.log(clothes);

clothes.push("CK");
console.log(clothes);


var favCar ={};
favCar.color= "Red";
favCar.convertible =  true;
console.log(favCar);
favCar.turnTheKey=function(){
    console.log("The engine is is running");
}
favCar.lightOn = function() {
    console.log("The lights are on");
}
console.log(favCar);
favCar.turnTheKey();
favCar.lightOn()
