// function bubbleSort(arr){
//   for(var i = 0; i < arr.length; i++) {
//     for(var j= 1; j < arr.length; j++) {
//       if(arr[j-1] > arr[j]) {
//         switch
//       }
//     }
//   }
// };

function swap(array, index1, index2){
  var holding = array[index1];
  array[index1] = array[index2];
  array[index2] = holding;
};

function bubbleSort(arr){
  for(var i = 0; i < arr.length; i++) {
    for(var j = 1; j < arr.length; j++) {
      if(arr[j - 1] > arr[j]) {
        swap(arr, j - 1, j)
      }
    }
  }
  return arr;
}



module.exports = bubbleSort
