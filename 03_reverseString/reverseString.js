// const reverseString = function (str) {
//   let reversedString = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedString += str[i];
//   }
//   return reversedString;
// };

const reverseString = function (str) {
  str.replace(/[^A-Za-z0-9]/g, "");

  return str.split("").reverse().join("");
};

//reverseString("word");
// Do not edit below this line
module.exports = reverseString;
