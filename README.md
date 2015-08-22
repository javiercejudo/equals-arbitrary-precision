# equals-arbitrary-precision

[![Build Status](https://travis-ci.org/javiercejudo/equals-arbitrary-precision.svg)](https://travis-ci.org/javiercejudo/equals-arbitrary-precision)
[![Coverage Status](https://coveralls.io/repos/javiercejudo/equals-arbitrary-precision/badge.svg?branch=master)](https://coveralls.io/r/javiercejudo/equals-arbitrary-precision?branch=master)
[![Code Climate](https://codeclimate.com/github/javiercejudo/equals-arbitrary-precision/badges/gpa.svg)](https://codeclimate.com/github/javiercejudo/equals-arbitrary-precision)

equals abstraction to extend [linear-arbitrary-precision](https://github.com/javiercejudo/linear-arbitrary-precision/)

## Install

    npm i equals-arbitrary-precision

## Usage

```js
var adapter = require('floating-adapter');

var Decimal = require('equals-arbitrary-precision')(require('linear-arbitrary-precision')(adapter));

new Decimal('2').equals(new Decimal('2')); // => true
new Decimal('2').equals(new Decimal('3')); // => false
```

See [spec](test/spec.js).
