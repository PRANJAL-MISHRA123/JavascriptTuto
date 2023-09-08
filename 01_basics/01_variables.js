const accountId = 1245
let accountEmail = "groastsatyam@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

console.log(accountId);

accountEmail = "abc@gmail.com"
accountPassword = "12354"
accountCity = "Delhi"

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountEmail, accountPassword, accountCity])