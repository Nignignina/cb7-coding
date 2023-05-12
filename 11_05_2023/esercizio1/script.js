const students = [
  {
    fullname: "Giovanni Esposito",
    id: 1,
    stato: "mancato pagamento",
  },
  {
    fullname: "Andrea Esposito",
    id: 2,
    stato: "pagamento effetuato",
  },
  {
    fullname: "Barbara Esposito",
    id: 3,
    stato: "mancato pagamento",
  },
  {
    fullname: "Cristian Esposito",
    id: 4,
    stato: "mancato pagamento",
  },
];

// creo le costanti
const cE = (element) => document.createElement(element);
const qS = (element) => document.querySelector(element);
const divEl = cE("div");
const unorderList = cE("ul");

// attribuisco le classi css
divEl.className = "div.list";
unorderList.className = "unorderList";


// appendo gli elementi
document.body.appendChild(divEl);
divEl.appendChild(unorderList);

for (let student of students) {
  const listItem = cE("li");
  listItem.className = "listItem";
  listItem.textContent = Object.values(student);
  unorderList.appendChild(listItem);
}

// volevo creare una lista per ogni elemento del mio array ma sono entrata in palla


// esercizio 2

// const todos = [
//   {
//   },
//   {
//   },
//   {
//   },
//   {
//   },
// ];

// const button = qS(".crea")
// const textInput = qS("addtodo")
// const list = qS(".list")

// button.addEventListener("click", generateList)

// const generateList = (event) =>  {

//     if (textInput.value ==="") return;
//     const list = qS(".list");
//     list.appendChild(textInput.value);

// }


