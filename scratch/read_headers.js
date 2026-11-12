const fs = require('fs');
const html = fs.readFileSync('ui-prototype.html', 'utf8');
const lines = html.split('\n');

console.log('--- DEV TABS (lines 600-618) ---');
console.log(lines.slice(599, 618).join('\n'));

console.log('--- ADMIN TABS (lines 838-858) ---');
console.log(lines.slice(837, 858).join('\n'));

