const fs = require('fs');

let html = fs.readFileSync('scratch/ui_step1.html', 'utf8');

// Read devViewAnalytics, devViewTeam, admViewMasterMeetings, admViewVipLounge from original
const orig = fs.readFileSync('scratch/build_screens.js', 'utf8');

// Evaluate or slice the template strings
const startAnalytics = orig.indexOf('const devViewAnalytics = `');
const endAdm = orig.indexOf('let devInsertIdx');
const screenDefs = orig.substring(startAnalytics, endAdm);

eval(screenDefs);

// Insert devViewAnalytics and devViewTeam before PORTAL 3
let devEndIdx = html.indexOf('<!-- ================================================================= -->\n    <!-- PORTAL 3: EXPO ORGANIZER');

let partBeforeDev = html.substring(0, devEndIdx);
let partAfterDev = html.substring(devEndIdx);

html = partBeforeDev + devViewAnalytics + devViewTeam + '\n    ' + partAfterDev;
console.log('Developer screens inserted.');

// Insert admViewMasterMeetings and admViewVipLounge before adm-view-builder
let admBuilderIdx = html.indexOf('<!-- Admin Sub-View 3.2: Native Visual Floorplan & Booth Builder -->');
let partBeforeAdm = html.substring(0, admBuilderIdx);
let partAfterAdm = html.substring(admBuilderIdx);

html = partBeforeAdm + admViewMasterMeetings + admViewVipLounge + '\n    ' + partAfterAdm;
console.log('Admin master meetings & VIP lounge screens inserted.');

fs.writeFileSync('scratch/ui_step2.html', html);
console.log('Step 2 written successfully.');

