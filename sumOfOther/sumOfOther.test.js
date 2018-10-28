const assert = require('assert');
const sumOfOther = require('./sumOfOther');

describe('sumOfOther', function () {
  it('1', function () {
    assert.deepEqual(sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
  });

  it('2', function () {
    assert.deepEqual(sumOfOther([7, 5, 2, 8]), [15, 17, 20, 14]);
  });
});
