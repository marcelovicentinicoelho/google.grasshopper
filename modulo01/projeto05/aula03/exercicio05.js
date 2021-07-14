function turnOn(___) {
    lightSwitch.attr('y', 35);
    lightBulb.attr('fill', 'yellow');
  };
  lightSwitch.on('click', turnOn);