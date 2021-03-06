const fs = require('fs')
const path = require('path')

module.exports = function utils_fs_listFolders(directory, excludeList = []) {
    const directoryExists = fs.existsSync(directory)
    const isFolderAndExists = directoryExists && fs.lstatSync(directory).isDirectory()

    if (!isFolderAndExists) return []

    const folders = fs.readdirSync(directory).filter(folder => {
        const folderPath = path.join(directory, folder)

        const exists = fs.existsSync(folderPath)
        const isFolder = exists && fs.lstatSync(folderPath).isDirectory()
        const shouldNotExclude = !excludeList.includes(folder)

        return isFolder && shouldNotExclude
    })

    return folders
}
