module.exports = {
  env: {
    'jest/globals': true
  },
  plugins: [
    'jest',
  ],

  rules: {
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/consistent-test-it.md
    'jest/consistent-test-it': ['error', {
      fn: 'test',
      withinDescribe: 'it',
    }],

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/expect-expect.md
    // TODO: semver-major -> error
    'jest/expect-expect': ['warn', {
      assertFunctionNames: ['expect']
    }],

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/lowercase-name.md
    'jest/lowercase-name': 'off',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-alias-methods.md
    'jest/no-alias-methods': 'off',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-disabled-tests.md
    'jest/no-disabled-tests': 'warn',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-focused-tests.md
    'jest/no-focused-tests': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-hooks.md
    'jest/no-hooks': 'off',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-identical-title.md
    'jest/no-identical-title': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-jasmine-globals.md
    // TODO: semver-major -> error
    'jest/no-jasmine-globals': 'warn',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-jest-import.md
    'jest/no-jest-import': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-large-snapshots.md
    'jest/no-large-snapshots': ['warn', { maxSize: 50 }],

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-test-callback.md
    'jest/no-test-callback': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-test-prefixes.md
    'jest/no-test-prefixes': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-test-return-statement.md
    // TODO: semver-major -> error
    'jest/no-test-return-statement': 'warn',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-expect-assertions.md
    'jest/prefer-expect-assertions': 'off',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-inline-snapshots.md
    // TODO: enable?
    'jest/prefer-inline-snapshots': 'off',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-spy-on.md
    'jest/prefer-spy-on': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-strict-equal.md
    'jest/prefer-strict-equal': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-be-null.md
    'jest/prefer-to-be-null': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-be-undefined.md
    'jest/prefer-to-be-undefined': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-contain.md
    'jest/prefer-to-contain': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-have-length.md
    'jest/prefer-to-have-length': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/require-tothrow-message.md
    'jest/require-tothrow-message': 'warn',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-describe.md
    'jest/valid-describe': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-expect.md
    'jest/valid-expect': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-expect-in-promise.md
    'jest/valid-expect-in-promise': 'error',
  },
};
