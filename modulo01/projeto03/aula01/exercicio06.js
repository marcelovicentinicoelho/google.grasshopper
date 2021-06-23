import { testResults } from 'grasshopper.laboratory';
function check(results, ___) {
  for (var element of results) {
    if (element === 'fail') {
      return 'failed';
    }
  }
  return results.length;
};
console.log(check(testResults));
