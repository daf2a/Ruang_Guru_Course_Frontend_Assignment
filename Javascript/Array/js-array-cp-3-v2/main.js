function dataSelection(data, amount, start) {
  arr = [];
  if (amount <= 0) return "Minimum amount is 1";
  else if (start < 0) return "Starting number cannot be below 0";
  else if (data[0] === undefined) return "Data not found";
  else if (typeof amount !== "number" || typeof start !== "number")
    return "Invalid command";
  else {
    for (let i = start - 1; i < start + amount - 1; i++) {
      arr.push(data[i]);
    }
  }
  return arr;
}

console.log(
  dataSelection(
    ["Semangka", "Nanas", "Jeruk", "Mengkudu", "Jambu klutuk"],
    2,
    3
  )
);
console.log(
  dataSelection(["Deny", "Ganjar", "Raam", "Imam", "Eddy", "Afis"], 4, 1)
);
console.log(dataSelection([97, 44, 21, 76, 10, 1, 33], 2, -1));
console.log(dataSelection(["Tegar", "Miranda", "Wulan"], 0, 3));
console.log(dataSelection(["Fauzan", "Uli", "Vika"], "1", "3"));
console.log(dataSelection([], 1, 3));

module.exports = dataSelection;
