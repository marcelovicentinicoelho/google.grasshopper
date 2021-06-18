import { getData, findHotels } from 'grasshopper.reviews';
import { average, getRatings } from 'myFunctions';
function averageRating(hotelList, ___) {
  let ratings = getRatings(hotelList, ___);
  return average(ratings, ___);
};
let grasslandHotels = getData('Grassland', findHotels, ___);
console.log('Average Grassland hotel rating:');
console.log(averageRating(grasslandHotels));
let hoptropolisHotels = getData('Hoptropolis', findHotels, ___);
console.log('\'Average Hoptropolis hotal rating:');
console.log(averageRating(hoptropolisHotels));