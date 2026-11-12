const fs = require('fs');
let html = fs.readFileSync('scratch/ui_step4.html', 'utf8');

// Find tab switcher functions in <script>
const switchDevSubTabIdx = html.indexOf('function switchDevSubTab');
const switchAdminSubTabIdx = html.indexOf('function switchAdminSubTab');
const confirmCustomerBookingIdx = html.indexOf('function confirmCustomerBooking');
const endScriptIdx = html.indexOf('</script>');

console.log('switchDevSubTabIdx:', switchDevSubTabIdx);
console.log('switchAdminSubTabIdx:', switchAdminSubTabIdx);
console.log('confirmCustomerBookingIdx:', confirmCustomerBookingIdx);
console.log('endScriptIdx:', endScriptIdx);

