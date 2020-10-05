const Sheet  = require('./sheet');
const fetch = require('node-fetch');

async function scrapePage(i){
    // Using github jobs
    const res = await fetch(`https://jobs.github.com/positions.json?page=${i}&search=code`);

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
    let i = 1;
    let rows = [];

    while(true){
        const newRows = await scrapePage(i);
        console.log("New rows length", newRows.length);

        if(newRows.length === 0) break;

        rows = rows.concat(newRows);
        i++;
    }

    // const sheet = new Sheet();
    // await sheet.load();
    // await sheet.addRows(rows);
    console.log('total rows length : ', rows);

    // console.log(total);
})();
