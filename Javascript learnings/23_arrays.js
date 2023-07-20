//intro to arrays
// reference type
// how to create arrays

// ordered clloection  of items
// array is muteable

let fruits = ["apple", "mango", "grapes"];
let numbers = [1, 2, 3, 4];
let mixed = [1, 2, 3, 4, "string", null, undefined];

console.log(numbers);
console.log(mixed, "Mixed");
console.log(fruits[2]);

let fruits1 = ["apple", "mango", "grapes"];
let obj = {}; // object literal

console.log(fruits1, "berfore change");
fruits[1] = "banana";
console.log(fruits, "after change");
console.log(typeof fruits);
console.log(typeof obj);
console.log(Array.isArray(fruits));
console.log(Array.isArray(obj));

// array indexing
