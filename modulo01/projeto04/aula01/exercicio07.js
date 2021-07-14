let id = '1gHAiEKJd8NMdjI_EcI12y3iIYk3E8wokAJEOijsZcf0';
let file = DriveApp.getFileById(id);

let firstCopy = file.makeCopy('Copy 1 of Inventory of Cat Toys');
let firstCopyName = firstCopy.getName();
console.log(firstCopyName);

let secondCopy = file.makeCopy('Copy 2');
let secondCopyName = secondCopy.getName();
console.log(secondCopyName);
