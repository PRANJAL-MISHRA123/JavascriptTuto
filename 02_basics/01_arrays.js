
// Key points about Array in JavaScript
// They can be resizeable
// They can store multiple data type simultaneously
// Copy operations are perfomed on the concept of shallow copy
// Shallow copy means Copy by refernce
// Deep Copy means Copy by Value

const arr = [1,3,4,"Sukuna"]
const arr2 = new Array("Sukuna", "Gojo", "Kenjaku")

// console.log(arr[3]);
// console.log(arr2[1]);

// Array Methods

arr2.push("Kashimo")
// console.log(arr2);

arr2.pop();
// console.log(arr2);

arr2.unshift("Yuji")
// console.log(arr2);

arr2.shift();
// console.log(arr2);

// console.log(arr2.includes("Kenjaku"));
// console.log(arr2.indexOf("Gojo"));
// console.log(arr2.join())        //----> This is used to create a string by joining all elements of array


//slice() and splice()

const arr3 = [1,2,3,4,5,6]
console.log("A ", arr3);

console.log(arr3.slice(1,3));
console.log("B ", arr3);

console.log(arr3.splice(1,3));
console.log("C ", arr3);
