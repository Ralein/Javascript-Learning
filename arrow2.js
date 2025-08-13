let obj = new Promise((resolve, reject) => {
    var b = true;
    if (b)
        resolve("Sucks ass");
    else
        reject("Fluffed");
});

obj.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
});