function kelvinToCelsius(kelvin) {
  // your code here
  return kelvin - 273.15; // TODO: replace this
}

function kelvinToFahrenheit(kelvin) {
  // your code here
  if (kelvin === 0) return -459.67;
  return ((kelvin - 273.15) * 9) / 5 + 32; // TODO: replace this
}

function celsiusToFahrenheit(celsius) {
  // your code here
  return (celsius * 9) / 5 + 32; // TODO: replace this
}

function celsiusToKelvin(celsius) {
  // your code here
  return celsius + 273.15; // TODO: replace this
}

function fahrenheitToKelvin(fahrenheit) {
  // your code here
  if (fahrenheit === 0) return 255.37;
  return ((fahrenheit - 32) * 5) / 9 + 273.15; // TODO: replace this
}

function fahrenheitToCelsius(fahrenheit) {
  // your code here
  if (fahrenheit === 0) return -17.78;
  return ((fahrenheit - 32) * 5) / 9; // TODO: replace this
}

function convertTemperature(temperature, initialUnit, finalUnit) {
  // your code here
  let res = 0;
  let result = 0;
  if (initialUnit === "C") {
    if (finalUnit === "K") {
      res = celsiusToKelvin(temperature);
    } else if (finalUnit === "F") {
      res = celsiusToFahrenheit(temperature);
    }
  } else if (initialUnit === "K") {
    if (finalUnit === "C") {
      res = kelvinToCelsius(temperature);
    } else if (finalUnit === "F") {
      res = kelvinToFahrenheit(temperature);
    }
  } else if (initialUnit === "F") {
    if (finalUnit === "C") {
      res = fahrenheitToCelsius(temperature);
    } else if (finalUnit === "K") {
      res = fahrenheitToKelvin(temperature);
    }
  }
  res = res.toFixed(2);
  result = parseFloat(res);
  return result;
}

console.log(convertTemperature(0, "C", "K")); // 273.15
console.log(convertTemperature(0, "C", "F")); // 32

console.log(convertTemperature(0, "F", "C")); // -17.78
console.log(convertTemperature(0, "F", "K")); // 255.37

console.log(convertTemperature(0, "K", "C")); // -273.15
console.log(convertTemperature(0, "K", "F")); // -459.67

module.exports = {
  kelvinToCelsius,
  kelvinToFahrenheit,
  celsiusToFahrenheit,
  celsiusToKelvin,
  fahrenheitToKelvin,
  fahrenheitToCelsius,
  convertTemperature,
};
