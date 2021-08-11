let numbers1 = [4, 8, 15, 16, 23, 42];
let numbers2 = [-131, -82, 0, 27, 42, 68, 179];
let numbers3 = [-131, -82, 0,];

const binarySearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
};

console.log(binarySearch(numbers1, 15));
console.log(binarySearch(numbers2, 42));
console.log(binarySearch(numbers2, -82));
