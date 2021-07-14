function darker(object, ___) {
    let newObject = {
      red: object.red - 50,
      green: object.green - 50,
      blue: object.blue - 50,
      ___: ___
    };
    return newObject;
  };
  function lighter(object, ___) {
    let newObject = {
      red: object.red + 50,
      green: object.green + 50,
      blue: object.blue + 50,
      ___: ___
    };
    return newObject;
  };
  drawBox(darker(darker(rgbObject)));
  drawBox(darker(rgbObject));
  drawBox(rgbObject);
  drawBox(lighter(rgbObject));
  drawBox(lighter(lighter(rgbObject)));