const test = require('tape'),
  streamify = require('..'),
  concat = require('concat-stream');

test('immutable', t => {
  const a = ['1', '2', '3', '4', '5'].map(str => Buffer.from(str));

  const s = streamify(a);
  s.pipe(
    concat({ encoding: 'object' }, function(res) {
      t.equal(1, arguments.length, 'concat returns 1 arg');
      t.deepEqual(a, res, 'result array matches input');
      t.end();
    })
  );
});
