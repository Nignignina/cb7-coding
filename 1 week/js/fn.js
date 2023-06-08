import { getCities, country } from "./http.js";

const cE = (el) => document.createElement(el);
const qS = (el) => document.querySelector(el);

const formatText = (stringa) => stringa.substring(0, 210) + "...";

export const MockCountry = (array, id) => {
  array.forEach((el) => {
    // card
    const wrapperCity = cE("div");

    const imageWrapper = cE("div");
    const imageWrapperHover = cE("div");
    const image = cE("img");
    const contentCity = cE("div");
    const nameCities = cE("h2");
    const backgroundContent = cE("div");
    // text
    const textContent = cE("p");
    const activitiesInfo = cE("div");
    const activities = cE("div");
    const numberactivities = cE("div");
    const number = cE("p");
    const activity = cE("p");
    const descActivity = cE("div");
    const descActivityText = cE("p");

    // button
    const divButton = cE("div");
    const button = cE("input");

    const wrapperCountry = qS(id);
    backgroundContent.classList.add("backgroundContent");
    textContent.classList.add("textContent");
    number.textContent = el.event_count;
    imageWrapperHover.classList.add("imageWrapperHover");
    imageWrapper.classList.add("wrapperimage");
    nameCities.classList.add("titleCity");
    nameCities.textContent = el.name;
    textContent.textContent = formatText(el.content);
    descActivityText.textContent = el.meta_title || "scopri le ultime";
    image.src = el.cover_image_url;
    image.alt = "city image";
    contentCity.classList.add("contentCity");
    textContent.classList.add("textContent");
    activity.textContent = "Events";
    activities.classList.add("activitiesWrapper");
    numberactivities.classList.add("wrapperNumber");
    number.classList.add("number");
    activitiesInfo.classList.add("activitiesInfo");
    // button
    button.setAttribute("id", el.id);
    button.setAttribute("type", "button");
    button.setAttribute("value", "Discover more");
    button.classList.add("buttonCity");
    divButton.classList.add("divButton");

    button.addEventListener("click", () => {
      console.log(el);

      const appendModal = qS(".modal");
      appendModal.classList.toggle("hidden");
      appendModal.append(modalCity(el));
    });

    descActivity.classList.add("descActivity");
    descActivityText.classList.add("descActivityText");

    wrapperCountry.classList.add("wrapperCountry");
    wrapperCity.classList.add("wrapperCity");
    // button
    divButton.append(button);
    descActivity.append(descActivityText);
    activitiesInfo.append(numberactivities, activity);

    numberactivities.append(number);
    activities.append(activitiesInfo, descActivity);

    backgroundContent.append(textContent);
    contentCity.append(nameCities, backgroundContent, divButton, activities);
    imageWrapper.append(image);
    wrapperCity.append(imageWrapperHover, imageWrapper, contentCity);

    wrapperCountry.appendChild(wrapperCity);
  });
};

const modalCity = (city) => {
  console.log("angello");
  const modalcontainer = cE("div");
  const modalContent = cE("div");
  const mWrapperImage = cE("div");
  const mImage = cE("img");
  const mTipsTitle = cE("h2");
  const mText1 = cE("div");
  const mTipstext = cE("p");

  // event

  // image
  mWrapperImage.classList.add("mWrapperImage");
  mImage.src = city.cover_image_url;
  mImage.alt = "image";
  mWrapperImage.append(mImage);

  const closeButton = qS("closeModal");
  closeButton.addEventListener("click", () => {
    appendModal.classList.add("hidden");
  });

  // title

  modalcontainer.classList.add("modalcontainer");
  modalContent.classList.add("modalContent");
  mTipstext.textContent = city.meta_description;
  mTipsTitle.textContent = city.meta_title;
  mTipsTitle.classList.add("mTipsTilte");
  mTipstext.classList.add("mTipstext");
  mText1.classList.add("mText1");
  console.log(mTipstext);

  mText1.append(mTipsTitle, mTipstext);

  modalcontainer.append(mWrapperImage, mText1);

  return modalcontainer;

  // appendModal.append(modalcontainer);
};
