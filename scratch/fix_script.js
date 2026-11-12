// Fix input file in scratch/build_screens.js
const fs = require('fs');
let code = fs.readFileSync('scratch/build_screens.js', 'utf8');
code = code.replace("fs.readFileSync('ui-prototype.html', 'utf8');", "fs.readFileSync('scratch/ui_step1.html', 'utf8');");
fs.writeFileSync('scratch/build_screens.js', code);

