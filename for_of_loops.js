const car={
    engine:true,
    spreed:"slow",
    steer:true
}
const sportcar= Object.create(car);
sportcar.speed="fast";
console.log("the sportcar Object: ", sportcar);

console.log('----for-in----')
for(prop in sportcar){
    console.log(prop);
}

console.log('----for-of----');
for(prop of Object.keys(sportcar)){
    console.log(prop+':'+sportcar[prop]);


}
