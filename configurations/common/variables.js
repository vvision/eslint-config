'use strict';

module.exports = {
  'rules': {
    'no-delete-var': 2,
    'no-shadow-restricted-names': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-unused-vars': [
      2,
      {
        'varsIgnorePattern': 'assert|expect|should'
      }
    ],
    'no-use-before-define': [
      2,
      'nofunc'
    ]
  }
};
