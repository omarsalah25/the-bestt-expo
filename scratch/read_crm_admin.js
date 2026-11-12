const fs = require('fs');
const html = fs.readFileSync('ui-prototype.html', 'utf8');
const lines = html.split('\n');
console.log('--- LINES 745 to 880 ---');
console.log(lines.slice(744, 880).join('\n'));

