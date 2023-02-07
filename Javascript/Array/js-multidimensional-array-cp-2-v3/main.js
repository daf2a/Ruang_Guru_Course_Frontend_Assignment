function discountChecker(costumers, date) {
  let dateStr = date[0];
  dateStr += date[1];
  let dateInt = parseInt(dateStr);

  let cost = "";
  let costInt = [];
  for (let i = 0; i < costumers.length; i++) {
    for (let j = 2; j < costumers[i][0].length; j++) {
      cost += costumers[i][0][j];
    }
    costInt.push(parseInt(cost));
    cost = "";
  }

  let res = [];
  if (dateInt % 2 === 0) {
    for (let i = 0; i < costumers.length; i++) {
      if (costInt[i] % 2 === 0 || costumers[i][1]==='member') {
        res.push(costumers[i]);
      }
    }
  } else {
    for (let i = 0; i < costumers.length; i++) {
      if (costInt[i] % 2 !== 0 || costumers[i][1]==='member') {
        res.push(costumers[i]);
      }
    }
  }
  return res;
}

let costumers = [
  ["$ 228", "member"],
  ["$ 19", "non-member"],
  ["$ 238", "non-member"],
  ["$ 49", "member"],
];

console.log(discountChecker(costumers, "28-10-2022"));

var costumers2 = [
  ["$ 754", "member"],
  ["$ 233", "member"],
  ["$ 31", "non-member"],
  ["$ 332", "non-member"],
];

console.log(discountChecker(costumers2, "11-06-2022"));

module.exports = discountChecker;
