var _ = require('lodash');

const isAnagram = (a, b) => {
    return _.isEqual(a.split('').sort(), b.split('').sort())
}

console.log(isAnagram('tic', 'cit'));
