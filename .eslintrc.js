module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:sonarjs/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    ecmaVersion: 13,
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'sonarjs',
  ],
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    // -------------------------------- Possible Problems --------------------------------
    // -------------------------------- These rules relate to possible logic errors in code: --------------------------------
    'array-callback-return': 'error',
    'no-await-in-loop': 'error',
    'no-constant-binary-expression': 'error',
    'no-constructor-return': 'error',
    'no-dupe-class-members': 'off', // typescript rule activated instead
    'no-duplicate-imports': ['error', { includeExports: true }],
    'no-loss-of-precision': 'off', // typescript rule activated instead
    'no-promise-executor-return': 'error',
    'no-self-compare': 'error',
    'no-template-curly-in-string': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unreachable-loop': 'error',
    'no-unused-vars': 'off', // typescript rule activated instead
    'no-use-before-define': 'off', // typescript rule activated instead
    'require-atomic-updates': 'error',
    // -------------------------------- Suggestions --------------------------------
    // -------------------------------- These rules suggest alternate ways of doing things: --------------------------------
    'complexity': ['error', { max: 7 }],
    'consistent-return': 'error',
    'dot-notation': 'off', // typescript rule activated instead
    'eqeqeq': ['error', 'smart'],
    'guard-for-in': 'error',
    'init-declarations': 'off', // typescript rule activated instead
    'no-array-constructor': 'off', // typescript rule activated instead
    'no-else-return': 'error',
    'no-empty-function': 'off', // typescript rule activated instead
    'no-extra-semi': 'off', // typescript rule activated instead
    'no-eval': 'error',
    'no-implied-eval': 'off', // typescript rule activated instead
    'no-invalid-this': 'off', // typescript rule activated instead
    'no-lonely-if': 'error',
    'no-loop-func': 'off', // typescript rule activated instead
    'no-magic-numbers': 'off', // typescript rule activated instead
    'no-mixed-operators': [
      'error',
      {
        groups: [
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
      },
    ],
    'no-multi-assign': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-param-reassign': 'error',
    'no-redeclare': 'off', // typescript rule activated instead
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'off', // typescript rule activated instead
    'no-sequences': ['error', { allowInParentheses: false }],
    'no-shadow': 'off', // typescript rule activated instead
    'no-throw-literal': 'off', // typescript rule activated instead
    'no-undef-init': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'off', // typescript rule activated instead
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'off', // typescript rule activated instead
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'prefer-const': 'error',
    'prefer-object-spread': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quote-props': ['error', 'as-needed'],
    'require-await': 'off', // typescript rule activated instead
    // -------------------------------- Layout & Formatting --------------------------------
    // -------------------------------- These rules care about how the code looks rather than how it executes: --------------------------------
    'array-bracket-newline': ['error', { multiline: true }],
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': ['error', 'consistent'],
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'block-spacing': ['error', 'always'],
    'brace-style': 'off', // typescript rule activated instead
    'comma-dangle': 'off', // typescript rule activated instead
    'comma-spacing': 'off', // typescript rule activated instead
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never', { enforceForClassMembers: true }],
    'dot-location': ['error', 'property'],
    'eol-last': ['error', 'always'],
    'func-call-spacing': 'off', // typescript rule activated instead
    'function-call-argument-newline': ['error', 'consistent'],
    'function-paren-newline': ['error', 'consistent'],
    'generator-star-spacing': ['error', 'before'],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'indent': ['error', 2, { SwitchCase: 1, ignoredNodes: ['PropertyDefinition'] }],
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
    'keyword-spacing': 'off', // typescript rule activated instead
    'line-comment-position': 'off',
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': ['error', { beforeBlockComment: true }],
    'lines-between-class-members': 'off', // typescript rule activated instead
    'max-len': [
      'error',
      {
        code: 120,
        ignorePattern: '^import | ^export (.*?)',
        ignoreTemplateLiterals: true,
        ignoreComments: true
      },
    ],
    'max-statements-per-line': ['error', { max: 1 }],
    'multiline-ternary': ['error', 'always-multiline'],
    'new-parens': ['error', 'always'],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 3 }],
    'no-extra-parens': 'off',
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: false,
        exceptions: { 'Property': false },
      }
    ],
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
    'no-tabs': ['error', { allowIndentationTabs: false }],
    'no-trailing-spaces': ['error', { skipBlankLines: false, ignoreComments: false }],
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': ['error', 'beside'],
    'object-curly-newline': ['error', { consistent: true }],
    'object-curly-spacing': 'off', // typescript rule activated instead
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    'operator-linebreak': [
      'error',
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before',
          '??': 'before'
        }
      }
    ],
    'padded-blocks': ['error', 'never', { allowSingleLineBlocks: false }],
    'padding-line-between-statements': 'off',
    'quotes': 'off', // typescript rule activated instead
    'rest-spread-spacing': ['error', 'never'],
    'semi': 'off', // typescript rule activated instead
    'semi-spacing': ['error', { before: false, after: true }],
    'semi-style': ['error', 'last'],
    'space-before-blocks': 'off', // typescript rule activated instead
    'space-before-function-paren': 'off', // typescript rule activated instead
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'off', // typescript rule activated instead
    'space-unary-ops': ['error', { words: true, nonwords: false }],
    'switch-colon-spacing': ['error', { before: false, after: true }],
    'template-curly-spacing': ['error', 'never'],
    'template-tag-spacing': ['error', 'always'],
    'unicode-bom': ['error', 'never'],
    'wrap-iife': ['error', 'inside', { functionPrototypeMethods: true }],
    'wrap-regex': 'error',
    'yield-star-spacing': ['error', 'after'],
    // -------------------------------- SonarJS Rules --------------------------------
    'sonarjs/no-inverted-boolean-check': 'error',
    // -------------------------------- TypeScript Supported Rules --------------------------------
    '@typescript-eslint/array-type': ['error', { default: 'array', readonly: 'array' }],
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
    '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'as', objectLiteralTypeAssertions: 'never' }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
        allowDirectConstAssertionInArrowFunctions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: false,
        allowedNames: [],
      }
    ],
    '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
    '@typescript-eslint/explicit-module-boundary-types': ['error', { allowArgumentsExplicitlyTypedAsAny: true }],
    '@typescript-eslint/member-delimiter-style': 'error',
    '@typescript-eslint/method-signature-style': ['error', 'method'],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['variable', 'function'],
        format: ['camelCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^[A-Za-z]*$',
          match: true,
        },
      },
    ],
    '@typescript-eslint/no-base-to-string': 'error',
    '@typescript-eslint/no-confusing-non-null-assertion': 'off',
    '@typescript-eslint/no-confusing-void-expression': ['error', { ignoreArrowShorthand: true }],
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    '@typescript-eslint/no-dynamic-delete': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-extraneous-class': ['error', { allowWithDecorator: true }],
    '@typescript-eslint/no-inferrable-types': ['error', { ignoreProperties: true }],
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/no-meaningless-void-operator': 'error',
    '@typescript-eslint/no-redundant-type-constituents': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': [
      'error',
      {
        allowComparingNullableBooleansToTrue: false,
        allowComparingNullableBooleansToFalse: false,
      }
    ],
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-useless-empty-export': 'error',
    '@typescript-eslint/non-nullable-type-assertion-style': 'error',
    '@typescript-eslint/parameter-properties': ['error', { allow: ['readonly'], prefer: 'parameter-property' }],
    '@typescript-eslint/prefer-enum-initializers': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/prefer-return-this-type': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
    // -------------------------------- TypeScript Extension Rules --------------------------------
    '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: false }],
    '@typescript-eslint/comma-dangle': ['error', 'only-multiline'],
    '@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/dot-notation': 'error',
    '@typescript-eslint/func-call-spacing': ['error', 'never'],
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        SwitchCase: 1,
        ignoredNodes: ['PropertyDefinition[decorators]', 'TSUnionType'],
      },
    ],
    '@typescript-eslint/init-declarations': 'error',
    '@typescript-eslint/keyword-spacing': ['error', { before: true, after: true }],
    '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-dupe-class-members': 'error',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-extra-semi': 'error',
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-invalid-this': 'error',
    '@typescript-eslint/no-loop-func': 'error',
    '@typescript-eslint/no-loss-of-precision': 'error',
    '@typescript-eslint/no-magic-numbers': [
      'error',
      {
        enforceConst: true,
        ignore: [0, 1, -1],
        ignoreArrayIndexes: true,
        ignoreEnums: true
      }
    ],
    '@typescript-eslint/no-redeclare': ['error', { ignoreDeclarationMerge: false }],
    '@typescript-eslint/no-shadow': ['error', { ignoreOnInitialization: true }],
    '@typescript-eslint/no-throw-literal': 'error',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/return-await': 'error',
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/space-before-blocks': ['error', 'always'],
    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    '@typescript-eslint/space-infix-ops': ['error', { int32Hint: false }],
  },
  overrides: [
    {
      files: ['*.spec.ts', '*.api.ts', 'test/**'],
      rules: {
        'sonarjs/no-duplicate-string': 'off',
        '@typescript-eslint/init-declarations': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-magic-numbers': 'off',
      },
    },
  ],
};
