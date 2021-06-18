import { flightPrices } from 'grasshopper.travel';
let max = flightPrices[0];
let min = flightPrices[0];
function compareToMaximum(value, ___) {
  max = value > max ? value : max;
};
function compareToMinimum(value, ___) {
  min = value < min ? value : min;
};
console.log(flightPrices);
flightPrices.forEach(compareToMaximum);
console.log('Maximum: ' + max);
flightPrices.forEach(compareToMinimum);
console.log('Minimum: ' + min);
