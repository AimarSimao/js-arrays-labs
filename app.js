

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
