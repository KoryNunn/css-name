# css-name

convert a DOM style name to a css name

## usage

Install it:

    npm install css-name

Require it:

    var cssName = require('../');

Use it:

    // normal name

    cssName('border');
    // -> 'border'

    // camelCase name

    cssName('borderRadius');
    // -> 'border-radius'

    // prefixed name

    cssName('webkitTransform');
    // -> '-webkit-transform'

Works well with [venfix](https://www.npmjs.org/package/venfix)