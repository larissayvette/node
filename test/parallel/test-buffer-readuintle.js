'use strict';
require('../common');
const assert = require('assert');

// testing basic functionality of readUIntLE()

const buf = Buffer.from([0xa4, 0xfd, 0x48, 0xea]);
const result = buf.readUIntLE(2);

assert.strictEqual(result, 0x48);

assert.throws(
  () => buf.readUIntLE(5),
  /^RangeError: Index out of range$/
);

assert.doesNotThrow(
  () => buf.readUIntLE(5, 0, true),
  'readUIntLE() should not throw if noAssert is true'
);
