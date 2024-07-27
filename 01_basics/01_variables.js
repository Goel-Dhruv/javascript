const accountId = 144553
let accountEmail = "dhruv@gmail.com"
var accountPassword ="12345"
accountCity = "Jaipur"
let accountState;
//accountId =2 //not allowed
console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/ 

accountEmail="hc@hc.com"
accountPassword="2121212121"
accountCity="Bengaluru"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
