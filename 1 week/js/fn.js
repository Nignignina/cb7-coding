import { getCities } from "./http.js";

const cE = (el) => document.createElement(el);

const qS = (el) => document.querySelector(el);

getCities()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Si è verificato un errore:", error);
  });

const countryMock = (country) => {
  const divCountry = cE("div");
  const nameCountry = cE("p");
  const citiesWrapper = cE("div");

  const wrapperCountry = qS(".countries");

  wrapperCountry.append(divCountry);
  divCountry.append(nameCountry, citiesWrapper);

  return divCountry;
};
