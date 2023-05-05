// function es2(){
//     console.log("esercizio2");

// let firstNumber = parseInt(prompt("Inserisci il primo numero"));
// let operator = prompt("scegli l'operatore")
// let secondNumber = parseInt(prompt("Inserisci il secondiìo numero"));
// let result;

// switch (operator) {
//     case "+":
//      result = firstNumber + secondNumber
//      console.log("il risultato è" +  result);
//      break;

//      case "-":
//      result = firstNumber - secondNumber
//      console.log("il risultato è" +  result);
//      break;

//      case "*":
//      result = firstNumber * secondNumber
//      console.log("il risultato è" +  result);
//      break;

//      case "/":
//      result = firstNumber / secondNumber
//      console.log("il risultato è" +  result);
//      break;

//  }
// }
// es2();

// function es2() {
//     const dataUser = {
//         nickname:"Nina",
//         age: 29,
//         place:"Altofonte",
//         hair: "curly"
//     }
//     console.log(`il mio nome è ${dataUser.nickname}`)
//     console.log(`la mia età è ${dataUser.age}`)
//     console.log(`il mio posto è ${dataUser.place}`)
//     console.log(`i miei capelli sono ${dataUser.hair}`)

// }

// es2()

function calcolo(num1, num2, operator) {
  function addiction() {
    return num1 + num2;
  }
  function division() {
    return num1 / num2;
  }
  function moltiplication() {
    return num1 * num2;
  }
  function subtraction() {
    return num1 - num2;
  }

  if (operator==="+") {
    console.log(addiction());
  } else if (operator==="-") {
    console.log(subtraction())
  } else if (operator==="/") {
    console.log(division())
  } else if (operator==="*"){
    console.log(moltiplication())
  }
}

const num1=parseInt(prompt ("inserisci numero"))
const num2=parseInt(prompt ("inserisci ilo 2° numero"))
const operator=(prompt ("inserisci operatore"))

calcolo(num1, num2, operator)

