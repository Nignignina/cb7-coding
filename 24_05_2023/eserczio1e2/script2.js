//   const bookData = {
  
//   titolo: "Il Nome della Rosa",
//   autore: "Umberto Eco",
//   anno: 1980,
// };

// const titoloData = bookData.titolo
// console.log(titoloData)


// const autoreData =bookData.autore
// console.log(autoreData);

// const annoData = bookData.anno
// console.log(annoData)

// const{ titolo, autore, anno} =bookData;
// console.log(bookData)


// avanzato

//  const bookData ={
//     titolo:"il nome della Rosa",
//     autore:"umberto Eco",
//     anno:1980,
//     edizione: "",
//  }

const bookData ={autore:"Umberto Eco", titolo:"il nome della rosa" , anno:1980 }

const { titolo, autore, anno , edizione = "undefined"} = bookData;

console.log(titolo, autore, anno, edizione);

// console.log(`lultimo libro che ho letto è ${bookData.titolo} di ${bookData.autore}`)
// console.log(`l'edizione dovrebbe essere ${bookData.edizione}`);

