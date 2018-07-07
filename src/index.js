const readAndRequire = require('./fs/readAndRequire')

function utils() {
    return readAndRequire(__dirname, 'folders')
}

module.exports = utils()
