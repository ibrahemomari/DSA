'use strict';
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const array2 = ["A", "B", "C", "D"];

function reverseArray(arr) {
  let newArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
}

console.log('the orginal array=',array);
console.log('array after reversing=',reverseArray(array));
console.log('____________________________________');
console.log('the orginal array=',array2);
console.log('array after reversing=',reverseArray(array2));

module.exports={
    reverseArray
}


