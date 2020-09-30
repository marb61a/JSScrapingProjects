const { GoogleSpreadsheet } = require('google-spreadsheet');

class Sheet {
    constructor(){
        this.doc = new GoogleSpreadsheet('id');
    }

    // Constructor cannot be Async
    async load(){
        // Load credentials from JSON file
        await doc.useServiceAccountAuth(require('./credentials.json'));

        // Load document properties & worksheets
        await doc.loadInfo();
        
    }
}

const sheet = Sheet();
