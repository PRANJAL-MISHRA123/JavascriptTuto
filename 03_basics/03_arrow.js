
const user = {
    username : "Pranjal",
    price : 1000,

    welcomeMessage : function(){
        console.log(`${this.username} Welcome to our website`);
        // console.log(this);              //---> Tells us the current context
    }
}

// user.welcomeMessage();
user.username = "Arjun";
// user.welcomeMessage();

// console.log(this);        //--> Here this will display {} coz we are in a Node enivornment but if we do the same command in browser it will return a Window type object

function fun2(){
    let username = "Pranjal"
    // console.log(this);
    console.log(this.username);    // O/p -> Undefined coz this do not work in function
}

// fun2();

const fun3 = function (){
    let username = "Pranjal"
    console.log(this);
    console.log(this.username);   // Will also give the same output as above (Undefined)
}

// fun3();

const fun4 = () => {
    let username = "Pranjal"
    console.log(this);  // Here "this" will  print "{}" unlike the above two cases
    console.log(this.username); // Same as aoove output
}

// fun4();

// Understanding Arrow Functions

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

//Implicit Return
// const addTwo = (num1, num2) => num1 + num2  //here we remove the curly braces and put the return value in front of the arrow and omit the return keyword also.

// const addTwo = (num1, num2) => (num1 + num2) // Here we can also use paranthesis to specify the return

//Suppose we want to return Object
const addTwo = (num1, num2) => ({username : "Pranjal"})

console.log(addTwo(3,5));