let str1 = "Sukuna"
let str2 = "Gojo"

// console.log(str1 + " is more powerful than " + str2); // -----> But this way is not recommended

// String interpolation 

// console.log(`${str1} is more powerful than ${str2}`); // ----> The recommended way

const str3 = new String("Kya bole")

// console.log(str3[0]);
// console.log(str3.__proto__);

// console.log(str3.charAt(4));
// console.log(str3.indexOf('a'));
// console.log(str3.toUpperCase());

const str4 = str3.substring(0,4);
// console.log(str4);

const str5 = str3.slice(0,4);
const str6 = str3.slice(-89, 3); // In slice function we can also give negative values

// console.log(str6);
// console.log(str5);


const str7 = " Mahoraga is So sick    "
// console.log(str7.trim());

const url = "https://www.apple.com/in/"
console.log(url.replace('apple', 'google'));

console.log(url.includes('sukuna'));

console.log(url.split('//'));