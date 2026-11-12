const fs = require('fs');
const html = fs.readFileSync('ui-prototype.html', 'utf8');
const lines = html.split('\n');
console.log('--- MODALS REGION (1080 - 1210) ---');
console.log(lines.slice(1079, 1210).join('\n'));

