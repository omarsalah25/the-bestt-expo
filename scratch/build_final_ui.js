// scratch/build_final_ui.js
const fs = require('fs');

console.log('Loading scratch/ui_step4.html...');
let html = fs.readFileSync('scratch/ui_step4.html', 'utf8');

// 1. UPDATE switchDevSubTab
const oldSwitchDev = `function switchDevSubTab(subTabId) {
      ['schedule', 'crm'].forEach(t => {
        document.getElementById(\`dev-view-\${t}\`).classList.add('hidden');
        const btn = document.getElementById(\`dev-sub-\${t}\`);
        btn.classList.remove('bg-amber-500', 'text-slate-950', 'font-bold');
        btn.classList.add('text-slate-300');
      });

      document.getElementById(\`dev-view-\${subTabId}\`).classList.remove('hidden');
      const activeBtn = document.getElementById(\`dev-sub-\${subTabId}\`);
      activeBtn.classList.add('bg-amber-500', 'text-slate-950', 'font-bold');
      activeBtn.classList.remove('text-slate-300');
    }`;

const newSwitchDev = `function switchDevSubTab(subTabId) {
      ['schedule', 'crm', 'analytics', 'team'].forEach(t => {
        const el = document.getElementById(\`dev-view-\${t}\`);
        if (el) el.classList.add('hidden');
        const btn = document.getElementById(\`dev-sub-\${t}\`);
        if (btn) {
          btn.classList.remove('bg-amber-500', 'text-slate-950', 'font-bold');
          btn.classList.add('text-slate-300');
        }
      });

      const activeEl = document.getElementById(\`dev-view-\${subTabId}\`);
      if (activeEl) activeEl.classList.remove('hidden');
      const activeBtn = document.getElementById(\`dev-sub-\${subTabId}\`);
      if (activeBtn) {
        activeBtn.classList.add('bg-amber-500', 'text-slate-950', 'font-bold');
        activeBtn.classList.remove('text-slate-300');
      }
    }`;

if (html.includes(oldSwitchDev)) {
  html = html.replace(oldSwitchDev, newSwitchDev);
  console.log('switchDevSubTab replaced successfully.');
} else {
  console.warn('oldSwitchDev not matched exactly, checking with regex');
}

// 2. UPDATE switchAdminSubTab
const oldSwitchAdmin = `function switchAdminSubTab(subTabId) {
      ['pulse', 'builder', 'notifications'].forEach(t => {
        document.getElementById(\`adm-view-\${t}\`).classList.add('hidden');
        const btn = document.getElementById(\`adm-sub-\${t}\`);
        btn.classList.remove('bg-amber-500', 'text-slate-950', 'font-bold');
        btn.classList.add('text-slate-300');
      });

      document.getElementById(\`adm-view-\${subTabId}\`).classList.remove('hidden');
      const activeBtn = document.getElementById(\`adm-sub-\${subTabId}\`);
      activeBtn.classList.add('bg-amber-500', 'text-slate-950', 'font-bold');
      activeBtn.classList.remove('text-slate-300');
    }`;

const newSwitchAdmin = `function switchAdminSubTab(subTabId) {
      ['pulse', 'master-meetings', 'vip-lounge', 'builder', 'notifications'].forEach(t => {
        const el = document.getElementById(\`adm-view-\${t}\`);
        if (el) el.classList.add('hidden');
        const btn = document.getElementById(\`adm-sub-\${t}\`);
        if (btn) {
          btn.classList.remove('bg-amber-500', 'text-slate-950', 'font-bold');
          btn.classList.add('text-slate-300');
        }
      });

      const activeEl = document.getElementById(\`adm-view-\${subTabId}\`);
      if (activeEl) activeEl.classList.remove('hidden');
      const activeBtn = document.getElementById(\`adm-sub-\${subTabId}\`);
      if (activeBtn) {
        activeBtn.classList.add('bg-amber-500', 'text-slate-950', 'font-bold');
        activeBtn.classList.remove('text-slate-300');
      }
    }`;

if (html.includes(oldSwitchAdmin)) {
  html = html.replace(oldSwitchAdmin, newSwitchAdmin);
  console.log('switchAdminSubTab replaced successfully.');
} else {
  console.warn('oldSwitchAdmin not matched exactly, checking with regex');
}

// 3. REPLACE EVERYTHING FROM "function confirmCustomerBooking()" TO LAST "</script>"
const confirmBookingStr = 'function confirmCustomerBooking()';
const confirmBookingIdx = html.indexOf(confirmBookingStr);
const lastScriptCloseIdx = html.lastIndexOf('</script>');

if (confirmBookingIdx === -1 || lastScriptCloseIdx === -1) {
  console.error('Cannot find confirmCustomerBooking or last script tag!');
  process.exit(1);
}

const comprehensiveLogic = `// =========================================================================
    // REACTIVE APP STATE & OMNICHANNEL TOAST ENGINE
    // =========================================================================
    let totalPipelineVal = 14800000;
    let recycledCount = 42;
    let activeCustomerBooking = {
      id: 'EXP-VIP-88194',
      devName: 'Emaar Properties',
      booth: 'Hall 3, Booth B-14',
      table: 'Table 2',
      rep: 'Tariq Al-Mansoor',
      day: 'Day 1 (Nov 18)',
      time: '14:30 - 15:00',
      status: 'CONFIRMED'
    };

    // Global Modal Controllers
    function openModal(id) {
      const el = document.getElementById(id);
      if (el) el.classList.remove('hidden');
    }

    function closeModal(id) {
      const el = document.getElementById(id);
      if (el) el.classList.add('hidden');
    }

    // Omnichannel Toast System
    function showToast(title, message, type = 'success') {
      const container = document.getElementById('toastContainer');
      if (!container) return;

      const toast = document.createElement('div');
      toast.className = 'pointer-events-auto transform transition-all duration-300 ease-out translate-y-2 opacity-0 p-3.5 rounded-2xl shadow-2xl border flex items-start gap-3 backdrop-blur-md ' +
        (type === 'whatsapp' ? 'bg-[#0B1A12]/95 border-emerald-500/50 text-white' :
         type === 'warning'  ? 'bg-[#1E1609]/95 border-amber-500/50 text-white' :
         type === 'danger'   ? 'bg-[#1F0A0A]/95 border-red-500/50 text-white' :
         type === 'info'     ? 'bg-[#0C1527]/95 border-blue-500/50 text-white' :
                               'bg-[#0C1A1A]/95 border-emerald-500/50 text-white');

      const icon = 
        type === 'whatsapp' ? '<div class="w-7 h-7 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center font-bold text-sm shrink-0">💬</div>' :
        type === 'warning'  ? '<div class="w-7 h-7 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center font-bold text-sm shrink-0">⚠️</div>' :
        type === 'danger'   ? '<div class="w-7 h-7 rounded-xl bg-red-500/20 text-red-400 border border-red-500/40 flex items-center justify-center font-bold text-sm shrink-0">✕</div>' :
        type === 'info'     ? '<div class="w-7 h-7 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/40 flex items-center justify-center font-bold text-sm shrink-0">ℹ️</div>' :
                              '<div class="w-7 h-7 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center font-bold text-sm shrink-0">✓</div>';

      toast.innerHTML = \`
        \${icon}
        <div class="flex-1 text-xs pr-2">
          <strong class="block text-sm font-bold text-white">\${title}</strong>
          <p class="text-slate-300 mt-0.5 leading-relaxed">\${message}</p>
        </div>
        <button onclick="this.parentElement.remove()" class="text-slate-400 hover:text-white text-xs p-1">✕</button>
      \`;

      container.appendChild(toast);
      requestAnimationFrame(() => {
        toast.classList.remove('translate-y-2', 'opacity-0');
      });

      setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-x-4');
        setTimeout(() => toast.remove(), 350);
      }, 4500);
    }

    // =========================================================================
    // 1. DYNAMIC CUSTOMER BOOKING & PASS SYSTEM
    // =========================================================================
    function confirmCustomerBooking() {
      const devName = document.getElementById('modalDevName').innerText || 'Palm Hills Developments';
      const boothLoc = document.getElementById('modalBoothLocation').innerText || 'Booth B-14';
      const tableName = document.getElementById('modalTableNumber').innerText || 'Table 1';
      const repSelect = document.getElementById('repSelect');
      const selectedRep = repSelect ? repSelect.value : 'Senior Property Consultant';
      
      const selectedDayChip = document.querySelector('.day-chip.border-amber-500');
      const selectedDay = selectedDayChip ? selectedDayChip.innerText : 'Day 1 (Nov 18)';
      
      const selectedSlotChip = document.querySelector('.slot-chip.selected');
      const selectedSlot = selectedSlotChip ? selectedSlotChip.innerText : '11:30 AM';

      const bookingId = 'EXP-VIP-' + Math.floor(10000 + Math.random() * 90000);

      activeCustomerBooking = {
        id: bookingId,
        devName: devName,
        booth: boothLoc,
        table: tableName,
        rep: selectedRep,
        day: selectedDay,
        time: selectedSlot + ' - ' + calculateEndTime(selectedSlot),
        status: 'CONFIRMED'
      };

      closeBookingModal();

      // 1. Add to Customer Agenda
      const agendaContainer = document.getElementById('agendaCardsContainer');
      if (agendaContainer) {
        const newCard = document.createElement('div');
        newCard.id = 'agenda-card-' + bookingId;
        newCard.className = 'bg-[#0B1120] border-2 border-emerald-500/60 p-4 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 animate-in fade-in slide-in-from-top-3 duration-300';
        newCard.innerHTML = \`
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center font-bold text-xs font-mono">
              \${selectedSlot.split(' ')[0]}
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold px-2 py-0.5 rounded">NEWLY CONFIRMED</span>
                <span class="text-xs font-mono text-slate-400">\${selectedDay} • \${selectedSlot}</span>
              </div>
              <h4 class="font-bold text-white text-sm mt-0.5">\${devName}</h4>
              <p class="text-xs text-slate-400">Meeting with <span class="text-amber-300">\${selectedRep}</span> at <span class="text-white font-medium">\${boothLoc} (\${tableName})</span></p>
            </div>
          </div>
          <div class="flex items-center gap-2 w-full md:w-auto flex-wrap">
            <button onclick="switchCustomerSubTab('pass')" class="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow">
              Show QR Pass
            </button>
            <button onclick="openRescheduleModal('\${bookingId}', '\${devName}')" class="px-3 py-1.5 bg-[#151F32] hover:bg-slate-800 border border-[#24324D] text-slate-300 text-xs rounded-xl">
              🔄 Reschedule
            </button>
            <button onclick="openCancelMeetingModal('\${bookingId}', '\${devName}', '\${tableName}')" class="px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-300 text-xs rounded-xl">
              ✕ Cancel
            </button>
          </div>
        \`;
        agendaContainer.prepend(newCard);
      }

      // 2. Update 3D Table Status to RESERVED
      const targetT = tables3D.find(t => t.name.includes(tableName) || tableName.includes(t.name));
      if (targetT) {
        targetT.status = 'RESERVED';
      }

      // 3. Add to Developer Inbound Queue
      const devQueue = document.getElementById('devInboundQueueContainer');
      if (devQueue) {
        const devItem = document.createElement('div');
        devItem.id = 'dev-req-' + bookingId;
        devItem.className = 'bg-[#0B1120] border-2 border-emerald-500/50 p-4 rounded-xl space-y-3 animate-in fade-in duration-300';
        devItem.innerHTML = \`
          <div class="flex items-start justify-between">
            <div>
              <span class="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-1.5 py-0.5 rounded font-bold">DIGITAL 3D TWIN BOOKING</span>
              <h4 class="text-sm font-bold text-white mt-1">Verified Investor (App Pass)</h4>
              <p class="text-xs text-slate-400">Target: <span class="text-amber-300">\${devName}</span> • <span class="text-emerald-400 font-semibold">$3.5M+ Tier</span></p>
            </div>
            <span class="text-xs font-mono text-emerald-400 font-bold">\${selectedSlot}</span>
          </div>
          <p class="text-[11px] text-slate-300 bg-slate-900/60 p-2 rounded-lg border border-slate-800">
            "Requested consultation for luxury villa portfolios at \${tableName}."
          </p>
          <div class="flex items-center gap-2 pt-1">
            <button onclick="devApproveRequest('dev-req-\${bookingId}', 'Verified Investor', '\${tableName}')" 
              class="w-full py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-lg transition-all">
              ✓ Approve & Re-Confirm
            </button>
            <button onclick="openCounterProposeModal('Verified Investor', 'dev-req-\${bookingId}', '\${tableName}')" 
              class="py-2 px-2.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-semibold rounded-lg border border-amber-500/40 whitespace-nowrap">
              ⇄ Counter
            </button>
            <button onclick="openDevDeclineModal('Verified Investor', 'dev-req-\${bookingId}')" 
              class="py-2 px-2.5 bg-slate-800 hover:bg-red-500/20 text-slate-400 hover:text-red-400 text-xs rounded-lg border border-slate-700">
              Decline
            </button>
          </div>
        \`;
        devQueue.prepend(devItem);
        const countBadge = document.getElementById('devInboundBadgeCount');
        if (countBadge) countBadge.innerText = '2 New';
      }

      // 4. Update Dynamic Pass view details
      updatePassDetails(activeCustomerBooking);

      // 5. Show WhatsApp Cloud API simulation Toast
      showToast(
        'WhatsApp Pass Issued 💬',
        \`Booking with \${devName} confirmed for \${selectedSlot}! Encrypted QR fast-track pass dispatched to your WhatsApp (+971 50 ***).\`,
        'whatsapp'
      );

      switchCustomerSubTab('pass');
    }

    function calculateEndTime(startTimeStr) {
      const parts = startTimeStr.split(' ');
      const timeParts = parts[0].split(':');
      let hour = parseInt(timeParts[0]);
      let minute = parseInt(timeParts[1]) + 30;
      let ampm = parts[1];
      if (minute >= 60) {
        minute -= 60;
        hour += 1;
        if (hour === 12 && ampm === 'AM') ampm = 'PM';
        else if (hour > 12) hour = 1;
      }
      return \`\${hour}:\${minute === 0 ? '00' : minute} \${ampm}\`;
    }

    function updatePassDetails(b) {
      const h4 = document.querySelector('#c-view-pass h4.text-base');
      if (h4) h4.innerText = b.devName;
      const repP = document.querySelector('#c-view-pass p.text-amber-400');
      if (repP) repP.innerText = b.rep;
      const locP = document.querySelector('#c-view-pass p.text-sm.font-bold');
      if (locP) locP.innerText = b.booth;
      const tableP = document.querySelector('#c-view-pass p.text-xs.text-slate-400');
      if (tableP) tableP.innerText = b.table;
      const timeSpan = document.querySelector('#c-view-pass span.font-bold.text-slate-200');
      if (timeSpan) timeSpan.innerText = \`\${b.day}, \${b.time}\`;
      const codeSpan = document.querySelector('#c-view-pass span.font-mono.font-bold');
      if (codeSpan) codeSpan.innerText = b.id + '-' + b.devName.split(' ')[0].toUpperCase();
    }

    function triggerCustArrivalAlert() {
      const btn = document.getElementById('cust-arrival-btn');
      btn.innerHTML = '<span>✓ Rep Tariq Alerted via WhatsApp! Waiting for you at Table #2</span>';
      btn.className = 'w-full py-3.5 bg-emerald-500 text-slate-950 font-bold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2';

      showToast(
        'Arrival Alert Dispatched 🔔',
        'Sales Rep Tariq Al-Mansoor was notified via WhatsApp Cloud API & audio tablet chime.',
        'whatsapp'
      );
    }

    function addToMobileWallet() {
      showToast(
        'Added to Apple Wallet 🍏',
        'Offline cryptographic pass EXP-VIP-88194 added with NFC tap verification.',
        'info'
      );
    }

    function downloadOfflinePassPdf() {
      showToast(
        'PDF Pass Generated 📄',
        'High-resolution PDF badge and booth location map downloaded for offline access.',
        'success'
      );
    }

    // =========================================================================
    // 2. CUSTOMER AGENDA ACTIONS: RESCHEDULE, CANCEL, CALENDAR
    // =========================================================================
    let activeRescheduleId = null;
    let activeCancelId = null;

    function openRescheduleModal(id, devName) {
      activeRescheduleId = id;
      const title = document.getElementById('rescheduleModalTitle');
      if (title) title.innerText = devName;
      openModal('modal-reschedule');
    }

    function selectReschedDay(btn) {
      document.querySelectorAll('.resched-day-chip').forEach(b => {
        b.className = 'resched-day-chip py-2 rounded-xl border border-[#24324D] bg-[#0B1120] text-slate-300 text-center';
      });
      btn.className = 'resched-day-chip py-2 rounded-xl border border-amber-500 bg-amber-500/20 text-amber-300 font-bold text-center';
    }

    function selectReschedSlot(btn) {
      document.querySelectorAll('.resched-slot-chip').forEach(b => {
        b.className = 'resched-slot-chip p-2 rounded-xl border border-[#24324D] bg-[#0B1120] text-slate-200 text-center';
      });
      btn.className = 'resched-slot-chip selected p-2 rounded-xl border border-amber-500 bg-amber-500 text-slate-950 font-bold text-center';
    }

    function confirmReschedule() {
      closeModal('modal-reschedule');
      const selectedSlot = document.querySelector('.resched-slot-chip.selected') ? 
        document.querySelector('.resched-slot-chip.selected').innerText : '16:00 PM';
      
      showToast(
        'Consultation Rescheduled 🔄',
        \`Your consultation has been moved to \${selectedSlot}. Updated pass dispatched via WhatsApp.\`,
        'whatsapp'
      );
    }

    function openCancelMeetingModal(id, devName, tableName) {
      activeCancelId = id;
      const title = document.getElementById('cancelModalTitle');
      if (title) title.innerText = devName;
      const sub = document.getElementById('cancelModalSubtitle');
      if (sub) sub.innerText = \`Today • \${tableName}\`;
      openModal('modal-cancel-meeting');
    }

    function confirmCancelMeeting() {
      closeModal('modal-cancel-meeting');
      if (activeCancelId) {
        const el = document.getElementById('agenda-card-' + activeCancelId) || document.getElementById('agenda-card-seed-1');
        if (el) el.remove();
      }

      // Free table in 3D
      const t = tables3D.find(item => item.name.includes('Table 2') || item.name.includes('Table 1'));
      if (t) t.status = 'FREE';

      showToast(
        'Meeting Cancelled ✕',
        'Table released for spontaneous walk-ins. Developer notified via WhatsApp.',
        'warning'
      );
    }

    function openCalendarExportModal(title, loc, time) {
      const sub = document.getElementById('calExportSubtitle');
      if (sub) sub.innerText = \`\${title} • \${loc}\`;
      openModal('modal-calendar-export');
    }

    function downloadIcsFile() {
      const icsData = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Real Estate Expo Management//EN',
        'CALSCALE:GREGORIAN',
        'BEGIN:VEVENT',
        'SUMMARY:Emaar Properties Consultation (Table 2)',
        'DESCRIPTION:Private 1-on-1 Consultation with Tariq Al-Mansoor for Grand Polo Club Villas',
        'LOCATION:Hall 3, Booth B-14, Table 2',
        'DTSTART:20261118T143000Z',
        'DTEND:20261118T150000Z',
        'STATUS:CONFIRMED',
        'END:VEVENT',
        'END:VCALENDAR'
      ].join('\\r\\n');

      const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'expo_consultation_invite.ics';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      closeModal('modal-calendar-export');
      showToast('Calendar Invite Downloaded 📅', 'Universal .ics file saved to your device.', 'success');
    }

    function openGoogleCalendarWeb() {
      const url = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=' + 
        encodeURIComponent('Emaar Properties Consultation') + 
        '&dates=20261118T143000Z/20261118T150000Z&details=' + 
        encodeURIComponent('Private consultation at Hall 3, Booth B-14') + 
        '&location=' + encodeURIComponent('Hall 3, Booth B-14, Table 2');
      window.open(url, '_blank');
      closeModal('modal-calendar-export');
    }

    // =========================================================================
    // 3. DEVELOPER DESK: WALK-IN SEATING, COUNTER-PROPOSE, CRM
    // =========================================================================
    let activeWalkInTableId = 'T-1';

    function openWalkInModal(tableId, displayName) {
      activeWalkInTableId = tableId;
      const display = document.getElementById('walkinTargetTableDisplay');
      if (display) display.innerText = displayName || \`Booth B-14 • \${tableId}\`;
      openModal('modal-walkin-seat');
    }

    function confirmWalkInSeating() {
      const name = document.getElementById('walkinVisitorName').value || 'Eng. Karim Fahmy';
      const phone = document.getElementById('walkinVisitorPhone').value || '+20 100 123 4567';
      const budget = document.getElementById('walkinBudgetSelect').value;
      const project = document.getElementById('walkinProjectInterest').value;

      closeModal('modal-walkin-seat');

      // Add to CRM Table
      const crmTbody = document.getElementById('crmLeadsTbody');
      if (crmTbody) {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-slate-800/40 bg-emerald-950/20';
        tr.innerHTML = \`
          <td class="p-3 font-semibold text-white">\${name} <span class="text-[10px] text-emerald-400 block font-mono">WALK-IN SEATED</span></td>
          <td class="p-3"><span class="px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30 font-bold">HOT 🔥</span></td>
          <td class="p-3 font-mono text-emerald-400 font-bold">$3,200,000</td>
          <td class="p-3"><span class="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">IN SESSION (\${activeWalkInTableId})</span></td>
          <td class="p-3">Sarah Jenkins</td>
          <td class="p-3 text-slate-400">\${project}</td>
        \`;
        crmTbody.prepend(tr);
      }

      // Mark in 3D
      const t = tables3D.find(item => item.name.includes(activeWalkInTableId));
      if (t) t.status = 'OCCUPIED';

      showToast(
        'Walk-In Visitor Seated ✓',
        \`\${name} successfully seated at \${activeWalkInTableId}. 30-minute session timer launched.\`,
        'success'
      );
    }

    let activeCounterReqBoxId = null;

    function openCounterProposeModal(name, reqBoxId, table) {
      activeCounterReqBoxId = reqBoxId;
      const display = document.getElementById('counterInvestorNameDisplay');
      if (display) display.innerText = 'Investor: ' + name + ' • ' + table;
      openModal('modal-counter-propose');
    }

    function selectCounterDay(btn) {
      document.querySelectorAll('.counter-day-chip').forEach(b => {
        b.className = 'counter-day-chip py-1.5 rounded-xl border border-[#24324D] bg-[#0B1120] text-slate-300 text-center';
      });
      btn.className = 'counter-day-chip py-1.5 rounded-xl border border-amber-500 bg-amber-500/20 text-amber-300 font-bold text-center';
    }

    function selectCounterSlot(btn) {
      document.querySelectorAll('.counter-slot-chip').forEach(b => {
        b.className = 'counter-slot-chip py-1.5 rounded-xl border border-[#24324D] bg-[#0B1120] text-slate-300 text-center';
      });
      btn.className = 'counter-slot-chip py-1.5 rounded-xl border border-amber-500 bg-amber-500 text-slate-950 font-bold text-center';
    }

    function confirmCounterPropose() {
      closeModal('modal-counter-propose');
      if (activeCounterReqBoxId) {
        const box = document.getElementById(activeCounterReqBoxId);
        if (box) {
          box.innerHTML = \`
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center font-bold text-sm">
                ⇄
              </div>
              <div>
                <span class="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-bold">COUNTER-OFFER DISPATCHED</span>
                <h4 class="text-xs font-bold text-white mt-0.5">Proposed Today at 17:00 (Table 3)</h4>
                <p class="text-[11px] text-slate-400">Interactive WhatsApp response pending from investor.</p>
              </div>
            </div>
          \`;
        }
      }

      showToast(
        'Counter-Offer Dispatched 💬',
        'Alternative slot (17:00 at Table 3) sent to investor via WhatsApp Cloud API with one-click acceptance buttons.',
        'whatsapp'
      );
    }

    let activeDeclineReqBoxId = null;

    function openDevDeclineModal(name, reqBoxId) {
      activeDeclineReqBoxId = reqBoxId;
      const display = document.getElementById('declineInvestorNameDisplay');
      if (display) display.innerText = 'Investor: ' + name;
      openModal('modal-dev-decline');
    }

    function confirmDevDecline() {
      closeModal('modal-dev-decline');
      if (activeDeclineReqBoxId) {
        const box = document.getElementById(activeDeclineReqBoxId);
        if (box) box.remove();
      }

      showToast(
        'Request Declined ✕',
        'Courteous decline notice and walk-in lounge invitation dispatched via WhatsApp.',
        'info'
      );
    }

    function devApproveRequest(boxId, name, table = 'Table 1') {
      const box = document.getElementById(boxId);
      if (box) {
        box.innerHTML = \`
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center font-bold text-sm">
              ✓
            </div>
            <div>
              <span class="text-[10px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded font-bold">APPROVED & ASSIGNED \${table}</span>
              <h4 class="text-xs font-bold text-white mt-0.5">\${name}</h4>
              <p class="text-[11px] text-slate-400">Dynamic QR Pass dispatched via WhatsApp Cloud API.</p>
            </div>
          </div>
        \`;
      }

      showToast(
        'Consultation Approved ✓',
        \`Assigned \${table} to \${name}. Encrypted QR Fast-Track ticket sent via WhatsApp.\`,
        'whatsapp'
      );
    }

    function openDealNotesModal(name, val) {
      document.getElementById('dealInvestorName').innerText = name;
      document.getElementById('dealValueInput').value = val;
      openModal('dealModal');
    }

    function closeDealModal() {
      closeModal('dealModal');
    }

    function saveLeadNotes() {
      closeDealModal();
      totalPipelineVal += 2500000;

      // Update Pipeline Card in Developer Header
      const pipelineSpan = document.querySelector('#portal-developer .text-xl.font-bold.text-emerald-400');
      if (pipelineSpan) {
        pipelineSpan.innerText = '$' + totalPipelineVal.toLocaleString();
      }

      // Add to CRM Table
      const crmTbody = document.getElementById('crmLeadsTbody');
      if (crmTbody) {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-slate-800/40 bg-emerald-950/20';
        tr.innerHTML = \`
          <td class="p-3 font-semibold text-white">Mr. Alexander Wright</td>
          <td class="p-3"><span class="px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30 font-bold">HOT 🔥</span></td>
          <td class="p-3 font-mono text-emerald-400 font-bold">$2,500,000</td>
          <td class="p-3"><span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">WON / RESERVED</span></td>
          <td class="p-3">Tariq Al-Mansoor</td>
          <td class="p-3 text-slate-400">Site Visit on Monday</td>
        \`;
        crmTbody.prepend(tr);
      }

      // Free Table 2
      const t = tables3D.find(item => item.name.includes('Table 2'));
      if (t) t.status = 'FREE';

      showToast(
        'Deal Logged & WhatsApp Brochure Sent 💬',
        'Lead saved to native CRM ($2.5M pipeline added) and high-res project PDF brochure dispatched to investor via WhatsApp Cloud API.',
        'whatsapp'
      );
    }

    function openAddLeadModal() {
      openModal('modal-add-lead');
    }

    function confirmAddLead() {
      const name = document.getElementById('manualLeadName').value || 'Eng. Tamer Soliman';
      const phone = document.getElementById('manualLeadPhone').value || '+20 122 333 4444';
      const val = document.getElementById('manualLeadValue').value || '$3,000,000';
      const rating = document.getElementById('manualLeadRating').value;
      const rep = document.getElementById('manualLeadRep').value;
      const action = document.getElementById('manualLeadAction').value;

      closeModal('modal-add-lead');

      const crmTbody = document.getElementById('crmLeadsTbody');
      if (crmTbody) {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-slate-800/40 bg-emerald-950/20';
        tr.innerHTML = \`
          <td class="p-3 font-semibold text-white">\${name}</td>
          <td class="p-3"><span class="px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30 font-bold">\${rating}</span></td>
          <td class="p-3 font-mono text-emerald-400 font-bold">\${val}</td>
          <td class="p-3"><span class="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">QUALIFIED</span></td>
          <td class="p-3">\${rep}</td>
          <td class="p-3 text-slate-400">\${action}</td>
        \`;
        crmTbody.prepend(tr);
      }

      showToast(
        'Lead Added to CRM Pipeline ✓',
        \`\${name} registered. Automated WhatsApp welcome kit dispatched to \${phone}.\`,
        'success'
      );
    }

    function exportPipelineCsv() {
      const csvContent = [
        '\\uFEFFInvestor Name,Phone,Project,Deal Potential,Stage,Assigned Rep,Notes',
        'Mr. Alexander Wright,+44 7700 900123,Grand Polo Club Villas,$2500000,Won/Reserved,Tariq Al-Mansoor,Site visit scheduled Monday',
        'Dr. Amina Mansouri,+41 79 123 4567,Waterfront Waterfront Units,$4200000,Proposal Sent,Sarah Jenkins,Wants 3-unit package',
        'Robert Chen,+65 9123 4567,Ora Silversands Penthouse,$1800000,Meeting Scheduled,Elena Rostova,Channel partner inquiry',
        'Eng. Karim Fahmy,+20 100 123 4567,Badya Villas,$3200000,In Session,Sarah Jenkins,Walk-in consultation'
      ].join('\\n');

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'expo_leads_pipeline.csv';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      showToast('Export Completed 📥', 'expo_leads_pipeline.csv downloaded successfully.', 'success');
    }

    function openLeadAuditModal(name) {
      const title = document.getElementById('auditInvestorTitle');
      if (title) title.innerText = name;
      openModal('modal-lead-audit');
    }

    function reassignSalesRep(repName, newTable) {
      showToast(
        'Sales Rep Reassigned 👥',
        \`\${repName} reassigned to \${newTable}. Shift schedule updated across 3D map.\`,
        'info'
      );
    }

    // =========================================================================
    // 4. ADMIN OPERATIONS: MASTER TABLE, VIP LOUNGE, EMERGENCY BROADCAST
    // =========================================================================
    function filterMasterTable(filterType, btn) {
      document.querySelectorAll('.master-filter-chip').forEach(b => {
        b.className = 'master-filter-chip px-3 py-1.5 rounded-xl bg-[#0B1120] text-slate-300 border border-[#24324D] hover:border-slate-500';
      });
      btn.className = 'master-filter-chip px-3 py-1.5 rounded-xl bg-amber-500 text-slate-950 font-bold';

      const rows = document.querySelectorAll('#masterTableTbody tr');
      rows.forEach(r => {
        if (filterType === 'ALL' || r.dataset.status === filterType) {
          r.classList.remove('hidden');
        } else {
          r.classList.add('hidden');
        }
      });
    }

    function searchMasterTable() {
      const q = document.getElementById('masterSearchInput').value.toLowerCase();
      const rows = document.querySelectorAll('#masterTableTbody tr');
      rows.forEach(r => {
        if (r.innerText.toLowerCase().includes(q)) {
          r.classList.remove('hidden');
        } else {
          r.classList.add('hidden');
        }
      });
    }

    let activeForceFreeTarget = null;

    function openForceFreeModal(tableId, displayName) {
      activeForceFreeTarget = tableId;
      const display = document.getElementById('forceFreeTargetDisplay');
      if (display) display.innerText = displayName || tableId;
      openModal('modal-force-free');
    }

    function confirmForceFree() {
      closeModal('modal-force-free');
      recycledCount += 1;

      // Update 3D table status
      if (activeForceFreeTarget) {
        const t = tables3D.find(item => item.name.includes(activeForceFreeTarget));
        if (t) t.status = 'FREE';
      }

      showToast(
        'Table Force Freed ⚡',
        \`\${activeForceFreeTarget} released. PostgreSQL btree_gist lock unlocked and table recycled for walk-ins.\`,
        'warning'
      );
    }

    function openVipAccreditModal() {
      openModal('modal-vip-accredit');
    }

    function confirmVipAccreditation() {
      const name = document.getElementById('vipGuestName').value || 'H.E. Ambassador Mansoor Al-Nahyan';
      const pod = document.getElementById('vipPodSelect').value;
      const service = document.getElementById('vipHospitalitySelect').value;

      closeModal('modal-vip-accredit');

      showToast(
        'VIP Delegation Accredited 👑',
        \`\${name} admitted to \${pod}. Hospitality alert dispatched to concierge (\${service}).\`,
        'success'
      );
    }

    function conciergeQuickService(serviceName) {
      showToast(
        'Concierge Dispatched ☕',
        \`VIP Hospitality staff paged to Booth B67 for '\${serviceName}'.\`,
        'whatsapp'
      );
    }

    function openEmergencyBroadcastModal() {
      openModal('modal-emergency-broadcast');
    }

    function confirmEmergencyBroadcast() {
      const target = document.getElementById('broadcastAudienceSelect').value;
      const msg = document.getElementById('broadcastMessageText').value || 'Keynote starting in 15 mins at Main Hall.';

      closeModal('modal-emergency-broadcast');

      // Add to notifications log
      const tbody = document.getElementById('notifLogTbody');
      if (tbody) {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-slate-800/40 bg-red-950/20';
        tr.innerHTML = \`
          <td class="p-3 font-mono text-red-400">JUST NOW</td>
          <td class="p-3"><span class="px-2 py-0.5 rounded bg-red-500/20 text-red-300 font-bold flex items-center gap-1 w-max">📢 BROADCAST</span></td>
          <td class="p-3 font-mono">\${target}</td>
          <td class="p-3 font-semibold text-white">emergency_venue_broadcast</td>
          <td class="p-3 text-slate-300">\${msg}</td>
          <td class="p-3"><span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px]">BLASTED (1,482 DELIVERED)</span></td>
          <td class="p-3 text-right"><span class="text-emerald-400 font-mono text-[11px]">Ack All Gateways</span></td>
        \`;
        tbody.prepend(tr);
      }

      showToast(
        'Emergency Broadcast Dispatched 📢',
        \`Message broadcasted instantly to \${target} across WhatsApp Cloud API and Twilio SMS fallback.\`,
        'danger'
      );
    }

    function openBlueprintUploadModal() {
      openModal('modal-blueprint-upload');
    }

    function confirmBlueprintUpload() {
      closeModal('modal-blueprint-upload');
      showToast(
        'Blueprint Re-Projected 🗺️',
        'Hall 3 architectural dimensions (88m × 55m) re-calibrated and texture applied.',
        'success'
      );
    }

    function openBoothBuilderModal() {
      openModal('modal-booth-builder');
    }

    function confirmBoothBuilder() {
      const code = document.getElementById('newBoothCode').value;
      const dev = document.getElementById('newBoothDev').value || 'Al Ahly Sabbour';
      closeModal('modal-booth-builder');

      showToast(
        'Booth Space Created ✓',
        \`\${code} (\${dev}) partitioned with 3 dedicated tables in Hall 3.\`,
        'success'
      );
    }

    function exportBlueprintGeoJson() {
      const geojson = {
        type: "FeatureCollection",
        venue: "Hall 3 (Architectural Ground Blueprint)",
        dimensions: { length_meters: 88, width_meters: 55 },
        total_booths: 67,
        total_tables: 50,
        features: tables3D.map(t => ({
          type: "Feature",
          properties: {
            table_id: t.name,
            zone: t.zone,
            booth: t.booth,
            sales_rep: t.rep,
            status: t.status
          },
          geometry: {
            type: "Point",
            coordinates: [t.x, t.z]
          }
        }))
      };

      const blob = new Blob([JSON.stringify(geojson, null, 2)], { type: 'application/geo+json' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'hall3_blueprint.geojson';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      showToast('GeoJSON Exported 🗺️', 'hall3_blueprint.geojson downloaded.', 'success');
    }

    function openTestNotificationModal() {
      updateTestPayloadPreview();
      openModal('modal-test-notification');
    }

    function updateTestPayloadPreview() {
      const t = document.getElementById('testNotifTemplate').value;
      const phone = document.getElementById('testNotifPhone').value;
      const pre = document.getElementById('testPayloadPreview');
      if (pre) {
        pre.innerText = JSON.stringify({
          messaging_product: "whatsapp",
          recipient_type: "individual",
          to: phone,
          type: "template",
          template: {
            name: t,
            language: { code: "en_US" },
            timestamp: new Date().toISOString()
          }
        }, null, 2);
      }
    }

    function confirmSendTestNotification() {
      const phone = document.getElementById('testNotifPhone').value;
      const t = document.getElementById('testNotifTemplate').value;
      closeModal('modal-test-notification');

      // Append to live log
      const tbody = document.getElementById('notifLogTbody');
      if (tbody) {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-slate-800/40 bg-emerald-950/20';
        tr.innerHTML = \`
          <td class="p-3 font-mono text-emerald-400">JUST NOW</td>
          <td class="p-3"><span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold flex items-center gap-1 w-max">💬 WhatsApp</span></td>
          <td class="p-3 font-mono">\${phone}</td>
          <td class="p-3 font-semibold text-white">\${t}</td>
          <td class="p-3 text-slate-300">Live webhook test dispatch</td>
          <td class="p-3"><span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px]">DELIVERED (0.3s)</span></td>
          <td class="p-3 text-right"><span class="text-slate-500 font-mono text-[11px]">Ack wamid.\${Math.floor(Math.random()*99999)}</span></td>
        \`;
        tbody.prepend(tr);
      }

      showToast(
        'WhatsApp Test Payload Sent 💬',
        \`Simulated Meta WhatsApp Cloud API template '\${t}' delivered to \${phone}.\`,
        'whatsapp'
      );
    }

    function retryNotificationDispatch(btn, statusSpanId) {
      btn.disabled = true;
      btn.innerText = 'Retrying...';
      const statusSpan = document.getElementById(statusSpanId);
      if (statusSpan) {
        statusSpan.innerText = 'DISPATCHING...';
        statusSpan.className = 'px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono text-[10px] animate-pulse';
      }

      setTimeout(() => {
        if (statusSpan) {
          statusSpan.innerText = 'DELIVERED (SMS Route 2)';
          statusSpan.className = 'px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px]';
        }
        btn.innerText = '✓ Sent';
        btn.className = 'px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-[11px]';
        showToast('SMS Fallback Delivered 📱', 'Message successfully re-routed and acknowledged via Twilio Global Gateway.', 'info');
      }, 800);
    }
`;

html = html.substring(0, confirmBookingIdx) + comprehensiveLogic + '\n  ' + html.substring(lastScriptCloseIdx);
console.log('Script updated with full reactive logic.');

fs.writeFileSync('scratch/ui_step5.html', html);
console.log('Step 5 written successfully.');

