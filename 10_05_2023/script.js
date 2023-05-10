// const firstData = document.querySelector(".firstData")
const qS = (element) => document.querySelector(element);

const firstData = qS(".firstData");
const secondData = qS(".secondData");
const risultato = qS(".textarea");
const operatore = qS(".operator");

const form = qS(".form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
// calcolo(operatore.value, parseInt(firstData.value), parseInt(secondData.value)) invocazione;
risultato.value=calcolo(operatore.value, parseInt(firstData.value), parseInt(secondData.value))
  // console.log(firstData.value);
  // console.log(operatore.value);
  // console.log(secondData.value);
});


function calcolo(operatore, first, second) {
  let result;
  switch (operatore) {
    case "plus":
      result = first + second;
      break;
    case "mins":
      result = first - second;
      break;
    case "mul":
      result = first * second;
      break;
    case "div":
      result = first / second;
      break;
  }
  return result;
}

