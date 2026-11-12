const fs = require('fs');
const html = fs.readFileSync('ui-prototype.html', 'utf8');
const lines = html.split('\n');

for (let i = 1330; i < 1450; i++) {
  if (lines[i] && lines[i].includes('tables3D')) {
    console.log(`Line ${i+1}: ${lines[i].slice(0, 80)}`);
  }
}

