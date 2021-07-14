function blow(___) {
    bubble.interrupt();
    bubble.transition().attr('r', 500).attr('cx', 585).duration(10000).ease(d3.easeSinOut);
  };
  function burst(___) {
    bubble.interrupt();
    bubble.attr('r', 15).attr('cx', 100);
  };
  bubble.transition().attr('r', 15).duration(10000).attr('cx', 100).ease(d3.easeSinOut);
  face.on('click', blow);
  bubble.on('click', burst);