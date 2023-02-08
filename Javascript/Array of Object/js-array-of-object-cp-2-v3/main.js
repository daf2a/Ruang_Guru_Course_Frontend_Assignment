function countryMedals(players, countries) {
  let result = [];
  let athletes = [];
  if (countries) {
    for (let i = 0; i < countries.length; i++) {
      let totalMedals = 0;
      athletes = [];
      for (let j = 0; j < players.length; j++) {
        if (countries[i] === players[j].country) {
          totalMedals += players[j].medals;
          athletes.push(players[j].name);
        }
      }
      result.push({
        name: countries[i],
        athlete: athletes,
        totalMedals: totalMedals,
      });
    }
  } else return "Countries not provided";
  return result;
}

let playerData = [
  {
    name: "Lionel Messi",
    medals: 5,
    country: "Argentina",
  },
  {
    name: "Iker Casillas",
    medals: 7,
    country: "Spain",
  },
  {
    name: "Ahmad Waluyo",
    medals: 5,
    country: "Indonesia",
  },
  {
    name: "Alvin Arkansas",
    medals: 8,
    country: "Indonesia",
  },
  {
    name: "Gabriel Batistuta",
    medals: 1,
    country: "Argentina",
  },
  {
    name: "Xavi Hernandes",
    medals: 9,
    country: "Spain",
  },
  {
    name: "Carles Puyol",
    medals: 5,
    country: "Spain",
  },
  {
    name: "Jatmika Teja",
    medals: 6,
    country: "Indonesia",
  },
  {
    name: "Sergio Aguero",
    medals: 3,
    country: "Argentina",
  },
];

console.log(countryMedals(playerData, ["Indonesia", "Spain"]));
console.log(countryMedals(playerData, ["Argentina", "Spain"]));
console.log(countryMedals(playerData, ["Indonesia", "Argentina"]));
console.log(countryMedals(playerData));

module.exports = countryMedals;
