// value limit
const limit = 6;

// user number
let userNumber;
userNumber = Number(prompt("Inserisci un numero da 1 a 6:"));

// pc number
const pcNumber = Math.ceil(Math.random() * limit)

console.log(userNumber, pcNumber);