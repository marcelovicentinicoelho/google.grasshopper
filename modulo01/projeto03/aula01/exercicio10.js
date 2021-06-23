import { produce } from 'grasshopper.data';
function getLength(words, ___) {
  for (let word of words) {
    console.log(word);
    console.log(word.length + ' letters');
  }
};
getLength(produce);