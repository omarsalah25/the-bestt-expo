const fs = require('fs');
const html = fs.readFileSync('ui-prototype.html', 'utf8');

// Find switchPortal, switchCustomerSubTab, switchDevSubTab, switchAdminSubTab
const js = html.substring(html.indexOf('<script>'));

function printFunction(fnName) {
  const regex = new RegExp(`function\\s+${fnName}\\s*\\([\\s\\S]*?\\n\\}`, 'g');
  const match = js.match(regex);
  if (match) {
    console.log(`--- ${fnName} ---`);
    console.log(match[0]);
  } else {
    console.log(`Function ${fnName} not found by regex`);
  }
}

printFunction('switchPortal');
printFunction('switchCustomerSubTab');
printFunction('switchDevSubTab');
printFunction('switchAdminSubTab');

