
let date1 = new Date()
let localDate = date1.toLocaleString('en-IN', {timeZone: 'IST'});

// console.log(date1);
// console.log(date1.toString());
// console.log(date1.toDateString());
// console.log(date1.toLocaleString());
// console.log(date1.toLocaleDateString());

// console.log(localDate);

let date2 = new Date(2023, 0, 23)     //-----> Remember The month starts with 0 here 
// console.log(date2.toDateString());    //----> This will create a date as "Mon Jan 23 2023" 

let date3 = new Date(2023, 0, 23, 5, 3)
// console.log(date3.toLocaleString());

let date4 = new Date("2023-01-23")
// console.log(date4.toLocaleString());

let date5 = new Date("03-24-2023")
// console.log(date5.toLocaleString());

let timestamp = Date.now();
// console.log(timestamp);

// console.log(date5.toLocaleString())

// console.log(Math.floor(Date.now()/1000));

let date6 = new Date();
// console.log(date6.getDate());

date6.toLocaleString('default', {
    weekday: "long"
})





