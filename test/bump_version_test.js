'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.bump_version = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  js: function(test) {
    var actual = grunt.file.read('tmp/config.js');
    var expected = grunt.file.read('test/expected/config.js');
    test.equal(actual, expected, 'should change the version number for js files to "0.0.1".');
    
    test.done();
  },
  json: function(test) {
    var actual = grunt.file.read('tmp/package.json');
    var expected = grunt.file.read('test/expected/package.json');
    test.equal(actual, expected, 'should change the version number for json files to "0.0.1".');
    
    test.done();
  }
};
