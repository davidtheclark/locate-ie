# ie-location [![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Find Internet Explorer on your system.

## Usage

```js
var locateIe = require('ie-location');
// Use a callback
locateIe(function(l) {
  console.log(l);
});
// Use the returned Promise
locateIe.then(function(l) {
  console.log(l);
});
```

### CLI Usage

`stdout` path to IE (or `null`):
```bash
> ie-location
# C:\Program Files\Internet Explorer\iexplore.exe
```
