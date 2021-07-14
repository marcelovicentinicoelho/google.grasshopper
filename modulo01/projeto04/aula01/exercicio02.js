let id1 = 'accb4372522af72303e7bcd67a8e953189205bb6728a';
let id2 = 'e514a7d3e2061ca9e33533074ded28a650a57cd24f04';

let file = DriveApp.getFileById(id2);
let fileName = file.getName();

console.log(fileName);
