const fs = require('fs');
const html = fs.readFileSync('ui-prototype.html', 'utf8');

// Check line count and major sections
const lines = html.split('\n');
console.log('Total lines in ui-prototype.html:', lines.length);

// Find section headings or major container divs
const portalCustomerIdx = lines.findIndex(l => l.includes('id="portal-customer"'));
const portalDevIdx = lines.findIndex(l => l.includes('id="portal-dev"'));
const portalAdminIdx = lines.findIndex(l => l.includes('id="portal-admin"'));
const scriptIdx = lines.findIndex(l => l.includes('<script>') || l.includes('<script '));

console.log('portal-customer at line:', portalCustomerIdx + 1);
console.log('portal-dev at line:', portalDevIdx + 1);
console.log('portal-admin at line:', portalAdminIdx + 1);
console.log('First <script> at line:', scriptIdx + 1);

