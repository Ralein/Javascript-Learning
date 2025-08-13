var oop ={
sleep: true,
nap: function(){
    this.sleep = false;
}
}
console.log(oop.sleep);
oop.nap();
console.log(oop.sleep)
