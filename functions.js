// What is a function?
// A function is a resuable block of code designed to perform a single purpose. It optionally takes in data as input and returns a single piece of data (including complex data such as objects, functions, etc.).
// Functions are the BUILDING BLOCKS of programs.
// Functions do not execute until that function is executed/called/invoked.
// Typically, they are often triggered by events such as a user clicking on a button in a website.
// Many programming languages come with built-in methods/functions.

// Why use functions?
// Tackle complexity - breaking down a complex problem into smaller portions
// this allows us to break our program into manageable blocks of code

// Code reuse - we can use it any time we want for as many times as we want without having to rewrite it. DRY principle

// Scope - variables inside functions are called FUNCTION SCOPE 

// ========== FUNCTION DECLARATION ===========
// function greeting() {
//     console.log('This is a function declaration!')
// }

// When we invoke our function the function code block gets executed. We use the parenthesis to invole/execute/call the function
// greeting()

// ========== FUNCTION EXPRESSION ===========
// technically this is still called an anonymous function but assigned to a variable called sayHello
// const sayHello = function () {
//     console.log('Hello, Joshua!')
// }

// sayHello()

// ========== ARROW FUNCTIONS ===========

// MDN Doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// WARNING: DON'T ASK ABOUT THIS OR SUPER YET. Just planting seeds...
// When to use, use it anytime to replace a function, HOWEVER, it is not recommended to use it inside objects. Reason: Arrow functions don't have their own bindings to 'this' or 'super', and should not be used as methods.

// Arrow functions came out in ES6. They provide a more concise syntax, and allows implicit return of a single expression.

// Anonymous function means a function without a name. Same as above, we are assigning a value of this anonymous function to goodbye
// const goodbye = () => {
//   console.log('goodbye')
// }
// goodbye()

// IMPLICIT RETURN
// const goodbye = () => console.log('goodbye')
// goodbye()

// Why use const for our arrow functions?
// To avoid having to erase the function's functionality
// let goodbye = () => console.log('goodbye')
// goodbye = 'hi'

// goodbye()

// ========== USING FUNCTIONS ===========

// Regardless of which way we write functions, they are called the exact same way.

// Exercise - Calculator program
// function add() {
//     console.log(1 + 2)
// }

// add()

// USING PARAMETERS
// The variables/placeholders that we put inside the parenthesis when we declare our functions are called parameters. Parameters are written inside the parenthesis after the name of the function.

// Function that takes in any number for its parameters. How many parameters do we have? 2. Parameters are separated by commas inside the parentheses
// function subtract(x, y) {
//     console.log(x - y)
// }


// USING ARGUMENTS
// When working with arithmetic you have to pass in the same number of arguments to the parameters or you will get NaN
// The order of arguments MATTER
// When passing values in the parentheses, the parameters become arguments

//   subtract(5, 10)

// What if we had fewer arguments than the parameters? Let's give some examples on what would look like.

// What if we wanted a default value to the parameters? 

// Prior to ES6 we would have to use the || inside our function
// function setColor(bicycle, color) {
//     // set color to 'purple' if not provided
//     bicycle.color = color || 'purple'
//     console.log(bicycle)
// }

// setColor({})

// ES6 introduced default parameters
// function setColor(bicycle, color = 'purple', model) {
//     bicycle.color = color
//     bicycle.model = "WEEEE"
//     console.log(bicycle)
// }

// setColor('bicycle', 'green', 'Suzuki') // when the function is invoked, the parameters we enter inside the function are called arguments

// Any expression can be provided as a default, including objects, etc.

// ===== FUNCTIONS ARE ARGUMENTS =====
// Passing an Anonymous Function
// Often functions or methods (functions attached to an object) will require a function be provided as an argument.
// When we pass a function as an argument inside a function call, we call the function being passed CALLBACKS or higher order functions.

// Example:
const colorArr = ['red', 'blue', 'green']

// forEach() - The forEach() method executes a provided function once for each array element. This method expects a function.
// colorArr.forEach(function (color){
//     console.log(color)
// }) 
// 'color' is a placeholder parameter. forEach() element in the array, execute this function

// colorArr.forEach(function(color) {
//     console.log(color)
// })

// ES6 Syntax
// colorArr.forEach((color) => console.log(color))


// ===== REST PARAMETERS =====
// MDN Doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array
function addition(...arguments) {
    // using just arguments
    // console.log(arguments)
    // console.log(arguments[0])
    // console.log(arguments.length)

    // using ...arguments
    // console.log(arguments)
    // console.log(arguments[0])
    // console.log(arguments.length)

}

const arguments = [1, 1, 1, 1, 1, 1]
// addition(arguments)

// Call addition again and use spread operator in front of the argument. This will pass the arguments inside the array as spread arguments rather than an array
// addition(...arguments)

function restParams(...arguments) {
    // Will return an array of everything we passed
    console.log(arguments)
}

// restParams([1,2,3], 'some string', 48)

// Order matters example
function printName(firstName, lastName) {
    // concatenation
    // console.log("Hi my name is " + firstName + ' ' + lastName)

    // interpolation with template literals
    console.log(`Hi my name is ${firstName} ${lastName}`)
}

// printName('Teo', 'Marcelo')



// ========= RETURN ============
// let c = 5
// const addTwoThings = (a, b) => {
//     console.log(a + b + c)
//     return a + b + c
// }

// Return will return the value back to where the function was called
// addTwoThings(3, 3) // NaN, why?
// console.log(addTwoThings)
// console.log(addTwoThings(1, 3))

// const answer = addTwoThings(4, 4)

// console.log(answer)

// const answerTwo = answer + addTwoThings(5,6)
// console.log(answerTwo)

// function declaration
function sayAge() {
    return 'I am 99 years old!'
}

// console.log(sayAge())

const age = sayAge()
// console.log(age)

// ===== FUNCTION SCOPE =====
function one() {
    let a = 'hello' // function scope
    const b = 'goodbye' // function scope
    var c = 'hi' // function scope
    console.log(a, b, c)
}

// one()

// console.log(a) // ReferenceError: a is not defined because it's not defined in the global scope
// console.log(b) // ReferenceError: b is not defined
// console.log(c) // ReferenceError: c is not defined

// var is FUNCTION SCOPED AND GLOBALLY SCOPED
// If var is declared inside a function it is function scoped and cannot be accessed outside of the function
// If var is declared inside an if/else statement,etc it has global scope
if (true) {
    // console.log('we are inside our if')
    var special = 1 // global variable
    special2 = 4 // if don't define the variable with a keyword, automatically assigns to var
}

// console.log(special)
// console.log(special2)

// LEXICAL SCOPE - the inner functions have access to the variables and other resources of their parent scope.

// ===== RARE CASES =====
// Nice to know they exist.

// Nested Functions
function two() {
    let parent = 'Patrick'
    // return function three() {
    //   return "We are inside three and calling " + parent
    // }
    return () => `We are inside two and calling ${parent}`
}

// console.log(two())

// IIFE (iffy) Immediately Invoked Function Expression
// MDN doc: https://developer.mozilla.org/en-US/docs/Glossary/IIFE

// How can we see our string?
// console.log(two()()) // returns what's on the right side

// How to avoid using the double ()()? Use function expression
const callTuan = two()
console.log(callTuan())

function swathi() {
    console.log('swathi')
    return function teo() {
        console.log('teo')
    }
}

// swathi() // returns swathi
// swathi()() // returns what? *Needs a return declared to immediately invoke the next function using the 2nd parenthesis
// Fix the error with swathi()() by adding the appropriate fix

// ===== HOISTING =====
// Will probably come up as a question in an interview
// Refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

// Simple explanation: Function declarations and var are saved differently than let and const variables

// JS follows a top to down approach
// rafael()

// function declaration
function rafael() {
    console.log('Hi my name is Rafael!')
}
// rafael()
// WAIT DONT ASK A QUESTION YET ABOUT WHY THIS IS WORKING

// console.log(a) // ReferenceError: Cannot access 'a' before initialization
// let a = 'test'

// tosi() 

// function expression
// const tosi = function () {
//     console.log("Hi I'm Tosi!")
// }

// ReferenceError: Cannot access 'tosi' before initialization

// arrow function
// console.log(poornima()) // ReferenceError: Cannot access 'poornima' before initialization
// const poornima = () => 'Hi Poornima!'