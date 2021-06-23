import { array, index } from 'grasshopper.arrayFactory';
function getNeighbor(arr, i, ___) {
  let neighborIndex = i + 1;
  return arr[neighborIndex];
};
console.log('The neighbor to ' + array[index] + ' is ' + getNeighbor(array, index));