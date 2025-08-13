
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
function logdairy() {
    for (var prod of dairy) {
        console.log(prod);
    }
}
logdairy();

// Task 2
const animal = {
    canJump: true
};
function birdCan() {

    const bird = Object.create(animal);
    bird.canFly = true;
    bird.hasFeathers = true;

    for (const key of Object.keys(bird)) {
     console.log(`${key}: ${bird[key]}`);

    }
    
}
birdCan();
// Task 3
function animalCan() {
    for (const key of Object.keys(animal)) {
        console.log(`${key}: ${animal[key]}`);
    }
}
animalCan();