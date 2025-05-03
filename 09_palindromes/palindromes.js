const palindromes = function (str) {
  str = str.toLowerCase();
  str = str.replace(/[^A-Za-z0-9]/g, ""); //regex

  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
