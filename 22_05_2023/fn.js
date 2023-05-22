const cE = (el) => document.createElement(el);
export const qS = (el) => document.querySelector(el);
import { createCard } from "./script.js";

const input = qS("input");
const button = qS("button");

const getTemperature = async (city) => {
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=9fc8a13d449f4fc291f124722232205&q=${city}&aqi=no`
  );
  const data = await res.json();

  console.log(data);

  createCard(data);

  return data;
};

// getTemperature("palermo")

button.addEventListener("click", (evt) => {
  getTemperature(input.value);
//   console.log(input.value);

});

