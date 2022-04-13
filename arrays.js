// What are arrays?
// - list of strings or numbers
// - collection of data
// - ordered list

// We declare an array using the square brackets. Should use const to declare arrays.
const fruit = ['mango', 'kiwi', 'apple', 'banana']
// console.log(fruit)

// indexes of fruit elements => [0, 1, 2, 3]


// Access kiwi
// We can access elements inside an array with their index.
// We know that in programming everything starts at 0.
// console.log(fruit[1]) // kiwi

// Length of the array
// console.log(fruit.length)

// Print every single item in our array
// for(let i = 0; i < 4; i++) {
//   console.log(fruit[i])
//   // 1st iteration = fruit[0]
//   // 2nd iteration = fruit[1]
// }

// Loop over array without knowing the size or hard coding the size
// console.log('Using length')
// for(let i = 0; i < fruit.length; i++) {
//   console.log(fruit[i])
// }

// We can do some math to access elements
// Access apple in our array without using the index 2
// const fruit = ['mango', 'kiwi', 'apple', 'banana']

// array indexes start at 0
// length is always printed out starting at 1
// console.log('Access apple using length')
// console.log(fruit[fruit.length - 2]) // fruit[2]
// console.log(fruit[fruit.length - 1]) // always returns the last item in the array

// print length of string inside array
// console.log(fruit[1].length)

// ==== SPREAD OPERATOR ==== //

// MDN doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

// Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

// Spread operator was introduced in ES6

// Syntax: ... 

const arr1 = ['one', 'two']
const arr2 = ['three', 4]

const arr3 = arr1 + arr2

// console.log(arr3)
// console.log(typeof(arr3))

// Spread operator creates a shallow copy of an array. Meaning you can make changes to shallow copy without changing the original content/array.

const arr4 = ['Ozgur', ...arr1, 'Harry', {}, ...arr2] // one ... makes a copy of array 1

console.log(arr4)

// WRONG syntax, just example purpose...
// const products = [{}, {}, {}, {}]

// shoppingCart = [...shoppingCart, {}] // if User adds a product, update

// const shoppingCart = []