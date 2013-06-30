var spawn = require('child_process').spawn;
var child = spawn('ls');

child.stdout.on('data', function (data) {
  console.log('Success: ' + data);
  process.exit(0);
});

child.stderr.on('data', function (data) {
  console.log('Fail: ' + data);
  process.exit(1);
});

// child.stdin.write('.mystyle{color:red;}');
// child.stdin.end();