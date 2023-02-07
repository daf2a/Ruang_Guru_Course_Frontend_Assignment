function splitToArr(str) {
  if (str === "") {
    return "Data not available";
  } else if (str === undefined) {
    return "Invalid input";
  } else {
    var arr = [];
    var temp = "";
    for (var i = 0; i < str.length; i++) {
      if (str[i] !== ";" && str[i] !== "-") {
        if (str[i - 1] === ";" || str[i - 1] === "-" || i === 0) {
          temp += str[i].toUpperCase();
          continue;
        } else temp += str[i];
      } else if (str[i] === ";") {
        arr.push(temp);
        temp = "";
      } else if (str[i] === "-") {
        arr.push(temp);
        temp = "";
      }
    }
    arr.push(temp);
    return arr;
  }
}

console.log(splitToArr("annisa;dimitri-alvin;fajar-mirza;tandry"));
console.log(
  splitToArr(
    "ganang.prakoso-ivan.tjendra-haekal.yudhistira;ridza.adhandra-ganda.sipayung;diaz.kautsar"
  )
);
console.log(splitToArr(""));
console.log(splitToArr());

module.exports = splitToArr;
