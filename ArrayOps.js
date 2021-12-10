// Given the following array `[[1,2,3,4,5], [1,2,3,4,5]]`
// write a function called arrayOps, which will produce the following outcome:
// `[0,2,6,12,20,5,12,21,32,45]`

let finishedArray = [];
function arrayOps(arr) {
  array1 = arr[0];
  for (let i = 0; i < array1.length; i++) {
    finishedArray.push(array1[i] * i);
  }
  array2 = arr[1];
  for (let j = 0; j < array2.length; j++) {
    finishedArray.push(array2[j] * (j + 5));
  }

  return finishedArray;
}
