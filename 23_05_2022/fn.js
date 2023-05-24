

export const cE = (el) => document.createElement(el);
export const qS = (el) => document.querySelector(el);

//oppure create element FUNCTION
export const createEl = (type, content, ...attributes) => {
  const element = document.createElement(type);

  element.textContent = content;
  attributes.forEach((attribute) =>
    element.setAttribute(attribute?.name, attribute?.value));
  return element;
};

// fetch("https://dummyjson.com/carts")
//   .then((res) => res.json())
//   .then(console.log);

// creo la funzione che crea il mock per i prodotti del carrello 

export const wrapCart = (data) => {
  const wrapperEl = createEl("div", "", { name:"class" ,value:"cartItem"} );
  const titleEL = createEl("h4", "price:" + data.title, {name:"class", value:"title"});
  const priceEl = createEl("p", "Price" + data.price, { name: "class", value:"price" });
  const quantityEl = createEl("p", "quantity:" +data.quantity ,{ name:"class", value: "quatity"});
  // const totalPrice = createEl ("p", "prezzototale" + )
wrapperEl.append(titleEL, priceEl, quantityEl);
return wrapperEl;
}

