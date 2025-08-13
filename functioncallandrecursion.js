function example1(){
console.log('line one');
console.log('line two');
console.log('line three');
console.log('line four');

}

example1();

//Function calling and recursion
 let counter =3;
function example(){
    console.log(counter);
    counter = counter-1;
    if(counter===0) return;
     example();
    }
    
    example();
   