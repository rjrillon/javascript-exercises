// const removeFromArray = function (arr, target) {
//   let newArray = [];

//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] !== target) {
//       newArray.push(arr[i]);
//     }
//   }
//   return newArray;
// };
// console.log(removeFromArray([1, 2, 3, 4], 3));

const removeFromArray = function (arr, ...targets) {
  const newArray = arr.filter(arrItem => !targets.includes(arrItem));
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
