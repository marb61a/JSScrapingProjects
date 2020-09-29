const { GoogleSpreadsheet } = require('google-spreadsheet');

// Spreadsheet key
const doc = new GoogleSpreadsheet('id');

(async function(){
    // Load credentials from JSON file
    await doc.useServiceAccountAuth(require('./credentials.json'));

    // Load document properties & worksheets
    await doc.loadInfo();
    console.log(doc.title);
    await doc.updateProperties({
        title: 'renamed doc'
    });

    const sheet = doc.sheetdByIndex[0];
    await sheet.addRows([
        {title: ''},
        {}
    ]);

})();
