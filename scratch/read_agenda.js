const fs = require('fs');
const html = fs.readFileSync('ui-prototype.html', 'utf8');
const lines = html.split('\n');
console.log('--- AGENDA (440 to 540) ---');
console.log(lines.slice(440, 540).join('\n'));

