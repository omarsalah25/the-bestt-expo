const fs = require("fs");
let html = fs.readFileSync("scratch/ui_step1.html", "utf8");
// 1. DEVELOPER VIEW: BOOTH ANALYTICS & HEATMAP
const devViewAnalytics = `
      <!-- Dev Sub-View 2.3: Booth Analytics & Turnover Heatmap -->
      <div id="dev-view-analytics" class="hidden space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div class="bg-[#151F32] border border-[#24324D] p-5 rounded-2xl">
            <span class="text-xs text-slate-400 block">Table Turnover Velocity</span>
            <span class="text-2xl font-bold text-white mt-1 block">4.8 <span class="text-xs font-normal text-slate-400">sessions/table/day</span></span>
            <span class="text-[10px] text-emerald-400 font-semibold block mt-1">↑ 22% above Hall 3 average</span>
          </div>
          <div class="bg-[#151F32] border border-[#24324D] p-5 rounded-2xl">
            <span class="text-xs text-slate-400 block">Average Meeting Duration</span>
            <span class="text-2xl font-bold text-amber-400 mt-1 block">23.4 <span class="text-xs font-normal text-slate-400">minutes</span></span>
            <span class="text-[10px] text-slate-400 block mt-1">Optimal 30m slot efficiency</span>
          </div>
          <div class="bg-[#151F32] border border-[#24324D] p-5 rounded-2xl">
            <span class="text-xs text-slate-400 block">Lead Qualification Rate</span>
            <span class="text-2xl font-bold text-emerald-400 mt-1 block">78.5%</span>
            <span class="text-[10px] text-emerald-400 block mt-1">11 of 14 leads rated HOT/WARM</span>
          </div>
          <div class="bg-[#151F32] border border-[#24324D] p-5 rounded-2xl">
            <span class="text-xs text-slate-400 block">Closed Deal Pipeline</span>
            <span class="text-2xl font-bold text-purple-400 mt-1 block">$14.8M</span>
            <span class="text-[10px] text-purple-300 block mt-1">6 Formal reservation deposits</span>
          </div>
        </div>

        <!-- Hourly Heatmap Matrix across Tables 1-4 -->
        <div class="bg-[#151F32] border border-[#24324D] rounded-2xl p-6 shadow-xl space-y-4">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-3 border-b border-[#24324D]">
            <div>
              <h3 class="text-base font-bold text-white">Booth Table Occupancy Heatmap (Day 1)</h3>
              <p class="text-xs text-slate-400">Real-time table turnover velocity across 30-minute intervals</p>
            </div>
            <div class="flex items-center gap-3 text-xs">
              <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-emerald-500/20 border border-emerald-500/40 inline-block"></span> Available</span>
              <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-blue-500/40 border border-blue-500 inline-block"></span> In Session</span>
              <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-amber-500/30 border border-amber-500 inline-block"></span> Reserved</span>
              <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-purple-500/30 border border-purple-500 inline-block"></span> Recycled</span>
            </div>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-center text-xs">
              <thead class="text-slate-400 bg-[#0B1120] border-b border-[#24324D]">
                <tr>
                  <th class="p-2.5 text-left">Booth Table</th>
                  <th class="p-2.5">10:00</th>
                  <th class="p-2.5">11:00</th>
                  <th class="p-2.5">12:00</th>
                  <th class="p-2.5">13:00</th>
                  <th class="p-2.5">14:00</th>
                  <th class="p-2.5">15:00</th>
                  <th class="p-2.5">16:00</th>
                  <th class="p-2.5">17:00</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#24324D] text-slate-300 font-mono text-[11px]">
                <tr>
                  <td class="p-3 text-left font-sans font-bold text-white">Table 1 (Sarah)</td>
                  <td class="p-2"><span class="block py-1.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">FREE</span></td>
                  <td class="p-2"><span class="block py-1.5 rounded bg-blue-500/30 text-blue-300 border border-blue-500/50">BUSY</span></td>
                  <td class="p-2"><span class="block py-1.5 rounded bg-blue-500/30 text-blue-300 border border-blue-500/50">BUSY</span></td>
                  <td class="p-2"><span class="block py-1.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">FREE</span></td>
                  <td class="p-2"><span class="block py-1.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">HOLD</span></td>
                  <td class="p-2"><span class="block py-1.5 rounded bg-blue-500/30 text-blue-300 border border-blue-500/50">BUSY</span></td>
                  <td class="p-2"><span class="block py-1.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">HOLD</span></td>
                  <td class="p-2"><span class="block py-1.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">FREE</span></td>
                </tr>
                <tr>
                  <td class="p-3 text-left font-sans font-bold text-white">Table 2 (Tariq VIP)</td>
                  <td class="p-2"><span class="block py-1.5 rounded bg-blue-500/30 text-blue-300 border border-blue-500/50">BUSY</span></td>
                  <td class="p-2"><span class="block py-1.5 rounded bg-blue-500/30 text-blue-300 border border-blue-500/50">BUSY</span></td>
                  <td class="p-2"><span class="block py-1.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">HOLD</span></td>
                  <td class="p-2"><span class="block py-1.5 rounded bg-blue-500/30 text-blue-300 border border-blue-500/50">BUSY</span></td>
                  <td class="p-2"><span class="block py-1.5 rounded bg-blue-600 text-white font-bold animate-pulse">NOW 🔥</span></td>
                  <td class="p-2"><span class="block py-1.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">HOLD</span></td>
                  <td class="p-2"><span class="block py-1.5 rounded bg-blue-500/30 text-blue-300 border border-blue-500/50">BUSY</span></td>
                  <td class="p-2"><span class="block py-1.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">HOLD</span></td>
                </tr>
                <tr>
                  <td class="p-3 text-left font-sans font-bold text-white">Table 3 (Elena Intl)</td>
                  <td class="p-2"><span class="block py-1.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">FREE</span></td>
                  <td class="p-2"><span class="block py-1.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">FREE</span></td>
                  <td class="p-2"><span class="block py-1.5 rounded bg-blue-500/30 text-blue-300 border border-blue-500/50">BUSY</span></td>
                  <td class="p-2"><span class="block py-1.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">FREE</span></td>
                  <td class="p-2"><span class="block py-1.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">FREE</span></td>
                  <td class="p-2"><span class="block py-1.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">HOLD</span></td>
                  <td class="p-2"><span class="block py-1.5 rounded bg-blue-500/30 text-blue-300 border border-blue-500/50">BUSY</span></td>
                  <td class="p-2"><span class="block py-1.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">FREE</span></td>
                </tr>
                <tr>
                  <td class="p-3 text-left font-sans font-bold text-white">Table 4 (Recycled)</td>
                  <td class="p-2"><span class="block py-1.5 rounded bg-blue-500/30 text-blue-300 border border-blue-500/50">BUSY</span></td>
                  <td class="p-2"><span class="block py-1.5 rounded bg-purple-500/30 text-purple-300 border border-purple-500/50">NO-SHOW</span></td>
                  <td class="p-2"><span class="block py-1.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">WALK-IN</span></td>
                  <td class="p-2"><span class="block py-1.5 rounded bg-blue-500/30 text-blue-300 border border-blue-500/50">BUSY</span></td>
                  <td class="p-2"><span class="block py-1.5 rounded bg-purple-500/30 text-purple-300 border border-purple-500/50">RECYCLED</span></td>
                  <td class="p-2"><span class="block py-1.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">FREE</span></td>
                  <td class="p-2"><span class="block py-1.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">HOLD</span></td>
                  <td class="p-2"><span class="block py-1.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">FREE</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Sales Rep Performance Leaderboard -->
        <div class="bg-[#151F32] border border-[#24324D] rounded-2xl p-6 shadow-xl space-y-4">
          <div class="pb-3 border-b border-[#24324D]">
            <h3 class="text-base font-bold text-white">Consultant Conversion Leaderboard</h3>
            <p class="text-xs text-slate-400">Individual sales pipeline and customer rating benchmarks</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-[#0B1120] border border-amber-500/30 p-4 rounded-xl space-y-2">
              <div class="flex items-center justify-between">
                <span class="font-bold text-white">Tariq Al-Mansoor</span>
                <span class="text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-bold">🥇 Top Closer</span>
              </div>
              <p class="text-xs text-slate-400">VIP & HNWI Residential Lead</p>
              <div class="pt-2 border-t border-[#24324D] flex justify-between text-xs font-mono">
                <span class="text-slate-400">Pipeline: <strong class="text-emerald-400">$8,500,000</strong></span>
                <span class="text-amber-300">★ 4.98 / 5.0</span>
              </div>
            </div>

            <div class="bg-[#0B1120] border border-[#24324D] p-4 rounded-xl space-y-2">
              <div class="flex items-center justify-between">
                <span class="font-bold text-white">Sarah Jenkins</span>
                <span class="text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded font-bold">🥈 Luxury Lead</span>
              </div>
              <p class="text-xs text-slate-400">Waterfront & Golf Estates</p>
              <div class="pt-2 border-t border-[#24324D] flex justify-between text-xs font-mono">
                <span class="text-slate-400">Pipeline: <strong class="text-emerald-400">$4,200,000</strong></span>
                <span class="text-amber-300">★ 4.92 / 5.0</span>
              </div>
            </div>

            <div class="bg-[#0B1120] border border-[#24324D] p-4 rounded-xl space-y-2">
              <div class="flex items-center justify-between">
                <span class="font-bold text-white">Elena Rostova</span>
                <span class="text-xs bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded font-bold">🥉 Intl Desk</span>
              </div>
              <p class="text-xs text-slate-400">Overseas Institutional Investors</p>
              <div class="pt-2 border-t border-[#24324D] flex justify-between text-xs font-mono">
                <span class="text-slate-400">Pipeline: <strong class="text-emerald-400">$2,100,000</strong></span>
                <span class="text-amber-300">★ 4.88 / 5.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
`;

// 2. DEVELOPER VIEW: SALES REP ROSTER & TABLE ASSIGNMENTS
const devViewTeam = `
      <!-- Dev Sub-View 2.4: Sales Rep Roster & Table Assignment -->
      <div id="dev-view-team" class="hidden bg-[#151F32] border border-[#24324D] rounded-2xl p-6 shadow-xl space-y-5">
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-3 border-b border-[#24324D]">
          <div>
            <h3 class="text-base font-bold text-white">Exhibitor Sales Team & Live Table Roster</h3>
            <p class="text-xs text-slate-400">Manage 4 booth tables, reassign reps in real-time, and monitor active presence</p>
          </div>
          <button onclick="showToast('Roster Synced', 'All sales rep calendar availability broadcasted to attendees.', 'info')" 
            class="px-3.5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow transition-all">
            ✓ Broadcast Roster Update
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Rep 1 -->
          <div class="bg-[#0B1120] border border-[#24324D] p-5 rounded-2xl space-y-4">
            <div class="flex items-start justify-between">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center font-bold text-base">
                  TM
                </div>
                <div>
                  <h4 class="font-bold text-white text-sm">Tariq Al-Mansoor</h4>
                  <p class="text-xs text-slate-400">VIP Sales Director • High-Net-Worth Desk</p>
                  <span class="text-[10px] text-emerald-400 font-mono">📱 WhatsApp: +971 50 123 4567</span>
                </div>
              </div>
              <span class="text-[10px] bg-red-500/20 text-red-300 border border-red-500/40 px-2 py-0.5 rounded font-bold">
                🔴 IN SESSION (T-2)
              </span>
            </div>
            <div class="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-[#24324D]">
              <div>
                <label class="text-[10px] text-slate-500 block mb-1">ASSIGNED TABLE</label>
                <select onchange="reassignSalesRep('Tariq Al-Mansoor', this.value)" class="w-full bg-[#151F32] border border-[#24324D] text-xs rounded-lg p-1.5 text-white">
                  <option selected>Table 2 (VIP Central)</option>
                  <option>Table 1</option>
                  <option>Table 3</option>
                  <option>Table 4</option>
                </select>
              </div>
              <div>
                <label class="text-[10px] text-slate-500 block mb-1">DUTY STATUS</label>
                <select class="w-full bg-[#151F32] border border-[#24324D] text-xs rounded-lg p-1.5 text-emerald-400 font-semibold">
                  <option selected>Active On-Site</option>
                  <option>On 15m Break</option>
                  <option>VIP Escort Duty</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Rep 2 -->
          <div class="bg-[#0B1120] border border-[#24324D] p-5 rounded-2xl space-y-4">
            <div class="flex items-start justify-between">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/40 flex items-center justify-center font-bold text-base">
                  SJ
                </div>
                <div>
                  <h4 class="font-bold text-white text-sm">Sarah Jenkins</h4>
                  <p class="text-xs text-slate-400">Senior Investment Advisor • Luxury Villas</p>
                  <span class="text-[10px] text-emerald-400 font-mono">📱 WhatsApp: +971 52 987 6543</span>
                </div>
              </div>
              <span class="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded font-bold">
                🟢 READY AT TABLE
              </span>
            </div>
            <div class="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-[#24324D]">
              <div>
                <label class="text-[10px] text-slate-500 block mb-1">ASSIGNED TABLE</label>
                <select onchange="reassignSalesRep('Sarah Jenkins', this.value)" class="w-full bg-[#151F32] border border-[#24324D] text-xs rounded-lg p-1.5 text-white">
                  <option selected>Table 1 (Front Side)</option>
                  <option>Table 2</option>
                  <option>Table 3</option>
                  <option>Table 4</option>
                </select>
              </div>
              <div>
                <label class="text-[10px] text-slate-500 block mb-1">DUTY STATUS</label>
                <select class="w-full bg-[#151F32] border border-[#24324D] text-xs rounded-lg p-1.5 text-emerald-400 font-semibold">
                  <option selected>Active On-Site</option>
                  <option>On 15m Break</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Rep 3 -->
          <div class="bg-[#0B1120] border border-[#24324D] p-5 rounded-2xl space-y-4">
            <div class="flex items-start justify-between">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/40 flex items-center justify-center font-bold text-base">
                  ER
                </div>
                <div>
                  <h4 class="font-bold text-white text-sm">Elena Rostova</h4>
                  <p class="text-xs text-slate-400">Head of International Desk • Europe & CIS</p>
                  <span class="text-[10px] text-emerald-400 font-mono">📱 WhatsApp: +971 55 456 7890</span>
                </div>
              </div>
              <span class="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded font-bold">
                🟢 READY AT TABLE
              </span>
            </div>
            <div class="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-[#24324D]">
              <div>
                <label class="text-[10px] text-slate-500 block mb-1">ASSIGNED TABLE</label>
                <select onchange="reassignSalesRep('Elena Rostova', this.value)" class="w-full bg-[#151F32] border border-[#24324D] text-xs rounded-lg p-1.5 text-white">
                  <option selected>Table 3 (Corner)</option>
                  <option>Table 1</option>
                  <option>Table 2</option>
                  <option>Table 4</option>
                </select>
              </div>
              <div>
                <label class="text-[10px] text-slate-500 block mb-1">DUTY STATUS</label>
                <select class="w-full bg-[#151F32] border border-[#24324D] text-xs rounded-lg p-1.5 text-emerald-400 font-semibold">
                  <option selected>Active On-Site</option>
                  <option>On 15m Break</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Rep 4 -->
          <div class="bg-[#0B1120] border border-[#24324D] p-5 rounded-2xl space-y-4">
            <div class="flex items-start justify-between">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-xl bg-slate-800 text-slate-300 border border-slate-700 flex items-center justify-center font-bold text-base">
                  MH
                </div>
                <div>
                  <h4 class="font-bold text-white text-sm">Mostafa Hassan</h4>
                  <p class="text-xs text-slate-400">Commercial & Retail Specialist</p>
                  <span class="text-[10px] text-emerald-400 font-mono">📱 WhatsApp: +20 10 999 8888</span>
                </div>
              </div>
              <span class="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded font-bold">
                🟡 ON STANDBY (T-4)
              </span>
            </div>
            <div class="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-[#24324D]">
              <div>
                <label class="text-[10px] text-slate-500 block mb-1">ASSIGNED TABLE</label>
                <select onchange="reassignSalesRep('Mostafa Hassan', this.value)" class="w-full bg-[#151F32] border border-[#24324D] text-xs rounded-lg p-1.5 text-white">
                  <option selected>Table 4 (Recycled Space)</option>
                  <option>Table 1</option>
                  <option>Table 2</option>
                  <option>Table 3</option>
                </select>
              </div>
              <div>
                <label class="text-[10px] text-slate-500 block mb-1">DUTY STATUS</label>
                <select class="w-full bg-[#151F32] border border-[#24324D] text-xs rounded-lg p-1.5 text-emerald-400 font-semibold">
                  <option selected>Active On-Site</option>
                  <option>On 15m Break</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
`;

// 3. ADMIN VIEW: MASTER MEETING LEDGER (ALL 67 BOOTHS & 50 TABLES)
const admViewMasterMeetings = `
      <!-- Admin Sub-View 3.2: Master Meeting Ledger across All 67 Booths & 50 Tables -->
      <div id="adm-view-master-meetings" class="hidden bg-[#151F32] border border-[#24324D] rounded-2xl p-6 shadow-xl space-y-5">
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-3 border-b border-[#24324D]">
          <div>
            <div class="flex items-center gap-2">
              <h3 class="text-base font-bold text-white">Master Real-Time Meeting Ledger (Hall 3 • 50 Tables)</h3>
              <span class="text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-mono font-bold">● Live Sync</span>
            </div>
            <p class="text-xs text-slate-400">Complete architectural audit across Palm Hills, Talaat Moustafa, Mountain View, Ora, Sodic & VIP B67</p>
          </div>
          <div class="flex items-center gap-2">
            <button onclick="openForceFreeModal('T-14', 'Mountain View (Booth B28 • T-14)')" 
              class="px-3 py-1.5 bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/40 text-xs font-bold rounded-xl transition-all">
              ⚡ Emergency Force Free
            </button>
            <button onclick="exportPipelineCsv()" 
              class="px-3 py-1.5 bg-[#0B1120] hover:bg-slate-800 border border-[#24324D] text-xs text-slate-300 rounded-xl transition-all flex items-center gap-1">
              <span>📥</span> Export Hall Audit CSV
            </button>
          </div>
        </div>

        <!-- Filters & Search Toolbar -->
        <div class="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 text-xs">
          <div class="flex items-center gap-1.5 flex-wrap">
            <button onclick="filterMasterTable('ALL', this)" class="master-filter-chip px-3 py-1.5 rounded-xl bg-amber-500 text-slate-950 font-bold">All (50 Tables)</button>
            <button onclick="filterMasterTable('OCCUPIED', this)" class="master-filter-chip px-3 py-1.5 rounded-xl bg-[#0B1120] text-slate-300 border border-[#24324D] hover:border-slate-500">Live In-Session (8)</button>
            <button onclick="filterMasterTable('RESERVED', this)" class="master-filter-chip px-3 py-1.5 rounded-xl bg-[#0B1120] text-slate-300 border border-[#24324D] hover:border-slate-500">Reserved / Up Next (14)</button>
            <button onclick="filterMasterTable('FREE', this)" class="master-filter-chip px-3 py-1.5 rounded-xl bg-[#0B1120] text-slate-300 border border-[#24324D] hover:border-slate-500">Free / Walk-In Ready (26)</button>
            <button onclick="filterMasterTable('RECYCLED', this)" class="master-filter-chip px-3 py-1.5 rounded-xl bg-[#0B1120] text-slate-300 border border-[#24324D] hover:border-slate-500">Recycled No-Show (2)</button>
          </div>
          <div class="relative w-full md:w-64">
            <input type="text" id="masterSearchInput" onkeyup="searchMasterTable()" placeholder="Search investor, booth, rep..." 
              class="w-full bg-[#0B1120] border border-[#24324D] text-xs rounded-xl pl-8 pr-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400">
            <span class="absolute left-2.5 top-2 text-slate-500">🔍</span>
          </div>
        </div>

        <!-- Master Table -->
        <div class="overflow-x-auto rounded-xl border border-[#24324D]">
          <table class="w-full text-left text-xs">
            <thead class="text-slate-400 bg-[#0B1120] border-b border-[#24324D] uppercase font-mono text-[10px]">
              <tr>
                <th class="p-3">Table ID</th>
                <th class="p-3">Booth / Developer</th>
                <th class="p-3">Zone</th>
                <th class="p-3">Current Occupant / Visitor</th>
                <th class="p-3">Assigned Rep</th>
                <th class="p-3">Slot Time</th>
                <th class="p-3">Status</th>
                <th class="p-3 text-right">Admin Action</th>
              </tr>
            </thead>
            <tbody id="masterTableTbody" class="divide-y divide-[#24324D] text-slate-300">
              <!-- Seed Rows from Hall 3 -->
              <tr class="hover:bg-slate-800/40" data-status="OCCUPIED">
                <td class="p-3 font-mono font-bold text-amber-400">T-02</td>
                <td class="p-3 font-semibold text-white">Palm Hills Developments (Booth B42)</td>
                <td class="p-3"><span class="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono text-[10px]">ZONE 2 (Central)</span></td>
                <td class="p-3 text-white font-medium">Mr. Alexander Wright ($2.5M Budget)</td>
                <td class="p-3 text-slate-300">Tariq Al-Mansoor</td>
                <td class="p-3 font-mono text-emerald-400">14:30 - 15:00</td>
                <td class="p-3"><span class="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold">IN SESSION</span></td>
                <td class="p-3 text-right space-x-1">
                  <button onclick="openLeadAuditModal('Mr. Alexander Wright')" class="text-amber-400 hover:underline">Audit</button>
                  <span class="text-slate-600">•</span>
                  <button onclick="openForceFreeModal('T-02', 'Palm Hills Developments (Booth B42 • T-02)')" class="text-red-400 hover:underline">Force Free</button>
                </td>
              </tr>
              <tr class="hover:bg-slate-800/40" data-status="RESERVED">
                <td class="p-3 font-mono font-bold text-amber-400">T-01</td>
                <td class="p-3 font-semibold text-white">Palm Hills Developments (Booth B42)</td>
                <td class="p-3"><span class="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono text-[10px]">ZONE 2 (Central)</span></td>
                <td class="p-3 text-white font-medium">Dr. Amina Mansouri ($4.2M Budget)</td>
                <td class="p-3 text-slate-300">Sarah Jenkins</td>
                <td class="p-3 font-mono text-amber-400">15:30 - 16:00</td>
                <td class="p-3"><span class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold">RESERVED</span></td>
                <td class="p-3 text-right space-x-1">
                  <button onclick="openLeadAuditModal('Dr. Amina Mansouri')" class="text-amber-400 hover:underline">Audit</button>
                  <span class="text-slate-600">•</span>
                  <button onclick="openForceFreeModal('T-01', 'Palm Hills Developments (Booth B42 • T-01)')" class="text-red-400 hover:underline">Cancel Slot</button>
                </td>
              </tr>
              <tr class="hover:bg-slate-800/40" data-status="OCCUPIED">
                <td class="p-3 font-mono font-bold text-purple-400">T-49</td>
                <td class="p-3 font-semibold text-white">VIP Lounge Pod 1 (Booth B67)</td>
                <td class="p-3"><span class="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono text-[10px]">VIP ZONE</span></td>
                <td class="p-3 text-white font-medium">H.E. Sheikh Sultan Al-Qasimi Group</td>
                <td class="p-3 text-purple-300">Concierge Desk (Tamer)</td>
                <td class="p-3 font-mono text-emerald-400">14:00 - 15:30</td>
                <td class="p-3"><span class="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 font-bold">VIP NEGOTIATION</span></td>
                <td class="p-3 text-right space-x-1">
                  <button onclick="openLeadAuditModal('H.E. Sheikh Sultan Al-Qasimi Group')" class="text-amber-400 hover:underline">Audit</button>
                  <span class="text-slate-600">•</span>
                  <button onclick="conciergeQuickService('Arabic Coffee & Dates')" class="text-purple-400 hover:underline">Concierge</button>
                </td>
              </tr>
              <tr class="hover:bg-slate-800/40" data-status="FREE">
                <td class="p-3 font-mono font-bold text-emerald-400">T-07</td>
                <td class="p-3 font-semibold text-white">Talaat Moustafa Group (Booth B18)</td>
                <td class="p-3"><span class="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono text-[10px]">ZONE 1 (East)</span></td>
                <td class="p-3 text-slate-400 italic">None (Walk-In Ready)</td>
                <td class="p-3 text-slate-300">TMG Specialist Desk</td>
                <td class="p-3 font-mono text-slate-400">Any Available</td>
                <td class="p-3"><span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">AVAILABLE NOW</span></td>
                <td class="p-3 text-right">
                  <button onclick="openWalkInModal('T-07', 'Talaat Moustafa (Booth B18 • T-07)')" class="text-emerald-400 hover:underline font-bold">+ Seat Walk-In</button>
                </td>
              </tr>
              <tr class="hover:bg-slate-800/40" data-status="RECYCLED">
                <td class="p-3 font-mono font-bold text-amber-400">T-04</td>
                <td class="p-3 font-semibold text-white">Palm Hills Developments (Booth B42)</td>
                <td class="p-3"><span class="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono text-[10px]">ZONE 2 (Central)</span></td>
                <td class="p-3 text-amber-300">Recycled (Visitor No-Show)</td>
                <td class="p-3 text-slate-300">Mostafa Hassan</td>
                <td class="p-3 font-mono text-slate-400">Freed at 14:15</td>
                <td class="p-3"><span class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold">RECYCLED (FREE)</span></td>
                <td class="p-3 text-right">
                  <button onclick="openWalkInModal('T-04', 'Palm Hills (Booth B42 • T-04)')" class="text-emerald-400 hover:underline font-bold">+ Seat Walk-In</button>
                </td>
              </tr>
              <tr class="hover:bg-slate-800/40" data-status="OCCUPIED">
                <td class="p-3 font-mono font-bold text-amber-400">T-18</td>
                <td class="p-3 font-semibold text-white">Ora Developers (Booth B36)</td>
                <td class="p-3"><span class="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono text-[10px]">ZONE 3 (West)</span></td>
                <td class="p-3 text-white font-medium">Robert Chen (Singapore Desk)</td>
                <td class="p-3 text-slate-300">Ora VIP Rep</td>
                <td class="p-3 font-mono text-emerald-400">14:00 - 14:45</td>
                <td class="p-3"><span class="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold">IN SESSION</span></td>
                <td class="p-3 text-right space-x-1">
                  <button onclick="openLeadAuditModal('Robert Chen (Singapore Desk)')" class="text-amber-400 hover:underline">Audit</button>
                  <span class="text-slate-600">•</span>
                  <button onclick="openForceFreeModal('T-18', 'Ora Developers (Booth B36 • T-18)')" class="text-red-400 hover:underline">Force Free</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
`;

// 4. ADMIN VIEW: VIP EXECUTIVE LOUNGE OPERATIONS (BOOTH B67)
const admViewVipLounge = `
      <!-- Admin Sub-View 3.3: VIP Executive Lounge Operations (Booth B67 & Pods 1-2) -->
      <div id="adm-view-vip-lounge" class="hidden space-y-6">
        <div class="bg-[#151F32] border border-[#24324D] rounded-2xl p-6 shadow-xl">
          <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-[#24324D]">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/40 flex items-center justify-center font-bold text-2xl">
                👑
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="text-base font-bold text-white">Central VIP Executive Lounge Operations</h3>
                  <span class="text-xs bg-purple-500/20 text-purple-300 border border-purple-500/40 px-2.5 py-0.5 rounded-full font-mono font-bold">Booth B67 • 8 × 4 m</span>
                </div>
                <p class="text-xs text-slate-400">Confidential diplomatic & institutional investor salon with dedicated hospitality concierge</p>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <button onclick="openVipAccreditModal()" class="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center gap-1.5">
                <span>+</span> Admit / Accredit VIP Guest
              </button>
            </div>
          </div>

          <!-- Real-Time Capacity Gauge -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-5">
            <div class="bg-[#0B1120] p-4 rounded-xl border border-purple-500/40 space-y-2">
              <div class="flex justify-between items-center text-xs">
                <span class="text-slate-400 font-medium">Lounge Seating Capacity</span>
                <span class="text-purple-400 font-mono font-bold">20 / 25 Seats (80%)</span>
              </div>
              <div class="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div class="bg-gradient-to-r from-purple-500 to-amber-400 h-full rounded-full" style="width: 80%"></div>
              </div>
              <span class="text-[10px] text-amber-300 block">5 seats available for high-tier delegations</span>
            </div>

            <div class="bg-[#0B1120] p-4 rounded-xl border border-[#24324D] space-y-1">
              <span class="text-slate-400 text-xs block">VIP Pod 1 (T-49)</span>
              <span class="text-base font-bold text-emerald-400 block">OCCUPIED</span>
              <p class="text-[11px] text-slate-300 truncate">H.E. Sheikh Sultan Al-Qasimi Group</p>
            </div>

            <div class="bg-[#0B1120] p-4 rounded-xl border border-[#24324D] space-y-1">
              <span class="text-slate-400 text-xs block">VIP Pod 2 (T-50)</span>
              <span class="text-base font-bold text-amber-400 block">RESERVED (15:00)</span>
              <p class="text-[11px] text-slate-300 truncate">Sovereign Wealth Fund Delegation</p>
            </div>

            <div class="bg-[#0B1120] p-4 rounded-xl border border-[#24324D] space-y-1">
              <span class="text-slate-400 text-xs block">Concierge Orders Active</span>
              <span class="text-base font-bold text-white block">3 In Progress</span>
              <p class="text-[11px] text-purple-300">Avg fulfillment: 3.5 mins</p>
            </div>
          </div>
        </div>

        <!-- Quick Concierge Actions & Active VIP Orders -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="lg:col-span-2 bg-[#151F32] border border-[#24324D] rounded-2xl p-5 shadow-xl space-y-4">
            <div class="pb-3 border-b border-[#24324D] flex justify-between items-center">
              <div>
                <h4 class="text-sm font-bold text-white">Active VIP Lounge Guests & Delegations</h4>
                <p class="text-xs text-slate-400">Live roster of HNWI investors currently seated inside Booth B67</p>
              </div>
              <span class="text-xs font-mono text-purple-400 bg-purple-500/20 px-2 py-0.5 rounded">6 Active Groups</span>
            </div>

            <div class="space-y-3">
              <div class="p-3.5 rounded-xl bg-[#0B1120] border border-purple-500/30 flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 flex items-center justify-center font-bold">
                    P1
                  </div>
                  <div>
                    <h5 class="text-xs font-bold text-white">H.E. Sheikh Sultan Al-Qasimi Delegation</h5>
                    <p class="text-[11px] text-slate-400">Meeting with Palm Hills Chairman • Negotiating Coastal Land Parcel</p>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded font-bold">SPA SIGNING</span>
                  <button onclick="conciergeQuickService('Arabic Coffee Service')" class="px-2.5 py-1 bg-[#151F32] hover:bg-slate-800 border border-[#24324D] text-slate-300 text-xs rounded-lg">
                    ☕ Order Drinks
                  </button>
                </div>
              </div>

              <div class="p-3.5 rounded-xl bg-[#0B1120] border border-[#24324D] flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center justify-center font-bold">
                    P2
                  </div>
                  <div>
                    <h5 class="text-xs font-bold text-white">Lord Sterling Investment Trust (London)</h5>
                    <p class="text-[11px] text-slate-400">Seated at Lounge Salon Table 4 • Reviewing Talaat Moustafa Portfolios</p>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-1 rounded font-bold">IN DISCUSSION</span>
                  <button onclick="conciergeQuickService('Print Legal Contract')" class="px-2.5 py-1 bg-[#151F32] hover:bg-slate-800 border border-[#24324D] text-slate-300 text-xs rounded-lg">
                    📄 Print NDA
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Concierge Service One-Click Dispatch -->
          <div class="bg-[#151F32] border border-[#24324D] rounded-2xl p-5 shadow-xl space-y-4">
            <div class="pb-3 border-b border-[#24324D]">
              <h4 class="text-sm font-bold text-white">One-Click Concierge Dispatch</h4>
              <p class="text-xs text-slate-400">Automated staff paging to Booth B67 Pods</p>
            </div>

            <div class="space-y-2 text-xs">
              <button onclick="conciergeQuickService('Artisan Espresso & Arabic Coffee')" class="w-full p-2.5 rounded-xl bg-[#0B1120] hover:bg-slate-800 border border-[#24324D] text-slate-200 text-left flex items-center justify-between transition-all">
                <span>☕ Artisan Espresso & Dates</span>
                <span class="text-[10px] text-purple-400 font-mono">→ Dispatch</span>
              </button>
              <button onclick="conciergeQuickService('French Champagne Service')" class="w-full p-2.5 rounded-xl bg-[#0B1120] hover:bg-slate-800 border border-[#24324D] text-slate-200 text-left flex items-center justify-between transition-all">
                <span>🍾 French Champagne (Deal Toast)</span>
                <span class="text-[10px] text-purple-400 font-mono">→ Dispatch</span>
              </button>
              <button onclick="conciergeQuickService('Legal Assistant & NDA Printing')" class="w-full p-2.5 rounded-xl bg-[#0B1120] hover:bg-slate-800 border border-[#24324D] text-slate-200 text-left flex items-center justify-between transition-all">
                <span>⚖️ Legal Notary & Confidential NDA</span>
                <span class="text-[10px] text-purple-400 font-mono">→ Dispatch</span>
              </button>
              <button onclick="conciergeQuickService('VIP Limousine Escort Service')" class="w-full p-2.5 rounded-xl bg-[#0B1120] hover:bg-slate-800 border border-[#24324D] text-slate-200 text-left flex items-center justify-between transition-all">
                <span>🚗 VIP Limousine Ready at Gate 3</span>
                <span class="text-[10px] text-purple-400 font-mono">→ Dispatch</span>
              </button>
            </div>
          </div>
        </div>
      </div>
`;

// Insert devViewAnalytics and devViewTeam before PORTAL 3
let devInsertIdx = html.indexOf('<!-- Dev Sub-View 2.2: Native Real Estate CRM Pipeline -->');
let devEndIdx = html.indexOf('<!-- ================================================================= -->\n    <!-- PORTAL 3: EXPO ORGANIZER');

let partBeforeDev = html.substring(0, devEndIdx);
let partAfterDev = html.substring(devEndIdx);

// Append the new developer screens right before PORTAL 3
html = partBeforeDev + devViewAnalytics + devViewTeam + '\n    ' + partAfterDev;
console.log('Developer screens inserted.');

// Insert admViewMasterMeetings and admViewVipLounge before adm-view-builder
let admBuilderIdx = html.indexOf('<!-- Admin Sub-View 3.2: Native Visual Floorplan & Booth Builder -->');
let partBeforeAdm = html.substring(0, admBuilderIdx);
let partAfterAdm = html.substring(admBuilderIdx);

html = partBeforeAdm + admViewMasterMeetings + admViewVipLounge + '\n    ' + partAfterAdm;
console.log('Admin master meetings & VIP lounge screens inserted.');

fs.writeFileSync('scratch/ui_step2.html', html);
console.log('Step 2 written successfully.');
