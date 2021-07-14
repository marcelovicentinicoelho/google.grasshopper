import { copyOfContract, textEdits } from 'grasshopper.documents';
  
function makeCopy(id, name) {
  let file = DriveApp.getFileById(id);
  let copy = file.makeCopy(name);
  return copy.getId();   
}

function updateDoc(doc, edits) {
    for (let edit of edits) {
        doc.replaceText(edit[0], edit[1]);
    }
}

updateDoc(copyOfContract, textEdits);
