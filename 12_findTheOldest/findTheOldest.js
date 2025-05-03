const findTheOldest = function (arrOfObj) {
  let sorted = arrOfObj.sort((obj1, obj2) => {
    let currDate = new Date().getFullYear();

    let age1 = (obj1.yearOfDeath || currDate) - obj1.yearOfBirth;
    let age2 = (obj2.yearOfDeath || currDate) - obj2.yearOfBirth;
    return age2 - age1;
  });
  return sorted[0];
};
// const people = [
//   {
//     name: "Carly",
//     yearOfBirth: 1942,
//     yearOfDeath: 1970,
//   },
//   {
//     name: "Ray",
//     yearOfBirth: 1962,
//     yearOfDeath: 2011,
//   },
//   {
//     name: "Jane",
//     yearOfBirth: 1912,
//     yearOfDeath: 1941,
//   },
// ];
// console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
