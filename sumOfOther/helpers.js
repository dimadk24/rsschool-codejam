function getArraySum(arr) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return arr.reduce(reducer);
}

function getOtherItems(arr, index) {
  return arr.filter((item, i) => i !== index);
}

function getSumOfOtherForItem(arr, index) {
  const otherItems = getOtherItems(arr, index);
  return getArraySum(otherItems);
}

module.exports = { getArraySum, getOtherItems, getSumOfOtherForItem };
