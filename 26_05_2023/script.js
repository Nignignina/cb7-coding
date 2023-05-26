const cE = (element) => document.createElement(element);
const qS = (element) => document.querySelector(element);
// crea  li
const noteGenerator = (pippo) => {
  const note = cE("li");

  note.textContent = pippo;
  const removeButton = cE("button");
  removeButton.addEventListener("click", () => {
    todoList = todoList.filter((todo) => todo.id !== pippo.id);
    // mi sono bloccata a rimuovere l'elemento
    
    
  });
  
  removeButton.setAttribute("name", "remove");
  removeButton.textContent = "rimuovi";
  removeButton.className = "removeButton";
  note.appendChild(removeButton);

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
let todoList = [];
const textInput = qS(".inputText");

const Render = () => {
  textInput.value = "";
  listItems.textContent = "";
  todoList.forEach((todo) => {
    listItems.appendChild(noteGenerator(todo.content));
  });
};

// quindi per ogni nota/oggetti di todolist devo creare un li da aggrappare a listItems(ul)
form.addEventListener("submit", HandleSubmit);
