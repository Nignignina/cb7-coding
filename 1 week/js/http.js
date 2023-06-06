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
export const country = [60, 82, 139, 66, 64];

getCities()
  .then((data) => {
    console.log(data);
    const france = data.filter((cities) => cities.country.id === 60);
    const italy = data.filter((cities) => cities.country.id === 82);

    MockCountry(italy, "#italy");

    // MockCountry(france, "#france");
  })
  .catch((error) => {
    console.error("Si è verificato un errore:", error);
  });

// // città ripetute
// getCities()
//   .then((data) => {
//     const filteredCountries = data.filter((city) =>
//       country.includes(city.country.id)
//     );
//     MockCountry(filteredCountries);
//     // console log
//   })
//   .catch((error) => {
//     console.error("Si è verificato un errore:", error);
//   });
