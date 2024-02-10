// testFile1.js

const { isLeapYear } = require('./dateUtil.cjs');

// Testing a leap year
console.log(isLeapYear(2020)); // true

// Testing a non-leap year
console.log(isLeapYear(2021)); // false
