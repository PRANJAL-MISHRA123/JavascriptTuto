const nums = [1,2,3,4,5,6,7,8,9]

// To add 10 to each element
const nums2 = []

nums.forEach( (num) => {
    nums2.push(num + 10)
})

// console.log(nums2);

// Now adding 10 to each element using Map().
// Using map coz it directly returns
// const newNums = nums.map( (num) => num + 10 )

// *******Chaining***********


const newNums = nums.map( (num) => num * 10).map( (num) => num + 1).filter( (num) => num >=50)
// In the above function we first multiply each element by 10 and then add 1 to it and then filter out the values which are greater than or equal to 50.
console.log(newNums);




