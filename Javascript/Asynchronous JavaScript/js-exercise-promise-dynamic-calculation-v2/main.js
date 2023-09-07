function calculatePromise(number1, number2) {
  return new Promise((resolve, reject) => {
    if (typeof number1 !== "number" || typeof number2 !== "number") {
      reject("Invalid input");
    }
    if (number1 < 0 || number2 < 0) {
      reject("Invalid input");
    }
    if (number1 === 0 && number2 === 0) {
      reject("number1 and number2 cannot be 0");
    }
    if (number1 % 2 === 0 && number2 % 2 === 0) {
      let result = number1 - number2;
      setTimeout(() => {
        resolve(result);
      }, 2000);
    }
    if (number1 % 2 === 0 && number2 % 2 !== 0) {
      let result = number1 + number2;
      setTimeout(() => {
        resolve(result);
      }, 2000);
    }
    if (number1 % 2 !== 0) {
      let result = number1 * number2;
      setTimeout(() => {
        resolve(result);
      }, 2000);
    }
  });
}

module.exports = calculatePromise;
