let balloon = svg.append('circle').attr('fill', 'red').attr('r', 35).attr('cx', pickRandom(position)).attr('cy', 35);
balloon.on('click', (___) => {
  balloon.transition().attr('cy', 165).duration(2000);
});