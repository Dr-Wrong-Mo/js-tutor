const {allCaps, noCaps, firstLetterCaps, wordReplacement, wordCount} = require('./stringFunctions');

test('Return a string as all upper case', () => {
    expect(allCaps('thIS stRinG ShoulD BE all uPPerCaSe.')).toBe('THIS STRING SHOULD BE ALL UPPERCASE.');
});

test('Return a string as all lower case', () => {
    expect(noCaps('thIS stRinG ShoulD BE all loWeRCaSe.')).toBe('this string should be all lowercase.');
});

test('Return a string with the first letter of each word capitalized', () => {
    expect(firstLetterCaps('thIS stRinG ShoulD hAve tHE firSt LeTters in UppErcaSe onlY.')).toBe('This String Should Have The First Letters In Uppercase Only.');
});

test('Replace a word in a given string with another word', () => {
    expect(wordReplacement('The milk is fresh.', 'fresh', 'expired')).toBe('The milk is expired.');
});

test('Return the number of words in a string', () => {
    expect(wordCount('Jon is better at Colonizing Mars than Braden.')).toBe(8);
});

