const readAndRequire = require('../fs/readAndRequire')

function utils_service() {
    return readAndRequire(__dirname)
}

module.exports = utils_service()
