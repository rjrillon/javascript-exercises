const leapYears = function (year) {
  // If the year is divisible by 400, it is a leap year
  if (year % 400 === 0) {
    return true;
  }
  // If the year is divisible by 100 (but not by 400), it is not a leap year
  if (year % 100 === 0) {
    return false;
  }
  // If the year is divisible by 4 (but not by 100), it is a leap year
  if (year % 4 === 0) {
    return true;
  }
  // Otherwise, it is not a leap year
  return false;
};
console.log(leapYears(2000));
console.log(leapYears(1985));

// Do not edit below this line
module.exports = leapYears;
