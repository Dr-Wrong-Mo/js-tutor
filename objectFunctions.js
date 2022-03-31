// User Profile Example
// {
//   id: 8675309,
//   name: {
//     first: 'Jon',
//     last: 'Wright'
//   },
//   dob: {
//     month: 3,
//     day: 31,
//     year: 1981
//   },
//   IQ: 70,
//   income: 1000000000,
//   country: 'USA'
// }

// You will receive an object with a user profile (example above).
// Return the full name as a string
// This should return 'Jon Wright'
function getFullName(obj) {}

// You will receive an object with a user profile (example above).
// Return an object with an updated user name that will be provided as an object.
// You may be required to update the first name, last name or both.
// The parameter newName will provided as an object in this format
// {first: 'Jonathan', last: 'Wright'}
// For simplicity, this test assumes that the newName object will only have string values,
// and the string will have a length greater than zero
function updateName(obj, newName) {}

// You will receive an array of user profiles in the above format.
// Return the user profile for the user with the highest income
// For simplicity, this test assumes that only one user has the highest income
function findHighestIncome(objs) {}

// You will receive an array of user profiles in the above format.
// Return the average income for all users as a number
function findAverageIncome(objs) {}

// You will receive an object with a user profile (example above).
// Return the age of the user as a number
function findUserAge(obj) {}

// You will receive an object with a user profile (example above).
// Verify that the user meets the provided minimum age requirement.
// Return a true or false response.
function verifyMinimumAge(obj, minAge) {}

// You will receive an object with a user profile (example above).
// Confirm that the user's IQ is within the given range.
// Return a true or false value.
// The range object will have the value of {min: #, max: #}
function rangeFinder(obj, range) {}

module.exports = {
  getFullName,
  updateName,
  findHighestIncome,
  findAverageIncome,
  findUserAge,
  verifyMinimumAge,
  rangeFinder,
};

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
      month: 5,
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
    IQ: 105,
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
      year: 1982,
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

rangeFinder(users[0],{min:100, max:130})