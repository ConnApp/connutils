const test = require('ava')

const listFiles = require('./listFiles')

test('should list only files from directory. Excludes index [current directory]', async t => {
    const srcFiles = [
        'listFiles',
        'listFolders',
    ]

    const files = listFiles(__dirname)

    for (let srcFile of srcFiles) {
        t.true(files.includes(srcFile))
    }
})
