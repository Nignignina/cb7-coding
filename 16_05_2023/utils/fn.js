export const cE = (el) => document.createElement(el);
export const qS = (el) => document.querySelector(el);
export const qSa = (els) => document.querySelectorAll(els);
const rootEl = qS("#root");

// creo il queyselector all

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
  wrapperEl.addEventListener("click", () => {
    rootEl.append(createProductModal(data));
    const modal = qS(".modalProduct");
    modal.classList.add("show");
  });

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
  // appendo
  textEl.append(titleEl, descriptionEl, ratingEl, priceEl, button);
  wrapperEl.append(imageEl, textEl);
  return wrapperEl;
};

// creo la funzione che mi genera il dettaglio del prodotto
export const createProductModal = (productData) => {
  const wrapperEl = cE("div");
  // qui inserisce l'overlay
  const galleryEl = cE("div");
  const mainImgEl = cE("img");
  const otherImgEl = cE("div");

  // const  thumWrapperEl = cE("div");
  const textEl = cE("div");
  const mainTextEl = cE("div");
  const titleEl = cE("h1");
  const descrEl = cE("p");
  const rateEl = cE("p");

  const buyEl = cE("div");
  const buyFirstBtnEl = cE("button");
  const buySecondtBtnEl = cE("button");
  const closeBtnEl = cE("button");
  closeBtnEl.addEventListener("click", () => {
    const modal = qS(".modalProduct");
    modal.classList.remove("show");
    modal.remove()
  });
  // applico le attributi e classi
  wrapperEl.className = "modalProduct";
  // wrapperEl.setAttribute("id", data.id) credo sopra;
  galleryEl.className = "modalProductGallery";
  otherImgEl.className = "otherimgs";
  mainImgEl.src = productData.thumbnail;
  mainImgEl.alt = productData.title;

  textEl.className = "modalProductText";
  mainTextEl.className = "modalmainText";
  titleEl.textContent = productData.title;
  descrEl.textContent = productData.description;
  rateEl.textContent = productData.rating;

  for (let el of productData.images) {
    const singImg = cE("img");
    singImg.src = el;
    otherImgEl.appendChild(singImg);
    singImg.className = "singImg";
  }

  // inserire img. di prodcutData.images for each img ce img element.src
  const otherSingImgEl = "img";
  buyEl.className = "modalBtns";
  buyFirstBtnEl.className = "button";
  buySecondtBtnEl.className = "button";
  closeBtnEl.className = "closeBtn";
  closeBtnEl.textContent = "X";
  buyFirstBtnEl.textContent = "Compra adesso";
  buySecondtBtnEl.innerHTML = "Aggiungi ai preferiti";

  // appendo
  mainTextEl.append(titleEl, descrEl, rateEl);
  buyEl.append(buyFirstBtnEl, buySecondtBtnEl);

  galleryEl.append(mainImgEl, otherImgEl);
  textEl.append(mainTextEl, buyEl);
  wrapperEl.append(galleryEl, textEl, closeBtnEl);

  return wrapperEl;
};
