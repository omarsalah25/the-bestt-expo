const fs = require('fs');
const html = fs.readFileSync('ui-prototype.html', 'utf8');

// Print lines 580 to 750 (Developer Portal header and schedule)
const lines = html.split('\n');
console.log('--- DEVELOPER PORTAL (587 - 750) ---');
console.log(lines.slice(586, 750).join('\n'));

