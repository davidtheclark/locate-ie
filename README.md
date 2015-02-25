# ie-location [![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Approximates the current location of IE on your system.

Based on [`karma-ie-launcher`](https://github.com/karma-runner/karma-ie-launcher) and [`chrome-location`](https://github.com/hughsk/chrome-location).

## Usage

### `location = require('ie-location')`

Returns the path to IE as a string, or `null` if IE is not found.

### CLI Usage

`stdout` path to IE (or `null`):
```bash
> ie-location
# C:\Program Files\Internet Explorer\iexplore.exe
```

## License

MIT. See [LICENSE.md](http://github.com/davidtheclark/ie-location/blob/master/LICENSE.md) for details.
