var fs = require('fs');

module.exports = getWinPath();

function getWinPath() {
  if (process.platform !== 'win32') { return null; }

  var suffix = '\\Internet Explorer\\iexplore.exe';
  var prefixes = [
    process.env.PROGRAMW6432,
    process.env.PROGRAMFILES,
    process.env['PROGRAMFILES(X86)']
  ];
  var exe;

  for (var i = 0; i < prefixes.length; i++) {
    exe = prefixes[i] + suffix;
    if (fs.existsSync(exe)) {
      return exe;
    }
  }

  return null;
}
