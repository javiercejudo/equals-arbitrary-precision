/*jshint node:true */

'use strict';

var binaryOpExtender = require('binary-op-arbitrary-precision').asIs;

module.exports = function factory(Decimal) {
  return binaryOpExtender(Decimal, 'equals');
};
