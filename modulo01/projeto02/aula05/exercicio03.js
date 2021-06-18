import { getData, findHotels } from 'grasshopper.reviews';
function getRatings(hotelList, ___) {
  let ratings = [
    ___
  ];
  for (var element of hotelList) {
    ratings.push(element.rating);
  }
  return ratings;
};
let grasslandHotels = getData('Grassland', findHotels, ___);
console.log('Ratings Array:');
console.log(getRatings(grasslandHotels));