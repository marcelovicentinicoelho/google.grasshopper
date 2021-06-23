import { word } from 'grasshopper.wordList';
console.log(word);
function mapString(string, ___) {
  let myMap = {
    ___: ___
  };
  for (let myCont = 0; myCont < string.length; myCont++) {
    let myLetter = string[myCont];
    if (myMap[myLetter]) {
      myMap[myLetter].push(myCont);
    } else {
      myMap[myLetter] = [
        myCont,
        ___
      ];
    }
  }
  return myMap;
};
let stringMap = mapString(word);
for (let letter in stringMap) {
  console.log(letter + ' : ' + stringMap[letter]);
}