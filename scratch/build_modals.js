const fs = require('fs');

let html = fs.readFileSync('scratch/ui_step3.html', 'utf8');

const modalsHTML = `
  <!-- ================================================================= -->
  <!-- MODAL: DEVELOPER SEAT WALK-IN VISITOR                            -->
  <!-- ================================================================= -->
  <div id="modal-walkin-seat" class="hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-[#151F32] border border-[#24324D] rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in duration-150">
      <div class="flex items-start justify-between pb-3 border-b border-[#24324D]">
        <div>
          <span class="text-[10px] uppercase font-bold tracking-widest text-emerald-400">Walk-In Immediate Seating</span>
          <h3 class="text-base font-bold text-white mt-0.5">Seat Spontaneous Expo Visitor</h3>
          <p id="walkinTargetTableDisplay" class="text-xs text-amber-400 font-mono">Booth B-14 • Table 1</p>
        </div>
        <button onclick="closeModal('modal-walkin-seat')" class="text-slate-400 hover:text-white text-xl p-1">✕</button>
      </div>

      <div class="space-y-3 text-xs">
        <div>
          <label class="text-slate-400 block mb-1 font-medium">Visitor Full Name *</label>
          <input type="text" id="walkinVisitorName" placeholder="e.g. Eng. Karim Fahmy" class="w-full bg-[#0B1120] border border-[#24324D] rounded-xl p-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400">
        </div>

        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="text-slate-400 block mb-1 font-medium">Mobile (WhatsApp) *</label>
            <input type="text" id="walkinVisitorPhone" placeholder="+20 100 123 4567" class="w-full bg-[#0B1120] border border-[#24324D] rounded-xl p-2.5 text-white font-mono placeholder-slate-500 focus:outline-none focus:border-amber-400">
          </div>
          <div>
            <label class="text-slate-400 block mb-1 font-medium">Investment Budget</label>
            <select id="walkinBudgetSelect" class="w-full bg-[#0B1120] border border-[#24324D] rounded-xl p-2.5 text-white">
              <option>$1,000,000 - $2,500,000</option>
              <option>$2,500,000 - $5,000,000</option>
              <option selected>$5,000,000+ (Ultra HNWI)</option>
              <option>$500,000 - $1,000,000</option>
            </select>
          </div>
        </div>

        <div>
          <label class="text-slate-400 block mb-1 font-medium">Target Project / Interest</label>
          <input type="text" id="walkinProjectInterest" value="Palm Hills New Cairo / Badya Villas" class="w-full bg-[#0B1120] border border-[#24324D] rounded-xl p-2.5 text-white focus:outline-none focus:border-amber-400">
        </div>

        <div class="bg-[#0B1120] p-3 rounded-xl border border-emerald-500/40 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span class="text-slate-200 text-xs font-semibold">Immediate 30-Min Session Timer</span>
          </div>
          <span class="text-[11px] font-mono text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded">30:00 Countdown</span>
        </div>
      </div>

      <div class="pt-2 flex items-center gap-2">
        <button onclick="confirmWalkInSeating()" class="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg transition-all">
          ✓ Seat Investor & Start Consultation
        </button>
        <button onclick="closeModal('modal-walkin-seat')" class="py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-xl">
          Cancel
        </button>
      </div>
    </div>
  </div>

  <!-- ================================================================= -->
  <!-- MODAL: DEVELOPER COUNTER-PROPOSE ALTERNATIVE SLOT                 -->
  <!-- ================================================================= -->
  <div id="modal-counter-propose" class="hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-[#151F32] border border-[#24324D] rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in duration-150">
      <div class="flex items-start justify-between pb-3 border-b border-[#24324D]">
        <div>
          <span class="text-[10px] uppercase font-bold tracking-widest text-amber-400">Inbound Request Negotiation</span>
          <h3 class="text-base font-bold text-white mt-0.5">Counter-Propose Alternative Slot</h3>
          <p id="counterInvestorNameDisplay" class="text-xs text-slate-400">Investor: Dr. Amina Mansouri</p>
        </div>
        <button onclick="closeModal('modal-counter-propose')" class="text-slate-400 hover:text-white text-xl p-1">✕</button>
      </div>

      <div class="space-y-3 text-xs">
        <div class="bg-[#0B1120] p-3 rounded-xl border border-amber-500/30 text-slate-300 space-y-1">
          <span class="text-[10px] text-amber-400 font-bold uppercase tracking-wider block">Originally Requested Slot:</span>
          <p class="text-xs text-white font-semibold">Today (Day 1) at 15:30 • Table 1 (Already Busy)</p>
        </div>

        <div>
          <label class="text-slate-400 block mb-1 font-medium">Propose Alternative Day:</label>
          <div class="grid grid-cols-3 gap-2">
            <button onclick="selectCounterDay(this)" class="counter-day-chip py-1.5 rounded-xl border border-amber-500 bg-amber-500/20 text-amber-300 font-bold text-center">Day 1 (Today)</button>
            <button onclick="selectCounterDay(this)" class="counter-day-chip py-1.5 rounded-xl border border-[#24324D] bg-[#0B1120] text-slate-300 text-center">Day 2 (Tomorrow)</button>
            <button onclick="selectCounterDay(this)" class="counter-day-chip py-1.5 rounded-xl border border-[#24324D] bg-[#0B1120] text-slate-300 text-center">Day 3</button>
          </div>
        </div>

        <div>
          <label class="text-slate-400 block mb-1 font-medium">Propose Alternative Time Slot:</label>
          <div class="grid grid-cols-3 gap-2">
            <button onclick="selectCounterSlot(this)" class="counter-slot-chip py-1.5 rounded-xl border border-[#24324D] bg-[#0B1120] text-slate-300 text-center">16:30 PM</button>
            <button onclick="selectCounterSlot(this)" class="counter-slot-chip py-1.5 rounded-xl border border-amber-500 bg-amber-500 text-slate-950 font-bold text-center">17:00 PM</button>
            <button onclick="selectCounterSlot(this)" class="counter-slot-chip py-1.5 rounded-xl border border-[#24324D] bg-[#0B1120] text-slate-300 text-center">17:30 PM</button>
          </div>
        </div>

        <div>
          <label class="text-slate-400 block mb-1 font-medium">Propose Booth Table:</label>
          <select id="counterTableSelect" class="w-full bg-[#0B1120] border border-[#24324D] rounded-xl p-2.5 text-white">
            <option>Table 1 (Front Desk with Sarah)</option>
            <option selected>Table 3 (Quiet Corner with Elena)</option>
            <option>Central VIP Lounge Salon</option>
          </select>
        </div>

        <div>
          <label class="text-slate-400 block mb-1 font-medium">Personalized WhatsApp Note:</label>
          <textarea id="counterCustomNote" rows="2" class="w-full bg-[#0B1120] border border-[#24324D] rounded-xl p-2.5 text-white" placeholder="Dear Dr. Amina, our Senior Director Tariq would be delighted to host you at 17:00 at Table 3 for a private portfolio showcase."></textarea>
        </div>
      </div>

      <div class="pt-2 flex items-center gap-2">
        <button onclick="confirmCounterPropose()" class="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-1.5">
          <span>💬</span> Send Counter-Offer via WhatsApp
        </button>
        <button onclick="closeModal('modal-counter-propose')" class="py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-xl">
          Cancel
        </button>
      </div>
    </div>
  </div>

  <!-- ================================================================= -->
  <!-- MODAL: DEVELOPER DECLINE REQUEST                                  -->
  <!-- ================================================================= -->
  <div id="modal-dev-decline" class="hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-[#151F32] border border-[#24324D] rounded-3xl max-w-sm w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in duration-150">
      <div class="flex items-start justify-between pb-3 border-b border-[#24324D]">
        <div>
          <span class="text-[10px] uppercase font-bold tracking-widest text-red-400">Decline Meeting Request</span>
          <h3 class="text-base font-bold text-white mt-0.5">Polite Rejection & Redirect</h3>
          <p id="declineInvestorNameDisplay" class="text-xs text-slate-400">Investor: Dr. Amina Mansouri</p>
        </div>
        <button onclick="closeModal('modal-dev-decline')" class="text-slate-400 hover:text-white text-xl p-1">✕</button>
      </div>

      <div class="space-y-3 text-xs">
        <div>
          <label class="text-slate-400 block mb-1 font-medium">Decline Reason:</label>
          <select id="declineReasonSelect" class="w-full bg-[#0B1120] border border-[#24324D] rounded-xl p-2.5 text-white">
            <option>All booth tables fully booked during this window</option>
            <option>Requested investment tier requires specialized senior rep</option>
            <option>Recommend visiting booth spontaneously for open lounge coffee</option>
          </select>
        </div>
        <p class="text-[11px] text-slate-400">A courteous WhatsApp notification will be dispatched instantly inviting them to walk in or choose another expo day.</p>
      </div>

      <div class="pt-2 flex items-center gap-2">
        <button onclick="confirmDevDecline()" class="w-full py-2.5 bg-red-600 hover:bg-red-500 text-white font-bold text-xs rounded-xl shadow transition-all">
          Confirm & Send Notification
        </button>
        <button onclick="closeModal('modal-dev-decline')" class="py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-xl">
          Cancel
        </button>
      </div>
    </div>
  </div>

  <!-- ================================================================= -->
  <!-- MODAL: CUSTOMER CANCEL MEETING                                    -->
  <!-- ================================================================= -->
  <div id="modal-cancel-meeting" class="hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-[#151F32] border border-[#24324D] rounded-3xl max-w-sm w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in duration-150">
      <div class="flex items-start justify-between pb-3 border-b border-[#24324D]">
        <div>
          <span class="text-[10px] uppercase font-bold tracking-widest text-red-400">Cancel Consultation</span>
          <h3 id="cancelModalTitle" class="text-base font-bold text-white mt-0.5">Emaar Properties</h3>
          <p id="cancelModalSubtitle" class="text-xs text-slate-400">Today • 14:30 - 15:00 (Table 2)</p>
        </div>
        <button onclick="closeModal('modal-cancel-meeting')" class="text-slate-400 hover:text-white text-xl p-1">✕</button>
      </div>

      <div class="space-y-3 text-xs">
        <div class="bg-red-950/30 border border-red-500/30 p-3 rounded-xl text-red-200">
          <p class="text-[11px] leading-relaxed">
            ⚠️ <strong>Autonomous Table Recycler:</strong> Cancelling releases Table 2 immediately in the 3D Digital Twin and notifies sales consultant Tariq via WhatsApp.
          </p>
        </div>

        <div>
          <label class="text-slate-400 block mb-1 font-medium">Reason for Cancellation:</label>
          <select id="cancelReasonSelect" class="w-full bg-[#0B1120] border border-[#24324D] rounded-xl p-2.5 text-white">
            <option>Schedule conflict with another booth</option>
            <option>Already visited booth as walk-in earlier</option>
            <option>Changed investment focus</option>
            <option>Flight / Travel delay</option>
          </select>
        </div>
      </div>

      <div class="pt-2 flex items-center gap-2">
        <button onclick="confirmCancelMeeting()" class="w-full py-2.5 bg-red-600 hover:bg-red-500 text-white font-bold text-xs rounded-xl shadow transition-all">
          Yes, Cancel & Release Table
        </button>
        <button onclick="closeModal('modal-cancel-meeting')" class="py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-xl">
          Keep
        </button>
      </div>
    </div>
  </div>

  <!-- ================================================================= -->
  <!-- MODAL: CUSTOMER RESCHEDULE MEETING                                -->
  <!-- ================================================================= -->
  <div id="modal-reschedule" class="hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-[#151F32] border border-[#24324D] rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in duration-150">
      <div class="flex items-start justify-between pb-3 border-b border-[#24324D]">
        <div>
          <span class="text-[10px] uppercase font-bold tracking-widest text-amber-400">Reschedule Consultation</span>
          <h3 id="rescheduleModalTitle" class="text-base font-bold text-white mt-0.5">Emaar Properties</h3>
          <p class="text-xs text-slate-400">Choose a new 30-minute consultation window</p>
        </div>
        <button onclick="closeModal('modal-reschedule')" class="text-slate-400 hover:text-white text-xl p-1">✕</button>
      </div>

      <div class="space-y-3 text-xs">
        <div>
          <label class="text-slate-400 block mb-1 font-medium">Select Expo Day:</label>
          <div class="grid grid-cols-3 gap-2">
            <button onclick="selectReschedDay(this)" class="resched-day-chip py-2 rounded-xl border border-amber-500 bg-amber-500/20 text-amber-300 font-bold text-center">Day 1 (Today)</button>
            <button onclick="selectReschedDay(this)" class="resched-day-chip py-2 rounded-xl border border-[#24324D] bg-[#0B1120] text-slate-300 text-center">Day 2 (Tomorrow)</button>
            <button onclick="selectReschedDay(this)" class="resched-day-chip py-2 rounded-xl border border-[#24324D] bg-[#0B1120] text-slate-300 text-center">Day 3</button>
          </div>
        </div>

        <div>
          <label class="text-slate-400 block mb-1 font-medium">Available Time Slots:</label>
          <div class="grid grid-cols-4 gap-2">
            <button onclick="selectReschedSlot(this)" class="resched-slot-chip p-2 rounded-xl border border-[#24324D] bg-[#0B1120] text-slate-200 text-center">15:00 PM</button>
            <button onclick="selectReschedSlot(this)" class="resched-slot-chip p-2 rounded-xl border border-[#24324D] bg-[#0B1120] text-slate-200 text-center">15:30 PM</button>
            <button onclick="selectReschedSlot(this)" class="resched-slot-chip selected p-2 rounded-xl border border-amber-500 bg-amber-500 text-slate-950 font-bold text-center">16:00 PM</button>
            <button onclick="selectReschedSlot(this)" class="resched-slot-chip p-2 rounded-xl border border-[#24324D] bg-[#0B1120] text-slate-200 text-center">16:30 PM</button>
          </div>
        </div>

        <div class="bg-[#0B1120] p-3 rounded-xl border border-[#24324D] text-[11px] text-slate-300">
          📍 Table will be automatically re-locked and an updated WhatsApp pass dispatched to your mobile.
        </div>
      </div>

      <div class="pt-2 flex items-center gap-2">
        <button onclick="confirmReschedule()" class="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs rounded-xl shadow-lg transition-all">
          ✓ Confirm Rescheduled Slot
        </button>
        <button onclick="closeModal('modal-reschedule')" class="py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-xl">
          Cancel
        </button>
      </div>
    </div>
  </div>

  <!-- ================================================================= -->
  <!-- MODAL: CALENDAR EXPORT & .ICS DOWNLOAD                            -->
  <!-- ================================================================= -->
  <div id="modal-calendar-export" class="hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-[#151F32] border border-[#24324D] rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in duration-150">
      <div class="flex items-start justify-between pb-3 border-b border-[#24324D]">
        <div>
          <span class="text-[10px] uppercase font-bold tracking-widest text-amber-400">Sync with Personal Calendar</span>
          <h3 class="text-base font-bold text-white mt-0.5">Export Consultation Invite</h3>
          <p id="calExportSubtitle" class="text-xs text-slate-400">Emaar Properties • Hall 3, Booth B-14 (Table 2)</p>
        </div>
        <button onclick="closeModal('modal-calendar-export')" class="text-slate-400 hover:text-white text-xl p-1">✕</button>
      </div>

      <div class="space-y-3 text-xs">
        <p class="text-slate-300">Add this consultation to your phone or desktop calendar with automatic reminders and booth location map coordinates:</p>

        <div class="grid grid-cols-1 gap-2 pt-1">
          <button onclick="downloadIcsFile()" class="p-3 bg-[#0B1120] hover:bg-slate-800 border border-emerald-500/40 rounded-xl text-left flex items-center justify-between text-white transition-all">
            <div class="flex items-center gap-2.5">
              <span class="text-xl">📅</span>
              <div>
                <strong class="block text-emerald-400">Download Universal .ics File</strong>
                <span class="text-[10px] text-slate-400">Compatible with Apple iCal, Outlook & Android</span>
              </div>
            </div>
            <span class="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono">Download</span>
          </button>

          <button onclick="openGoogleCalendarWeb()" class="p-3 bg-[#0B1120] hover:bg-slate-800 border border-[#24324D] rounded-xl text-left flex items-center justify-between text-slate-200 transition-all">
            <div class="flex items-center gap-2.5">
              <span class="text-xl">🌐</span>
              <div>
                <strong class="block text-white">Add directly to Google Calendar (Web)</strong>
                <span class="text-[10px] text-slate-400">Opens pre-filled Google Calendar event in new tab</span>
              </div>
            </div>
            <span class="text-xs text-slate-400 font-mono">Open →</span>
          </button>
        </div>
      </div>

      <div class="pt-2 flex justify-end">
        <button onclick="closeModal('modal-calendar-export')" class="py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-xl">
          Done
        </button>
      </div>
    </div>
  </div>

  <!-- ================================================================= -->
  <!-- MODAL: DEVELOPER ADD MANUAL OFFLINE LEAD                          -->
  <!-- ================================================================= -->
  <div id="modal-add-lead" class="hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-[#151F32] border border-[#24324D] rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in duration-150">
      <div class="flex items-start justify-between pb-3 border-b border-[#24324D]">
        <div>
          <span class="text-[10px] uppercase font-bold tracking-widest text-emerald-400">Native CRM Pipeline</span>
          <h3 class="text-base font-bold text-white mt-0.5">Register Offline Walk-In Lead</h3>
          <p class="text-xs text-slate-400">Save walk-in prospect and trigger WhatsApp brochure</p>
        </div>
        <button onclick="closeModal('modal-add-lead')" class="text-slate-400 hover:text-white text-xl p-1">✕</button>
      </div>

      <div class="space-y-3 text-xs">
        <div>
          <label class="text-slate-400 block mb-1 font-medium">Investor Full Name *</label>
          <input type="text" id="manualLeadName" placeholder="e.g. Nasser Al-Kuwari" class="w-full bg-[#0B1120] border border-[#24324D] rounded-xl p-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400">
        </div>

        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="text-slate-400 block mb-1 font-medium">Mobile (WhatsApp) *</label>
            <input type="text" id="manualLeadPhone" placeholder="+974 55 123 456" class="w-full bg-[#0B1120] border border-[#24324D] rounded-xl p-2.5 text-white font-mono placeholder-slate-500">
          </div>
          <div>
            <label class="text-slate-400 block mb-1 font-medium">Deal Potential ($)</label>
            <input type="text" id="manualLeadValue" value="$3,500,000" class="w-full bg-[#0B1120] border border-[#24324D] rounded-xl p-2.5 text-white font-mono">
          </div>
        </div>

        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="text-slate-400 block mb-1 font-medium">Lead Rating:</label>
            <select id="manualLeadRating" class="w-full bg-[#0B1120] border border-[#24324D] rounded-xl p-2.5 text-white">
              <option>HOT 🔥</option>
              <option>WARM ☀️</option>
              <option>QUALIFIED</option>
            </select>
          </div>
          <div>
            <label class="text-slate-400 block mb-1 font-medium">Assigned Rep:</label>
            <select id="manualLeadRep" class="w-full bg-[#0B1120] border border-[#24324D] rounded-xl p-2.5 text-white">
              <option>Tariq Al-Mansoor</option>
              <option>Sarah Jenkins</option>
              <option>Elena Rostova</option>
            </select>
          </div>
        </div>

        <div>
          <label class="text-slate-400 block mb-1 font-medium">Next Action:</label>
          <input type="text" id="manualLeadAction" value="Schedule Site Visit on Monday" class="w-full bg-[#0B1120] border border-[#24324D] rounded-xl p-2.5 text-white">
        </div>
      </div>

      <div class="pt-2 flex items-center gap-2">
        <button onclick="confirmAddLead()" class="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg transition-all">
          ✓ Add to CRM & Send WhatsApp Welcome
        </button>
        <button onclick="closeModal('modal-add-lead')" class="py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-xl">
          Cancel
        </button>
      </div>
    </div>
  </div>

  <!-- ================================================================= -->
  <!-- MODAL: LEAD & SESSION AUDIT TIMELINE                              -->
  <!-- ================================================================= -->
  <div id="modal-lead-audit" class="hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-[#151F32] border border-[#24324D] rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in duration-150">
      <div class="flex items-start justify-between pb-3 border-b border-[#24324D]">
        <div>
          <span class="text-[10px] uppercase font-bold tracking-widest text-amber-400">Autonomous Event Ledger</span>
          <h3 id="auditInvestorTitle" class="text-base font-bold text-white mt-0.5">Mr. Alexander Wright</h3>
          <p class="text-xs text-slate-400">Complete timestamped audit trail of consultation</p>
        </div>
        <button onclick="closeModal('modal-lead-audit')" class="text-slate-400 hover:text-white text-xl p-1">✕</button>
      </div>

      <div class="space-y-3 text-xs">
        <div class="relative pl-6 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#24324D]">
          <div class="relative">
            <span class="absolute -left-6 top-0.5 w-4 h-4 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-bold flex items-center justify-center">✓</span>
            <div class="text-slate-300">
              <span class="font-mono text-emerald-400 text-[11px] font-bold">10:15 AM</span> • <strong class="text-white">Booking Confirmed via 3D Digital Twin</strong>
              <p class="text-slate-400 text-[11px]">Selected Hall 3, Booth B-14, Table 2 with Rep Tariq Al-Mansoor.</p>
            </div>
          </div>

          <div class="relative">
            <span class="absolute -left-6 top-0.5 w-4 h-4 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-bold flex items-center justify-center">✓</span>
            <div class="text-slate-300">
              <span class="font-mono text-emerald-400 text-[11px] font-bold">10:16 AM</span> • <strong class="text-white">WhatsApp Pass Delivered</strong>
              <p class="text-slate-400 text-[11px]">Encrypted QR Fast-Track ticket dispatched via Meta Cloud API.</p>
            </div>
          </div>

          <div class="relative">
            <span class="absolute -left-6 top-0.5 w-4 h-4 rounded-full bg-blue-500 text-slate-950 text-[10px] font-bold flex items-center justify-center">●</span>
            <div class="text-slate-300">
              <span class="font-mono text-blue-400 text-[11px] font-bold">14:26 PM</span> • <strong class="text-white">Attendee Arrival Triggered</strong>
              <p class="text-slate-400 text-[11px]">Customer tapped 'I Have Arrived'. Rep Tariq alerted with booth chime.</p>
            </div>
          </div>

          <div class="relative">
            <span class="absolute -left-6 top-0.5 w-4 h-4 rounded-full bg-blue-500 text-slate-950 text-[10px] font-bold flex items-center justify-center">●</span>
            <div class="text-slate-300">
              <span class="font-mono text-blue-400 text-[11px] font-bold">14:30 PM</span> • <strong class="text-white">Session Commenced at Table 2</strong>
              <p class="text-slate-400 text-[11px]">Table status flipped to OCCUPIED. 30-minute session active.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-2 flex justify-end">
        <button onclick="closeModal('modal-lead-audit')" class="py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-xl">
          Close Audit
        </button>
      </div>
    </div>
  </div>

  <!-- ================================================================= -->
  <!-- MODAL: ADMIN FORCE FREE ABANDONED TABLE                           -->
  <!-- ================================================================= -->
  <div id="modal-force-free" class="hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-[#151F32] border border-[#24324D] rounded-3xl max-w-sm w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in duration-150">
      <div class="flex items-start justify-between pb-3 border-b border-[#24324D]">
        <div>
          <span class="text-[10px] uppercase font-bold tracking-widest text-red-400">Super Admin Manual Override</span>
          <h3 class="text-base font-bold text-white mt-0.5">Force Free Table</h3>
          <p id="forceFreeTargetDisplay" class="text-xs text-amber-400 font-mono">Booth B28 • Table 14</p>
        </div>
        <button onclick="closeModal('modal-force-free')" class="text-slate-400 hover:text-white text-xl p-1">✕</button>
      </div>

      <div class="space-y-3 text-xs">
        <p class="text-slate-300">This action will immediately unlock the PostgreSQL <code class="text-amber-400">btree_gist</code> reservation constraint, release the Redis lock, and recycle this table to <strong>FREE</strong> for walk-ins.</p>

        <div>
          <label class="text-slate-400 block mb-1 font-medium">Override Justification:</label>
          <select id="forceFreeReasonSelect" class="w-full bg-[#0B1120] border border-[#24324D] rounded-xl p-2.5 text-white">
            <option>15-minute no-show grace period exceeded</option>
            <option>Session concluded without rep signoff</option>
            <option>Emergency table reallocation for VIP delegation</option>
          </select>
        </div>
      </div>

      <div class="pt-2 flex items-center gap-2">
        <button onclick="confirmForceFree()" class="w-full py-2.5 bg-red-600 hover:bg-red-500 text-white font-bold text-xs rounded-xl shadow transition-all">
          ⚡ Force Free & Recycle Table
        </button>
        <button onclick="closeModal('modal-force-free')" class="py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-xl">
          Cancel
        </button>
      </div>
    </div>
  </div>

  <!-- ================================================================= -->
  <!-- MODAL: ADMIN ADMIT / ACCREDIT VIP GUEST                           -->
  <!-- ================================================================= -->
  <div id="modal-vip-accredit" class="hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-[#151F32] border border-[#24324D] rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in duration-150">
      <div class="flex items-start justify-between pb-3 border-b border-[#24324D]">
        <div>
          <span class="text-[10px] uppercase font-bold tracking-widest text-purple-400">VIP Operations Console</span>
          <h3 class="text-base font-bold text-white mt-0.5">Admit & Accredit VIP Delegation</h3>
          <p class="text-xs text-slate-400">Assign private Pod in Booth B67 and dispatch concierge</p>
        </div>
        <button onclick="closeModal('modal-vip-accredit')" class="text-slate-400 hover:text-white text-xl p-1">✕</button>
      </div>

      <div class="space-y-3 text-xs">
        <div>
          <label class="text-slate-400 block mb-1 font-medium">VIP Principal / Group Name *</label>
          <input type="text" id="vipGuestName" placeholder="e.g. H.E. Ambassador Mansoor Al-Nahyan" class="w-full bg-[#0B1120] border border-[#24324D] rounded-xl p-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-purple-400">
        </div>

        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="text-slate-400 block mb-1 font-medium">Accreditation Tier:</label>
            <select id="vipTierSelect" class="w-full bg-[#0B1120] border border-[#24324D] rounded-xl p-2.5 text-white">
              <option>Tier 1 Ultra HNWI ($10M+)</option>
              <option>Sovereign Wealth Delegation</option>
              <option>Royal Protocol Representative</option>
            </select>
          </div>
          <div>
            <label class="text-slate-400 block mb-1 font-medium">Assign Lounge Pod:</label>
            <select id="vipPodSelect" class="w-full bg-[#0B1120] border border-[#24324D] rounded-xl p-2.5 text-white">
              <option>Pod 1 (Executive Boardroom Table T49)</option>
              <option selected>Pod 2 (Confidential Deal Salon Table T50)</option>
              <option>Central VIP Lounge Open Salon</option>
            </select>
          </div>
        </div>

        <div>
          <label class="text-slate-400 block mb-1 font-medium">Hospitality Preference:</label>
          <select id="vipHospitalitySelect" class="w-full bg-[#0B1120] border border-[#24324D] rounded-xl p-2.5 text-white">
            <option>Arabic Coffee, Medjool Dates & Still Water</option>
            <option>Artisan Espresso & Mineral Water</option>
            <option>French Champagne & Caviar Service</option>
            <option>Legal Contract Notary & Private Assistant</option>
          </select>
        </div>
      </div>

      <div class="pt-2 flex items-center gap-2">
        <button onclick="confirmVipAccreditation()" class="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all">
          👑 Admit VIP & Page Concierge Desk
        </button>
        <button onclick="closeModal('modal-vip-accredit')" class="py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-xl">
          Cancel
        </button>
      </div>
    </div>
  </div>

  <!-- ================================================================= -->
  <!-- MODAL: ADMIN EMERGENCY OMNICHANNEL BROADCAST                      -->
  <!-- ================================================================= -->
  <div id="modal-emergency-broadcast" class="hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-[#151F32] border border-[#24324D] rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in duration-150">
      <div class="flex items-start justify-between pb-3 border-b border-[#24324D]">
        <div>
          <span class="text-[10px] uppercase font-bold tracking-widest text-red-400">High-Priority Venue Alert</span>
          <h3 class="text-base font-bold text-white mt-0.5">Omnichannel Emergency Broadcast</h3>
          <p class="text-xs text-slate-400">Blast urgent notification across WhatsApp, Twilio SMS & Rep Chimes</p>
        </div>
        <button onclick="closeModal('modal-emergency-broadcast')" class="text-slate-400 hover:text-white text-xl p-1">✕</button>
      </div>

      <div class="space-y-3 text-xs">
        <div>
          <label class="text-slate-400 block mb-1 font-medium">Broadcast Audience Target:</label>
          <select id="broadcastAudienceSelect" class="w-full bg-[#0B1120] border border-[#24324D] rounded-xl p-2.5 text-white">
            <option>All 1,482 Active Visitors & Investors</option>
            <option>All 67 Exhibitor Booth Sales Teams (480 Reps)</option>
            <option selected>Entire Hall 3 Venue (Attendees + Exhibitors)</option>
            <option>VIP Lounge B67 Guests Only</option>
          </select>
        </div>

        <div>
          <label class="text-slate-400 block mb-1 font-medium">Broadcast Channel Stack:</label>
          <div class="grid grid-cols-3 gap-2">
            <span class="p-2 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-center font-bold">💬 WhatsApp Cloud</span>
            <span class="p-2 rounded-xl bg-blue-500/20 text-blue-300 border border-blue-500/40 text-center font-bold">📱 Twilio SMS</span>
            <span class="p-2 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/40 text-center font-bold">🔔 Tablet Chimes</span>
          </div>
        </div>

        <div>
          <label class="text-slate-400 block mb-1 font-medium">Broadcast Message Text:</label>
          <textarea id="broadcastMessageText" rows="3" class="w-full bg-[#0B1120] border border-[#24324D] rounded-xl p-2.5 text-white" placeholder="ATTENTION: Ministerial Keynote address begins in 15 minutes at Main Auditorium. All booth sessions remain active."></textarea>
        </div>
      </div>

      <div class="pt-2 flex items-center gap-2">
        <button onclick="confirmEmergencyBroadcast()" class="w-full py-3 bg-red-600 hover:bg-red-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-1.5">
          <span>📢</span> Blast Broadcast Instantly
        </button>
        <button onclick="closeModal('modal-emergency-broadcast')" class="py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-xl">
          Cancel
        </button>
      </div>
    </div>
  </div>

  <!-- ================================================================= -->
  <!-- MODAL: ADMIN BLUEPRINT UPLOAD                                     -->
  <!-- ================================================================= -->
  <div id="modal-blueprint-upload" class="hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-[#151F32] border border-[#24324D] rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in duration-150">
      <div class="flex items-start justify-between pb-3 border-b border-[#24324D]">
        <div>
          <span class="text-[10px] uppercase font-bold tracking-widest text-amber-400">Architectural Twin Calibration</span>
          <h3 class="text-base font-bold text-white mt-0.5">Upload CAD / SVG Blueprint</h3>
          <p class="text-xs text-slate-400">Re-project high-resolution ground blueprint into 3D twin</p>
        </div>
        <button onclick="closeModal('modal-blueprint-upload')" class="text-slate-400 hover:text-white text-xl p-1">✕</button>
      </div>

      <div class="space-y-3 text-xs">
        <div class="border-2 border-dashed border-[#24324D] hover:border-amber-400 p-6 rounded-2xl text-center space-y-2 cursor-pointer transition-all bg-[#0B1120]">
          <span class="text-3xl block">📁</span>
          <strong class="text-white block">Drop CAD DXF, SVG, or Architectural JPEG</strong>
          <span class="text-[11px] text-slate-400 block">Current Hall 3 blueprint loaded: 88m × 55m (67 Booths B1-B67)</span>
        </div>

        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="text-slate-400 block mb-1 font-medium">Hall Length (X):</label>
            <input type="text" value="88.0 Meters" class="w-full bg-[#0B1120] border border-[#24324D] rounded-xl p-2 text-white font-mono" readonly>
          </div>
          <div>
            <label class="text-slate-400 block mb-1 font-medium">Hall Width (Z):</label>
            <input type="text" value="55.0 Meters" class="w-full bg-[#0B1120] border border-[#24324D] rounded-xl p-2 text-white font-mono" readonly>
          </div>
        </div>
      </div>

      <div class="pt-2 flex items-center gap-2">
        <button onclick="confirmBlueprintUpload()" class="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow transition-all">
          ✓ Apply Blueprint to 3D Canvas
        </button>
        <button onclick="closeModal('modal-blueprint-upload')" class="py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-xl">
          Cancel
        </button>
      </div>
    </div>
  </div>

  <!-- ================================================================= -->
  <!-- MODAL: ADMIN BOOTH BUILDER                                        -->
  <!-- ================================================================= -->
  <div id="modal-booth-builder" class="hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-[#151F32] border border-[#24324D] rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in duration-150">
      <div class="flex items-start justify-between pb-3 border-b border-[#24324D]">
        <div>
          <span class="text-[10px] uppercase font-bold tracking-widest text-amber-400">Interactive Venue Editor</span>
          <h3 class="text-base font-bold text-white mt-0.5">Partition New Booth Space</h3>
          <p class="text-xs text-slate-400">Add a new booth and assign meeting tables in Hall 3</p>
        </div>
        <button onclick="closeModal('modal-booth-builder')" class="text-slate-400 hover:text-white text-xl p-1">✕</button>
      </div>

      <div class="space-y-3 text-xs">
        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="text-slate-400 block mb-1 font-medium">Booth Identifier:</label>
            <input type="text" id="newBoothCode" value="Booth B-68" class="w-full bg-[#0B1120] border border-[#24324D] rounded-xl p-2 text-white font-mono">
          </div>
          <div>
            <label class="text-slate-400 block mb-1 font-medium">Hall Zone:</label>
            <select id="newBoothZone" class="w-full bg-[#0B1120] border border-[#24324D] rounded-xl p-2 text-white">
              <option>Zone 1 (East Wing)</option>
              <option selected>Zone 2 (Central Strip)</option>
              <option>Zone 3 (West Wing)</option>
              <option>Zone 4 (North Wing)</option>
            </select>
          </div>
        </div>

        <div>
          <label class="text-slate-400 block mb-1 font-medium">Developer / Exhibitor Brand:</label>
          <input type="text" id="newBoothDev" placeholder="e.g. Al Ahly Sabbour Developments" class="w-full bg-[#0B1120] border border-[#24324D] rounded-xl p-2 text-white">
        </div>

        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="text-slate-400 block mb-1 font-medium">Dimensions (W × D):</label>
            <input type="text" id="newBoothDims" value="8m × 6m (48 SQM)" class="w-full bg-[#0B1120] border border-[#24324D] rounded-xl p-2 text-white font-mono">
          </div>
          <div>
            <label class="text-slate-400 block mb-1 font-medium">Meeting Tables Count:</label>
            <select id="newBoothTablesCount" class="w-full bg-[#0B1120] border border-[#24324D] rounded-xl p-2 text-white">
              <option>2 Tables</option>
              <option selected>3 Tables</option>
              <option>4 Tables</option>
            </select>
          </div>
        </div>
      </div>

      <div class="pt-2 flex items-center gap-2">
        <button onclick="confirmBoothBuilder()" class="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow transition-all">
          ✓ Save Space & Generate 3D Tables
        </button>
        <button onclick="closeModal('modal-booth-builder')" class="py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-xl">
          Cancel
        </button>
      </div>
    </div>
  </div>

  <!-- ================================================================= -->
  <!-- MODAL: ADMIN SEND TEST NOTIFICATION PAYLOAD                       -->
  <!-- ================================================================= -->
  <div id="modal-test-notification" class="hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-[#151F32] border border-[#24324D] rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in duration-150">
      <div class="flex items-start justify-between pb-3 border-b border-[#24324D]">
        <div>
          <span class="text-[10px] uppercase font-bold tracking-widest text-emerald-400">Omnichannel Notification Gateway</span>
          <h3 class="text-base font-bold text-white mt-0.5">Send Test WhatsApp Notification</h3>
          <p class="text-xs text-slate-400">Trigger live simulated Meta Cloud API webhook</p>
        </div>
        <button onclick="closeModal('modal-test-notification')" class="text-slate-400 hover:text-white text-xl p-1">✕</button>
      </div>

      <div class="space-y-3 text-xs">
        <div>
          <label class="text-slate-400 block mb-1 font-medium">Recipient Mobile Number *</label>
          <input type="text" id="testNotifPhone" value="+971 50 123 4567" class="w-full bg-[#0B1120] border border-[#24324D] rounded-xl p-2.5 text-white font-mono">
        </div>

        <div>
          <label class="text-slate-400 block mb-1 font-medium">Notification Template Event:</label>
          <select id="testNotifTemplate" onchange="updateTestPayloadPreview()" class="w-full bg-[#0B1120] border border-[#24324D] rounded-xl p-2.5 text-white">
            <option value="booking_confirmed">Booking Confirmed & QR Pass (Template 1)</option>
            <option value="attendee_arrived">Attendee Arrived at Table (Template 2)</option>
            <option value="no_show_warning">10-Minute No-Show Grace Warning (Template 3)</option>
            <option value="table_recycled">Table Recycled for Walk-In (Template 4)</option>
            <option value="deal_brochure">Post-Meeting Project Brochure PDF (Template 5)</option>
          </select>
        </div>

        <div>
          <label class="text-slate-400 block mb-1 font-medium">JSON Payload Preview (Meta WhatsApp API):</label>
          <pre id="testPayloadPreview" class="w-full bg-[#0B1120] border border-[#24324D] rounded-xl p-3 text-[10px] text-emerald-400 font-mono overflow-x-auto leading-relaxed">
{
  "messaging_product": "whatsapp",
  "to": "+971501234567",
  "type": "template",
  "template": {
    "name": "booking_confirmed",
    "language": { "code": "en_US" },
    "components": [
      {
        "type": "header",
        "parameters": [{ "type": "image", "image": { "link": "https://cdn.expo.com/qr/88194.png" } }]
      }
    ]
  }
}
          </pre>
        </div>
      </div>

      <div class="pt-2 flex items-center gap-2">
        <button onclick="confirmSendTestNotification()" class="w-full py-3 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-slate-950 font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-1.5">
          <span>💬</span> Dispatch Test Webhook
        </button>
        <button onclick="closeModal('modal-test-notification')" class="py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-xl">
          Cancel
        </button>
      </div>
    </div>
  </div>

  <!-- ================================================================= -->
  <!-- FLOATING TOAST NOTIFICATION STACK                                 -->
  <!-- ================================================================= -->
  <div id="toastContainer" class="fixed top-5 right-5 z-[9999] flex flex-col gap-2.5 pointer-events-none max-w-sm w-full"></div>
`;

// Insert modalsHTML right after dealModal
const dealModalCloseIdx = html.indexOf('</div>\n  </div>\n\n  <!-- Master JavaScript');
if (dealModalCloseIdx === -1) {
  console.error('dealModalCloseIdx not found!');
  process.exit(1);
}

// Find exact insertion point right before "  <!-- Master JavaScript"
const scriptCommentIdx = html.indexOf('  <!-- Master JavaScript & Pure Interactive 3D Canvas Engine -->');
if (scriptCommentIdx === -1) {
  console.error('scriptCommentIdx not found!');
  process.exit(1);
}

html = html.substring(0, scriptCommentIdx) + modalsHTML + '\n' + html.substring(scriptCommentIdx);
console.log('All 14 modals and toast container inserted.');

fs.writeFileSync('scratch/ui_step4.html', html);
console.log('Step 4 written successfully.');

