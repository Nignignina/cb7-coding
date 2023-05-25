import { POST, GET, DELETE } from "./http.js";

const cE = (element) => document.createElement(element);
const qS = (element) => document.querySelector(element);
const rootEl = qS(".root");

const wrapInput = cE("form");
const inputText = cE("input");
const buttonAdd = cE("input");

const wrapperlista = cE("ul");

inputText.className = "inputText";
inputText.setAttribute("type", "text");
inputText.setAttribute("placeholder", "aggiungi una nota");
buttonAdd.className = "buttonAdd";
buttonAdd.setAttribute("type", "submit");
buttonAdd.setAttribute("value", "aggiungi");

buttonAdd.textContent = "Aggiungi";
wrapInput.className = "wrapinput";

GET().then((data) =>
  data.todos.forEach((element) => {
    listItem(element.todo);
  })
);

const listItem = (pippo) => {
  const elementList = cE("li");
  elementList.textContent = pippo;
  elementList.className = "todo";
  const buttonRemove = cE("button");
  buttonRemove.textContent = "rimuovi";
  buttonRemove.addEventListener("click", (e) => {
    wrapperlista.removeChild(elementList);
  } ,DELETE());
 
  elementList.append(buttonRemove);
  console.log(elementList);

  wrapperlista.appendChild(elementList);
};

// wrapperList.className="wrapperList"
wrapInput.append(inputText, buttonAdd);
rootEl.append(wrapInput, wrapperlista);

wrapInput.addEventListener("submit", (e) => {
  e.preventDefault();
  POST(inputText.value);
  console.log(inputText.value);
  listItem(inputText.value);
});
