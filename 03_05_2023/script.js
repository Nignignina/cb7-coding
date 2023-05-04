alert("Esercizio")
let userNumber = prompt("Inserisci un numero")

if (userNumber % 2 === 0){
    console.log("il numero è pari")
} else {
    console.log("il numero è dispari")
     }

// if (userNumber % 3 === 0){
//     alert("il numero è dispari")
// } else {
//     alert("il numero è dispari")
// }

alert("esercizio2")
let Number = prompt ("Inserisci un numero")
Number % 2 === 0
? alert("Il numero è pari")
: alert("Il numero è dispari")

alert("eserciccio3")

let firstNumber = parseInt(prompt("Inserisci il primo numero"));
let operator = prompt("scegli l'operatore")
let secondNumber = parseInt(prompt("Inserisci il secondiìo numero")); 

switch  (operator){
    case "+":
    console.log(firstNumber + secondNumber);
    break;
    case "-":
    console.log(firstNumber - secondNumber);
    break;
    case "*":
    console.log(firstNumber * secondNumber);
    break;
    case "/":
    console.log(firstNumber / secondNumber);
    
}