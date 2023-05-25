const BASE_URL= `https://dummyjson.com/todos`;
// utilizzo il metodo Get per accedere  alla mia const todos (item rapprensenta il singolo oggetto composto da diverse chiavi)= dove il singolo todo  = item.todo
export const GET = async () =>{
  const res = await fetch(BASE_URL);
  const data = await res.json();
  // deve ritornare i dati sotto forma tramite ilmetodo json di oggetto, nel caso di post visto che lo inviamo al srver deve essere tradotto come stringhify
//   console.log(data);
  return data;
}

export const POST = async () => {
  const res = await fetch(BASE_URL + "/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      todo: "Use DummyJSON in the project",
      completed: false,
      userId: 5,
    }),
  });
  const data = await res.json();
  return data;
};


export const DELETE = async () => {
  const response = await  fetch (BASE_URL - "e", {
    method: "DELETE",
  });
  const data = await response.json()
  return data;
}


