# stream-array-es6

Pipe an Array through Node.js [Streams][12]. This is rather useful for testing
other streams.

[![npm version][1]][2]
[![build status][3]][4]
[![dependencies][5]][6]
[![devDependencies][7]][8]

## Usage

```js
const streamify = require('stream-array-es6'),
  os = require('os');

streamify(['1', '2', '3', os.EOL]).pipe(process.stdout);
```

## API

#### streamify(Array)

The result of [require][13] is a 'function()' that when invoked, will return a
[Readable][11] [Stream][12].

```js
const streamify = require('stream-array-es6');
```

The source array can contain any type as it is assumed that the receiving
stream can handle it. Each element in the array will be [pushed][14] into the
[piped][15] stream, **without** modifying the source array.

```js
const readable = streamify(['Hello', new Buffer('World')]);
```

This [Stream][12] will [push][14] each element of the source array into the
[piped][15] array.

```js
readable(['1', '2', '3', os.EOL]).pipe(process.stdout);
```

```
123\n
```

## Install

```sh
npm install stream-array-es6
```

[1]: https://badge.fury.io/js/stream-array-es6.svg
[2]: https://badge.fury.io/js/stream-array-es6
[3]: https://api.travis-ci.org/syumai/stream-array-es6.svg
[4]: https://travis-ci.org/syumai/stream-array-es6
[5]: https://david-dm.org/syumai/stream-array-es6.svg
[6]: https://david-dm.org/syumai/stream-array-es6
[7]: https://david-dm.org/syumai/stream-array-es6/dev-status.svg?#info=devDependencies
[8]: https://david-dm.org/syumai/stream-array-es6/#info=devDependencies
[11]: http://nodejs.org/api/stream.html#stream_class_stream_readable
[12]: http://nodejs.org/api/stream.html#stream_stream
[13]: http://nodejs.org/api/globals.html#globals_require
[14]: https://nodejs.org/api/stream.html#stream_readable_push_chunk_encoding
[15]: https://nodejs.org/api/stream.html#stream_readable_pipe_destination_options
[16]: https://inch-ci.org/github/mimetnet/node-stream-array.svg?branch=master
[17]: http://inch-ci.org/github/mimetnet/node-stream-array

## License

[MIT License](https://github.com/syumai/stream-array-es6/blob/master/LICENSE)
