function removeDropper(___) {
    dropper.remove();
  };
  function cure(___) {
    bacteria.remove();
  };
  dropper.on('click', removeDropper);
  bacteria.on('click', cure);