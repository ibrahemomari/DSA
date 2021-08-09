let array1 = [2, 4, 6, -8];
let array2 = [42, 8, 15, 23, 42];

function insertShiftArray(arr, num) {
  let newArray = [];
  let centerIndex = Math.round(arr.length / 2);
  arr.forEach((el, idx) => {
    if (idx !== centerIndex) {
      newArray.push(el);
    } else {
      newArray.push(num);
      newArray.push(el);
    }
  });
  return newArray;
}

console.log(insertShiftArray(array1, 5));
console.log(insertShiftArray(array2, 16));
