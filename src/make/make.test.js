const assert = require('assert');
const make = require('./make');

function sum(a, b) {
  return a + b;
}

function concat(a, b) {
  return String(a) + String(b);
}

describe('make', function () {
  it('should basically add numbers', function () {
    assert.equal(make(15)(34, 21, 666)(41)(sum), 777);
  });
  it('should add words', function () {
    assert.equal(make('Hello')(' World!', ' How are you?')(sum), 'Hello World! How are you?');
  });
  it('should concat numbers', function () {
    assert.equal(make(15, 54)(2, 12, 5)(concat), '15542125');
  });
  it('should work with some empty arguments', function () {
    assert.equal(make(15)(34, 21, 666)()(41)()(sum), 777);
  });
  it('should throw TypeError if there are no arguments to reduce', function () {
    assert.throws(() => {
      make(sum);
    }, 'TypeError');
    assert.throws(() => {
      make()()(sum);
    }, 'TypeError');
  });
});
