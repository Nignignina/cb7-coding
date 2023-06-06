import { getCities, country } from "./http.js";

const cE = (el) => document.createElement(el);
const qS = (el) => document.querySelector(el);

const formatText = (stringa) => stringa.substring(0, 150) + "...";

export const MockCountry = (array, id) => {
  array.forEach((el) => {
    const wrapperCity = cE("div");

    const imageWrapper = cE("div");
    const imageWrapperHover = cE("div");
    const image = cE("img");
    const contentCity = cE("div");
    const nameCities = cE("h2");
    const backgroundContent = cE("div");
    const textContent = cE("p");

    // append principal
    const wrapperCountry = qS(id);
    backgroundContent.classList.add("backgroundContent");
    textContent.classList.add("textContent");

    imageWrapperHover.classList.add("imageWrapperHover");
    imageWrapper.classList.add("wrapperimage");
    nameCities.textContent = el.name;
    textContent.textContent = formatText(el.content);
    image.src = el.cover_image_url;
    contentCity.classList.add("contentCity");
    textContent.classList.add("textContent");

    wrapperCountry.classList.add("wrapperCountry");
    wrapperCity.classList.add("wrapperCity");

    backgroundContent.append(textContent);
    contentCity.append(nameCities, backgroundContent);
    imageWrapper.append(image);
    wrapperCity.append(imageWrapperHover, imageWrapper, contentCity);

    wrapperCountry.appendChild(wrapperCity);
  });
};
