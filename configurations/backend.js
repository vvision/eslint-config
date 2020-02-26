'use strict';

module.exports = {
  'extends': '@unicoda/eslint-config/configurations/common',
  'rules': {
    'global-require': 2,
    'no-console': 0,
  },
  'env': {
    'node': true,
    'mongo': true,
    'jest': true
  }
};
