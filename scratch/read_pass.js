const fs = require('fs');
const html = fs.readFileSync('ui-prototype.html', 'utf8');
const lines = html.split('\n');
console.log('--- PASS (530 to 590) ---');
console.log(lines.slice(530, 590).join('\n'));

