
exports.min = array => array ? array.length ? Math.min(...array) : 0 : 0;

exports.max = array => array ? array.length ? Math.max(...array) : 0 : 0;

exports.avg = array => array ? array.length ? array.reduce((a, b) => a + b) / array.length : 0 : 0;
