const fruit =['kiwi','mango','apple','pear'];
function appendIndex(fruit, index){
    console.log(`${index}.${fruit}`)

}
fruit.forEach(appendIndex);