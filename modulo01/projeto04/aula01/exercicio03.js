let id = '4FTT3tZLKLxIJhBNdyDCGc1rYJLUV8kQ4c4aodAZx8pE';

let file = DriveApp.getFileById(id);
let oldName = file.getName();
console.log(oldName);

file.setName('Inventory of Iguanas');
