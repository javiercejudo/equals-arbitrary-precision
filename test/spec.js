/*jshint node:true, mocha:true */

'use strict';

require('should');

var adapter = require('floating-adapter');
var Decimal = require('linear-arbitrary-precision')(adapter);

Decimal = require('../src/equals-arbitrary-precision')(Decimal);

describe('linear operations with floating', function() {
  it('should have an equals method', function() {
    new Decimal('2').equals(new Decimal('2')).should.be.exactly(true);
    new Decimal('2').equals(new Decimal('3')).should.be.exactly(false);
  });
});
