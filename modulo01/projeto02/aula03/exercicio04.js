function larger(a, b, ___) {
  return a > b ? a : b;
};
function maximum(array, ___) {
  let max = 0;
  for (let num of array) {
    max = larger(max, num);
  }
  return max;
};
console.log(list);
console.log(maximum(list));