const curr_Top3 = ["Sukuna", "Gojo", "Kenjaku"]

const newGen_Top3 = ["Yuji", "Megumi", "Yuta"]

// curr_Top3.push(newGen_Top3);       //--> This operation will add second array as a new element to first

// console.log(curr_Top3);      

const top6_allTime = curr_Top3.concat(newGen_Top3);
// console.log(top6_allTime);

// Using spread opeator(....) to join two Arrays

const top6 = [...curr_Top3, ...newGen_Top3]  //---> Preferred way of joining arrays as we can join more than 2 
// console.log(top6);

const arr1 = [1, 2, [3, 4, 5], 6, [7, [8, 9]]]  //--> This is used to make the array regular

const arr2 = arr1.flat(Infinity)           //----> Here we used "Infinity" as the arguement but it is preferred to use the correct depth no. (in this case 2)
// console.log(arr2);


// To check if it is Array or not
// console.log(Array.isArray(arr1));

// console.log(Array.isArray("Arjun"));

// To convert it into Array
console.log(Array.from("Arjun"));
console.log(Array.from({name: "Arjun"})) //--> This will give you output as [] since we do not specify to create the array like "on the basis of key" or "on the basis of value"

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

