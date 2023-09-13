// Primitive data type are stored in Stack memory  ---------------> Here the working is based on Call by Value
// Non-Primitive data type are stroed in Heap memory --------------> Here the working is based on call by reference

let name1 = "Sukuna"
let name2 = name1

name2 = "Gojo"

console.log(name1);
console.log(name2);

let user1 = {
    email : "user1@gmail.com",
    name : "Kenjaku"
}

let user2 = user1

user2.name = "Kashimo"

console.log(user1.name);
console.log(user2.name);