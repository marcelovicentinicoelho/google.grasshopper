let location = 30;
let sizes = [
  15,
  20,
  30,
  ___
];
function buildSnowman(___) {
  for (let element of sizes) {
    svg.append('circle').attr('r', element).attr('cx', 60).attr('cy', location).attr('fill', 'white');
    location += element * 2;
  }
};
button.on('click', buildSnowman);