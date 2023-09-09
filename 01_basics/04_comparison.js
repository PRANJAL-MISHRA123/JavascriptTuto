// console.log(null > 0);  --------> false
// console.log(null == 0); ---------> false
// console.log(null >= 0); ---------> true

// The reason is that an equality check and comparison operator < > <= >= works differently
// Comparisons convert null to number, treating it as 0.
// That's why null >= 0 i true while null > 0 is false

// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined >= 0);

//In undefined case the answer is false always

console.log("1" == 1);  //---> true because "==" operator converts '1' into 1
console.log("1" === 1); //---> false because "===" strictly checks meaning it checks the value and datatype


