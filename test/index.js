const test = require('tap').test;
const isElectron = require('../');

test('should return false in Node.js', function(t) {
    const isElectron = require('../');
    t.equal(isElectron(), false);
    t.end();
});

test('Renderer process', function(t) {
    const window = global.window;
    global.window = {};
    global.window.process = global.window.process || {};
    global.window.process.type = 'renderer';

    t.equal(isElectron(), true);
    global.window = window;
    t.equal(isElectron(), false);

    t.end();
});

test('Main process', function(t) {
    const electron = process.versions.electron;
    process.versions.electron = 'x.y.z';

    t.equal(isElectron(), true);
    process.versions.electron = electron;
    t.equal(isElectron(), false);

    t.end();
});

test('Detect the user agent when the `nodeIntegration` option is set to true', function(t) {
    const navigator = global.navigator;
    global.navigator = {};
    global.navigator.userAgent = 'Electron';

    t.equal(isElectron(), true);
    global.navigator = navigator;
    t.equal(isElectron(), false);

    t.end();
});
