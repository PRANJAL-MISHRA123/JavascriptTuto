const n1 = 100
// console.log(n1);

const n2 = new Number(200)              //----> This is used to specify the number datatype explicitly
// console.log(n2);

// console.log(n2.toString());
// console.log(n2.toString().length);

// console.log(n2.toFixed(2));

const n3 = 23.89;
const n4 = 123.89

// console.log(n3.toPrecision(3));
// console.log(n4.toPrecision(3));

const n5 = 1000000
// console.log(n5.toLocaleString());          //--- This puts commas to the given value in american way
// console.log(n5.toLocaleString('en-IN'))    // ---> This puts commas in indian way


// *******************Maths***********************

// console.log(Math);
// console.log(Math.abs(-45));
// console.log(Math.round(4.56));
// console.log(Math.floor(4.8));
// console.log(Math.ceil(4.2));
// console.log(Math.max(4,1,3,5));
// console.log(Math.min(4,1,3,5));

console.log(Math.random());                // --------> This function will generate any random value between 0 and1
console.log(Math.random());           

console.log((Math.random() * 10) + 1);      // ----> We add 1 for safety e.g. if the number generated is 0.04 
console.log(Math.floor(Math.random() * 10 + 1));      // ----> We use floor() to get a single digit

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);   //---> This equation is used to find random values between min and max





