import { createEl, qS, wrapCart } from "./fn.js";
import { userData } from "./credentials.js";
import { GET } from "./htttp.js";

// GET("/1").then((data) => console.log(data))
// richiamo get attribuendogli data che poi userà lo stesso data per creare le carte del carrello

// creo la sezione input>form>input>button>da appendere al body
const bodyEl = qS("body");
const logIn = createEl("form", "", { name: "class", value: "logIn" });
const name = createEl("input", "", { name: "type", value: "text" });
const password = createEl("input", "", { name: "type", value: "password" });
const button = createEl(
  "input",
  "",
  { name: "type", value: "submit" },
  { name: "class", cvalue: "LogIn" }
);

button.textContent = "Log in";
logIn.append(name, password, button);
bodyEl.append(logIn);

logIn.addEventListener("submit", (evnt) => {
  evnt.preventDefault();
// arrowfuncton ogni callbacks 
  const isAuth = userData.find(
    (user) =>
      user.username === evnt.srcElement[0].value &&
      user.password === evnt.srcElement[1].value
  );

  // console.log(evnt.srcElement[0].value)
  // return isAuth;MI DA

  if (isAuth) {
    alert("bravo");
    bodyEl.removeChild(logIn);
    console.log(isAuth.id)

    GET(isAuth.id).then((data) =>
      data.products.forEach((product) => {
        console.log(product);
        bodyEl.append(wrapCart(product));
      })
    );
  } else {
    alert("sbagliaste");
  }
});

// creo la sezione carrello>wrapper>appendo_dopo_il_log_in_rispetto_l'id

// export const createEl = (type, content, ...attributes) =>{
//     const element = document.createElement(type);

//     element.textContent = content;
//     attributes.forEach((attribute) => element.setAttribute(attribute?.name ,attribute?.value));
//     return element;

// }
