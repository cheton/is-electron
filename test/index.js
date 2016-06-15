var test = require('tap').test;

test('should return false in Node.js', function(t) {
    const result = require('../');
    t.equal(result, false);
    t.end();
});
