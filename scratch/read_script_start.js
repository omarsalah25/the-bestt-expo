const fs = require('fs');
const html = fs.readFileSync('ui-prototype.html', 'utf8');
const lines = html.split('\n');
console.log('--- LINES 1200 to 1270 ---');
console.log(lines.slice(1199, 1270).join('\n'));

