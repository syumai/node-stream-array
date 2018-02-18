const test = require('tape'),
  streamify = require('..');

test('ctor', t => {
  t.throws(() => {
    streamify();
  }, 'throws: no argument');

  [null, undefined, 1, NaN, 'string', {}, () => {}].forEach(item => {
    t.throws(
      () => streamify(item),
      'throws: ' + (!item ? 'null/undefined' : item.toString())
    );
  });

  [[], [1], [1, 2], ['1', '2'], [new Buffer('asdf')]].forEach(item => {
    t.doesNotThrow(() => streamify(item), 'accepts: ' + item.toString());
  });

  t.end();
});
