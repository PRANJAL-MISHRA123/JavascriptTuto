
// Immediately Invoked Function Expression(IIFS)
// These functions gets immediately executed 
// The reason for their use is to prevent pollution from global scope  
// The most important part of the IIFE is ";"
// The ";" is used to terminate the IIFE context


// Named IIFE
(function chai(){               // Here the first "()" contains the function declaration
     console.log("DB CONNECTED");
})();                            // and the second "()" is for execution

// Simple IIFE
( () =>{
    console.log("DB CONNECTED TWO");
})();

// To pass arguments 
((name) => {
    console.log(name);
})("Pranjal");
