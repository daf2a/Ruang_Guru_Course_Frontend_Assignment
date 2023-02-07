function countAndSum(number) {
  let res = 1,
    result = 0;
  for (let i = 1; i <= number; i++) {
    result += res++;
    if (i % 3 === 0) res = 1;
  }
  return result;
}

console.log(countAndSum(5)); // 9
console.log(countAndSum(10)); // 19
console.log(countAndSum(100)); // 199
console.log(countAndSum(17)); // 33
console.log(countAndSum(19)); // 0

module.exports = countAndSum;
