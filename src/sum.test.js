const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum.sum(1, 2)).toBe(3);
});

test('dels 10 - 8 to equal 2', () => {
  expect(sum.del(10, 8)).toBe(2);
});

const divide = require('./divide');

test('divides 6 by 2 to equal 3', () => {
  expect(divide(6, 2)).toBe(3);
});

