const score = require('./bowling2.js');

test('[3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6] should be 90', () => {
  expect(score([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90);
});

test('[10,10,10,10,10,10,10,10,10,10,10,10] should be 200', () => {
  expect(score([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10])).toBe(300);
});
