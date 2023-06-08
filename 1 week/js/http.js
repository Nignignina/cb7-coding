import { MockCountry } from "./fn.js";

const BASE_URL = "https://api.musement.com/api/v3/cities/";

export const getCities = async () => {
  const res = await fetch(BASE_URL, {
    headers: {
      "X-Musement-Application": "{ applicationValue }",
      "X-Musement-Version": "3.4.0",
    },
  });

  const data = await res.json();
  return data;
};

//value OF ALL COUNTRY FROM array
// getCities().then((data) => {
//   data.map(({ country }) => console.log(country));
// });
// selected country by id

// getCities().then((data) => {
//   data.map(({ meta_description }) => console.log(meta_description));
// });
export const country = [60, 82, 139, 66, 64];

getCities()
  .then((data) => {
    console.log(data);
    const france = data.filter((cities) => cities.country.id === 60);
    const italy = data.filter((cities) => cities.country.id === 82);
    const spain = data.filter((cities) => cities.country.id === 139);
    const portugal = data.filter((cities) => cities.country.id === 66);
    const germany = data.filter((cities) => cities.country.id === 64);
    console.log(italy);

    MockCountry(france, "#france");

    MockCountry(italy, "#italy");
    MockCountry(spain, "#spain");
    // MockCountry(greece, "#greece");
    MockCountry(portugal, "#portugal");

    MockCountry(germany, "#germany");

    // modalCity(data);
  })
  .catch((error) => {
    console.error("Si è verificato un errore:", error);
  });
