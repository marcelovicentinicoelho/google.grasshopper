import { getData, findHotels } from 'grasshopper.reviews';
let grasslandHotels = getData('Grassland', findHotels, ___);
for (var element of grasslandHotels) {
  console.log(element.rating);
}
