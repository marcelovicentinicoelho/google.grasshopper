let wallet = 50;
function inYen(dollars, ___) {
  let yen = dollars * 113;
  return yen;
};
function inBaht(dollars, ___) {
  let bath = dollars * 33;
  return bath;
};
console.log(wallet + ' US dollars is:');
console.log(inYen(wallet) + ' Japanese yen');
console.log(inBaht(wallet) + ' Thai baht');