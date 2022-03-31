const {
  getFirstArrayElement,
  createArray,
  reverseArray,
  incrementArray,
  findIndex,
  sortArray,
} = require('./arrayFunctions');

test('Find the first element in a given array', () => {
    expect(getFirstArrayElement(['Jon', 'Shawn', 'Brad'])).toBe('Jon');
  });

test('Create an array with the given arguments', () => {
    expect(createArray('Jon', 'Shawn', 'Brad')).toStrictEqual(['Jon', 'Shawn', 'Brad']);
  });

test('Reverse the order of a given array', () => {
    expect(reverseArray(['Jon', 'Shawn', 'Brad'])).toStrictEqual(['Brad', 'Shawn', 'Jon']);
  });

test('Reverse the order of a given array', () => {
    expect(reverseArray([2,4,6,8])).toStrictEqual([8,6,4,2]);
  });

test('Increase the value of each element in an array by 1', () => {
    expect(incrementArray([2,4,6,8])).toStrictEqual([3,5,7,9]);
  });

test('Find index of a given element within a given array', () => {
    expect(findIndex(['Jon', 'Shawn', 'Brad'], 'Shawn')).toBe(1);
  });

test('Sort array of strings in alphabetical order', () => {
  expect(sortArray(['Jon', 'Shawn', 'Brad'])).toStrictEqual(['Brad', 'Jon', 'Shawn']);
});

test('Sort array of numbers in sequential order', () => {
  expect(sortArray([ 9, 5, 3, 1 ])).toStrictEqual([ 1, 3, 5, 9 ]);
});
