# Autonomous Real Estate Expo & Meeting Management Platform
## End-to-End System Lifecycle & Architectural Blueprint
*A 100% Self-Contained Operating System: 3D Spatial Digital Twin, Scheduling Engine, Native CRM & Omnichannel Notifications*

---

## 1. Executive Overview & Lifecycle Synergy

To achieve the maximum return on investment (ROI) for property developers and deliver an effortless, luxury experience for high-net-worth investors, the system operates as an **integrated continuous lifecycle**.

Every subsystem connects without dead ends:
1. **The 3D Digital Twin & Floorplan Engine** renders an interactive 3D isometric representation of exhibition halls and booth tables in Three.js/WebGL, feeding spatial coordinates into the **Slot Booking Engine**.
2. **The Slot Engine** feeds confirmed sessions into the **Dynamic QR Check-In Engine**.
3. **The Check-In Engine** triggers immediate arrival chimes via the **Notification Gateway**.
4. **The Concluded Meeting** instantly feeds into the **Native CRM Lead Pipeline** and triggers automatic brochure delivery to the investor's WhatsApp.
5. **No-Shows & Cancellations** automatically recycle idle tables into the **Live Walk-In Pool** so developers never waste a single minute of booth floor time.

```mermaid
flowchart TD
    subgraph Phase 1: Pre-Expo Venue Setup & 3D Twin
        A1["Admin: Visual Hall & Booth Builder"] --> A2["Admin: Generate 3D Digital Twin (Three.js)"]
        A2 --> A3["Partition Booths into Interactive 3D Tables 1-4"]
        A3 --> A4["Developer: Assign Sales Reps & Working Hours"]
    end

    subgraph Phase 2: Discovery & 3D Table Booking
        B1["Investor: Set Budget & Asset Preference"] --> B2["Match Engine: Ranks Developers & Projects"]
        B2 --> B3["Investor: Explores Booth in 3D & Selects Specific Table"]
    end

    subgraph Phase 3: Collision-Free Scheduling
        B3 --> C1["Redis Lock: Prevent Table/Rep Double-Booking"]
        C1 --> C2{"Developer Action"}
        C2 -->|Approve| C3["Status: APPROVED<br/>Dispatch Dynamic QR Pass"]
        C2 -->|Counter-Offer| C4["Propose Alternate Time Slot"]
        C2 -->|Unreviewed > 4 hrs| C5["Auto-Expire & Release Slot"]
    end

    subgraph Phase 4: On-Site Execution & Arrival
        C3 --> D1["Investor Taps 'I Have Arrived' or Scans at Table"]
        D1 --> D2["Notification Gateway: Instant WhatsApp & Audio Chime to Rep"]
        D1 --> D3["Status: CHECKED_IN<br/>3D Table Mesh Flips to Sapphire Blue"]
        C3 -->|No Scan > 15 mins| D4["Status: NO_SHOW<br/>3D Table Recycled to Walk-In Pool"]
    end

    subgraph Phase 5: Post-Meeting CRM & Collateral Delivery
        D3 --> E1["Rep: 1-Tap Lead Rating (Hot/Warm/Cold) & Deal Size ($)"]
        E1 --> E2["System: Auto-Send Project Brochure via WhatsApp"]
        E1 --> E3["Native CRM: Update Pipeline (Stage: Proposal/SPA)"]
        E1 --> E4["Organizer: Real-Time Aggregate Pipeline Metric ($)"]
    end

    Phase 1 --> Phase 2
    Phase 2 --> Phase 3
    Phase 3 --> Phase 4
    Phase 4 --> Phase 5
```

---

## 2. 3D Spatial Digital Twin & Table Visualizer Subsystem

### 2.1 The Need for 3D in Real Estate Exhibitions
Standard 2D flat floorplans fail to convey the scale, luxury ambiance, and physical privacy of high-end developer pavilions. The **3D Spatial Digital Twin** brings booth architecture to life in the browser using **WebGL / Three.js**:
* **Spatial Familiarity**: Attendees can visually recognize developer booths (branding pylons, scale model podiums, glass meeting pods) before arriving at the venue.
* **Granular Table Booking**: Instead of booking an abstract slot, investors can select their exact physical setting—such as **Table 1 (Window View)**, **Table 3 (Near Scale Model)**, or **VIP Lounge Pod A (Acoustic Glass Isolated)**.
* **Live Status Holograms**: Floating 3D status indicators render real-time table occupancy in colors:
  * 🟢 **Emerald Green**: Available for instant booking / walk-in.
  * 🔵 **Sapphire Blue**: Session in progress (with remaining time countdown).
  * 🟡 **Champagne Gold**: Reserved for upcoming appointment.
  * 🟣 **Royal Purple**: Private VIP Executive Pod.

```mermaid
flowchart LR
    subgraph Three.js 3D Visualizer Architecture
        Mesh["3D Low-Poly Venue Meshes<br/>(Booths, Glass Pods, Furniture)"]
        Socket["WebSocket State Sync<br/>(Occupancy & Check-In Events)"]
        Raycaster["GPU Raycaster<br/>(Click & Hover Mesh Detection)"]
        CamCtrl["Orbit Camera Controller<br/>(360° Drag, Pan, Smooth Pinch-Zoom)"]
    end

    Mesh --> Scene["Three.js Scene Graph"]
    Socket -->|Dynamic Color & Pulsing Rings| Scene
    Scene --> Raycaster
    CamCtrl --> Scene
    Raycaster -->|Click Table 2| Drawer["Open Slot Booking Modal for Table 2"]
```

### 2.2 Technical Implementation & Performance Standards
* **Lightweight Low-Poly Architecture**:
  - The venue is modeled using procedural parametric geometry and glTF/GLB models optimized to `< 2.5 MB` total payload.
  - Draw-call batching using `InstancedMesh` for tables, chairs, and booth partitions to guarantee a constant **60 FPS** on mobile devices and tablets.
* **Orbit & Touch Navigation**:
  - Touch-optimized OrbitControls: Single-finger swipe rotates the camera in 360° 3D space; two-finger pinch zooms in/out; two-finger drag pans across halls.
  - **Cinematic Camera Presets**: One-click quick views: `[Overview 45°]`, `[Top-Down Floorplan]`, `[Booth B-14 Focus]`, `[VIP Lounge Fly-Through]`.
* **Adaptive Level of Detail (LOD) & 2D Fallback**:
  - If WebGL hardware acceleration is unavailable or low frame-rates are detected on legacy devices, the engine smoothly falls back to an interactive 2D vector SVG representation.

---

## 3. Deep Lifecycle Review: Closing Every Operational Loop

### 3.1 Pre-Expo Configuration (Zero-Friction Venue Setup)
* **Visual Vector & 3D Blueprinting**:
  - The Organizer uploads the raw CAD/SVG venue plan for Hall 1, Hall 2, etc.
  - The engine automatically extrudes 2D booth polygons into 3D walls, glass dividers, and floor elevation podiums.
* **Granular Table Partitioning**:
  - Rather than treating a booth as a single black box, the system models physical capacity down to individual tables (e.g., *Booth B-14 has Table 1, Table 2, Table 3, Table 4*).
  - This unlocks **parallel booking capacity**: 4 sales agents can host 4 independent investor consultations simultaneously within the same booth.
* **Specialist Skill & Language Tagging**:
  - Each sales agent is tagged by languages (*English, Arabic, Russian, Mandarin*) and specialties (*Luxury Villas, Commercial REITs, Golden Visa Investment*).
  - The customer booking drawer automatically suggests the most relevant sales agent.

---

### 3.2 Pre-Expo Booking & Collision Prevention Engine
* **Tri-Resource Concurrency Constraint**:
  A meeting requires three distinct physical and human resources to be simultaneously available:
  $$\text{Meeting Valid} \iff \text{Rep Available} \land \text{Booth Table Available} \land \text{Investor Available}$$
* **Redis Distributed Slot Locking (`Redlock`)**:
  - When an investor clicks a 3D table, a 5-minute transient lock is acquired in Redis:
    ```
    LOCK_KEY = "slot:lock:booth_table:{table_id}:{timestamp}"
    TTL = 300 seconds
    ```
  - If checkout is abandoned, the lock automatically expires with zero orphaned records.
* **Auto-Expiration & Escalation Engine**:
  - If a sales agent fails to approve a request within **4 hours** (pre-expo) or **20 minutes** (during live expo days), the system auto-escalates to the Developer Booth Director.
  - If still unreviewed, it transitions to `AUTO_EXPIRED` and immediately alerts the investor via WhatsApp with 1-click alternative developer suggestions.

```mermaid
stateDiagram-v2
    [*] --> REQUESTED: Investor Selects 3D Table
    REQUESTED --> APPROVED: Rep Accepts Request
    REQUESTED --> DECLINED: Rep Declines with Reason
    REQUESTED --> COUNTER_PROPOSED: Rep Suggests Alternate Slot
    COUNTER_PROPOSED --> APPROVED: Investor Accepts Alternate
    REQUESTED --> AUTO_EXPIRED: Unreviewed Timeout (4h / 20m)
    
    APPROVED --> CHECKED_IN: Attendee Scans QR Code at Table
    APPROVED --> NO_SHOW: No Scan After 15 Min Grace Period
    NO_SHOW --> TABLE_FREED: Table Recycled to Walk-In Pool
    
    CHECKED_IN --> IN_PROGRESS: Session Begins (30m Timer)
    IN_PROGRESS --> COMPLETED: Wrap-Up & Lead Score Captured
    
    COMPLETED --> [*]
    DECLINED --> [*]
    AUTO_EXPIRED --> [*]
    TABLE_FREED --> [*]
```

---

### 3.3 On-Site Execution: Check-In, Arrival Alerts & Walk-In Recycling
* **Dynamic Anti-Fraud QR Pass**:
  - The pass features a time-based cryptographic token refreshed every 60 seconds to prevent shared or fraudulent screenshots.
* **Instant Arrival Dispatch**:
  - When the attendee arrives at the booth or taps **"I Have Arrived"**, the Notification Gateway dispatches:
    1. An interactive WhatsApp message to the assigned representative: *"Mr. Alexander Wright ($2.5M Budget) has arrived at Table 2."*
    2. An audio chime on the rep’s booth tablet console.
    3. The 3D Table on the digital twin pulses with a bright sapphire blue indicator.
* **The 15-Minute No-Show Optimizer (Protecting Developer ROI)**:
  - If neither party scans within **15 minutes** of the start time:
    - Status transitions to `NO_SHOW`.
    - Both parties receive an automated courteous SMS/WhatsApp notification.
    - **Crucial Feature**: The table status immediately flips to **`AVAILABLE FOR WALK-IN`**. Booth greeters can seat spontaneous foot-traffic visitors, ensuring zero idle downtime during expensive expo hours.

---

### 3.4 Post-Meeting Execution: Lead Qualification & Instant Collateral Delivery
* **5-Minute Wrap-Up Chime**:
  - At minute 25 of a 30-minute consultation, the tablet displays a subtle amber alert indicator to help the sales rep wrap up on time for the next appointment.
* **10-Second Lead Capture Dialog**:
  - Immediately upon concluding the session, a modal prompts the rep for three inputs:
    1. **Rating**: `HOT 🔥` (ready to reserve), `WARM ☀️` (comparing options), `COLD ❄️` (unqualified).
    2. **Estimated Deal Size**: Dollar value slider (e.g., *$2,500,000*).
    3. **Action**: Next step date (e.g., *Site visit scheduled for Monday*).
* **Instant WhatsApp Collateral Dispatch**:
  - Concurrently with saving the lead, the system automatically pushes the official high-resolution PDF brochures and unit floorplans directly to the investor's WhatsApp chat with a personalized thank-you message.

---

## 4. Database Schema & Data Integrity (PostgreSQL)

The schema enforces data integrity natively using PostgreSQL exclusion constraints (`GIST`), foreign keys, and 3D coordinate vector columns:

```mermaid
erDiagram
    VENUE_HALL ||--o{ BOOTH : contains
    BOOTH ||--o{ BOOTH_TABLE : partitions
    EXHIBITOR ||--o{ BOOTH : occupies
    EXHIBITOR ||--o{ SALES_REP : employs
    EXHIBITOR ||--o{ PROPERTY_PROJECT : showcases
    EXHIBITOR ||--o{ CRM_LEAD : tracks
    
    ATTENDEE ||--o{ MEETING : books
    SALES_REP ||--o{ MEETING : hosts
    BOOTH_TABLE ||--o{ MEETING : locates
    MEETING ||--o{ CRM_LEAD : produces
    MEETING ||--o{ MEETING_AUDIT_LOG : tracks_history
```

### SQL DDL Specification with 3D Spatial Fields

```sql
-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "btree_gist";

-- 1. Venue Halls (Native Floorplan Blueprints & 3D Dimensions)
CREATE TABLE venue_halls (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    hall_code VARCHAR(20) UNIQUE NOT NULL,
    floorplan_svg_data TEXT NOT NULL, -- Raw SVG coordinates
    width_meters NUMERIC(6, 2) NOT NULL,
    height_meters NUMERIC(6, 2) NOT NULL,
    ceiling_height_meters NUMERIC(4, 2) DEFAULT 8.50,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 2. Booths (Drawn via 3D Coordinate Polygons)
CREATE TABLE booths (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hall_id UUID NOT NULL REFERENCES venue_halls(id) ON DELETE CASCADE,
    booth_number VARCHAR(50) NOT NULL, -- e.g., 'B-14'
    polygon_points JSONB NOT NULL, -- [[x1, y1], [x2, y2], ...]
    area_sqm NUMERIC(6, 2) NOT NULL,
    wall_height_meters NUMERIC(4, 2) DEFAULT 3.00,
    is_vip_lounge BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(hall_id, booth_number)
);

-- 3. Individual Meeting Tables (3D Position & Capacity)
CREATE TABLE booth_tables (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    booth_id UUID NOT NULL REFERENCES booths(id) ON DELETE CASCADE,
    table_number INT NOT NULL, -- 1, 2, 3, 4
    table_label VARCHAR(50), -- 'Table 1 (Front Entrance)'
    position_3d JSONB NOT NULL, -- {"x": 4.5, "y": 0.0, "z": 2.2, "rotation": 45}
    table_type VARCHAR(30) DEFAULT 'ROUND_POD', -- 'ROUND_POD', 'EXECUTIVE_DESK', 'ACOUSTIC_POD'
    capacity INT DEFAULT 4,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(booth_id, table_number)
);

-- 4. Exhibitors (Developers & Master Brokerages)
CREATE TABLE exhibitors (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_name VARCHAR(255) NOT NULL,
    company_type VARCHAR(50) NOT NULL, -- 'DEVELOPER', 'BROKERAGE', 'GOVERNMENT'
    assigned_booth_id UUID REFERENCES booths(id),
    logo_url TEXT,
    bio TEXT,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 5. Sales Representatives
CREATE TABLE sales_reps (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    exhibitor_id UUID NOT NULL REFERENCES exhibitors(id) ON DELETE CASCADE,
    full_name VARCHAR(150) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone_number VARCHAR(50) NOT NULL,
    title VARCHAR(100), -- 'VIP Sales Director'
    languages TEXT[], -- ['English', 'Arabic']
    specialties TEXT[], -- ['Luxury Villas', 'Commercial Offices']
    default_table_id UUID REFERENCES booth_tables(id),
    is_active BOOLEAN DEFAULT TRUE
);

-- 6. Attendees (Investors & Buyers)
CREATE TABLE attendees (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name VARCHAR(150) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone_number VARCHAR(50) NOT NULL,
    investor_tier VARCHAR(50) DEFAULT 'RETAIL', -- 'HNWI', 'FAMILY_OFFICE', 'RETAIL'
    budget_bracket VARCHAR(50), -- '$1M - $3M'
    target_asset_types TEXT[],
    badge_token VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 7. Meetings (Zero-Collision Core Engine)
CREATE TABLE meetings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    exhibitor_id UUID NOT NULL REFERENCES exhibitors(id),
    rep_id UUID NOT NULL REFERENCES sales_reps(id),
    attendee_id UUID NOT NULL REFERENCES attendees(id),
    table_id UUID NOT NULL REFERENCES booth_tables(id),
    
    start_time TIMESTAMPTZ NOT NULL,
    end_time TIMESTAMPTZ NOT NULL,
    
    status VARCHAR(30) DEFAULT 'REQUESTED', 
    -- 'REQUESTED', 'APPROVED', 'COUNTER_PROPOSED', 'DECLINED', 'CHECKED_IN', 'IN_PROGRESS', 'COMPLETED', 'NO_SHOW', 'AUTO_EXPIRED', 'CANCELLED'
    
    meeting_qr_code VARCHAR(100) UNIQUE NOT NULL,
    checked_in_at TIMESTAMPTZ,
    cancellation_reason TEXT,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,

    -- Constraint A: Sales Rep cannot be double-booked
    CONSTRAINT no_overlap_rep EXCLUDE USING gist (
        rep_id WITH =,
        tstzrange(start_time, end_time) WITH &&
    ) WHERE (status IN ('APPROVED', 'CHECKED_IN', 'IN_PROGRESS')),
    
    -- Constraint B: Physical Table cannot have 2 simultaneous sessions
    CONSTRAINT no_overlap_table EXCLUDE USING gist (
        table_id WITH =,
        tstzrange(start_time, end_time) WITH &&
    ) WHERE (status IN ('APPROVED', 'CHECKED_IN', 'IN_PROGRESS')),

    -- Constraint C: Attendee cannot be in 2 places at once
    CONSTRAINT no_overlap_attendee EXCLUDE USING gist (
        attendee_id WITH =,
        tstzrange(start_time, end_time) WITH &&
    ) WHERE (status IN ('APPROVED', 'CHECKED_IN', 'IN_PROGRESS'))
);

-- 8. Native CRM Lead Pipeline
CREATE TABLE crm_leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    exhibitor_id UUID NOT NULL REFERENCES exhibitors(id) ON DELETE CASCADE,
    meeting_id UUID REFERENCES meetings(id),
    rep_id UUID NOT NULL REFERENCES sales_reps(id),
    attendee_id UUID NOT NULL REFERENCES attendees(id),
    
    lead_score VARCHAR(20) NOT NULL, -- 'HOT', 'WARM', 'COLD'
    deal_stage VARCHAR(50) DEFAULT 'QUALIFIED', 
    -- 'QUALIFIED', 'PROPOSAL_SENT', 'SPA_ISSUED', 'UNDER_CONTRACT', 'WON', 'LOST'
    estimated_deal_value NUMERIC(15, 2),
    interested_projects TEXT[],
    session_notes TEXT,
    follow_up_action VARCHAR(150),
    follow_up_date DATE,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 9. Immutable Audit Trail (Tracking Every Status Change)
CREATE TABLE meeting_audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    meeting_id UUID NOT NULL REFERENCES meetings(id) ON DELETE CASCADE,
    previous_status VARCHAR(30),
    new_status VARCHAR(30) NOT NULL,
    changed_by_user_id UUID NOT NULL,
    reason TEXT,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
```

---

## 5. The Only External Integration: Omnichannel Notification Worker

The asynchronous BullMQ worker handles all external notifications with zero coupling to external exhibition software:

```mermaid
sequenceDiagram
    autonumber
    participant App as Core Booking Engine
    participant Queue as Redis Queue (BullMQ)
    participant Worker as Notification Worker
    participant WhatsApp as Meta WhatsApp Cloud API
    participant Rep as Sales Rep Phone
    participant Guest as Investor Phone

    Note over App,Queue: Event: meeting.approved
    App->>Queue: Push Job {type: "MEETING_APPROVED", meetingId: "..."}
    Queue->>Worker: Dequeue Job
    Worker->>WhatsApp: Send Template Message to Investor
    WhatsApp-->>Guest: Delivered: "Confirmed at Booth B-14 Table 2 [Open Pass]"

    Note over App,Queue: Event: attendee.arrived (On-Site)
    App->>Queue: Push Job {type: "ATTENDEE_ARRIVED", tableId: 2}
    Queue->>Worker: Dequeue Job
    Worker->>WhatsApp: Send Immediate Alert to Sales Rep
    WhatsApp-->>Rep: "🔔 Mr. Wright has arrived at Table 2"
```

---

## 6. 2D Hall Image to 3D Spatial Digital Twin Architecture

### 6.1 The Engineering Challenge & Honest Technical Reality

Can a full 3D interactive model be generated from **only a single 2D raster image** (JPEG / PNG / Architectural PDF)?

| Methodology | Feasibility for Real Estate Expos | Technical Bottlenecks & Outcome |
| :--- | :--- | :--- |
| **Pure Generative AI / Monocular 3D (NeRF / Shap-E / Tripo)** | ❌ **Unusable for Expo Booking** | Single photos lack metric depth and occlusion data. AI generates wavy, distorted "melted plastic" meshes where booth numbers, straight walls, and table coordinates are deformed. |
| **2.5D Layered Spatial Twin & Procedural Extrusion (Our Architecture)** | ✅ **Production-Grade & 100% Precise** | Maps the uploaded 2D hall plan as a high-fidelity ground texture in WebGL, then **procedurally extrudes walls and populates interactive 3D furniture with contact shadows and holographic status pillars**. |

### 6.2 The 4-Layer Spatial Architecture

```mermaid
graph TD
    A["Raw 2D Hall Image / Architectural Blueprint (PNG/JPG)"] --> B["Layer 1: 3D Ground Projection Plane (Perspective Quad)"]
    B --> C["Layer 2: 2.5D Procedural Wall Extrusion (Z = 2.8m Glass Panels)"]
    B --> D["Layer 3: Procedural 3D Tables & Contact Drop Shadows"]
    D --> E["Layer 4: Volumetric Holographic Light Pillars (Live Status Beacons)"]
    
    subgraph "Spatial Twin Experience"
        B
        C
        D
        E
    end
```

1. **Layer 1: The Orthographic Blueprint Projection Plane**
   - The uploaded 2D hall blueprint is mapped onto a luxury chamfered titanium pedestal in WebGL space.
   - Users can orbit $360^\circ$ and tilt from top-down ($90^\circ$) to isometric ($45^\circ$).
   - High-contrast corridors (Aisles, Main Boulevard, Entrance Gate) remain razor-sharp.

2. **Layer 2: 2.5D Procedural Wall Extrusion**
   - Based on the booth polygons stored in `venue_booths.boundary_polygon`, the engine extrudes perimeter walls upwards ($Y = -48\text{px}$ / $2.8\text{ meters}$) in real-time.
   - Shaded with frosted semi-transparent acrylic glass, illuminated gold edge rails, and suspended 3D glowing developer signboards.

3. **Layer 3: Procedural Furniture & Radial Contact Shadows**
   - Tables and executive chairs are procedurally generated in 3D at their exact $(X, Y)$ booth coordinates.
   - Contact drop shadows are cast directly onto the hall blueprint graphic below, giving the tactile sensation of a physical architectural scale model (diorama).

4. **Layer 4: Volumetric Holographic Beacons**
   - Each table projects a vertical column of light upward into the sky:
     - 🟢 **Neon Green**: `FREE` — Instant 1-click booking.
     - 🔵 **Pulsing Blue**: `IN_PROGRESS` — Live countdown timer.
     - 🟡 **Amber**: `WALK_IN_RECYCLED` — 15-minute No-Show auto-recycled table.
     - 🟣 **Violet**: `VIP_POD` — Concierge-managed private pod.

---

## 7. System Health, Latency & Reliability Metrics

| Metric | Target SLA | Implementation Guarantee |
| :--- | :--- | :--- |
| **3D Rendering Frame Rate** | `60 FPS` on mobile & desktop | InstancedMesh procedural geometry with WebGL canvas fallback |
| **Slot Availability Query Latency** | `< 45ms` (P99) | Pre-computed Redis bitfield sets per table per day |
| **Simultaneous Slot Booking Safety** | `100% Collision-Free` | Redis distributed lock (`Redlock`) + PostgreSQL GIST constraint |
| **WhatsApp Notification Delivery** | `< 2.5 seconds` | High-priority async worker queue with persistent webhook retry |
| **Table Utilization Optimization** | `> 90%` Occupancy | Automated 15-minute No-Show detection recycling tables for walk-ins |

---
*End-to-End System Blueprint v3.2 | Status: Production-Ready with 3D Digital Twin*
