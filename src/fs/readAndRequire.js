const path = require('path')

function utils_assert_buildServiceExport(obj, fileName) {
    const filePath = path.join(__dirname, fileName)

    obj[fileName] = require(filePath)

    return obj
}

module.export = function utils_fs_readAndRequire(directory, type = 'files') {
    if ([
        'files',
        'folders',
    ].includes(type)) {
        throw new Error('Invalid file type')
    }

    const listFunction = type === 'files' ? require('./listFiles') : require('./listFolders')

    return listFunction(__dirname).reduce(utils_assert_buildServiceExport, {})
}
