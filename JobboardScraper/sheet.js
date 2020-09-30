const { GoogleSpreadsheet } = require('google-spreadsheet');

module.exports = class Sheet {
    constructor(){
        this.doc = new GoogleSpreadsheet('id');
    }

    // Constructor cannot be Async
    async load(){
        // Load credentials from JSON file
        await this.doc.useServiceAccountAuth(require('./credentials.json'));

        // Load document properties & worksheets
        await this.doc.loadInfo();
    }

    async addRows(rows){
        const sheet = doc.sheetdByIndex[0];
        await sheet.addRows(rows);
    }
}

// (async function(){
//     const sheet = Sheet();
//     await sheet.load();
//     sheet.addRows([
//         {title: '', email: ''},
//         {title: '', email: ''}
//     ]);

// })();
