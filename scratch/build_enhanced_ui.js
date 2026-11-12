// scratch/build_enhanced_ui.js
const fs = require('fs');

console.log('Reading ui-prototype.html...');
let html = fs.readFileSync('ui-prototype.html', 'utf8');

// =========================================================================
// 1. UPDATE DEVELOPER TABS (in Developer Header)
// =========================================================================
const devTabsTarget = `<div class="flex items-center gap-2 text-xs">
            <button onclick="switchDevSubTab('schedule')" id="dev-sub-schedule" class="px-3.5 py-2 bg-amber-500 text-slate-950 font-bold rounded-xl shadow">
              📅 Booth Tables & Queue
            </button>
            <button onclick="switchDevSubTab('crm')" id="dev-sub-crm" class="px-3.5 py-2 bg-[#0B1120] hover:bg-slate-800 border border-[#24324D] text-slate-300 rounded-xl">
              💼 Native CRM Pipeline
            </button>
          </div>`;

const devTabsReplacement = `<div class="flex items-center gap-2 text-xs flex-wrap">
            <button onclick="switchDevSubTab('schedule')" id="dev-sub-schedule" class="px-3 py-1.5 bg-amber-500 text-slate-950 font-bold rounded-xl shadow transition-all">
              📅 Booth Tables & Queue
            </button>
            <button onclick="switchDevSubTab('crm')" id="dev-sub-crm" class="px-3 py-1.5 bg-[#0B1120] hover:bg-slate-800 border border-[#24324D] text-slate-300 rounded-xl transition-all">
              💼 Native CRM Pipeline
            </button>
            <button onclick="switchDevSubTab('analytics')" id="dev-sub-analytics" class="px-3 py-1.5 bg-[#0B1120] hover:bg-slate-800 border border-[#24324D] text-slate-300 rounded-xl transition-all">
              📊 Booth Analytics & Heatmap
            </button>
            <button onclick="switchDevSubTab('team')" id="dev-sub-team" class="px-3 py-1.5 bg-[#0B1120] hover:bg-slate-800 border border-[#24324D] text-slate-300 rounded-xl transition-all">
              👥 Sales Rep Roster
            </button>
          </div>`;

if (!html.includes(devTabsTarget)) {
  console.error('devTabsTarget not found!');
  process.exit(1);
}
html = html.replace(devTabsTarget, devTabsReplacement);
console.log('Developer header tabs updated.');

// =========================================================================
// 2. UPDATE ADMIN TABS (in Admin Header)
// =========================================================================
const adminTabsTarget = `<div class="flex items-center gap-2 text-xs">
            <button onclick="switchAdminSubTab('pulse')" id="adm-sub-pulse" class="px-3 py-1.5 bg-amber-500 text-slate-950 font-bold rounded-xl shadow">
              📈 Venue Pulse
            </button>
            <button onclick="switchAdminSubTab('builder')" id="adm-sub-builder" class="px-3 py-1.5 bg-[#0B1120] hover:bg-slate-800 border border-[#24324D] text-slate-300 rounded-xl">
              🗺️ Native Floorplan Builder
            </button>
            <button onclick="switchAdminSubTab('notifications')" id="adm-sub-notif" class="px-3 py-1.5 bg-[#0B1120] hover:bg-slate-800 border border-[#24324D] text-slate-300 rounded-xl">
              🔔 Notification Gateway
            </button>
          </div>`;

const adminTabsReplacement = `<div class="flex items-center gap-2 text-xs flex-wrap">
            <button onclick="switchAdminSubTab('pulse')" id="adm-sub-pulse" class="px-3 py-1.5 bg-amber-500 text-slate-950 font-bold rounded-xl shadow transition-all">
              📈 Venue Pulse
            </button>
            <button onclick="switchAdminSubTab('master-meetings')" id="adm-sub-master-meetings" class="px-3 py-1.5 bg-[#0B1120] hover:bg-slate-800 border border-[#24324D] text-slate-300 rounded-xl transition-all">
              📋 Master Meeting Ledger (All 67 Booths)
            </button>
            <button onclick="switchAdminSubTab('vip-lounge')" id="adm-sub-vip-lounge" class="px-3 py-1.5 bg-[#0B1120] hover:bg-slate-800 border border-[#24324D] text-slate-300 rounded-xl transition-all">
              👑 VIP Executive Lounge
            </button>
            <button onclick="switchAdminSubTab('builder')" id="adm-sub-builder" class="px-3 py-1.5 bg-[#0B1120] hover:bg-slate-800 border border-[#24324D] text-slate-300 rounded-xl transition-all">
              🗺️ Floorplan Visualizer
            </button>
            <button onclick="switchAdminSubTab('notifications')" id="adm-sub-notif" class="px-3 py-1.5 bg-[#0B1120] hover:bg-slate-800 border border-[#24324D] text-slate-300 rounded-xl transition-all">
              🔔 Notification Gateway
            </button>
          </div>`;

if (!html.includes(adminTabsTarget)) {
  console.error('adminTabsTarget not found!');
  process.exit(1);
}
html = html.replace(adminTabsTarget, adminTabsReplacement);
console.log('Admin header tabs updated.');

// =========================================================================
// 3. UPDATE CUSTOMER AGENDA & PASS BUTTONS AND ACTIONS
// =========================================================================
// Update agenda calendar button
const agendaCalendarTarget = `<button onclick="alert('Generated universal .ics calendar invite for your device.')" 
              class="px-3 py-1.5 bg-[#0B1120] hover:bg-slate-800 border border-[#24324D] text-xs rounded-xl text-slate-300 font-medium">
              📅 Download Calendar Invite (.ics)
            </button>`;

const agendaCalendarReplacement = `<button onclick="openCalendarExportModal('Emaar Properties • Grand Polo Club Consultation', 'Hall 3, Booth B-14 (Table 2)', '2026-11-18T14:30:00')" 
              class="px-3 py-1.5 bg-[#0B1120] hover:bg-slate-800 border border-[#24324D] text-xs rounded-xl text-slate-300 font-medium hover:text-white transition-all flex items-center gap-1.5">
              <span>📅</span> Download Calendar Invite (.ics)
            </button>`;

if (html.includes(agendaCalendarTarget)) {
  html = html.replace(agendaCalendarTarget, agendaCalendarReplacement);
  console.log('Agenda calendar button updated.');
}

// Update Agenda Confirmed Card Actions (add Reschedule and Cancel buttons)
const agendaCardActionsTarget = `<div class="flex items-center gap-2 w-full md:w-auto">
                <button onclick="switchCustomerSubTab('pass')" class="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow">
                  Show QR Pass
                </button>
              </div>`;

const agendaCardActionsReplacement = `<div class="flex items-center gap-2 w-full md:w-auto flex-wrap">
                <button onclick="switchCustomerSubTab('pass')" class="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow">
                  Show QR Pass
                </button>
                <button onclick="openRescheduleModal('EMAAR-CONF-1', 'Emaar Properties')" class="px-3 py-1.5 bg-[#151F32] hover:bg-slate-800 border border-[#24324D] text-slate-300 text-xs rounded-xl">
                  🔄 Reschedule
                </button>
                <button onclick="openCancelMeetingModal('EMAAR-CONF-1', 'Emaar Properties', 'Table 2')" class="px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-300 text-xs rounded-xl">
                  ✕ Cancel
                </button>
                <button onclick="switchCustomerSubTab('3d'); focusBoothOn3D('Emaar Properties', 'Booth B-14');" class="px-3 py-1.5 bg-[#151F32] hover:bg-slate-800 border border-[#24324D] text-slate-300 text-xs rounded-xl">
                  📍 3D Map
                </button>
              </div>`;

if (html.includes(agendaCardActionsTarget)) {
  html = html.replace(agendaCardActionsTarget, agendaCardActionsReplacement);
  console.log('Agenda card actions updated.');
}

// Add ID to agenda cards list container
const agendaListTarget = `<div class="space-y-3">
            <div class="bg-[#0B1120] border border-emerald-500/40 p-4 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">`;

const agendaListReplacement = `<div id="agendaCardsContainer" class="space-y-3">
            <div id="agenda-card-seed-1" class="bg-[#0B1120] border border-emerald-500/40 p-4 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">`;

if (html.includes(agendaListTarget)) {
  html = html.replace(agendaListTarget, agendaListReplacement);
  console.log('Agenda container ID added.');
}

// Update Dynamic Pass card to include wallet download & offline PDF
const passBottomTarget = `<button onclick="triggerCustArrivalAlert()" id="cust-arrival-btn" 
            class="w-full py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2">
            <span>🔔 I Have Arrived (Alert Rep Tariq via WhatsApp)</span>
          </button>`;

const passBottomReplacement = `<div class="space-y-2">
            <button onclick="triggerCustArrivalAlert()" id="cust-arrival-btn" 
              class="w-full py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2">
              <span>🔔 I Have Arrived (Alert Rep Tariq via WhatsApp)</span>
            </button>
            <div class="grid grid-cols-2 gap-2 pt-1">
              <button onclick="addToMobileWallet()" class="py-2 px-3 bg-[#0B1120] hover:bg-slate-800 border border-[#24324D] text-slate-300 text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all">
                <span>🍏</span> Add to Apple Wallet
              </button>
              <button onclick="downloadOfflinePassPdf()" class="py-2 px-3 bg-[#0B1120] hover:bg-slate-800 border border-[#24324D] text-slate-300 text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all">
                <span>📄</span> Download Offline PDF
              </button>
            </div>
            <button onclick="switchCustomerSubTab('3d'); focusBoothOn3D('Emaar Properties', 'Booth B-14');" class="w-full py-2 bg-[#0B1120] hover:bg-slate-800 border border-[#24324D] text-slate-400 hover:text-white text-xs rounded-xl text-center transition-all">
              📍 Show Directions to Table on 3D Hall Twin
            </button>
          </div>`;

if (html.includes(passBottomTarget)) {
  html = html.replace(passBottomTarget, passBottomReplacement);
  console.log('Dynamic pass buttons updated.');
}

// =========================================================================
// 4. UPDATE DEVELOPER SCHEDULE: WALK-IN SEATING & COUNTER BUTTONS
// =========================================================================
// Table 1 walk-in button
const devSeatWalkInT1Target = `<button onclick="alert('Seated spontaneous walk-in visitor at Table 1 with Rep Sarah.')" 
              class="px-3 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg">
              + Seat Walk-In
            </button>`;

const devSeatWalkInT1Replacement = `<button onclick="openWalkInModal('T-1', 'Booth B-14 • Table 1 (Sarah Jenkins)')" 
              class="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg shadow transition-all">
              + Seat Walk-In
            </button>`;

if (html.includes(devSeatWalkInT1Target)) {
  html = html.replace(devSeatWalkInT1Target, devSeatWalkInT1Replacement);
  console.log('Dev Table 1 walk-in button updated.');
}

// Table 4 walk-in button
const devSeatWalkInT4Target = `<button onclick="alert('Seated spontaneous walk-in visitor at Table 4.')" 
              class="px-3 py-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-lg">
              + Seat Walk-In
            </button>`;

const devSeatWalkInT4Replacement = `<button onclick="openWalkInModal('T-4', 'Booth B-14 • Table 4 (Recycled Space)')" 
              class="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-lg shadow transition-all">
              + Seat Walk-In
            </button>`;

if (html.includes(devSeatWalkInT4Target)) {
  html = html.replace(devSeatWalkInT4Target, devSeatWalkInT4Replacement);
  console.log('Dev Table 4 walk-in button updated.');
}

// Inbound Request Queue: add Counter-Propose and polite Decline buttons
const devReqActionsTarget = `<div class="flex items-center gap-2 pt-1">
              <button onclick="devApproveRequest('dev-req-box-1', 'Dr. Amina Mansouri')" 
                class="w-full py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-lg transition-all">
                ✓ Approve & Assign Table 1
              </button>
              <button onclick="devDeclineRequest('dev-req-box-1')" 
                class="py-2 px-3 bg-slate-800 hover:bg-red-500/20 text-slate-400 hover:text-red-400 text-xs rounded-lg border border-slate-700">
                Decline
              </button>
            </div>`;

const devReqActionsReplacement = `<div class="flex items-center gap-2 pt-1">
              <button onclick="devApproveRequest('dev-req-box-1', 'Dr. Amina Mansouri', 'Table 1')" 
                class="w-full py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-lg transition-all">
                ✓ Approve (Table 1)
              </button>
              <button onclick="openCounterProposeModal('Dr. Amina Mansouri', 'dev-req-box-1', 'Table 1')" 
                class="py-2 px-2.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-semibold rounded-lg border border-amber-500/40 whitespace-nowrap">
                ⇄ Counter
              </button>
              <button onclick="openDevDeclineModal('Dr. Amina Mansouri', 'dev-req-box-1')" 
                class="py-2 px-2.5 bg-slate-800 hover:bg-red-500/20 text-slate-400 hover:text-red-400 text-xs rounded-lg border border-slate-700">
                Decline
              </button>
            </div>`;

if (html.includes(devReqActionsTarget)) {
  html = html.replace(devReqActionsTarget, devReqActionsReplacement);
  console.log('Dev inbound request buttons updated.');
}

// Wrap dev inbound requests container with an ID
const devInboundTarget = `<div class="bg-[#151F32] border border-[#24324D] rounded-2xl p-5 shadow-xl space-y-4">
          <div class="pb-3 border-b border-[#24324D]">
            <h3 class="text-sm font-bold text-white flex items-center justify-between">
              <span>Pending Inbound Requests</span>
              <span class="text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full font-mono">1 New</span>
            </h3>
            <p class="text-xs text-slate-400">Review investor tier and approve/decline</p>
          </div>

          <div id="dev-req-box-1"`;

const devInboundReplacement = `<div class="bg-[#151F32] border border-[#24324D] rounded-2xl p-5 shadow-xl space-y-4">
          <div class="pb-3 border-b border-[#24324D]">
            <h3 class="text-sm font-bold text-white flex items-center justify-between">
              <span>Pending Inbound Requests</span>
              <span id="devInboundBadgeCount" class="text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full font-mono">1 New</span>
            </h3>
            <p class="text-xs text-slate-400">Review investor tier and approve/decline</p>
          </div>

          <div id="devInboundQueueContainer" class="space-y-3">
          <div id="dev-req-box-1"`;

if (html.includes(devInboundTarget)) {
  html = html.replace(devInboundTarget, devInboundReplacement);
  // Also close the container before booth team availability
  html = html.replace(
    `<div class="pt-3 border-t border-[#24324D] space-y-2">\n            <span class="text-xs text-slate-400 font-medium block">Booth Team Availability:</span>`,
    `</div>\n          <div class="pt-3 border-t border-[#24324D] space-y-2">\n            <span class="text-xs text-slate-400 font-medium block">Booth Team Availability:</span>`
  );
  console.log('Dev inbound queue container wrapped.');
}

// Update CSV Export button in CRM
const crmExportTarget = `<button onclick="alert('Exporting native CRM leads to Excel/CSV format.')" 
            class="px-3 py-1.5 bg-[#0B1120] hover:bg-slate-800 border border-[#24324D] text-xs text-slate-300 rounded-xl">
            📥 Export Pipeline CSV
          </button>`;

const crmExportReplacement = `<div class="flex items-center gap-2">
            <button onclick="openAddLeadModal()" 
              class="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow transition-all">
              + Add Offline Lead
            </button>
            <button onclick="exportPipelineCsv()" 
              class="px-3 py-1.5 bg-[#0B1120] hover:bg-slate-800 border border-[#24324D] text-xs text-slate-300 hover:text-white rounded-xl transition-all flex items-center gap-1">
              <span>📥</span> Export Pipeline CSV
            </button>
          </div>`;

if (html.includes(crmExportTarget)) {
  html = html.replace(crmExportTarget, crmExportReplacement);
  console.log('CRM export and add lead buttons updated.');
}

// Add ID to tbody in CRM table
const crmTbodyTarget = `<tbody class="divide-y divide-[#24324D] text-slate-300">`;
const crmTbodyReplacement = `<tbody id="crmLeadsTbody" class="divide-y divide-[#24324D] text-slate-300">`;
if (html.includes(crmTbodyTarget)) {
  html = html.replace(crmTbodyTarget, crmTbodyReplacement);
  console.log('CRM tbody ID added.');
}

fs.writeFileSync('scratch/ui_step1.html', html);
console.log('Step 1 written successfully.');

