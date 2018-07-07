const test = require('ava')

test('should build export correctly [service utils]', async t => {
    const asserts = require('.')

    const expectedKeys = [
        { buildRoute: require('./buildRoute') },
        { extractService: require('./extractService') },
        { getMethodsByOperation: require('./getMethodsByOperation') },
        { getServiceMiddlewares: require('./getServiceMiddlewares') },
        { runServiceValidators: require('./runServiceValidators') },
    ]

    for (let key of expectedKeys) {
        const [
            fileName,
        ] = Object.keys(key)

        const fn = key[fileName]

        t.is(asserts[fileName].name, fn.name)
    }
})
