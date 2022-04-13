// ===== OBJECTS =====
// We use objects to store key/value pairs, or any other data type. This includes all primitive and reference types.
// We declare objects using the curly brackets
// Left side are called properties/*key* and the right side are the values
// Key is a string (JS coerced it automatically) separated by commas
// Value is any JS expression (code that evaluates to a single value or thing), including other objects (yes, functions too)
// In computer science, collections of key/value pairs are commonly referred to as dictionaries - a good visualization of what an object is

const person = {
    firstName: 'Teo',
    age: 99,
    fruit: ['apple', 'banana'],
    'favorite-color': 'olive'
}

// Task: Ask questions
// What is our object called? person
// How many properties do we have? 4
// How many values do we have? 4

// Print our person obj
// console.log(person)

// ===== ACCESSING =====

// Using "dot notation" to access name
// console.log(person.firstName)

// Access banana
// console.log(person.fruit[1])

// Favorite color
// console.log(person.favorite-color) 
// => won't be able to access throws err: ReferenceError: color is not defined

// Using square bracket property to access color: we have to wrap the property in quotations
// console.log(person['favorite-color'])

// What happens if we have the same property/key name?
const instructor = {
    name: 'teo',
    name: 'josh'
}

// console.log(instructor.name) // takes the last property in the object list

// ===== ADDING PROPERTIES =====
console.log(instructor)

instructor.email = 'tmarcelo@perscholas.org' // Use dot notation to add properties to an object later
console.log(instructor)

// ===== CHANGING OBJECT PROPERTIES =====
instructor.email = 'hello@aol.com'
console.log(instructor)

// ===== ACCESS USING OBJECT DESTRUCTURING =====
// We can grab the object property and treat it as a variable. Very common to use
const { firstName, age, fruit } = person

console.log(firstName) // Instead of writing out, console.log(person.firstName)
console.log(age)
console.log(fruit)