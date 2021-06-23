import { randomWord } from 'cross.words';
function check(space, word, ___) {
  if (space.length !== word.length) {
    return false;
  }
  for (let intCont = 0; intCont < space.length; intCont++) {
    if (space[intCont] !== '-' && space[intCont] !== word[intCont]) {
      return false;
    }
  }
  return true;
};
console.log('-a-t');
console.log(randomWord);
console.log(check('-a-t', randomWord));