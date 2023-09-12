// There are basically two types of datatypes in JS on the basis of how data is stored or accessed

// 1.Primitive 
// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

// 2. Reference (Non-primitive)
// 4 types : Array, Objects , Functions

// JavaScript is dynamically typed. In dynamically typed languages like JavaScript, variable types are determined and checked at runtime rather than at compile time.
//  This means that you don't need to explicitly specify the data type of a variable when you declare it, and you can change the type of a variable during the execution of a program.
// For example, you can assign different types of values to a JavaScript variable without having to declare its type explicitly

// var x = 5;         // x is a number
// x = "Hello";       // x is now a string
// x = [1, 2, 3];     // x is now an array


const outsideTemp = null
const id = Symbol('123')
const secondId = Symbol('123')

console.log(id == secondId);


const sorcerers = ["sukuna", "gojo", "kenjaku"]  //----> Array
console.log(sorcerers);

let myObj = {
    name : "pranjal",
    age : 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof outsideTemp) // null value will have Object data type
console.log(typeof myObj);
console.log(typeof myFunction) // It will show function but actually it is function object




