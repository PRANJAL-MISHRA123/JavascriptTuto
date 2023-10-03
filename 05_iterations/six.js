// const coding = ["py", "js", "ruby", "java", "cpp"]

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// })

// The above code is not the right way to return array elements using for each loop

// console.log(values);

const nums = [1,2,3,4,5,6,7,8,9,10]

// Using filer() 
// In filter() there is also a call back function which access each value and return the values satisfying the given condition.
const values = nums.filter( (num) => num > 4)

const values2 = nums.filter( (num) => {
    return num > 4       //--> here we have to explicitly write "return" because of the use of "{}" 
})

// console.log(values);
// console.log(values2);

// Returning values using for each loop

const values3 = []

nums.forEach( (num) => {
    if(num > 4){
        values3.push(num)
    }
})

// console.log(values3);

const books = [
    {
        title : "Book One", genre : "Fiction", edition : "2010"
    },
    {
        title : "Book Two", genre : "Noir", edition : "2015"
    },
    {
        title : "Book Three", genre : "Sci Fi", edition : "2021"
    },
    {
        title : "Book Four", genre : "Fiction", edition : "2011"
    },
    {
        title : "Book Five", genre : "Noir", edition : "2023"
    }
]

// Now suppose we have to find the books with Noir genre 

const userBooks = books.filter( (book) => book.genre === "Noir" )

// console.log(userBooks);

// Now suppose we have to find the books with 2020 or newew edition

const userBooks2 = books.filter( (book) => book.edition >= 2020)

console.log(userBooks2);