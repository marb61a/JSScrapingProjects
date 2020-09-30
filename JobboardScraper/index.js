const { GoogleSpreadsheet } = require('google-spreadsheet');

// Spreadsheet key
const doc = new GoogleSpreadsheet('id');

(async function(){
    console.log(doc.title);
    await doc.updateProperties({
        title: 'renamed doc'
    });

    const sheet = doc.sheetdByIndex[0];
    await sheet.addRows([
        {title: '', email: ''},
        {title: '', email: ''}
    ]);

})();
