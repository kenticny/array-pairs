function encode(obj) {

}

function decode(array) {
  if(!Array.isArray(array)) {
    throw new TypeError('Parameter must be an array.');
  }
  if(!everyElementsAreArray(array)) {
    return array;
  }
  console.log('Inner')
  return array.reduce((results, currentItem) => {
    var key = currentItem[0], value = currentItem[1];
    console.log(value)
    if(Array.isArray(value) && Array.isArray(value[0])) {
      value = decode(value);
    }
    results[key] = value;
    return results;
  }, {});
}

function everyElementsAreArray(array) {
  return array.every(item => Array.isArray(item));
}

module.exports.encode = encode;
module.exports.decode = decode;