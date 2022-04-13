// =========== LOOPS =============

// MDN doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

// Definition: A sequence of instructions that are repeated for either certain number of times or until a condition is met

// Syntax:
/* 

for(statement 1; statement 2; statement 3) {
     code block to be executed
} 

*/


// Statement 1: executed before the loop - this is where code block starts
// Statement 2: condition for running the loop (the code block)
// Statement 3: Executed each time AFTER the loop (the code block) has been executed

// Task: loop that iterates from 0 to 9
// for(let i = 0; i < 5; i++){
//     console.log(i)
// }

// for(let i = 0; i < 10; i++){
//     console.log(i)
// }

// statement 1: declare our iterator
// Why 0? In programming we like to start count at 0
// i++ is equivalent to i = i + 1 also equals to i += 1

// const = TypeError: Assignment to constant variable.
// for(let i = 0; i < 10; i++) {
//   console.log(i)
// }

// if we declare i inside our for loop with let we will get: ReferenceError: i is not defined
// if we declare i with no keyword it's automatically considered a 'var' variable
// console.log('current value ', i)

// let and const are block scoped
// for(let i = 0; i < 10; i++) {
//   console.log("we're using i again", i)
// }

// Task: loop from 10 to 1
// for(let i = 10; i > 0; i--) {
//   console.log(i)
// }

// task:
// 1: write a loop that outputs 1,3,5,7,9
for(i = 1; i <= 9; i += 2){
    console.log(i)
}
// 2: write a loop that outputs 2,4,6,8,10
for(i = 2; i <= 10; i += 2){
    console.log(i)
}
// Possible solutions for our incrementor

// Task 1:
// i = i + 2
// i += 2
// i++ && i++
// for (let i = 1; i < 10; i = i + 2) {
//     console.log(i)
// }

// Task 2:
// for (let i = 0; i <= 10; i = i + 2) {
//     console.log(i)
// }

// Want to know some extra?
// preincrement --i
// postincrement i++
// https://stackoverflow.com/questions/1546981/post-increment-vs-pre-increment-javascript-optimization