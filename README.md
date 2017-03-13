eslint-config-unicoda
=====================

JavaScript convention at Unicoda.

# How to

Adapted from [eslint documentation](http://eslint.org/docs/developer-guide/shareable-configs).

Shareable configs are designed to work with the extends feature of .eslintrc files. Instead of using a file path for the value of extends, use your module name. For example:

````
{
    "extends": "eslint-config-unicoda"
}
````

You can also omit the eslint-config- and it will be automatically assumed by ESLint:

````
{
    "extends": "unicoda"
}
````

You can override settings from the shareable config by adding them directly into your .eslintrc file.
