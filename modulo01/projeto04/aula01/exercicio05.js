let id = '1gJAiEKJd8NMdjI_EcI12y3iIYk3E8wokAJEOijsZcf0';
let file = DriveApp.getFileById(id);

let firstCopy = file.makeCopy();
let firstCopyId = firstCopy.getId();
console.log(firstCopyId);

let secondCopy = file.makeCopy();
let secondCopyId = secondCopy.getId();
console.log(secondCopyId);
