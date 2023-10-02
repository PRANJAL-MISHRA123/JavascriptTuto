const arr1 = ["py", "cpp", "js"]

// Using forEach loop to iterate
arr1.forEach(function (val){     // Here we omit the name of the function and pass the variavle name as arguments
    // console.log(val);
})


// Using arrow function
arr1.forEach( (val) => {      //---> here we omit the "cons func = " part of arrow function and pass the variable as arguments
    // console.log(val);
})


function printMe(item){
    console.log(item);
}

// Using function to print 
// arr1.forEach(printMe)    //--> here remember use the function name only , do not execute the function here

arr1.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
})

const myCoding = [
    {
        language : "java",
        filename : ".java"
    },
    {
        language : "javascript",
        filename : ".js"
    },
    {
        language : "python",
        filename : ".py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.language, item.filename);
})
