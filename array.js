var train1 =["wheat","barley","potato","salt","rocks"];
console.log(train1[0]);

function listArrayItems(arr){
    for(var i=0;i<arr.length;i++){
        console.log(i,arr[i]);
    }
}
var colors =['red','orange','green','blue','purple','pink'];
listArrayItems(colors);

function listArrayItems(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]=='red'){
            console.log(i*100,"tomato!")
        }else{
            console.log(i*100,arr[i])

        }

    }
}

var veg = ['onion','parsley','carrot'];

console.log(veg.length);

console.log(veg[0]);
console.log(veg[1]);

for(var i = 0;i<veg.length;i++){
    console.log(veg[i]);
}