const fs = require('fs');
const html = fs.readFileSync('ui-prototype.html', 'utf8');

const alertMatches = [...html.matchAll(/<button[^>]*onclick=["']alert\(([^)]+)\)["'][^>]*>(.*?)<\/button>/gis)];
console.log(`Found ${alertMatches.length} alert buttons:`);
alertMatches.forEach((m, i) => {
  const arg = m[1].replace(/\\'/g, "'").trim();
  const label = m[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
  console.log(`${i+1}. Label: "${label}" -> Alert: ${arg}`);
});

// Also find inline JS alert calls inside <script>
const scriptAlerts = [...html.matchAll(/alert\((['"`].*?['"`])\)/g)];
console.log(`\nFound ${scriptAlerts.length} script alert calls:`);
scriptAlerts.forEach((m, i) => {
  console.log(`${i+1}. ${m[1]}`);
});

