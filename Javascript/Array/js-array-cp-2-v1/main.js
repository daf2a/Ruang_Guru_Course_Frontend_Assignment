function vocalCounter(array) {
  let cnt = 0;
  let res = "";
  for (let i = 0; i < array.length; i++) {
    if (
      array[i] === "A" ||
      array[i] === "a" ||
      array[i] === "I" ||
      array[i] === "i" ||
      array[i] === "U" ||
      array[i] === "u" ||
      array[i] === "E" ||
      array[i] === "e" ||
      array[i] === "O" ||
      array[i] === "o"
    ) {
      cnt++;
      res += array[i];
    }
  }
  if (cnt === 0) return "Tidak ada huruf vokal yang ditemukan";
  else return "Jumlah vokal yang ditemukan sebanyak " + cnt + " berupa " + res;
}

console.log(vocalCounter(["x", "A", 5, "o", 1, "T", "b"]));
console.log(vocalCounter([-10, "E", "e", "z", "p", "i", 4]));
console.log(vocalCounter(["q", "W", "r", "t", "Y"]));

module.exports = vocalCounter;
