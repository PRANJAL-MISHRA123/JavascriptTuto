
// var c = 100;
let a = 100;

if(true){
    let a = 10;
    const b = 20;
    var c = 30;

    // console.log("INNER : ", a);
}

// console.log(a);       // This will give error as we cannot use let variables outside their scope
// console.log(b);       // This will give error as we cannot use const variables outside their scope
// console.log(c);  
// console.log("OUTER : ", a);   

function one(){

    const username = "Pranjal"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);     //--> This will show error coz variable is outside of it's scope

    two()
}

// one()

if(true){
    const username = "Arjun"
    if(username === "Arjun"){
        const website = "Google"
        // console.log(username + " " + website);
    }
    // console.log(website);
}

// console.log(username);

console.log(addOne(10));

function addOne(num){
    return num + 1;
}

// addOne(10);

const addTwo = function(num2){
    return num2 + 2;
}

// addTwo(12);

console.log(addTwo(12));

// addThree(3);              // Error : Because in this function declaration we also used a variable

const addThree = function(num3){
    return num3 + 3;
}



