import { subsequences, stringSequence } from 'subsequence.words';
function longestWord(array, ___) {
  let myLongestWord = '';
  for (var element of array) {
    if (element.length > myLongestWord.length) {
      myLongestWord = element;
    }
  }
  return myLongestWord;
};
console.log(stringSequence);
console.log(subsequences);
console.log(longestWord(subsequences));