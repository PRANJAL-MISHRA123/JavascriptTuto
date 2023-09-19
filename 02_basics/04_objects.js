
// Simpleton object
 const tinderUser = new Object();
 
 tinderUser.id = "123321"
 tinderUser.name = "jack"
 tinderUser.isLoggedIn = false

//  console.log(tinderUser);

 const regularUser = {
    email : "ryan@outlook.com",
    name : {
        userFullname :
        {
            first_name : "Ryan",
            last_name : "Reynolds"
        }
    }
 }

//  console.log(regularUser.name.userFullname.last_name);
//  console.log(regularUser.name.userFullname);
//  console.log(regularUser.name);
 
const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}
const obj3 = {5 : "a", 6 : "b"}

// const finalObj = {obj1 , obj2, obj3}    // This will not combine the objects properly
// console.log(finalObj);

// The correct way to combine objects
const finalObj = Object.assign({}, obj1, obj2, obj3) // here {} is target and obj2,obj2,obj3 are sources
// console.log(finalObj);

// The most preferred way to combine objects
const resObj = {...obj1, ...obj2, ...obj3}
// console.log(resObj);

const users = [
    {
        email : "abc@gmail.com",
        name: "Jacob"
    },
    {
        email : "def@gmail.com",
        name : "Jake"
    },
    {
        email : "def@gmail.com",
        name : "Jake"
    },
    {
        email : "def@gmail.com",
        name : "Jake"
    }
]

// console.log(users[1].email);

// console.log(Object.keys(tinderUser));  // Very Imp as it gives the array of the keys of the obj mentioned
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)) // This will provide the key value pairs as subarray in a superarray

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // This is used to find if the particular Object has a property or not.