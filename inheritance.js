var bird={
    haswings: true,
    canfly:true,
    hasfeathers:true
}

var eagle1 = Object.create(bird);
console.log("eagle!:",eagle1);

console.log("eagle has wings",eagle1.haswings);
console.log("eagle can fly",eagle1.canfly);
console.log("eagle has feathers",eagle1.hasfeathers);


var kiwi = Object.create(bird);
kiwi.canfly=false;
console.log("eagle has wings",kiwi.haswings);
console.log("eagle can fly",kiwi.canfly);
console.log("eagle has feathers",kiwi.hasfeathers);