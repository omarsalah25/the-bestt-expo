const fs = require('fs');
const html = fs.readFileSync('ui-prototype.html', 'utf8');

function inspectSection(title, startMatch, endMatch) {
  const start = html.indexOf(startMatch);
  const end = endMatch ? html.indexOf(endMatch, start) : html.length;
  const section = html.substring(start, end);
  
  console.log(`\n================== ${title} ==================`);
  
  // Find all elements with id="*-view-*" or class="view-content" or similar
  const views = [...section.matchAll(/id=["']([a-zA-Z0-9_\-]+view[a-zA-Z0-9_\-]*)["']/gi)].map(m => m[1]);
  console.log('Sub-views:', views);
  
  // Find tabs/nav buttons
  const navs = [...section.matchAll(/switch[A-Za-z]+SubTab\([^)]+\)/g)].map(m => m[0]);
  console.log('Tab switch calls:', navs);
}

inspectSection('CUSTOMER PORTAL', 'id="portal-customer"', 'id="portal-developer"');
inspectSection('DEVELOPER PORTAL', 'id="portal-developer"', 'id="portal-admin"');
inspectSection('ADMIN PORTAL', 'id="portal-admin"', 'id="bookingModal"');

