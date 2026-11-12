const fs = require('fs');

const html = fs.readFileSync('ui-prototype.html', 'utf8');

// Find all elements with class view-content or IDs ending with -view or view-
const viewMatches = [...html.matchAll(/id=["']([a-zA-Z0-9_\-]+view[a-zA-Z0-9_\-]*)["']/gi)].map(m => m[1]);
console.log('--- VIEWS ---');
console.log([...new Set(viewMatches)]);

// Find all modal IDs
const modalMatches = [...html.matchAll(/id=["']([a-zA-Z0-9_\-]*modal[a-zA-Z0-9_\-]*)["']/gi)].map(m => m[1]);
console.log('--- MODALS ---');
console.log([...new Set(modalMatches)]);

// Find all button onclicks and their targets
const onclicks = [...html.matchAll(/<button[^>]*onclick=["']([^"']+)["'][^>]*>(.*?)<\/button>/gis)];
console.log('--- BUTTONS WITH ONCLICK (Count: ' + onclicks.length + ') ---');
const handlerMap = {};
for (const match of onclicks) {
  const handler = match[1].trim();
  const label = match[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
  const fnName = handler.split('(')[0].trim();
  if (!handlerMap[fnName]) handlerMap[fnName] = [];
  handlerMap[fnName].push({ handler, label });
}

for (const fn of Object.keys(handlerMap)) {
  console.log(`Fn: ${fn} (used ${handlerMap[fn].length} times) - Sample label: "${handlerMap[fn][0].label}"`);
}

// Find navigation tabs in customer, dev, admin
console.log('--- PORTAL NAV BUTTONS ---');
const navButtons = [...html.matchAll(/switchView\(["']([^"']+)["']\)/g)].map(m => m[1]);
console.log('Customer/Global switchView targets:', [...new Set(navButtons)]);

const devNavButtons = [...html.matchAll(/switchDevView\(["']([^"']+)["']\)/g)].map(m => m[1]);
console.log('Developer switchDevView targets:', [...new Set(devNavButtons)]);

const admNavButtons = [...html.matchAll(/switchAdminView\(["']([^"']+)["']\)/g)].map(m => m[1]);
console.log('Admin switchAdminView targets:', [...new Set(admNavButtons)]);

