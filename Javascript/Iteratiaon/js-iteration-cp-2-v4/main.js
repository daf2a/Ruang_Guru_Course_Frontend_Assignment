function trasureHunter(dailyLog) {
  let res = 0;
  for (let i = 0; i < dailyLog.length; i++)
    if (dailyLog[i] == "#") {
      if (res === 0) continue;
      res /= 2;
    } else if (dailyLog[i] == "x") {
      res -= 10;
      if (res < 0) res = 0;
    } else res += 100;
  return res;
}

console.log(trasureHunter("$x$#x$")); // 185
console.log(trasureHunter("$$#x$$")); // 290
console.log(trasureHunter("x$#x$#x$")); // 160
console.log(trasureHunter("xx$#$#$#$###xx")); // 3.4375

module.exports = trasureHunter;
