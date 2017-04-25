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

// function transformObjectToArrayPairs(obj, base) {
//   var keys = Object.keys(obj);
//   if(keys.length == 0) return base;
//   base = base || [];
//   keys.forEach(n => {
//     var pairs = [n];
//     var val = obj[n];
//     if(Array.isArray(val)) {
//       val = val.map(n => {
//         if(isObject(n)) {
//           return transformObjectToArrayPairs(n);
//         }
//         return
//       });
//     }else if(isObject(val)) {

//     }else {

//     }
//   });
// }

function isObject(variable) {
  var typestring = Object.prototype.toString.call(variable);
  if(typestring.indexOf('Object') > -1) {
    return true;
  }
  return false;
}

module.exports.encode = encode;
module.exports.decode = decode;