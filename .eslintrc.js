export default [
    {
        ignores: ['**/node_modules/**'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            parserOptions: {
                ecmaFeatures: {
                    globalReturn: false,
                    impliedStrict: true
                }
            },
            globals: {
                require: true,
                window: true,
                L: true,
                d3: true,        
                GeoTIFF: true,
                browser: true,
                es6: true
            }
        },
        rules: {
            indent: ['error', 4, {
                SwitchCase: 1
            }],
            quotes: ['error', 'single'],
            semi: ['error', 'always'],
            'no-unused-vars': 'warn',
            'no-console': 'warn',
            camelcase: 'warn',
            'max-len': ['warn', 132]
        }
    }
];