var cssName = require('../'),
    test = require('grape');

test('convert normal property', function(t){
    t.plan(1);

    t.equal(
        cssName('border'),
        'border'
    );
});

test('convert camel\'d property', function(t){
    t.plan(1);

    t.equal(
        cssName('borderRadius'),
        'border-radius'
    );
});

test('convert prefixed property', function(t){
    t.plan(1);

    t.equal(
        cssName('webkitTransform'),
        '-webkit-transform'
    );
});