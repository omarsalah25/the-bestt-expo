const fs = require('fs');

let orig = fs.readFileSync('scratch/build_screens.js', 'utf8');
// Replace line 1 with proper loading
const fixed = 'const fs = require("fs");\nlet html = fs.readFileSync("scratch/ui_step1.html", "utf8");\n' + orig.substring(orig.indexOf('// 1. DEVELOPER VIEW'));
fs.writeFileSync('scratch/build_screens.js', fixed);

