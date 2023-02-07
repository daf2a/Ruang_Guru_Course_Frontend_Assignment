function buyThemAll(books, budget) {
  let arrBooks = books.split(",");
  let arrBuku = [];
  let arrHarga = [];
  let arrSisa = [];
  let arrTotal = [];
  let total = 0;
  let hasil = "";

  for (let i = 0; i < arrBooks.length; i++) {
    arrBuku.push(arrBooks[i].split(":")[0]);
    arrHarga.push(arrBooks[i].split(":")[1]);
    arrSisa.push(arrBooks[i].split(":")[1]);
  }

  for (let i = 0; i < arrHarga.length; i++) {
    if (budget >= arrHarga[i]) {
      total += Number(arrHarga[i]);
      budget -= Number(arrHarga[i]);
      hasil += arrBuku[arrSisa.indexOf(arrHarga[i])] + ", ";
      arrTotal.push(arrHarga[i]);
    }
  }

  hasil = hasil.slice(0, hasil.length - 2);

  hasil = `Afista membeli ${arrTotal.length} buku yaitu ${hasil}. Total belanja ${total}, sisa uang Afista adalah ${budget}.`;
  if (arrTotal.length === 0)
    hasil = `Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah ${budget}.`;
  return hasil;
}

console.log(
  buyThemAll(
    "The Alchemist:55000,The Hobit:20000,The Power of Habit:10000",
    100000
  )
); //Afista membeli 3 buku yaitu The Alchemist, The Hobit, The Power of Habit. Total belanja 85000, sisa uang Afista adalah 15000.
console.log(
  buyThemAll(
    "Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000",
    300000
  )
); // Afista membeli 2 buku yaitu Javascript itu asik, Belajar HTML5. Total belanja 221200, sisa uang Afista adalah 78800.
console.log(
  buyThemAll(
    "Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000",
    20000
  )
); // Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah 20000.
console.log(
  buyThemAll(
    "Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000",
    0
  )
); // Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah 0.

console.log(
  buyThemAll(
    "The Alchemist:55000,The Hobbit:40000,The Power of Habit:30000",
    200000
  )
); // Afista membeli 3 buku yaitu The Alchemist, The Hobbit, The Power of Habit. Total belanja 125000, sisa uang Afista adalah 25000.

module.exports = buyThemAll;
