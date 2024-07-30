

console.log('sanity check')

const foods = [];

console.log('Exercise 1 result:', foods);

foods.push('pizza',);
console.log(foods);

foods.push('cheeseburger');
console.log('Exercise 2 result:', foods);

foods.unshift('taco');
console.log(foods);
console.log('Exercise 3 result:', foods);

const favFood = foods[1];
console.log('Exercise 4 result:', favFood);

foods.splice(2, 0, 'tofu');
console.log(foods);
console.log('Exercise 5 result:', foods);

foods.splice(1, 2, 'sushi', 'cupcake');
console.log(foods);
console.log('Exercise 6 result:', foods);

const yummy = foods.slice(1, 3);
console.log(yummy);
console.log('Exercise 7 result:', yummy);
console.log(foods);
foods.push('tofu');
console.log(foods);

const soyIdx = foods.indexOf('tofu');
console.log(soyIdx);
console.log('Exercise 8 result:', soyIdx);

const allFoods = foods.join(' -> ');
console.log(allFoods);
console.log('Exercise 9 result:', allFoods);

const hasSoup =foods.includes('soup');
console.log(hasSoup);
console.log('Exercise 10 result:', hasSoup);

const odds = [];
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

nums.forEach(nums => {
  if (nums % 2 !== 0) {
    odds.push(nums);
  }
});
console.log(odds);
console.log('Exercise 11 result:', odds);

// Initialize arrays for storing results
const fizz = [];
const buzz = [];
const fizzbuzz = [];

// Iterate through the nums array
nums.forEach(num => {
  if (num % 3 === 0 && num % 5 === 0) {
    fizzbuzz.push(num); // Divisible by both 3 and 5
  } else if (num % 3 === 0) {
    fizz.push(num); // Divisible by 3 only
  } else if (num % 5 === 0) {
    buzz.push(num); // Divisible by 5 only
  }
});

console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);

//Exercise 13 was very confusing and difficult even after researching instructions
const numArrays = [
  [100, 5, 23],
  [15, 21, 72, 9],
  [45, 66],
  [7, 81, 90]
];

const numList = numArrays[numArrays.length - 1];
console.log(numList)
console.log('Exercise 13 result:', numList);

const num = numArrays[2][1];
console.log(num);
console.log('Exercise 14 result:', num);

// Initialize the total variable
let total = 0;

// Use forEach to iterate through each array and sum the numbers
numArrays.forEach(innerArray => {
  innerArray.forEach(num => {
    total += num;
  });
});

console.log('Exercise 15 result:\n', total);
console.log(total);




