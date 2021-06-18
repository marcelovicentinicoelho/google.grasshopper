import { getData, findHotels } from 'grasshopper.reviews';
function printHotel(hotel, ___) {
  console.log('___HOTEL_INFO___');
  console.log('type: ' + hotel.type);
  console.log('city: ' + hotel.city);
  console.log('price: ' + hotel.price);
  console.log('rating: ' + hotel.rating);
};
let grasslandHotels = getData('Grassland', findHotels, ___);
grasslandHotels.forEach(printHotel);
