const OFF = 0;
const WARN = 1;
const ERROR = 2;

const CWD = process.cwd();

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      'jsx': true,
      'globalReturn': true,
      'impliedStrict': true,
      'experimentalObjectRestSpread': true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  // globals: {
  //   __DEBUG__: true,
  //   __DEV__: true,
  //   __NODE_ENV__: true,
  //   __PROD__: true,
  //   __SECRET__: true,
  // },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/strict',
    'plugin:react/recommended',
    'plugin:security/recommended',
    'plugin:node/recommended',
    'plugin:sonarjs/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/external-module-folders': ['node_modules'],
    'import/resolver': {
      // use <root>/tsconfig.json
      'typescript': {},
      'webpack': {
        'config': `${CWD}/webpack/`,
      },
    },
  },
  plugins: [
    'import',
    'jsx-a11y',
    'node',
    'promise',
    'react',
    'react-hooks',
    'security',
    'simple-import-sort',
    'sonarjs',
  ],
  rules: {
    'array-bracket-spacing': [ERROR, 'never'],
    'arrow-spacing': ERROR,
    'block-scoped-var': ERROR,
    'brace-style': [ERROR, '1tbs'],
    'callback-return': OFF,
    'camelcase': [ERROR, {
      'allow': ['created_at', 'updated_at'],
      'properties': 'never',
    }],
    'comma-dangle': [ERROR, 'always-multiline'],
    'comma-spacing': [ERROR, {
      'before': false,
      'after': true,
    }],
    'comma-style': [ERROR, 'last'],
    'computed-property-spacing': [ERROR, 'never'],
    'consistent-this': ERROR,
    'curly': [ERROR, 'multi-line'],
    'default-case': ERROR,
    'dot-notation': [ERROR, {
      'allowKeywords': true,
    }],
    'eol-last': ERROR,
    'eqeqeq': ERROR,
    'generator-star-spacing': [ERROR, {before: false, after: true}],
    'guard-for-in': ERROR,
    'handle-callback-err': ERROR,
    // unfortunately, this doesnt work very well with bundled types
    'import/named': OFF,
    // have had false positives. plus ts handles this just fine
    'import/no-duplicates': OFF,
    // doesnt like aliases, and besides, ts handles it just fine
    'import/no-unresolved': OFF,
    'import/namespace': [OFF, { allowComputed: true }],
    'import/order': OFF,
    'import/no-named-as-default': ERROR,
    'import/no-named-as-default-member': ERROR,
    'indent': [ERROR, 2],
    'jsx-a11y/no-autofocus': OFF,
    'jsx-a11y/no-onchange': OFF,
    'jsx-a11y/no-noninteractive-element-interactions': ERROR,
    'jsx-quotes': [ERROR, 'prefer-double'],
    'key-spacing': [ERROR, {
      'beforeColon': false,
      'afterColon': true,
    }],
    'keyword-spacing': [ERROR, {
      'before': true,
      'after': true,
    }],
    'linebreak-style': ERROR,
    'new-parens': ERROR,
    'node/no-extraneous-require': OFF,
    'node/no-unsupported-features/es-syntax': OFF,
    'no-alert': ERROR,
    'no-array-constructor': ERROR,
    'no-caller': ERROR,
    'no-confusing-arrow': ERROR,
    'no-console': WARN,
    'no-continue': ERROR,
    'no-else-return': ERROR,
    'no-eq-null': ERROR,
    'no-eval': ERROR,
    'no-extend-native': ERROR,
    'no-extra-bind': ERROR,
    'no-floating-decimal': ERROR,
    'no-implicit-coercion': [ERROR, {
      'boolean': false,
      'number': true,
      'string': true,
    }],
    'no-implied-eval': ERROR,
    'no-iterator': ERROR,
    'no-labels': ERROR,
    'no-lone-blocks': ERROR,
    'no-loop-func': ERROR,
    'no-mixed-requires': [ERROR, false],
    'no-multi-spaces': ERROR,
    'no-multi-str': ERROR,
    'no-multiple-empty-lines': [ERROR, {'max': 2}],
    'no-native-reassign': ERROR,
    'no-nested-ternary': ERROR,
    'no-new': ERROR,
    'no-new-func': ERROR,
    'no-new-require': ERROR,
    'no-new-wrappers': ERROR,
    'no-octal-escape': ERROR,
    'no-param-reassign': ERROR,
    'no-process-exit': ERROR,
    'no-proto': ERROR,
    'no-restricted-modules': ERROR,
    'no-return-assign': ERROR,
    'no-script-url': ERROR,
    'no-self-compare': ERROR,
    'no-sequences': ERROR,
    'no-spaced-func': ERROR,
    'no-throw-literal': ERROR,
    'no-trailing-spaces': ERROR,
    // ts can catch it for us, and causes problems with react-hooks
    'no-undef': OFF,
    'no-unneeded-ternary': ERROR,
    'no-unused-expressions': ERROR,
    // conflicts with ts type imports
    'no-unused-vars': OFF,
    'no-useless-call': ERROR,
    'no-useless-computed-key': ERROR,
    'no-useless-rename': ERROR,
    'no-useless-return': ERROR,
    'no-var': ERROR,
    'no-void': ERROR,
    'no-with': ERROR,
    'one-var': [ERROR, 'never'],
    'prefer-const': ERROR,
    'prefer-destructuring': [ERROR, {
      // basically, force destructure at variable declaration
      'VariableDeclarator': {
        'array': false,
        'object': true,
      },
      // but don"t force destructure on (re)assignment
      'AssignmentExpression': {
        'array': false,
        'object': false,
      },
    }, {
      'enforceForRenamedProperties': false,
    }],
    'prefer-spread': ERROR,
    'promise/always-return': 'error',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-native': 'off',
    'promise/no-nesting': 'warn',
    'promise/no-promise-in-callback': 'error',
    'promise/no-callback-in-promise': 'off',
    'promise/avoid-new': 'warn',
    'promise/no-new-statics': 'error',
    'promise/no-return-in-finally': 'warn',
    'promise/valid-params': 'warn',
    'quotes': [ERROR, 'single', 'avoid-escape'],
    'radix': ERROR,
    'react/display-name': OFF,
    'react/jsx-boolean-value': ERROR,
    'react/jsx-fragments': [ERROR, 'syntax'],
    'react/jsx-wrap-multilines': ERROR,
    'react/no-did-mount-set-state': OFF,
    'react/no-did-update-set-state': ERROR,
    'react/no-multi-comp': ERROR,
    'react/prop-types': OFF, // needs to be off because we use typescript
    'react/self-closing-comp': ERROR,
    'react/no-children-prop': OFF,
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': WARN,
    'require-atomic-updates': OFF,
    // these ones are very common and sometimes necessary, so disable
    'security/detect-object-injection': OFF,
    'security/detect-non-literal-fs-filename': OFF,
    'semi': ERROR,
    'semi-spacing': [ERROR, {
      'before': false,
      'after': true,
    }],
    'sonarjs/no-small-switch': OFF,
    'sonarjs/no-duplicated-branches': OFF,
    'sonarjs/cognitive-complexity': OFF,
    'sort-imports': OFF,
    'simple-import-sort/sort': ERROR,
    'sort-vars': ERROR,
    'space-before-blocks': ERROR,
    'space-before-function-paren': [OFF, 'never'], // doesnt work with async funcs
    'space-in-parens': [ERROR, 'never'],
    'space-infix-ops': ERROR,
    'spaced-comment': [ERROR, 'always', {
      'exceptions': ['-', '+', '*', '/'],
      'markers': ['=', '!'],
    }],
    'vars-on-top': ERROR,
    'wrap-iife': [ERROR, 'any'],


    /*
      @TODO re-enable these rules once the codebase is a little more cleaned up
      dont want to make a ton of changes just to appease the linter at the moment
      but these are useful rules that we should try to address separately later
    */
    'camelcase': OFF,
    'no-empty': OFF,
    'no-console': OFF,
    'sonarjs/no-duplicate-string': OFF,
    'react/no-multi-comp': OFF,
    'sonarjs/no-identical-functions': OFF,
  },
};
