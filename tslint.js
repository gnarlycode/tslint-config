module.exports = {
  rules: {
    align: [true, 'parameters', 'statements', 'members'],
    'class-name': true,
    'comment-format': [true, 'check-space'],
    curly: [true, 'ignore-same-line'],
    deprecation: true,
    eofline: true,
    'import-spacing': true,
    'interface-name': [true, 'never-prefix'],
    indent: [true, 'spaces'],
    'jsdoc-format': true,
    'label-position': true,
    'linebreak-style': [true, 'LF'],
    'member-ordering': [true, { order: 'fields-first' }],
    'new-parens': true,
    'no-angle-bracket-type-assertion': true,
    'no-arg': true,
    'no-any': false,
    'no-conditional-assignment': true,
    'no-console': [true, 'log', 'error'],
    'no-construct': true,
    'no-debugger': true,
    'no-default-export': false,
    'no-duplicate-imports': true,
    'no-duplicate-super': true,
    'no-duplicate-switch-case': true,
    'no-duplicate-variable': true,
    'no-empty': true,
    'no-eval': true,
    'no-inferrable-types': [true, 'ignore-params', 'ignore-properties'],
    'no-internal-module': true,
    'no-invalid-template-strings': true,
    'no-misused-new': true,
    'no-object-literal-type-assertion': true,
    'no-return-await': true,
    'no-reference': false,
    'no-shadowed-variable': true,
    'no-sparse-arrays': true,
    'no-string-literal': true,
    'no-switch-case-fall-through': true,
    'no-this-assignment': true,
    'no-trailing-whitespace': true,
    'no-unsafe-finally': true,
    'no-unused-variable': true,
    'no-use-before-declare': true,
    'no-var-keyword': true,
    'object-literal-sort-keys': true,
    'one-line': [
      true,
      'check-catch',
      'check-else',
      'check-finally',
      'check-open-brace',
      'check-whitespace',
    ],
    'one-variable-per-declaration': [true, 'ignore-for-loop'],
    'prefer-const': true,
    'prefer-object-spread': true,
    quotemark: [true, 'single', 'jsx-double', 'avoid-escape'],
    radix: true,
    semicolon: [true, 'never'],
    'space-before-function-paren': [
      false,
      { anonymous: 'always', named: 'never', asyncArrow: 'always' },
    ],
    'switch-default': true,
    'trailing-comma': [
      true,
      {
        multiline: {
          arrays: 'always',
          functions: 'always',
          objects: 'ignore',
          properties: 'always',
          typeLiterals: 'never',
        },
        singleline: 'never',
      },
    ],
    'triple-equals': [true, 'allow-null-check'],
    typedef: [
      true,
      'parameter',
      'property-declaration',
      'member-variable-declaration',
    ],
    'typedef-whitespace': [
      true,
      {
        'call-signature': 'nospace',
        'index-signature': 'nospace',
        parameter: 'nospace',
        'property-declaration': 'nospace',
        'variable-declaration': 'nospace',
      },
      {
        'call-signature': 'onespace',
        'index-signature': 'onespace',
        parameter: 'onespace',
        'property-declaration': 'onespace',
        'variable-declaration': 'onespace',
      },
    ],
    'use-isnan': true,
    'variable-name': [true, 'ban-keywords'],
    whitespace: [
      true,
      'check-branch',
      'check-decl',
      'check-operator',
      'check-module',
      'check-separator',
      'check-type',
      'check-typecast',
    ],
  },
}
