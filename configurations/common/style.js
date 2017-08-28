'use strict';

module.exports = {
  'rules': {
    'array-bracket-spacing': [
      2,
      'never'
    ],
    'brace-style': [
      2,
      '1tbs',
      {
        'allowSingleLine': false
      }
    ],
    'camelcase': [
      2,
      {
        'properties': 'always'
      }
    ],
    'comma-spacing': [
      2,
      {
        'before': false,
        'after': true
      }
    ],
    'comma-style': [
      2,
      'last'
    ],
    'computed-property-spacing': [
      2,
      'never'
    ],
    'consistent-this': [
      2,
      'self'
    ],
    'eol-last': 2,
    //'func-names': 2,
    /*
    'func-style': [
      2,
      'expression'
    ],
    */
    'indent': [
      2,
      2,
      {
        'SwitchCase': 1,
        'FunctionDeclaration': {'parameters': 'first'},
        'FunctionExpression': {'parameters': 'first'}
      }
    ],
    'key-spacing': [
      2,
      {
        'beforeColon': false,
        'afterColon': true
      }
    ],
    /*
    'keyword-spacing': [
      2,
      {
        'before': true,
        'after': false
      }
    ],
    */
    'linebreak-style': [
      2,
      'unix'
    ],
    'max-len': [
      2,
      120,
      4
    ],
    'no-array-constructor': 2,
    'no-bitwise': 2,
    'no-multiple-empty-lines': [
      2,
      {
        'max': 2
      }
    ],
    'no-nested-ternary': 2,
    'no-trailing-spaces': 2,
    'no-unneeded-ternary': 2,
    'quotes': [
      2,
      'single'
    ],
    'semi': [
      2,
      'always'
    ]
  }
};
