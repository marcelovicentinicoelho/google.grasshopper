var rectangles = d3.selectAll('rect');
function hideRectangles(___) {
  rectangles.transition().attr('r', 0).transition().attr('width', 0).attr('height', 0);
};
rectangles.on('click', hideRectangles);