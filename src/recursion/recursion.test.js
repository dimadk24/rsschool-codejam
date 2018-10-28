const assert = require('assert');
const recursion = require('./recursion');
const { hasChildren } = require('./helpers');

describe('recursion', function () {
  it('should flatten simple tree', function () {
    const tree = { value: 100 };
    const arr = [[100]];
    assert.deepEqual(recursion(tree), arr);
  });
  it('should flatten average tree', function () {
    const tree = { value: 100, left: { value: 90 }, right: { value: 120 } };
    const arr = [
      [100],
      [90, 120],
    ];
    assert.deepEqual(recursion(tree), arr);
  });
  it('should flatten arduous tree', function () {
    const tree = {
      value: 100,
      left: { value: 90, left: { value: 70 }, right: { value: 99 } },
      right: { value: 120, left: { value: 110 }, right: { value: 130 } },
    };
    const arr = [
      [100],
      [90, 120],
      [70, 99, 110, 130],
    ];
    assert.deepEqual(recursion(tree), arr);
  });
  it('should flatten insane tree', function () {
    const tree = {
      value: 100,
      left: {
        value: 90,
        left: {
          value: 70,
          left: {
            value: 10,
            left: {
              value: 1,
            },
            right: {
              value: 2,
            },
          },
          right: {
            value: 20,
            left: {
              value: 3,
            },
            right: {
              value: 4,
            },
          },
        },
        right: {
          value: 99,
          left: {
            value: 30,
            left: {
              value: 5,
            },
            right: {
              value: 6,
            },
          },
          right: {
            value: 40,
            left: {
              value: 7,
            },
            right: {
              value: 8,
            },
          },
        },
      },
      right: {
        value: 120,
        left: {
          value: 110,
          left: {
            value: 50,
            left: {
              value: 9,
            },
            right: {
              value: 10,
            },
          },
          right: {
            value: 60,
            left: {
              value: 11,
            },
            right: {
              value: 12,
            },
          },
        },
        right: {
          value: 130,
          left: {
            value: 70,
            left: {
              value: 13,
            },
            right: {
              value: 14,
            },
          },
          right: {
            value: 80,
            left: {
              value: 15,
            },
            right: {
              value: 16,
            },
          },
        },
      },
    };
    const arr = [
      [100],
      [90, 120],
      [70, 99, 110, 130],
      [10, 20, 30, 40, 50, 60, 70, 80],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    ];
    assert.deepEqual(recursion(tree), arr);
  });
});

describe('helpers', function () {
  describe('hasChildren', function () {
    it('should have children', function () {
      const tree = { value: 1, left: { value: 2 }, right: { value: 3 } };
      assert(hasChildren(tree));
    });
    it('should not have children', function () {
      const tree = { value: 1 };
      assert(!hasChildren(tree));
    });
  });
});
