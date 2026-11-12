const fs = require('fs');
let html = fs.readFileSync('scratch/ui_step4.html', 'utf8');

const lastScriptIdx = html.lastIndexOf('</script>');
console.log('lastScriptIdx:', lastScriptIdx);
console.log('Text before lastScriptIdx:', html.substring(lastScriptIdx - 200, lastScriptIdx));

