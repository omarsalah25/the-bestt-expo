const fs = require('fs');
const html = fs.readFileSync('ui-prototype.html', 'utf8');

const targetFns = [
  'confirmCustomerBooking',
  'saveLeadNotes',
  'devApproveRequest',
  'devDeclineRequest',
  'triggerCustArrivalAlert',
  'openBookingModal',
  'closeBookingModal',
  'openDealNotesModal',
  'closeDealModal'
];

targetFns.forEach(fn => {
  const regex = new RegExp(`function\\s+${fn}\\s*\\([\\s\\S]*?\\n    \\}`, 'g');
  const match = html.match(regex);
  if (match) {
    console.log(`\n=================== ${fn} ===================`);
    console.log(match[0].slice(0, 500));
  } else {
    console.log(`\nFunction ${fn} not matched with standard indent.`);
  }
});

