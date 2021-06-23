import { breakfast, lunch } from 'snappingCrab.menus';
function longer(menu1, menu2, ___) {
  if (menu1.length > menu2.length) {
    return menu1;
  } else {
    return menu2;
  }
};
console.log(longer(breakfast, lunch));