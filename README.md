# loader-utils-extra

Additional utilities for webpack loaders

## Installation
```sh
# npm
npm install https://github.com/cosmn/loader-utils-extra

# yarn
yarn add https://github.com/cosmn/loader-utils-extra
```

## Usage
```javascript
// my-loader/index.js

const { getResourcePath } = require("loader-utils-extra");

exports.default = function myLoader(/*content, map, meta*/) {
    getResourcePath(this) // /home/user/project/file.ext
}
```
## Api

## `getIssuer()`

## `getResourcePath()`

## `getIssuerContents()`

## `getIssuerPath()`

## `getIssuerLineLocation()`
