import { makeMap } from 'subsequence.functions';
import { dictionaryWord, stringSequence } from 'subsequence.words';
function compareLetters(word, object, ___) {
  for (var element of word) {
    if (object[element]) {
      ___
    } else {
      return false;
    }
  }
  return true;
};
console.log(dictionaryWord);
let stringSequenceObject = makeMap(stringSequence, ___);
console.log(compareLetters(dictionaryWord, stringSequenceObject));