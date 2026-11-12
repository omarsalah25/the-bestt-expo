const fs = require('fs');
let html = fs.readFileSync('scratch/ui_step4.html', 'utf8');

const targetStr = 'function confirmCustomerBooking()';
const idx = html.indexOf(targetStr);
console.log('Index of confirmCustomerBooking:', idx);
console.log('Code starting from confirmCustomerBooking:');
console.log(html.substring(idx, idx + 1000));

