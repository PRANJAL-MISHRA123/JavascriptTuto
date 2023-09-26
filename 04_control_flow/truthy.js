
// const userEmail = "satyam@abc.com"

// if(userEmail){                          // ----> This condition will works as true (Truthy Values)
//     console.log("User email received");
// }

// else{
//     console.log("User email not detected");
// }

const userEmail2 = ""

// if(userEmail2){                          // ----> This condition will works as false (Falsy Values)
//     console.log("User email received");
// }

// else{
//     console.log("User email not detected");
// }


// Falsy Values
// false, 0, -0, BigInt 0n, "", null, undefined, Nan

// All other values are considered Truthy values like :
// "0", 'false', " ", [], {}, function(){}

const email = []

// To check whether an array is empty
if(email.length === 0)
{
    console.log("Array empty");
}

const emptyObj = {}

// To check whether an object is empty
if(Object.keys(emptyObj).length === 0){
    console.log("Empty Object");
}

// Some key comparison to remember
// false == 0
// true

// false === 0
// false

// false == ''
// true

// 0 == ''
// true

// Null Coalescing Operator(??) null undefined

let val1;
val1 = 5 ?? 10; //Here the value of val1 will be 5 because it takes the first non - null/undefined value
val1 = null ?? 10 // Here val1 = 10
val1 = undefined ?? 15
val1 = undefined ?? 20 ?? 30

console.log(val1);

// Ternary Operator

const score = 120;

score >= 100 ? console.log("Perfect Score") : console.log("Not a Perfect Score");