const fs = require('fs');
const html = fs.readFileSync('ui-prototype.html', 'utf8');
const lines = html.split('\n');
console.log('--- LINES 2800 to 2914 ---');
console.log(lines.slice(2799, lines.length).join('\n'));

