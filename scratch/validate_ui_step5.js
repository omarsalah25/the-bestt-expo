const fs = require('fs');

const html = fs.readFileSync('scratch/ui_step5.html', 'utf8');

console.log('File size:', (html.length / 1024).toFixed(2), 'KB');

// 1. EXTRACT JAVASCRIPT AND CHECK SYNTAX
const lastScriptStart = html.lastIndexOf('<script>');
const lastScriptEnd = html.lastIndexOf('</script>');
const jsCode = html.substring(lastScriptStart + '<script>'.length, lastScriptEnd);

console.log('Extracted JS length:', jsCode.length, 'chars');

try {
  new Function(jsCode);
  console.log('✓ JS SYNTAX TEST: 100% VALID & ERROR-FREE!');
} catch (err) {
  console.error('✕ JS SYNTAX ERROR:', err);
  process.exit(1);
}

// 2. CHECK ALL ONCLICK CALLS
const onclickMatches = [...html.matchAll(/onclick=["']([^"']+)["']/g)].map(m => m[1]);
console.log('Total onclick attributes found:', onclickMatches.length);

const missingFns = [];
onclickMatches.forEach(oc => {
  // Extract function name
  const fnMatch = oc.match(/^([a-zA-Z0-9_$]+)\s*\(/);
  if (fnMatch) {
    const fnName = fnMatch[1];
    if (fnName === 'alert') return;
    if (!jsCode.includes(`function ${fnName}`) && !jsCode.includes(`${fnName} =`)) {
      missingFns.push({ fnName, oc });
    }
  }
});

if (missingFns.length > 0) {
  console.warn('⚠️ Missing functions for onclicks:', missingFns);
} else {
  console.log('✓ ONCLICK AUDIT: All onclick handler functions are defined in JavaScript!');
}

// 3. CHECK ALL document.getElementById CALLS
const getElementMatches = [...jsCode.matchAll(/document\.getElementById\(['"`]([^'"`]+)['"`]\)/g)].map(m => m[1]);
console.log('Total document.getElementById calls in JS:', getElementMatches.length);

const missingIds = [];
const uniqueIds = [...new Set(getElementMatches)];
uniqueIds.forEach(id => {
  if (!html.includes(`id="${id}"`) && !html.includes(`id='${id}'`)) {
    missingIds.push(id);
  }
});

if (missingIds.length > 0) {
  console.warn('⚠️ IDs called in JS but missing in HTML:', missingIds);
} else {
  console.log('✓ DOM ID AUDIT: All', uniqueIds.length, 'unique IDs referenced in JS exist in HTML!');
}

// 4. CHECK ALL MODALS
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

console.log('Checking all 16 modals:');
modals.forEach(m => {
  const exists = html.includes(`id="${m}"`);
  console.log(`  Modal [${m}]: ${exists ? '✓ PRESENT' : '✕ MISSING'}`);
});

// 5. CHECK ALL SUB-VIEWS
const views = [
  // Customer views
  'c-view-browse',
  'c-view-3d',
  'c-view-agenda',
  'c-view-pass',
  // Developer views
  'dev-view-schedule',
  'dev-view-crm',
  'dev-view-analytics',
  'dev-view-team',
  // Admin views
  'adm-view-pulse',
  'adm-view-master-meetings',
  'adm-view-vip-lounge',
  'adm-view-builder',
  'adm-view-notifications'
];

console.log('Checking all 13 sub-views:');
views.forEach(v => {
  const exists = html.includes(`id="${v}"`);
  console.log(`  Sub-view [${v}]: ${exists ? '✓ PRESENT' : '✕ MISSING'}`);
});

