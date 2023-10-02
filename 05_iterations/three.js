
const arr = [1,2,3,4,5]
const arr2 = ["Sukuna", "Gojo", "Kenjaku"]

// For of Loop 
// This is used to easily loop thru Arrays and Objects

// for (const num of arr) {
//     console.log(num);
// }

// for (const num of arr2) {
//     console.log(num);
// }

const greetings = "Hello World"

// for(const greet of greetings){
//     console.log(`Each character is ${greet}`);
// }

// ************** Maps *************************

const map = new Map()

map.set('IN', "INDIA")
map.set('US', "AMERICA")
map.set('FR', "FRANCE")

// for (const key of map) {
//     console.log(key);
// }

// To Separaterly print keys and values of map

for (const [key, value] of map) {
    console.log(key, ":", value);   
}

const games = {
    game1 : "NFS",
    game2 : "GTA"
}

// The following code will give error coz objects cannot be iterated thru this particular method
// for (const game of games) {
//     console.log(game);
// }