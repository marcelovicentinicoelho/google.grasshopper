import { departures } from 'grasshopper.travel';
function morning(time, ___) {
  return time.includes('am');
};
function evening(time, ___) {
  return time.includes('pm');
};
let amTimes = departures.filter(morning);
let pmTimes = departures.filter(evening);
console.log('Day times: ' + amTimes);
console.log('Night times: ' + pmTimes);
