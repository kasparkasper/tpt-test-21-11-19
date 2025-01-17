module.exports = {
    'env': {       
        'es6': true,
        'node':true
    },
    'extends': 'eslint:recommended',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'semi':['error', 'always'],
        'quotes':['error', 'single'],
        'indent':['error', 2]
    }
};