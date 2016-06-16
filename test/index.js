var test = require('tap').test;

test('should return false in Node.js', function(t) {
    const isElectron = require('../');
    t.equal(isElectron(), false);
    t.end();
});
