import { indices, minIndex } from 'subsequence.indices';
function findNextIndex(array, minIndex, ___) {
  for (var element of array) {
    if (element >= minIndex) {
      return element + 1;
    }
  }
  return false;
};
console.log(indices);
console.log(minIndex);
console.log(findNextIndex(indices, minIndex));
