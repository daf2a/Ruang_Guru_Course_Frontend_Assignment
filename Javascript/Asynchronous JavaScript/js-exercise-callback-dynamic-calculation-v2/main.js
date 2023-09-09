function calculate(number1, number2, callback) {
  if (typeof number1 !== "number" || typeof number2 !== "number") {
    throw new Error("Invalid input");
  }
  if (number1 < 0 || number2 < 0) {
    throw new Error("Invalid input");
  }
  if (number1 % 2 === 0 && number2 % 2 === 0) {
    let result = number1 - number2;
    setTimeout(() => {
      callback(result);
    }, 2000);
  }
  if (number1 % 2 === 0 && number2 % 2 !== 0) {
    let result = number1 + number2;
    setTimeout(() => {
      callback(result);
    }, 2000);
  }
  if (number1 % 2 !== 0) {
    let result = number1 * number2;
    setTimeout(() => {
      callback(result);
    }, 2000);
  }
}

// Call the calculate function
module.exports = calculate;
