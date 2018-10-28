const assert = require('assert');
const {
  sumOfOther, getSumOfOtherForItem, getOtherItems, getArraySum,
} = require('./sumOfOther');

describe('sumOfOther', function () {
  it('should sum basic numbers', function () {
    assert.deepEqual(sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
  });
  it('should sum another basic numbers', function () {
    assert.deepEqual(sumOfOther([7, 5, 2, 8]), [15, 17, 20, 14]);
  });
  it('should sum negative numbers', function () {
    assert.deepEqual(sumOfOther([-5, -7, -2, -4]), [-13, -11, -16, -14]);
  });
});

describe('getSumOfOtherForItem', function () {
  it('1', function () {
    assert.deepEqual(getSumOfOtherForItem([2, 3, 4, 1], 0), 8);
  });
  it('2', function () {
    assert.deepEqual(getSumOfOtherForItem([2, 3, 4, 1], 1), 7);
  });
  it('3', function () {
    assert.deepEqual(getSumOfOtherForItem([2, 3, 4, 1], 2), 6);
  });
  it('4', function () {
    assert.deepEqual(getSumOfOtherForItem([2, 3, 4, 1], 3), 9);
  });
});

describe('getOtherItems', function () {
  it('1', function () {
    assert.deepEqual(getOtherItems([2, 3, 4, 1], 0), [3, 4, 1]);
  });
  it('2', function () {
    assert.deepEqual(getOtherItems([2, 3, 4, 1], 1), [2, 4, 1]);
  });
  it('3', function () {
    assert.deepEqual(getOtherItems([2, 3, 4, 1], 2), [2, 3, 1]);
  });
  it('4', function () {
    assert.deepEqual(getOtherItems([2, 3, 4, 1], 3), [2, 3, 4]);
  });
});

describe('getArraySum', function () {
  it('1', function () {
    assert.equal(getArraySum([2, 3, 4, 1]), 10);
  });
  it('2', function () {
    assert.equal(getArraySum([2, 4, 1]), 7);
  });
  it('3', function () {
    assert.equal(getArraySum([2, 3, 1]), 6);
  });
  it('4', function () {
    assert.equal(getArraySum([2, 3, 4]), 9);
  });
});
