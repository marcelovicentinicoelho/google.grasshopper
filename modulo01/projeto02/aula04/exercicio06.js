import { flights, trains, buses } from 'grasshopper.travel';
let departures = [
  ...flights,
  ...trains,
  ...buses,
  ___
];
for (let time of departures) {
  console.log(time);
}
console.log(departures.length + ' total times');
