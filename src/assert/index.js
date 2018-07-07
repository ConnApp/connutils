const readAndRequire = require('../fs/readAndRequire')

function utils_assert() {
    return readAndRequire(__dirname)
}

module.exports = utils_assert()
