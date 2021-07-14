let balloon = svg.append('circle').attr('fill', 'red').attr('r', 35).attr('cx', pickRandom(position)).attr('cy', 35);
balloon.on('click', (___) => {
  balloon.interrupt().attr('cy', 35).attr('cx', pickRandom(position));
  balloon.transition().ease(d3.easeQuadIn).attr('cy', 165).duration(2000).remove();
});