const {
  getFullName,
  updateName,
  findHighestIncome,
  findAverageIncome,
  findUserAge,
  verifyMinimumAge,
  rangeFinder,
} = require('./objectFunctions');

test('Concatenate first and last name of user to give full name', () => {
  expect(getFullName(users[4])).toBe('Erin Mock');
});

test('Update username to new provided name', () => {
  expect(updateName(users[4], { first: 'Aaron', last: 'Mauk' })).toStrictEqual(
    updatedUser
  );
});

test('Return the user object with the highest income', () => {
  expect(findHighestIncome(users)).toBe(users[1]);
});

test('Return the average income of all users', () => {
  expect(findAverageIncome(users)).toStrictEqual(71400);
});

test('Return the age of a given user', () => {
  expect(findUserAge(users[2])).toStrictEqual(getAge(users[2]));
});

test('Return Truthy or Falsy for an age comparison', () => {
  expect(verifyMinimumAge(users[3], 21)).toBeFalsy();
});

test('Return Truthy or Falsy for an age comparison', () => {
  expect(verifyMinimumAge(users[3], 13)).toBeTruthy();
});

test('Confirm that a users IQ is within given parameters', () => {
  expect(rangeFinder( users[0], { min:100, max:130 } )).toBeTruthy()
});

test('Confirm that a users IQ is within given parameters', () => {
  expect(rangeFinder( users[3], { min:100, max:130 } )).toBeFalsy()
});

test('Confirm that a users IQ is within given parameters', () => {
  expect(rangeFinder( users[1], { min:100, max:130 } )).toBeTruthy()
});

test('Confirm that a users IQ is within given parameters', () => {
  expect(rangeFinder( users[2], { min:100, max:130 } )).toBeFalsy()
});

let users = [
  {
    id: 8675309,
    name: {
      first: 'John',
      last: 'Right',
    },
    dob: {
      month: 3,
      day: 31,
      year: 1981,
    },
    IQ: 110,
    income: 65000,
    country: 'USA',
  },
  {
    id: 8355936,
    name: {
      first: 'Brandon',
      last: 'Richards',
    },
    dob: {
      month: 4,
      day: 20,
      year: 1984,
    },
    IQ: 130,
    income: 125000,
    country: 'USA',
  },
  {
    id: 5289462,
    name: {
      first: 'Sean',
      last: 'Hargartee',
    },
    dob: {
      month: 7,
      day: 21,
      year: 1983,
    },
    IQ: 99,
    income: 85000,
    country: 'USA',
  },
  {
    id: 9087345,
    name: {
      first: 'Rocina',
      last: 'Managa',
    },
    dob: {
      month: 9,
      day: 8,
      year: 2005,
    },
    IQ: 140,
    income: 40000,
    country: 'USA',
  },
  {
    id: 3840582,
    name: {
      first: 'Erin',
      last: 'Mock',
    },
    dob: {
      month: 8,
      day: 15,
      year: 1980,
    },
    IQ: 120,
    income: 42000,
    country: 'USA',
  },
];

// Don't use this formula, cheater!!!
function getAge(user) {
    let today = new Date();
    const dob = new Date(`${user.dob.year}-${user.dob.month}-${user.dob.day}`);
  
    let yearsDiff = today - dob;
    let yearInMilliseconds = 60000 * 60 * 24 * 365.25;
  
    return Math.floor(yearsDiff / yearInMilliseconds);
  }

let updatedUser = {
  id: 3840582,
  name: {
    first: 'Aaron',
    last: 'Mauk',
  },
  dob: {
    month: 8,
    day: 15,
    year: 1980,
  },
  IQ: 120,
  income: 42000,
  country: 'USA',
};
