/*jshint node:true */

'use strict';

module.exports = function factory(Decimal) {
  Decimal.prototype.equals = function equals(x) {
    return Decimal.getAdapter().equals(this.val(), x.val());
  };

  return Decimal;
};
