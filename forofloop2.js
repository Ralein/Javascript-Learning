const colors =['red','orange','yellow']
for(var color of colors){
    console.log(color);
}

//build in methods

const car2 ={
    speed:200,
    color: "red"

}
console.log(Object.keys(car2));
console.log(Object.values(car2));
console.log(Object.entries(car2));

//loop and built-in

var cloth={
    price:50,
    color:"pink",
    material:'cotton'
}
for(const key of Object.keys(cloth)){
    console.log(key,":",cloth[key]);
}