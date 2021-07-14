function changePicture(time, ___) {
    if (time === 'morning') {
      sky.attr('fill', 'steelblue');
    }
    if (time === 'noon') {
      sky.attr('fill', 'deepskyblue');
      skyLight.attr('cx', 150);
    }
    if (time === 'night') {
      sky.attr('fill', 'navy');
      skyLight.attr('fill', 'white');
      ground.attr('fill', 'darkgreen');
    }
  };
  let timeOfDay = pickRandom([
    'morning',
    'noon',
    'night',
    ___
  ]);
  changePicture(timeOfDay);
  console.log(timeOfDay);