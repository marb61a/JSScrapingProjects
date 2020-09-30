const Sheet  = require('./sheet');
const fetch = require('node-fetch');

(async function(){
    // Using github jobs
    const res = await fetch('https://jobs.github.com/positions?location=remote');

    // Works on the response object returned by fetch
    const json = await res.json();

    const rows = json.map(job => {
        return {
            company: job.company,
            title: job.title,
            location: job.location,
            date: job.created_at,
            url: job.url
        }

    });

    const sheet = new Sheet();
    await sheet.load();

    console.log({json});

})();
