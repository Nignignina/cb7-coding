export const cE = (el) => document.createElement(el);
export const qS = (el) => document.querySelector(el);

// creo la funzione che mi genera gli elementi del singolo prodotto
export const createProduct = (data) => {
  const wrapperEl = cE("div");
  const imageEl = cE("img");
  const textEl = cE("div");
  const titleEl = cE("h3");
  const descriptionEl = cE("p");
  const ratingEl = cE("p");
  const button = cE("button");
  const priceEl = cE("h4");

  // aggiungiamo classi e valori

  wrapperEl.className = "Card";
  textEl.className = "wrapper_text";
  titleEl.textContent = data.title;
  descriptionEl.textContent = data.description;
  ratingEl.textContent = parseFloat(data.rating);
  button.className = "button_card";
  button.textContent = "Add to cart";
  priceEl.textContent = parseFloat(data.price + "$");
  imageEl.src = data.thumbnail;
  imageEl.alt = data.title;

  textEl.append(titleEl, descriptionEl, ratingEl, priceEl, button);
  wrapperEl.append(imageEl,textEl);
  return wrapperEl;
};
