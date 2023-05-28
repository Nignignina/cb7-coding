const cE = (element) => document.createElement(element);
const qS = (element) => document.querySelector(element);
// crea  li
const noteGenerator = (pippo) => {
  const note = cE("li");
 const iconCheck= cE("i")
  const icontrash = cE("i");
  icontrash.className = "fa fa-trash";
  note.textContent = pippo;
  const removeButton = cE("button");
  note.className = "note";
  const checkButton = cE("button")
  checkButton.setAttribute("type", "button")
  checkButton.className="check";
  iconCheck.className ="fa-thin fa-circle-check";
  


  removeButton.addEventListener("click", (e) => {
    todoList = todoList.filter((todo) => todo.id !== pippo.id);
    // console.log(todoList.indexOf(pippo));
    // todoList.splice(index, 1)
    // note.remove()
    // console.log(index)

    // console.log();
    let index = todoList.findIndex((todo) => pippo === todo.id);
    todoList.splice(index);
    console.log(index);
    note.remove();
  });
  removeButton.setAttribute("name", "remove");
  removeButton.textContent = "";
  removeButton.className = "removeButton";
  removeButton.appendChild(icontrash);
  note.append(removeButton, checkButton);
  return note;

  //   al click devo far si che e.target[0] sia aggiunto a li e storato in to dolist
};

const HandleSubmit = (e) => {
  // deve pushare all'aray
  e.preventDefault();
  todoList.push({ content: e.target[0].value, id: Date.now() });
  Render();
};

const form = qS(".wrapperForm");
const listItems = qS(".list");
let todoList =JSON.parse(localStorage.getItem("todoList")) || [];
const textInput = qS(".inputText");

const Render = () => {
  textInput.value = "";
  listItems.textContent = "";
  todoList.forEach((todo) => {
    listItems.appendChild(noteGenerator(todo.content));
  });
  localStorage.setItem("todoList", JSON.stringify(todoList));
};

// quindi per ogni nota/oggetti di todolist devo creare un li da aggrappare a listItems(ul)
form.addEventListener("submit", HandleSubmit);
