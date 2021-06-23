import { dictionaryWord, findNextIndex, makeMap, stringSequence } from 'grasshopper.library';
console.log(stringSequence);
console.log(dictionaryWord);
let mappedString = makeMap(stringSequence, ___);
function isSubsequence(word, map, ___) {
  let minIndex = 0;
  for (let letter of word) {
    if (map[letter]) {
      minIndex = findNextIndex(map[letter], minIndex, ___);
      if (minIndex === false) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};
console.log(isSubsequence(dictionaryWord, mappedString));