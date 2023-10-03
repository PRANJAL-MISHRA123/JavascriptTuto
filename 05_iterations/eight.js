const nums = [1,2,3]

const acc_value = 0;


const total = nums.reduce( (acc, num) => acc + num, acc_value)

//For better understanding
const total2 = nums.reduce ( function (acc, num) {
    console.log(`acc value : ${acc} and num value : ${num}`);
    return acc + num
}, acc_value) 

// console.log(total);
// console.log(total2);

const courses = [
    {
        course_name : "js dev",
        price : 2999
    },
    {
        course_name : "C++ dev",
        price : 2999
    },
    {
        course_name : "Python dev",
        price : 999
    },
    {
        course_name : "Data Science Full Tutorial",
        price : 21999
    }
]

const totalCoursePrice = courses.reduce( (acc, item) => acc + item.price, 0)

console.log(totalCoursePrice);