import { travelToCities } from 'grasshopper.travel';
let atlantaTravel = travelToCities.pop();
atlantaTravel.transportMode = 'hovercraft';
travelToCities.push(atlantaTravel);
let last = travelToCities[travelToCities.length - 1];
console.log(last.destination);
console.log(last.transportMode);
