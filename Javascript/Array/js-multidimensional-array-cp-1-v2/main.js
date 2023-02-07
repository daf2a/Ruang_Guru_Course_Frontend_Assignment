function travelSeat(passengers, seatColumn) {
  let arr = [];
  let res = [];
  passengers = passengers.sort();
  if (seatColumn <= 0) return "Invalid number";
  else if (passengers[0] === undefined) return "Oops! tickets not sold!";
  else {
    for (let i = 0; i < passengers.length / seatColumn; i++) {
      for (let j = 0; j < seatColumn; j++) {
        if (passengers[i * seatColumn + j] === undefined)
          arr.push("Seat available");
        else arr.push(passengers[i * seatColumn + j]);
      }
    }
    for (let i = 0; i < arr.length; i += seatColumn) {
      let slice = arr.slice(i, i + seatColumn);
      res.push(slice);
    }
  }
  return res;
}

console.log(travelSeat(["Ayah", "Ibu", "Kakak", "Adik"], 3));
console.log(travelSeat(["Karin", "Naila", "Indah", "Inezka", "Nisa"], 5));
console.log(travelSeat(["Waluyo", "Alvin", "Arda", "Irfan", "Hilmi"], 3));
console.log(travelSeat(["Zona", "Retha", "Yoga"], 0));
console.log(travelSeat([], 4));

module.exports = travelSeat;
