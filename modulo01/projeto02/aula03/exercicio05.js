function updateAllNames(string, oldPart, newPart, ___) {
  if (string.includes(oldPart) === false) {
    return string;
  }
  string = string.replace(oldPart, newPart);
  return updateAllNames(string, oldPart, newPart);
};
console.log(travelDocument);
console.log(updateAllNames(travelDocument, 'grasshoper', 'grasshopper'));