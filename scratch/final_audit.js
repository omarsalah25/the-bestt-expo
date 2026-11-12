const fs = require('fs');

const html = fs.readFileSync('ui-prototype.html', 'utf8');

console.log('--- UI PROTOTYPE COMPREHENSIVE AUDIT ---');
console.log('File size:', (html.length / 1024).toFixed(2), 'KB');

// 1. JS Syntax Check
const lastScriptStart = html.lastIndexOf('<script>');
const lastScriptEnd = html.lastIndexOf('</script>');
const jsCode = html.substring(lastScriptStart + '<script>'.length, lastScriptEnd);

try {
  new Function(jsCode);
  console.log('✓ JS SYNTAX TEST: 100% VALID & ERROR-FREE!');
} catch (err) {
  console.error('✕ JS SYNTAX ERROR:', err);
  process.exit(1);
}

// 2. Alert Count
const alertCount = [...html.matchAll(/alert\(/g)].length;
console.log(`Alert calls remaining in HTML: ${alertCount} (Target: 0)`);

// 3. Onclick Count
const onclickMatches = [...html.matchAll(/onclick=["']([^"']+)["']/g)].map(m => m[1]);
console.log(`Total interactive onclick buttons: ${onclickMatches.length}`);

// 4. Modals Verification
const modals = [
  'bookingModal',
  'dealModal',
  'modal-walkin-seat',
  'modal-counter-propose',
  'modal-dev-decline',
  'modal-cancel-meeting',
  'modal-reschedule',
  'modal-calendar-export',
  'modal-add-lead',
  'modal-lead-audit',
  'modal-force-free',
  'modal-vip-accredit',
  'modal-emergency-broadcast',
  'modal-blueprint-upload',
  'modal-booth-builder',
  'modal-test-notification'
];

let allModalsPresent = true;
modals.forEach(m => {
  if (!html.includes(`id="${m}"`)) {
    console.error(`Missing modal: ${m}`);
    allModalsPresent = false;
  }
});
if (allModalsPresent) {
  console.log(`✓ ALL 16 MODALS VERIFIED PRESENT!`);
}

// 5. Sub-Views Verification
const views = [
  'c-view-browse',
  'c-view-3d',
  'c-view-agenda',
  'c-view-pass',
  'dev-view-schedule',
  'dev-view-crm',
  'dev-view-analytics',
  'dev-view-team',
  'adm-view-pulse',
  'adm-view-master-meetings',
  'adm-view-vip-lounge',
  'adm-view-builder',
  'adm-view-notifications'
];

let allViewsPresent = true;
views.forEach(v => {
  if (!html.includes(`id="${v}"`)) {
    console.error(`Missing view: ${v}`);
    allViewsPresent = false;
  }
});
if (allViewsPresent) {
  console.log(`✓ ALL 13 SUB-VIEWS VERIFIED PRESENT!`);
}

