// Part 1: Separate Array Elements
const topSixRestaurants = ["Chick-fil-A", "In-N-Out", "Chipotle", "McDonald's", "Taco Bell", "KFC"];
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...remain] = topSixRestaurants;

console.log(first);
console.log(second);
console.log(remain);

console.log(`First restaurant: ${first}`);
console.log(`Second restaurant: ${second}`);
console.log(`Remaining restaurants: ${remain}`);