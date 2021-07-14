var distance = 0;
body.on('click', (___) => {
  distance = distance + 15;
  pickRandom(foot).transition().attr('x', distance);
  body.transition().attr('cx', distance);
});