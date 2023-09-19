// simpleton object
// There are two ways of creating objects 1) Via Literals 2) Via Constructor
// When we create objects via Literals , they do no create simpleton objects but if we create objects using Constructor it will create simpleton objects 


// Object Literals

const mySym = Symbol("key1");  //---> Defining a symbol

const user1 = {
    name : "Pranjal",
    "full name" : "Pranjal Mishra",
    [mySym] : "myKey1",                    //--> When we use symbol as a key, we write it in []
    age : 21,
    email : "en19cs301259@medicaps.ac.in",
    lastLoginDays : ["Saturday", "Sunday"]
}

// There are now two ways to access the values.
// 1. Using dot operator
// console.log(user1.name);

// 2.Using [] 
// console.log(user1["email"])
// console.log(user1[mySym])          //--> When accessing the value of Symbol we do not write it in ""
// console.log(user1["full name"])     //--> This is the more preferred way since if the value is given in string (here "full name") there is now way to access the key using dot operator

user1["email"] = "pranjalmishra@gmail.com";
// Object.freeze(user1);

// user1["email"] = "pranjalmishra@outlook.com"
// console.log(user1);

user1.greeting = function(){
    console.log("Hello JS user")
}

user1.greetingTwo = function(){
    console.log(`Hello JS user ${this.name}`);
}


// console.log(user1.greeting);   // This will return a reference function
console.log(user1.greeting());
console.log(user1.greetingTwo());





