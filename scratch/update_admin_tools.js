const fs = require('fs');

let html = fs.readFileSync('scratch/ui_step2.html', 'utf8');

// 1. In adm-view-pulse: add Emergency Venue Broadcast button
const admPulseHeaderTarget = `<div class="flex items-center justify-between pb-3 border-b border-[#24324D]">
            <div>
              <h3 class="text-sm font-bold text-white">Live Master Meetings Log (All Halls)</h3>
              <p class="text-xs text-slate-400">Real-time meeting statuses, check-in timestamps, and overrides</p>
            </div>
            <span class="text-xs text-slate-400 font-mono">1,482 Total Records</span>
          </div>`;

const admPulseHeaderReplacement = `<div class="flex items-center justify-between pb-3 border-b border-[#24324D] flex-wrap gap-2">
            <div>
              <h3 class="text-sm font-bold text-white">Live Master Meetings Log (Hall 3 Priority Desk)</h3>
              <p class="text-xs text-slate-400">Real-time meeting statuses, check-in timestamps, and overrides</p>
            </div>
            <div class="flex items-center gap-2">
              <button onclick="openEmergencyBroadcastModal()" 
                class="px-3 py-1.5 bg-red-600 hover:bg-red-500 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center gap-1.5">
                <span>📢</span> Emergency Broadcast
              </button>
              <span class="text-xs text-slate-400 font-mono">1,482 Records</span>
            </div>
          </div>`;

if (html.includes(admPulseHeaderTarget)) {
  html = html.replace(admPulseHeaderTarget, admPulseHeaderReplacement);
  console.log('Admin pulse emergency broadcast button added.');
} else {
  console.warn('admPulseHeaderTarget not found!');
}

// 2. In adm-view-builder: replace alerts with modal functions and add GeoJSON export
const builderButtonsTarget = `<div class="flex items-center gap-2">
            <button onclick="alert('Upload SVG Blueprint dialog opened.')" class="px-3 py-1.5 bg-[#0B1120] hover:bg-slate-800 border border-[#24324D] text-xs text-slate-300 rounded-lg">
              📤 Upload Hall CAD/SVG
            </button>
            <button onclick="alert('New booth drawing mode active.')" class="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg">
              + Draw New Booth Space
            </button>
          </div>`;

const builderButtonsReplacement = `<div class="flex items-center gap-2 flex-wrap">
            <button onclick="openBlueprintUploadModal()" class="px-3 py-1.5 bg-[#0B1120] hover:bg-slate-800 border border-[#24324D] text-xs text-slate-300 hover:text-white rounded-lg transition-all flex items-center gap-1">
              <span>📤</span> Upload Hall CAD/SVG
            </button>
            <button onclick="openBoothBuilderModal()" class="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg shadow transition-all">
              + Draw New Booth Space
            </button>
            <button onclick="exportBlueprintGeoJson()" class="px-3 py-1.5 bg-[#0B1120] hover:bg-slate-800 border border-[#24324D] text-xs text-slate-300 hover:text-white rounded-lg transition-all flex items-center gap-1">
              <span>🗺️</span> Export GeoJSON
            </button>
          </div>`;

if (html.includes(builderButtonsTarget)) {
  html = html.replace(builderButtonsTarget, builderButtonsReplacement);
  console.log('Builder action buttons updated.');
} else {
  console.warn('builderButtonsTarget not found!');
}

// 3. In adm-view-notifications: add Test WhatsApp notification button and live dispatch log table
const notifHeaderTarget = `<div class="pb-3 border-b border-[#24324D]">
          <h3 class="text-base font-bold text-white">The Only External Integration: Omnichannel Notification Gateway</h3>
          <p class="text-xs text-slate-400">Configure real-time event triggers for WhatsApp Cloud API, Twilio SMS & Web Push</p>
        </div>`;

const notifHeaderReplacement = `<div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-3 border-b border-[#24324D]">
          <div>
            <div class="flex items-center gap-2">
              <h3 class="text-base font-bold text-white">The Only External Integration: Omnichannel Notification Gateway</h3>
              <span class="text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-mono font-bold">Meta WhatsApp Cloud API</span>
            </div>
            <p class="text-xs text-slate-400">Standalone zero-integration architecture with webhook-driven WhatsApp alerts & Twilio SMS fallback</p>
          </div>
          <div class="flex items-center gap-2">
            <button onclick="openTestNotificationModal()" 
              class="px-3.5 py-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-slate-950 font-bold text-xs rounded-xl shadow-lg transition-all flex items-center gap-1.5">
              <span>💬</span> Send Test WhatsApp Notification
            </button>
          </div>
        </div>`;

if (html.includes(notifHeaderTarget)) {
  html = html.replace(notifHeaderTarget, notifHeaderReplacement);
  console.log('Notification header updated.');
} else {
  console.warn('notifHeaderTarget not found!');
}

// Add live notification log table to adm-view-notifications
const notifGridTarget = `<div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">`;

const notifLogTable = `<!-- Live Omnichannel Event Log -->
        <div class="space-y-3 pt-3">
          <div class="flex items-center justify-between">
            <h4 class="text-sm font-bold text-white">Live Dispatched Notifications Log (Meta Cloud API & Twilio)</h4>
            <span class="text-xs font-mono text-slate-400">Showing last 5 transactional triggers</span>
          </div>

          <div class="overflow-x-auto rounded-xl border border-[#24324D]">
            <table class="w-full text-left text-xs">
              <thead class="text-slate-400 bg-[#0B1120] border-b border-[#24324D] uppercase font-mono text-[10px]">
                <tr>
                  <th class="p-3">Timestamp</th>
                  <th class="p-3">Channel</th>
                  <th class="p-3">Recipient Phone</th>
                  <th class="p-3">Template / Event</th>
                  <th class="p-3">Payload Summary</th>
                  <th class="p-3">Status</th>
                  <th class="p-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody id="notifLogTbody" class="divide-y divide-[#24324D] text-slate-300">
                <tr class="hover:bg-slate-800/40">
                  <td class="p-3 font-mono text-emerald-400">14:26:04</td>
                  <td class="p-3"><span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold flex items-center gap-1 w-max">💬 WhatsApp</span></td>
                  <td class="p-3 font-mono">+971 50 123 4567 (Rep Tariq)</td>
                  <td class="p-3 font-semibold text-white">attendee_arrived_alert</td>
                  <td class="p-3 text-slate-400">Investor Mr. Alexander Wright arrived at Booth B14 (Table 2)</td>
                  <td class="p-3"><span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px]">DELIVERED (0.4s)</span></td>
                  <td class="p-3 text-right"><span class="text-slate-500 font-mono text-[11px]">Ack wamid.HBgL</span></td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-3 font-mono text-emerald-400">14:15:00</td>
                  <td class="p-3"><span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold flex items-center gap-1 w-max">💬 WhatsApp</span></td>
                  <td class="p-3 font-mono">+44 7700 900123 (Investor)</td>
                  <td class="p-3 font-semibold text-white">no_show_table_recycled</td>
                  <td class="p-3 text-slate-400">Grace period expired. Table 4 recycled for spontaneous walk-ins</td>
                  <td class="p-3"><span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px]">DELIVERED (0.6s)</span></td>
                  <td class="p-3 text-right"><span class="text-slate-500 font-mono text-[11px]">Ack wamid.HBgM</span></td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-3 font-mono text-emerald-400">13:30:12</td>
                  <td class="p-3"><span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold flex items-center gap-1 w-max">💬 WhatsApp</span></td>
                  <td class="p-3 font-mono">+41 79 123 4567 (Dr. Amina)</td>
                  <td class="p-3 font-semibold text-white">booking_confirmed_pass</td>
                  <td class="p-3 text-slate-400">QR Fast-Track Pass & Booth B42 consultation confirmed</td>
                  <td class="p-3"><span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px]">READ (13:31)</span></td>
                  <td class="p-3 text-right"><span class="text-slate-500 font-mono text-[11px]">Ack wamid.HBgN</span></td>
                </tr>
                <tr id="notif-row-fallback-sms" class="hover:bg-slate-800/40">
                  <td class="p-3 font-mono text-amber-400">12:00:00</td>
                  <td class="p-3"><span class="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold flex items-center gap-1 w-max">📱 Twilio SMS</span></td>
                  <td class="p-3 font-mono">+966 50 555 1234 (VIP Client)</td>
                  <td class="p-3 font-semibold text-white">sms_fallback_ping</td>
                  <td class="p-3 text-slate-400">VIP Lounge Pod 1 reservation pass</td>
                  <td class="p-3"><span id="notif-status-sms" class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-[10px]">RETRY_QUEUED</span></td>
                  <td class="p-3 text-right">
                    <button onclick="retryNotificationDispatch(this, 'notif-status-sms')" class="px-2 py-0.5 rounded bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-slate-950 font-bold text-[11px] transition-all">
                      ↻ Retry
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>\n\n        `;

if (html.includes(notifGridTarget)) {
  html = html.replace(notifGridTarget, notifLogTable + notifGridTarget);
  console.log('Notification log table inserted.');
} else {
  console.warn('notifGridTarget not found!');
}

fs.writeFileSync('scratch/ui_step3.html', html);
console.log('Step 3 written successfully.');

