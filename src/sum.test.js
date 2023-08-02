const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum.sum(1, 2)).toBe(3);
});

test('dels 10 - 8 to equal 2', () => {
  expect(sum.del(10, 8)).toBe(2);
});


const subtract = require('./subtract');

test('subtracts 3 - 2 to equal 1', () => {
  expect(subtract(3, 2)).toBe(1);
});

const divide = require('./divide');


