// testFile2.js

const dateUtil = require('./dateUtil.cjs');

// Testing a leap year
console.log(dateUtil.isLeapYear(2020)); // true

// Testing a non-leap year
console.log(dateUtil.isLeapYear(2021)); // false
