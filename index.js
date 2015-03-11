var fs = require('fs');
var Promise = require('es6-promise').Promise;
var queue = require('queue-async');

var win = process.platform === 'win32';

module.exports = function(cb) {
  return new Promise(function(resolve) {
    var finisher = cb || function(r) {
      resolve(r);
    };

    if (!win) {
      finisher(null);
      return;
    }

    var suffix = '\\Internet Explorer\\iexplore.exe';
    var prefixes = [
      process.env.LOCALAPPDATA,
      process.env.PROGRAMFILES,
      process.env['PROGRAMFILES(X86)']
    ];

    queue(1)
      .defer(tryLocation, prefixes[0] + suffix, finisher)
      .defer(tryLocation, prefixes[1] + suffix, finisher)
      .defer(tryLocation, prefixes[2] + suffix, finisher)
      .awaitAll(function() { finisher(null); });
  });
}

function tryLocation(p, success, next) {
  fs.exists(p, function(exists) {
    if (exists) success(p);
    else next();
  });
}
