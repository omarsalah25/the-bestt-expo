const fs = require('fs');
const html = fs.readFileSync('ui-prototype.html', 'utf8');

const hasToast = html.includes('toast') || html.includes('showToast');
console.log('Has toast in html:', hasToast);
if (hasToast) {
  const matches = [...html.matchAll(/toast[A-Za-z0-9_]*/gi)].map(m => m[0]);
  console.log('Toast matches:', [...new Set(matches)]);
}

