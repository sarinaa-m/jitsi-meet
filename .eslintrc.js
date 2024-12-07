module.exports = {
    'extends': [
        '@jitsi/eslint-config'
    ],
    'ignorePatterns': [ '*.d.ts' ],
    'parserOptions': {
        'project': [
            './tsconfig.web.json',
            './tsconfig.native.json',
            './tsconfig.firebase.json' // Add this line
        ]
    }

};
