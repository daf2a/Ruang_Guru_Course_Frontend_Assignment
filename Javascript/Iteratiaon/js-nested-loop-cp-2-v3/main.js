function deretanAngkaHinggaN(n) {
  if (n <= 1) return "Incorrect param";
  let res = "";
  for (let i = n - 1; i != 0; i--) {
    res += i;
    if (i === 1) {
      n--;
      i = n;
    }
  }
  return res;
}

console.log(deretanAngkaHinggaN(5));

module.exports = deretanAngkaHinggaN;
