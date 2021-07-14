let contractId = '226uAXY0YRUj-HMW5LQZ2YeeJgyDqmJTpnzRkGmFLch0';
  
function makeCopy(id, name) {
    let file = DriveApp.getFileById(id);
    let copy = file.makeCopy(name);
    return copy.getId();
}

console.log(makeCopy(contractId, 'Copy of the contract'));
