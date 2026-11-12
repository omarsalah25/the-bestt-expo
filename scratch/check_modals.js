const fs = require('fs');
const html = fs.readFileSync('ui-prototype.html', 'utf8');
const lines = html.split('\n');

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('<script>') || lines[i].includes('id="modal') || lines[i].includes('id="bookingModal') || lines[i].includes('id="dealModal"')) {
    console.log(`Line ${i + 1}: ${lines[i].slice(0, 80)}`);
  }
}

