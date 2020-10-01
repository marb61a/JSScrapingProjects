const Sheet  = require('./sheet');
const fetch = require('node-fetch');

async function scrapePage(i){
    // Using github jobs
    const res = await fetch('https://jobs.github.com/positions?location=remote');

    // Works on the response object returned by fetch
    const jsonFetch = await res.json();

    const rows = jsonFetch.map(job => {
        return {
            company: job.company,
            title: job.title,
            location: job.location,
            date: job.created_at,
            url: job.url
        }
    });

    return rows;
}

(async function(){
    // const sheet = new Sheet();
    // await sheet.load();
    let i = 1;
    let rows = [];

    while(true){
        const newRows = await pageXOffset.scrapePage(i);

        if(newRows.length === 0) break;

        rows = rows.concat(newRows);
        i++;
    }

    console.log(total);
})();
