const fs = require('fs');

let html = fs.readFileSync('scratch/ui_step5.html', 'utf8');

// 1. In adm-view-pulse: Row 1 Audit
html = html.replace(
  `<td class="p-3 text-right"><button onclick="alert('Viewing session audit log.')" class="text-amber-400 hover:underline">Audit</button></td>`,
  `<td class="p-3 text-right"><button onclick="openLeadAuditModal('Mr. Alexander Wright')" class="text-amber-400 hover:underline">Audit</button></td>`
);

// 2. In adm-view-pulse: Row 2 Audit
html = html.replace(
  `<td class="p-3 text-right"><button onclick="alert('Viewing session audit log.')" class="text-amber-400 hover:underline">Audit</button></td>`,
  `<td class="p-3 text-right"><button onclick="openLeadAuditModal('Dr. Amina Mansouri')" class="text-amber-400 hover:underline">Audit</button></td>`
);

// 3. In adm-view-pulse: Row 3 Override
html = html.replace(
  `<td class="p-3 text-right"><button onclick="alert('Organizer manual override triggered.')" class="text-purple-400 hover:underline">Override</button></td>`,
  `<td class="p-3 text-right"><button onclick="openForceFreeModal('T-01', 'Sobha Realty (Booth C-02 • Table 1)')" class="text-purple-400 hover:underline font-bold">Override</button></td>`
);

// 4. In adm-view-pulse: VIP Lounge A Seat Walk-in
html = html.replace(
  `<button onclick="alert('Table 11 allocated for Walk-in VIP.')" \n                class="px-2.5 py-1 bg-purple-600 hover:bg-purple-500 text-white font-bold text-[11px] rounded-lg">\n                Seat Walk-in\n              </button>`,
  `<button onclick="openVipAccreditModal()" \n                class="px-2.5 py-1 bg-purple-600 hover:bg-purple-500 text-white font-bold text-[11px] rounded-lg shadow transition-all">\n                Seat Walk-in\n              </button>`
);

// 5. In adm-view-pulse: VIP Lounge B Seat Walk-in
html = html.replace(
  `<button onclick="alert('Table 9 allocated for Walk-in VIP.')" \n                class="px-2.5 py-1 bg-purple-600 hover:bg-purple-500 text-white font-bold text-[11px] rounded-lg">\n                Seat Walk-in\n              </button>`,
  `<button onclick="openVipAccreditModal()" \n                class="px-2.5 py-1 bg-purple-600 hover:bg-purple-500 text-white font-bold text-[11px] rounded-lg shadow transition-all">\n                Seat Walk-in\n              </button>`
);

fs.writeFileSync('ui-prototype.html', html);
console.log('Final ui-prototype.html written successfully.');

