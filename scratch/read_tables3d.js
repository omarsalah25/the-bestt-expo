const fs = require('fs');
const html = fs.readFileSync('ui-prototype.html', 'utf8');
const lines = html.split('\n');
console.log('--- 3D TABLES DATA (1270 to 1340) ---');
console.log(lines.slice(1270, 1340).join('\n'));

