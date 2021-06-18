import { travelToCities } from 'grasshopper.travel';
let last = travelToCities[travelToCities.length - 1];
console.log(last.destination);
let boatAtlanta = {
  destination: 'Atlanta',
  transportMode: 'boat',
  cost: 200,
  country: 'Hoptopia',
  ___: ___
};
travelToCities.push(boatAtlanta);
last = travelToCities[travelToCities.length - 1];
console.log(last.destination);
