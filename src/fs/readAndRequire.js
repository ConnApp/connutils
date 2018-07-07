const path = require('path')

function utils_assert_setDirectory(directory) {
    return function utils_assert_buildServiceExport(obj, fileName) {
        const filePath = path.join(directory, fileName)

        obj[fileName] = require(filePath)

        return obj
    }
}

module.exports = function utils_fs_readAndRequire(directory, type = 'files') {
    if (![
        'files',
        'folders',
    ].includes(type)) {
        throw new Error('Invalid file type')
    }

    const listFunction = type === 'files' ? require('./listFiles') : require('./listFolders')

    return listFunction(directory).reduce(utils_assert_setDirectory(directory), {})
}
