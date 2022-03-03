const {sum, subtract, remainder} = require('./mathFunctions')

test('adds 4 + 9 to equal 13', () => {
  expect(sum(4, 9)).toBe(13);
});

test('Subract 9 from 13 to equal 4', () => {
  expect(subtract(13, 9)).toBe(4);
});

test('Remainder of 23 divided by 4 to equal 3', () => {
  expect(remainder(23,4)).toBe(3)
})