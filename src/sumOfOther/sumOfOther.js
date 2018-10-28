const { getSumOfOtherForItem } = require('./helpers');

function sumOfOther(arr) {
  return arr.map((item, index) => getSumOfOtherForItem(arr, index));
}

module.exports = sumOfOther;
