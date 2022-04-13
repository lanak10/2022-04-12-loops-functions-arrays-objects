// ========== WHILE LOOP ==========

// MDN Doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// As long as the condition is true, code is executed
// We can break the loop with the keyword break, meeting a certain condition, or we no longer meet our while loop condition

let i = 0

// while(i < 5) { 
//     // as long as our condition is true - the code block will execute
//   console.log(i)
//   break
//   // i++
// }


// while(i < 20) {
//   // stop at 10
//   if(i === 10) {
//     console.log('We are stopping at 10! We met a condition so our while loop stops.')
//     break
//   }
//   console.log('Hello until we get to 10')
//   i++
// }

// Task: while loop - between 0 and 20, numbers that are divisible by 2 should be multiplied by 3 and printed. All other integers should not be printed
while(i < 20) {
    if(i % 2 === 0){
        console.log(i * 3)
    }
    i++
}

// Task: Dunkin Donuts - my coffee $5 and I paid with $10. My change was in quarters. Write a while loop to determine how many quarters I got back.

// ===== DO...WHILE LOOPS =====

// MDN Doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while

// The do...while statement creates a loop that executes a specified statement until the test condition evaluates to false. 

// Syntax:

/* 

do
    statement
while(condition)

*/

// Statement is executed AT LEAST ONCE and re-executed each time the condition evaluates to true. 

// Use this if you need to execute the statement AT LEAST ONE TIME before checking for a condition. If using a variable inside do, make sure it's declared first. 

// let i = 0;

// do {
//     console.log(`Current i: ${i}`)
//     i++
// } while (i < 10)