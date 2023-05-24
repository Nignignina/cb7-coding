const BASE_URL = "https://dummyjson.com/carts/";

// consideriamo l'asycronicità dell'endpoint considerando che fa parte di un https, il risultato sarà uguale
// alla risposta della fetch  del base url e dell'end poiny
// aspetto la risposta tradotta in metodo json
export const GET = async (endpoint) => {
  const res = await fetch(BASE_URL + endpoint);
  const data = await res.json();
  return data;
};
