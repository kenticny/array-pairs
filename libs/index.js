function encode(obj) {
  var keys = Object.keys(obj);
  if(keys.length == 0) return obj;
  return transformObjectToArrayPairs(obj);
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

function assignTypeHandle(val) {
  switch(Object.prototype.toString.call(val)) {
    case '[object Array]':
      return transformArrayToArrayPairs(val);
      break;
    case '[object Object]':
      return transformObjectToArrayPairs(val);
      break;
    default:
      return transformNormalToArrayPairs(val);
      break;
  }
}

function transformObjectToArrayPairs(obj) {
  var keys = Object.keys(obj);
  var base = [];
  if(keys.length == 0) return base;
  keys.forEach(n => {
    var pairs = [n];
    var val = obj[n];
    val = assignTypeHandle(val);
    pairs.push(val);
    base.push(pairs);
  });
  return base;
}

function transformArrayToArrayPairs(array) {
  if(!Array.isArray(array)) {
    return array;
  }
  for(var i = 0; i < array.length; i++) {
    array[i] = assignTypeHandle(array[i]);
  }
  return array;
}

function transformNormalToArrayPairs(variable) {
  return variable;
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