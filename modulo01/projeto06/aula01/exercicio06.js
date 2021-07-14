var arrayOfPlaces = [
    {
      name: 'mall',
      x: 240,
      y: 160,
      color: red,
      ___: ___
    },
    {
      name: 'home',
      x: 50,
      y: 70,
      color: blue,
      ___: ___
    },
    {
      name: 'gym',
      x: 100,
      y: 140,
      color: yellow,
      ___: ___
    },
    {
      name: 'work',
      x: 180,
      y: 30,
      color: white,
      ___: ___
    },
    ___
  ];
  function drawOnMap(x, y, color, ___) {
    let newPoint = svg.append('circle').attr('r', 8);
    newPoint.attr('cx', x).attr('cy', y).attr('fill', color);
  };
  for (var place of arrayOfPlaces) {
    drawOnMap(place.x, place.y, place.color);
  }