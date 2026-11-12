const fs = require('fs');
const html = fs.readFileSync('ui-prototype.html', 'utf8');
const lines = html.split('\n');
console.log('--- LINES 880 to 1090 ---');
console.log(lines.slice(879, 1090).join('\n'));

