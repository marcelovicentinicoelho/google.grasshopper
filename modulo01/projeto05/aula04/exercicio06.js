function drop(___) {
    blueCircle.transition().duration(1000).attr('cy', 180).ease(d3.easeCubicOut);
    greenCircle.transition().duration(1000).attr('cy', 180).ease(d3.easeCubicOut);
};
d3.selectAll('circle').on('click', drop);