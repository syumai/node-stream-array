'use strict';

const Readable = require('stream').Readable;

/**
 * Create a new instance of StreamArray
 *
 * @access private
 * @param {Array} list
 */
class StreamArray extends Readable {
  constructor(list) {
    if (!Array.isArray(list))
      throw new TypeError('First argument must be an Array');
    super();
    this._i = 0;
    this._l = list.length;
    this._list = list;
  }

  /**
   * Read the next item from the source Array and push into NodeJS stream
   *
   * @access protected
   * @desc Read the next item from the source Array and push into NodeJS stream
   * @param {number} size The amount of data to read (ignored)
   */
  _read(size) {
    this.push(this._i < this._l ? this._list[this._i++] : null);
  }
}

/**
 * Create a new instance of StreamArray
 *
 * @module stream-array
 * @desc Push Array elements through a NodeJS stream
 * @type {function}
 * @param {Array} list An Array of objects, strings, numbers, etc
 */
module.exports = list => new StreamArray(list);
