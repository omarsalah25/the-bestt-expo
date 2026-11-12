const fs = require('fs');
const html = fs.readFileSync('ui-prototype.html', 'utf8');

// Find insertion points:
// 1. In portal-developer, after dev-view-crm
// 2. In portal-admin, after adm-view-pulse and before adm-view-builder
// 3. In modals region, after dealModal and before <script>
// 4. In <script>, tab switcher functions and end of script

const devCrmIdx = html.indexOf('<!-- Dev Sub-View 2.2: Native Real Estate CRM Pipeline -->');
const devEndIdx = html.indexOf('<!-- ================================================================= -->\n    <!-- PORTAL 3: EXPO ORGANIZER');

console.log('devCrmIdx:', devCrmIdx);
console.log('devEndIdx:', devEndIdx);

const admPulseIdx = html.indexOf('<!-- Admin Sub-View 3.1: Venue Pulse & Meetings Audit Log -->');
const admBuilderIdx = html.indexOf('<!-- Admin Sub-View 3.2: Native Visual Floorplan & Booth Builder -->');
const admNotifIdx = html.indexOf('<!-- Admin Sub-View 3.3: Notification Gateway Settings -->');
const admEndIdx = html.indexOf('</main>');

console.log('admPulseIdx:', admPulseIdx);
console.log('admBuilderIdx:', admBuilderIdx);
console.log('admNotifIdx:', admNotifIdx);
console.log('admEndIdx:', admEndIdx);

const dealModalIdx = html.indexOf('id="dealModal"');
const scriptIdx = html.indexOf('<script>');

console.log('dealModalIdx:', dealModalIdx);
console.log('scriptIdx:', scriptIdx);

