
function func1(){
    console.log("Sukuna");
    console.log("Gojo");
    console.log("Kenjaku");
}

// func1 --> reference of the function

// func1();

// function sum(num1, num2){
//     console.log(num1 + num2);
// }

function sum(num1, num2){
    let res = num1 + num2
    return res
}


// sum(1,4);
// sum(2, "a");  //--> Output will be 2a
// sum(3, null);  //---> Output will be 3

const res = sum(2,7);
// console.log("Result : ", res);

function loginUserMessage(username){

    // if(username === undefined)
    // {
    //     console.log("Please Enter a valid user name");
    // }                                           //----> This will also work like the below function
    if(!username){                                   //---> Here username works as a "false" boolean  
        console.log(`Please enter a valid user name`);
    }
    else{
        return `${username} just logged in`
    }
    
}

function loginUserMessage(username = "Sukuna"){     //---> Here we do not need if else coz "Sukuna" works as default

        return `${username} just logged in`    
}

// console.log(loginUserMessage("Pranjal"));
// console.log(loginUserMessage());


// function calculateCartPrice(...num1){    //---> here "..." is the rest operator , it creates an array of 
//                                     //          all the arguments passed
//     return num1;
// }

// // "..." Operator is used to handle many arguments with single parameter
// // "..." is also can be used as Separator operator

// console.log(calculateCartPrice(200));
// console.log(calculateCartPrice(200, 300, 500));

function calculateCartPrice(val1, val2, ...num1){  
    return num1
}

// console.log(calculateCartPrice(100, 200 , 300, 4000)); // here val1 = 100, val2 = 200 and 
                                                    //  num1 will be [300, 4000]  


const user = {
    username : "Pranjal",
    price : 10000
}

const user2 = {
    username : "Arjun",
    prices : 10000
}

function handleObject(obj){
    console.log(`Username is ${obj.username} and price is ${obj.price}`);
}

// handleObject(user);
// handleObject(user2);              //--> Here the price will come undefined
// handleObject({
//     username : "Veer",
//     price : 100
// })

const newArray = [1,3,5,7]

function returnSecondIndexValue(arr){
    return arr[1];
}

console.log(returnSecondIndexValue(newArray));
console.log(returnSecondIndexValue([1,2,3,4]));


                                              