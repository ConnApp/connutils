const fs = require('fs')
const path = require('path')
const isFunction = require('../assert/isFunction')

module.exports = function utils_fs_listFiles(directory, customMap) {
    const directoryExists = fs.existsSync(directory)
    const isFolderAndExists = directoryExists && fs.lstatSync(directory).isDirectory()

    if (!isFolderAndExists) return []

    let files = fs
        .readdirSync(directory)
        .filter(file => {
            const isIndex = file.includes('index')
            const isTest = file.includes('.test.js')
            const isDirectory = fs.lstatSync(path.resolve(directory, file)).isDirectory()

            return !isIndex && !isDirectory && !isTest
        })
        .map(file => file.replace('.js', ''))

    if (isFunction(customMap)) {
        files = files.map(customMap)
    }

    return files
}
