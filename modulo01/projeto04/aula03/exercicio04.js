let id = '1QE4pZs8efMoHKGOEHyXGT_nPZf1b_Sw7ssFCk2J2ueo';
let sheet =  SpreadsheetApp.openById(id);
 
let values = sheet.getRange("A2:B6").getValues();

console.log(values[0][0])
