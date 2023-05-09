const emptyP = document.querySelector(".insertedText");
const buttonEv = document.querySelector(".button");

buttonEv.addEventListener("click", () => {
  let userName = prompt("ciao, come ti chiami?");
  let risultato = prompt("di cosa hai bisogno?");
  emptyP.textContent = userName + risultato + " se non oggi domani";
});

let formData = document.querySelector(".form");
let submit = document.querySelector(".submit");
let allData = document.querySelectorAll(".input_text");

let outputContainer = document.querySelector(".outputContainer")

formData.addEventListener("submit", (event) => {
  event.preventDefault();
  for (const input of allData) { 
    const paragraphEl = document.createElement ("p");
    paragraphEl.textContent =  input.value
    outputContainer.appendChild(paragraphEl)
    
  }

});

// // emptyP.textContent
// clickButton();
// // function clickButton()
// r("submit", (event) => {});

// onsubmit = (event) => {};
