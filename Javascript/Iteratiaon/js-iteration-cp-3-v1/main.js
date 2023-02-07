function printNumber(totalNumber) {
  let res = 1,
    result = "";
  for (let i = 1; i <= totalNumber; i++) {
    result += res++;
    if (i % 3 === 0) res = 1;
  }
  return result;
}
// 4, 7, 10
console.log(printNumber(2));
console.log(printNumber(3));
console.log(printNumber(6));
console.log(printNumber(10));
console.log(printNumber(30));

module.exports = printNumber;
