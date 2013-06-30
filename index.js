var spawn = require('child_process').spawn;
var child = spawn('sass', ['--scss']);

child.stdout.on('data', function (data) {
  console.log('Success');
  process.exit(0);
});

child.stderr.on('data', function (data) {
  console.log('Fail');
  process.exit(1);
});

child.stdin.write('.mystyle{color:reddfdf::}');
child.stdin.end();