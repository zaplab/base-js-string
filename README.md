# zap-base-js-string [![Build Status](https://travis-ci.org/zaplab/base-js-string.svg?branch=master)](https://travis-ci.org/zaplab/base-js-string)

just translating (and testing) some old code to ES6, nothing to see here ;-)

## Install
```
$ npm install zap-base-js-string
```

## Usage
```js
import {
    capitalize,
    capitalizeFirstLetter,
    camelize,
    dasherize,
} from 'zap-base-js-string';
```

### capitalize
```js
capitalize('test string'); // 'Test String'
```

### capitalizeFirstLetter
```js
capitalizeFirstLetter('test string'); // 'Test string'
```

### camelize
```js
camelize('test-string'); // 'testString'
```

### dasherize
```js
dasherize('TestString'); // 'test-string'
```
