function encode(obj) {

}

function decode(array) {
  if(!Array.isArray(array)) {
    throw new TypeError('Parameter must be an array.');
  }
  if(!isObjectArray(array)) return array;

  return array.reduce((results, currentItem) => {
    var key = currentItem[0], value = currentItem[1];

    if(isObjectArray(value)) {
      value = decode(value);
    }else if(Array.isArray(value)) {
      value = value.map(n => {
        if(isObjectArray(n)) {
          return decode(n);
        }
        return n;
      });
    }

    results[key] = value;
    return results;
  }, {});
}

function isObjectArray(array) {
  return Array.isArray(array) && array.every(n => Array.isArray(n));
}

module.exports.encode = encode;
module.exports.decode = decode;