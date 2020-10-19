const fetch = require("node-fetch");

(async function(){
    const res = await fetch("https://news.ycombinator.com/");
    const json = await res.json();
    console.log({res});

})();
