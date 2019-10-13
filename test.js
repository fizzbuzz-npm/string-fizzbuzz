const test = require('ava');
const fizzbuzz = require("./index.js");

test('fizzbuzz', t => {
    t.is(fizzbuzz, "fizzbuzz");
});
