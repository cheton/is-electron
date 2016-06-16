// https://github.com/electron/electron/issues/2288
function isElectron() {
    if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
        return true;
    }
    if (typeof process !== 'undefined' && process.versions && !!process.versions.electron) {
        return true;
    }
    return false;
}

module.exports = isElectron;
