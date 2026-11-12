const fs = require('fs');
const html = fs.readFileSync('ui-prototype.html', 'utf8');

const portalMatches = [...html.matchAll(/id=["']([a-zA-Z0-9_\-]*portal[a-zA-Z0-9_\-]*)["']/gi)].map(m => m[1]);
console.log('Portal IDs:', portalMatches);

const lines = html.split('\n');
portalMatches.forEach(id => {
  const lineNo = lines.findIndex(l => l.includes(`id="${id}"`));
  console.log(`id="${id}" at line ${lineNo + 1}`);
});

