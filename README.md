# locate-ie [![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Find Internet Explorer on your system.

## Usage

```js
var locateIe = require('locate-ie');
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
> locate-ie
# C:\Program Files\Internet Explorer\iexplore.exe
```
