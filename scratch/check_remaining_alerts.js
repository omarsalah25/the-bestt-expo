const fs = require('fs');
const html = fs.readFileSync('scratch/ui_step5.html', 'utf8');

const alertMatches = [...html.matchAll(/<button[^>]*onclick=["'][^"']*alert\([^)]+\)[^"']*["'][^>]*>(.*?)<\/button>/gis)];
console.log(`Remaining alert buttons: ${alertMatches.length}`);
alertMatches.forEach((m, i) => {
  const label = m[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
  console.log(`${i+1}. Label: "${label}" -> Onclick: ${m[0]}`);
});

