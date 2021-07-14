let id = '1VFYFgTvngQzMgm-x1Kyejv1fiTWVTahG9G8x2a76sAM';

let doc = DocumentApp.openById(id);
let originalText = doc.getText();
console.log(originalText);

doc.replaceText('you', 'DOGs');
let newText = doc.getText();
console.log(newText);
