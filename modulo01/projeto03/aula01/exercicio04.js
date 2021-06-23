import { calculateTax } from 'grasshopper.helperFunctions';
function splitBill(total, people, ___) {
  let imposto = calculateTax(total, ___);
  total += imposto;
  return total / people;
};
console.log(splitBill(76, 4));