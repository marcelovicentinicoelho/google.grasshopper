circle.attr('fill', pickRandom(color));
function changeColor(___) {
  circle.attr('fill', pickRandom(color));
};
circle.on('click', changeColor);