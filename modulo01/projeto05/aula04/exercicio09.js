function drop(___) {
    svg.append('circle').attr('r', 15).attr('fill', pickRandom(color)).attr('cx', pickRandom(slot)).attr('cy', 0).transition().duration(2000).ease(d3.easeBounceOut).attr('cy', 165);
  };
  function cleanUp(___) {
    d3.selectAll('circle').transition().duration(1000).attr('cx', 500).ease(d3.easeCubicIn).remove();
  };
  redButton.on('click', drop);
  blueButton.on('click', cleanUp);
  