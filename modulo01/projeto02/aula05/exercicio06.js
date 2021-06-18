import { getData, findHotels } from 'grasshopper.reviews';
import { averageRating } from 'myFunctions';
let grasslandHotels = getData('Grassland', findHotels, ___);
function underAHundred(hotel, ___) {
  return hotel.price < 100;
};
let affordableHotels = grasslandHotels.filter(underAHundred);
console.log('Average Rating in Grassland under $100:');
console.log(averageRating(affordableHotels, ___));
