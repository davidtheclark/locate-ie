#!/usr/bin/env node

var locateIe = require('./');

locateIe().then(function(r) {
  console.log(r);
});
