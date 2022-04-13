// ===== SCOPE =====

// MDN Doc: https://developer.mozilla.org/en-US/docs/Glossary/Scope

// The current context of execution. The context in which values and expressions are "visible" or can be referenced. If a variable or other expression is not "in the current scope," then it is unavailable for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.

// In other words, scope determines the accessibility (visibility) of variables.

// JS has 3 types of scope:
// Global scope
// Block scope
// Function scope

// Before ES6 (2015), JavaScript had only Global Scope and Function Scope. ES6 introduced two important new JavaScript keywords: let and const. These two keywords provide Block Scope in JavaScript. Variables declared inside a { } block cannot be accessed from outside the block:

// ==== GLOBAL SCOPE =====
// Any variable declared globally (outside any function) are global

// var, let, and const act similarly when declared outside a block

// carName is accessible anywhere in this file
// let carName = 'Volvo' // global
// console.log(carName)

let x = 2 // global
// console.log(x)

const y = 3 // global
// console.log(y)

const c = 2 

// block scope
if(true) {
    let c = 4
    console.log(c)
    // console.log(y)
    // console.log(b)
    if(true){
        let b = 6
        //console.log('hello', c)
    }
}

console.log(c) // ReferenceError: c is not defined

// If you only want to execute one statement. Shorthand for if statement with no else. Talk about scope with one-liner, change condition to truthy and falsy.
let b = 1

if(b === 1) console.log('Hello') //local scope, like the console.log is inside curly brackets

console.log('Goodbye') //global scope