import { obj, string } from 'grasshopper.data';
for (let i = 0; i < string.length; i++) {
  let letter = string[i];
  obj[letter] = i;
}
for (let property in obj) {
  console.log(property + ': ' + obj[property]);
}