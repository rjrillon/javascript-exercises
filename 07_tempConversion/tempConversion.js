const convertToCelsius = function (num) {
  let convertedNum = ((num - 32) * 5) / 9;
  result = Math.round(convertedNum * 10) / 10;

  return result;
};

const convertToFahrenheit = function (num) {
  let convertedNum = (num * 9) / 5 + 32;
  result = Math.round(convertedNum * 10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
