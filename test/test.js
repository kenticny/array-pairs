const arraypairs = require('../libs');
const should = require('should');

const testData = {
  case1: {
    objects: {name: 'kenticny', age: 27, gender: 'male'},
    arraypairs: [['name', 'kenticny'], ['age', 27], ['gender', 'male']]
  },
  case2: {
    objects: {name: 'kenticny', language: ['node.js', 'golang', 'python']},
    arraypairs: [['name', 'kenticny'], ['language', ['node.js', 'golang', 'python']]]
  },
  case3: {
    objects: {name: 'kenticny', favorites: {language: 'golang', foods: ['noodle', 'meats']}},
    arraypairs: [['name', 'kenticny'], ['favorites', [['language', 'golang'], ['foods', ['noodle', 'meats']]]]]
  },
  case4: {
    objects: {name: 'kenticny', favorites: {foods: ['noodle', 'meats']}},
    arraypairs: [['name', 'kenticny'], ['favorites', [['foods', ['noodle', 'meats']]]]]
  },
  case5: {
    objects: {name: 'kenticny', intro: ['engineer', {language: 'node.js'}, '5year']},
    arraypairs: [['name', 'kenticny'], ['intro', ['engineer', [['language', 'node.js']], '5year']]]
  },
  case6: {
    objects: {name: 'kenticny', intro: ['engineer', ['node.js', 'golang'], '5year']},
    arraypairs: [['name', 'kenticny'], ['intro', ['engineer', ['node.js', 'golang'], '5year']]]
  }
};

describe('Array pairs unit test', () => {
  it('test case 1 arraypairs to objects', () => {
    var results = arraypairs.decode(testData.case1.arraypairs);
    arrayPairsToObjectsHandle(results, testData.case1.objects);
  });

  it('test case 2 arraypairs to objects', () => {
    var results = arraypairs.decode(testData.case2.arraypairs);
    arrayPairsToObjectsHandle(results, testData.case2.objects);
  });

  it('test case 3 arraypairs to objects', () => {
    var results = arraypairs.decode(testData.case3.arraypairs);
    arrayPairsToObjectsHandle(results, testData.case3.objects);
  });

  it('test case 4 arraypairs to objects', () => {
    var results = arraypairs.decode(testData.case4.arraypairs);
    arrayPairsToObjectsHandle(results, testData.case4.objects);
  });

  it('test case 5 arraypairs to objects', () => {
    var results = arraypairs.decode(testData.case5.arraypairs);
    arrayPairsToObjectsHandle(results, testData.case5.objects);
  });

  it('test case 6 arraypairs to objects', () => {
    var results = arraypairs.decode(testData.case6.arraypairs);
    arrayPairsToObjectsHandle(results, testData.case6.objects);
  });
});

function arrayPairsToObjectsHandle(results, standard) {
  results.should.be.an.Object();
  JSON.stringify(results).should.equal(JSON.stringify(standard));
}
