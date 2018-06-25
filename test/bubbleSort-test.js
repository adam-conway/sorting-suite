const assert = require('chai').assert
const bubbleSort = require('../bubbleSort')

describe('Bubble sortin', function() {
  context('Sorts an array', function(){
    it('sorts the array using bubble sort ()', function(){
      var arr1 = [5, 4, 3, 2, 1]
      var expected = [1, 2, 3, 4, 5]
      assert.deepEqual(bubbleSort(arr1), expected)
    })
  })
})
