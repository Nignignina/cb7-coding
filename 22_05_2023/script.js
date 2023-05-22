import { qS } from "./fn.js";

export const createCard = (data) => {
  const city = qS(".citta");

  const gradi = qS(".temperature");

  city.textContent = data.location.name;
  gradi.textContent = data.current.temp_c + " °";
};
