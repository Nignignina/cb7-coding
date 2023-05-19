import {
  cE,
  qS,
  createProduct,
  createProductModal,
  qSa,
  cartModal,
  loginModal,
} from "./utils/fn.js";
const rootEl = qS("#root");
const productList = cE("div");
const productListTitle = cE("h2");
const searchedProduct = qS(".searchProduct");
let productListData = [];
const categoria = qS(".categoria");
const showAllcategories = qS(".showall");
export const cartButton = qS(".cartButton");
// array vuota dove pusho i miei prodotti
export let cartList = [];

productList.className = "productList";
productListTitle.textContent = "Products for you!";

// creo la funzione che mi crea il prodotto n volte

// const productsMock = [
//   {
//     id: 1,
//     title: "iPhone 9",
//     description: "An apple mobile which is nothing like apple",
//     price: 549,
//     discountPercentage: 12.96,
//     rating: 4.69,
//     stock: 94,
//     brand: "Apple",
//     category: "smartphones",
//     thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/1/1.jpg",
//       "https://i.dummyjson.com/data/products/1/2.jpg",
//       "https://i.dummyjson.com/data/products/1/3.jpg",
//       "https://i.dummyjson.com/data/products/1/4.jpg",
//       // "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//     ],
//   },
// ];

// productsMock.forEach = ((product) => {
//     productList.append(createProduct(product));

// });

// rootEl.append(productList);
// questo era per il mock rootEl.append(createProduct(productsMock));

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    productListData = data.products;
    productListData.forEach((product) =>
      productList.append(createProduct(product))
    );
  });

rootEl.append(productListTitle, productList);

// aggiungo l'evento all'input
searchedProduct.addEventListener("input", (evt) => {
  // console.log(evt.target.value)

  productList.textContent = "";
  productListData
    .filter(
      (segnapostoprimadelfiltro) =>
        segnapostoprimadelfiltro.description
          .toLowerCase()
          .includes(evt.target.value.toLowerCase()) //[]
    )
    .forEach((segnapostodopoilfiltro) =>
      productList.append(createProduct(segnapostodopoilfiltro))
    );
});

categoria.addEventListener("change", (e) => {
  productList.textContent = "";
  productListData
    .filter((obj1) => obj1.category === e.target.value)
    .forEach((obj2) => productList.append(createProduct(obj2)));
});

showAllcategories.addEventListener("click", (e) => {
  productList.textContent = "";

  productListData.forEach((obj2) => productList.append(createProduct(obj2)));
});

cartButton.addEventListener("click", () => {
  rootEl.append(cartModal(cartList));
  // rootEl.removeChild(cartModal(cartList));
});

// {
//   once: true;
// }
rootEl.append(loginModal());

