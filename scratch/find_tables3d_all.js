const fs = require('fs');
const html = fs.readFileSync('ui-prototype.html', 'utf8');
const lines = html.split('\n');

lines.forEach((l, idx) => {
  if (l.includes('tables3D') || l.includes('hall3_tables_data')) {
    console.log(`Line ${idx+1}: ${l.slice(0, 80)}`);
  }
});

