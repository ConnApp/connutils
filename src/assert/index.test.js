const test = require('ava')

test('should build export correctly [assert utils]', async t => {
    const asserts = require('.')

    const expectedKeys = [
        { getType: require('./getType') },
        { isFunction: require('./isFunction') },
        { ensureIsInt: require('./ensureIsInt') },
        { isTruthyType: require('./isTruthyType') },
    ]

    for (let key of expectedKeys) {
        const [
            fileName,
        ] = Object.keys(key)

        const fn = key[fileName]

        t.is(asserts[fileName].name, fn.name)
    }
})
