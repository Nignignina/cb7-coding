// const key = "&apikey=5ae2e3f221c38a28845f05b690bfd1e9ca47a03ce66c4baef6204228";

// const BASE_URL =
//   "https://api.opentripmap.com/0.1/en/places/geoname?name={endpoint}";

// export const GET = async (endpoint) => {
//   const res = await fetch(BASE_URL + endpoint + key);
//   const data = await res.json();

//   return data;
// };

// GET("Paris").then((Paris) => console.log(Paris));

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

const country = [139];

getCities()
  .then((data) => {
    const filteredCountries = data.filter((city) =>
      country.includes(city.country.id)
    );
    console.log(filteredCountries);
    // console.log(data);
  })
  .catch((error) => {
    console.error("Si è verificato un errore:", error);
  });
