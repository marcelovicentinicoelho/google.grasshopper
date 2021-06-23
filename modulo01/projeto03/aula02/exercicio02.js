import { shapes } from 'grasshopper.shapes';
function setLastValue(arrayShapes, newString, ___) {
  let lastIndex = arrayShapes.length - 1;
  arrayShapes[lastIndex] = newString;
};
setLastValue(shapes, 'hexagon');
for (let item of shapes) {
  console.log(item);
}
