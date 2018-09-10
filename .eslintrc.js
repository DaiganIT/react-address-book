// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
  },
  // add your custom rules here
  rules: {
    // allow debugger during development
    'no-console': 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  },
  globals: {
    module: true,
    describe: true,
    it: true,
    expect: true,
    window: true,
    document: true,
    require: true,
    __DEV__: true,
    __PROD__: true,
    __APP_MODE__: '',
    __dirname: true,
  },
};
