function encode(obj) {
  var keys = Object.keys(obj);
  if(keys.length == 0) return obj;
  
}

/**
 * Decode the array pairs to object.
 *
 * eg:
 * array pairs: [['a', 'b'], ['c', 'd']]
 * decode to object: {a: 'b', c: 'd'}
 *
 * @param {Array} array 
 */
function decode(array) {
  if(!Array.isArray(array)) {
    throw new TypeError('Parameter must be an array.');
  }
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

function transformObjectToArrayPairs(obj, base) {
  var keys = Object.keys(obj);
  if(keys.length == 0) return base;
  base = base || [];
  keys.forEach(n => {
    var pairs = [n];
    var val = obj[n];
    switch(Object.prototype.toString.call(val)) {
      case '[object Array]':
        
        break;
      case '[object Object]':
        break;
      default:
        pairs.push(val);
        break;
    }
    base.push(pairs);
  });
}

function transformArrayToArrayPairs(array) {
  
}

function isObject(variable) {
  var typestring = Object.prototype.toString.call(variable);
  if(typestring.indexOf('Object') > -1) {
    return true;
  }
  return false;
}

module.exports.encode = encode;
module.exports.decode = decode;