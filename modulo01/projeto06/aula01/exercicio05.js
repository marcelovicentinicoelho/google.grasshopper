for (var i = 0; i < 50; i++) {
    svg.append('circle').attr('r', 15).attr('cx', pickRandom(position)).attr('cy', pickRandom(position)).attr('fill', 'dodgerblue');
    svg.append('circle').attr('r', 10).attr('fill', 'white').attr('cx', pickRandom(position)).attr('cy', pickRandom(position));
    svg.append('circle').attr('r', 5).attr('cx', pickRandom(position)).attr('cy', pickRandom(position)).attr('fill', 'lime');
}