function askServer(favorite, ___) {
    let found = false;
    for (var element of menu) {
      if (favorite === element) {
        found = true;
        console.log('We have ' + favorite);
      }
    }
    if (found === false) {
      console.log('Sorry, no ' + favorite);
    }
};
askServer('cake');
askServer('milk');