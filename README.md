@unicoda/eslint-config
======================

JavaScript convention at Unicoda.

# Installation

Shareable configs are designed to work with the extends feature of .eslintrc files. Instead of using a file path for the value of extends, use your module name. For example:

```json
{
    "extends": "@unicoda/eslint-config"
}
```

You can also omit the eslint-config- and it will be automatically assumed by ESLint:

```json
{
    "extends": "@unicoda"
}
```

You can override settings from the shareable config by adding them directly into your .eslintrc file.

# Major configurations

* `@unicoda` (redirect to backend, see below)
* `@unicoda/eslint-config/configurations/backend`
* `@unicoda/eslint-config/configurations/frontend`

# Inspiration

* Adapted from [eslint documentation](http://eslint.org/docs/developer-guide/shareable-configs).
* [iAdvize](https://github.com/iadvize/javascript-convention)
* [Arpinum](https://github.com/arpinum/eslint-config-arpinum)

# License
