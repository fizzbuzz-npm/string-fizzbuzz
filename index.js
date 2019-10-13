"use strict"
const fizz = require("string-fizz")
const buzz = require("string-buzz")
const stringConcat = require('general-concat')

module.exports = stringConcat(fizz, buzz)
