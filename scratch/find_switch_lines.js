const fs = require('fs');
const html = fs.readFileSync('ui-prototype.html', 'utf8');

const lines = html.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('switchPortal') || line.includes('switchCustomerSubTab') || line.includes('switchDevSubTab') || line.includes('switchAdminSubTab')) {
    console.log(`Line ${idx + 1}: ${line.trim()}`);
  }
});

