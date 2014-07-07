var noCase = require('to-no-case');

function cssName(property){
    var parts = noCase(property).split(' ');

    if(~cssName.prefixes.indexOf(parts[0])){
        parts[0] = '-' + parts[0];
    }

    return parts.join('-');
}

// Add extensibility
cssName.prefixes = ['webkit', 'moz', 'ms', 'o'];

module.exports = cssName;