function drawCircle(color, ___) {
    circle.attr('r', 15).attr('cx', 15).attr('cy', 15).attr('fill', color);
  };
  function drawSquare(color, ___) {
    square.attr('width', 30).attr('height', 30).attr('x', 30).attr('y', 0).attr('fill', color);
  };
  drawCircle('blue');
  drawSquare('green');