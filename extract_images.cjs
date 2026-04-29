const fs = require('fs');
const html = fs.readFileSync('netflix.html', 'utf8');
const matches = html.match(/https:\/\/[^\s"']+\.jpg/g);
console.log([...new Set(matches)]);
