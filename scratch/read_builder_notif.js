const fs = require('fs');
const html = fs.readFileSync('ui-prototype.html', 'utf8');
const lines = html.split('\n');
console.log('--- BUILDER & NOTIF (950 to 1086) ---');
console.log(lines.slice(950, 1086).join('\n'));

