const nums = [0,10,20,30,40,50];
const result = nums.filter(function(num) {
    return num > 20;
});
console.log(result); // Output: [30, 40, 50]

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result2 = words.filter(word => word.length > 6);
console.log(result2); 