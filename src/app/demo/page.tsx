<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Construction Wizzard</title>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet"/>
<style>
:root{
  --ink:#0c0c0c;--ink2:#181818;--ink3:#252525;--ink4:#333;
  --gold:#e09000;--gold2:#f5c040;--gold-bg:#fdf5e0;
  --slate:#f0ede8;--white:#ffffff;--paper:#faf9f7;
  --border:#e0ddd6;--border2:#ccc9c0;
  --text:#1c1c1c;--muted:#6a6560;--faint:#a8a39a;
  --green:#1a7040;--green-bg:#e8f5ee;--green-border:#b8dfc8;
  --red:#a82020;--red-bg:#fcecea;--red-border:#f0c0b8;
  --blue:#1848a8;--blue-bg:#e8effe;--blue-border:#b8cef0;
  --amber:#c06000;--amber-bg:#fef0e0;--amber-border:#f0d090;
  --purple:#6030a0;--purple-bg:#f0e8ff;
  --r:10px;--rlg:16px;
  --fh:'Syne',sans-serif;
  --fb:'Instrument Sans',sans-serif;
  --sh:0 1px 3px rgba(0,0,0,.06),0 4px 12px rgba(0,0,0,.06);
  --shlg:0 4px 20px rgba(0,0,0,.1),0 1px 4px rgba(0,0,0,.06);
}
*{box-sizing:border-box;margin:0;padding:0}
html,body{height:100%;font-family:var(--fb);background:var(--slate);color:var(--text);font-size:14px;line-height:1.5;-webkit-font-smoothing:antialiased}
button,input,select,textarea{font-family:var(--fb)}
button{cursor:pointer}

/* SHELL */
#app{display:flex;flex-direction:column;height:100vh;overflow:hidden}

/* TOPBAR */
#topbar{height:52px;background:var(--ink);display:flex;align-items:center;justify-content:space-between;padding:0 20px;flex-shrink:0;border-bottom:1px solid #2a2a2a;z-index:300}
.t-logo{background:none;border:none;color:#fff;font-family:var(--fh);font-size:15px;font-weight:800;letter-spacing:.03em;display:flex;align-items:center;gap:8px}
.t-logo .badge{background:var(--gold2);color:var(--ink);border-radius:5px;padding:2px 8px;font-size:11px;font-weight:800;letter-spacing:.04em}
.t-right{display:flex;align-items:center;gap:6px}
.t-pill{background:#2a2a2a;color:#aaa;border:none;border-radius:6px;padding:5px 12px;font-size:12px;cursor:pointer;transition:background .15s}
.t-pill:hover{background:#383838;color:#fff}
.t-pro{background:linear-gradient(135deg,#e09000,#f5c040);color:var(--ink);border:none;border-radius:6px;padding:5px 12px;font-size:11px;font-weight:800;letter-spacing:.06em}
.t-upgrade{background:var(--gold2);color:var(--ink);border:none;border-radius:6px;padding:6px 14px;font-size:12px;font-weight:700}

/* BODY */
#body{display:flex;flex:1;overflow:hidden}

/* SIDEBAR */
#sidebar{width:210px;background:var(--ink2);overflow-y:auto;flex-shrink:0;display:flex;flex-direction:column;padding-bottom:20px}
#sidebar::-webkit-scrollbar{width:3px}
#sidebar::-webkit-scrollbar-thumb{background:#333;border-radius:99px}
.s-sec{padding:16px 14px 4px;font-size:9px;font-weight:700;letter-spacing:.14em;color:#444;text-transform:uppercase}
.s-item{display:flex;align-items:center;gap:8px;padding:8px 10px;margin:1px 6px;border-radius:7px;color:#777;font-size:12.5px;cursor:pointer;border:none;background:none;width:calc(100% - 12px);text-align:left;font-family:var(--fb);transition:all .12s}
.s-item:hover{background:#252525;color:#ccc}
.s-item.active{background:var(--ink3);color:#fff}
.s-icon{font-size:14px;width:18px;text-align:center;flex-shrink:0}
.s-pro{margin-left:auto;background:#2a1800;color:var(--gold);font-size:9px;font-weight:800;padding:2px 6px;border-radius:4px;letter-spacing:.04em}

/* MAIN */
#main{flex:1;overflow-y:auto;background:var(--slate)}
#main::-webkit-scrollbar{width:4px}
#main::-webkit-scrollbar-thumb{background:#ccc;border-radius:99px}
.page{padding:24px;max-width:1180px;margin:0 auto;animation:pageIn .18s ease}
@keyframes pageIn{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:none}}

/* PAGE HEADER */
.ph{display:flex;align-items:center;justify-content:space-between;margin-bottom:22px;padding-bottom:18px;border-bottom:1px solid var(--border)}
.ph-l{display:flex;align-items:center;gap:12px}
.ph-ico{width:46px;height:46px;background:var(--white);border:1px solid var(--border);border-radius:11px;display:flex;align-items:center;justify-content:center;font-size:22px;box-shadow:var(--sh);flex-shrink:0}
.ph-title{font-family:var(--fh);font-size:19px;font-weight:800;color:var(--ink)}
.ph-sub{font-size:12px;color:var(--muted);margin-top:1px}

/* CARDS */
.card{background:var(--white);border:1px solid var(--border);border-radius:var(--rlg);padding:18px 20px;box-shadow:var(--sh)}
.ch{font-size:12px;font-weight:700;color:var(--ink);margin-bottom:14px;display:flex;align-items:center;justify-content:space-between;letter-spacing:.01em}
.g2{display:grid;grid-template-columns:repeat(auto-fit,minmax(310px,1fr));gap:18px}
.g3{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:14px}
.g4{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px}

/* STAT CARDS */
.sc{background:var(--white);border:1px solid var(--border);border-radius:var(--r);padding:14px 16px;box-shadow:var(--sh)}
.sv{font-size:22px;font-weight:800;font-family:var(--fh);color:var(--ink);line-height:1}
.sl{font-size:10px;color:var(--muted);margin-top:4px;text-transform:uppercase;letter-spacing:.07em;font-weight:600}
.sdelta{font-size:10px;margin-top:5px;font-weight:600}

/* FORMS */
.field{margin-bottom:12px}
.field label{display:block;font-size:10px;font-weight:700;color:var(--muted);margin-bottom:4px;text-transform:uppercase;letter-spacing:.06em}
.inp{display:block;width:100%;padding:8px 10px;border-radius:7px;border:1px solid var(--border2);font-size:13px;background:var(--white);color:var(--text);transition:border-color .15s;outline:none}
.inp:focus{border-color:var(--gold)}
textarea.inp{resize:vertical;min-height:72px}
.r2{display:flex;gap:10px}
.r2 .field{flex:1}
.btn{padding:8px 16px;border-radius:7px;font-weight:700;font-size:12px;border:none;cursor:pointer;transition:opacity .15s;font-family:var(--fb);letter-spacing:.01em}
.btn:hover{opacity:.85}
.b-ink{background:var(--ink);color:#fff}
.b-gold{background:var(--gold2);color:var(--ink)}
.b-out{background:transparent;border:1px solid var(--border2);color:var(--text)}
.b-red{background:var(--red-bg);color:var(--red);border:1px solid var(--red-border)}
.b-green{background:var(--green-bg);color:var(--green);border:1px solid var(--green-border)}
.b-full{width:100%;padding:11px}
.b-sm{padding:5px 10px;font-size:11px}

/* PILLS */
.pill{display:inline-flex;align-items:center;padding:2px 8px;border-radius:99px;font-size:10px;font-weight:700;white-space:nowrap}
.p-green{background:var(--green-bg);color:var(--green)}
.p-red{background:var(--red-bg);color:var(--red)}
.p-gold{background:var(--amber-bg);color:var(--amber)}
.p-blue{background:var(--blue-bg);color:var(--blue)}
.p-gray{background:#f0ede8;color:var(--muted)}
.p-pro{background:#1a1200;color:var(--gold2);border:1px solid #3a2800}
.p-purple{background:var(--purple-bg);color:var(--purple)}

/* TABLE */
.tbl{width:100%;border-collapse:collapse;font-size:12.5px}
.tbl th{text-align:left;padding:7px 10px;font-size:9.5px;font-weight:700;color:var(--faint);text-transform:uppercase;letter-spacing:.08em;border-bottom:1px solid var(--border)}
.tbl td{padding:10px 10px;border-bottom:.5px solid var(--border);color:var(--text);vertical-align:middle}
.tbl tr:last-child td{border:none}
.tbl tr:hover td{background:#faf8f4}

/* MISC */
.divider{border:none;border-top:1px solid var(--border);margin:14px 0}
.locked{background:var(--paper);border:1.5px dashed var(--border2);border-radius:var(--r);padding:44px 24px;text-align:center}
.pb{height:5px;background:#eae7e0;border-radius:99px;overflow:hidden}
.pf{height:100%;border-radius:99px;transition:width .4s}
.chk-row{display:flex;align-items:flex-start;gap:9px;padding:9px 0;border-bottom:.5px solid var(--border);cursor:pointer}
.chk-row:last-child{border:none}
.chk-row input{accent-color:var(--gold);width:14px;height:14px;flex-shrink:0;margin-top:2px}

/* GANTT */
.gantt-label{width:140px;font-size:11px;color:var(--muted);flex-shrink:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.gantt-track{flex:1;height:22px;background:#eae7e0;border-radius:5px;position:relative;overflow:hidden}
.gantt-bar{position:absolute;height:100%;border-radius:5px;display:flex;align-items:center;padding-left:7px;font-size:10px;font-weight:700;color:#fff}

/* BANNER */
.upgrade-banner{background:var(--gold-bg);border:1px solid var(--amber-border);border-radius:9px;padding:10px 14px;font-size:12px;color:var(--amber);display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:10px;flex-wrap:wrap}

/* MODAL */
.modal-bg{position:fixed;inset:0;background:rgba(0,0,0,.55);display:flex;align-items:center;justify-content:center;z-index:999;padding:16px}
.modal-box{background:var(--white);border-radius:var(--rlg);padding:26px;width:100%;max-width:440px;box-shadow:var(--shlg);max-height:92vh;overflow-y:auto}
.modal-box h3{font-family:var(--fh);font-size:17px;margin-bottom:5px}
.modal-sub{font-size:12px;color:var(--muted);margin-bottom:18px}

/* AUTH */
.auth-screen{min-height:100vh;display:flex;align-items:center;justify-content:center;background:var(--ink);background-image:radial-gradient(circle,#ffffff07 1px,transparent 1px);background-size:22px 22px}
.auth-card{background:var(--white);border-radius:var(--rlg);padding:32px;width:100%;max-width:400px;box-shadow:var(--shlg)}
.auth-logo{font-family:var(--fh);font-size:18px;font-weight:800;color:var(--ink);display:flex;align-items:center;gap:8px;margin-bottom:3px}
.auth-logo .badge{background:var(--gold2);color:var(--ink);border-radius:5px;padding:2px 7px;font-size:11px;font-weight:800}
.a-tabs{display:grid;grid-template-columns:1fr 1fr;gap:7px;margin:14px 0}
.a-tab{padding:8px;border:1px solid var(--border2);border-radius:7px;background:var(--white);font-size:12.5px;font-weight:600;color:var(--muted)}
.a-tab.active{background:var(--ink);color:#fff;border-color:var(--ink)}

/* HERO */
.hero{background:var(--ink);padding:60px 28px 68px;position:relative;overflow:hidden}
.hero-bg{position:absolute;inset:0;background-image:radial-gradient(circle,#ffffff08 1px,transparent 1px);background-size:24px 24px}
.hero-inner{max-width:700px;margin:0 auto;position:relative;z-index:1}
.hero-eye{font-size:10px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--gold2);margin-bottom:14px}
.hero h1{font-family:var(--fh);font-size:46px;font-weight:800;color:#fff;line-height:1.08;margin-bottom:16px}
.hero h1 em{color:var(--gold2);font-style:normal}
.hero-sub{font-size:14px;color:#999;line-height:1.7;max-width:520px;margin-bottom:26px}
.hero-ctas{display:flex;gap:10px;flex-wrap:wrap}
.hero-cta{background:var(--gold2);color:var(--ink);border:none;border-radius:8px;padding:12px 24px;font-weight:700;font-size:13px}
.hero-sec{background:transparent;color:#ddd;border:1px solid #444;border-radius:8px;padding:12px 20px;font-weight:500;font-size:13px}

/* HOME TOOL GRID */
.tool-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px}
.tc{background:var(--white);border:1px solid var(--border);border-radius:var(--rlg);padding:18px;cursor:pointer;transition:transform .15s,box-shadow .15s;text-align:left}
.tc:hover{transform:translateY(-2px);box-shadow:var(--shlg)}
.tc-icon{font-size:24px;margin-bottom:8px}
.tc-title{font-family:var(--fh);font-size:13.5px;font-weight:700;color:var(--ink);margin-bottom:3px}
.tc-desc{font-size:11.5px;color:var(--muted);line-height:1.5}
.tc-arrow{margin-top:12px;font-size:11px;font-weight:700;color:var(--blue)}

/* INVOICE */
.inv-doc{background:var(--white);border:1px solid var(--border);border-radius:var(--rlg);padding:24px}

/* AI CHAT */
.ai-bubble{background:var(--white);border:1px solid var(--border);border-radius:11px;padding:11px 13px;font-size:12.5px;line-height:1.6;max-width:82%}
.ai-bubble.user-bubble{background:var(--ink);color:#fff;border-color:var(--ink)}
.ai-avatar{width:26px;height:26px;border-radius:50%;background:var(--gold2);display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0}

/* STATS STRIP */
.stats-strip{background:var(--ink);padding:28px;display:flex;justify-content:center;gap:48px;flex-wrap:wrap;margin-top:28px}
</style>
</head>
<body>
<div id="app"></div>
<script>
// ═══════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════
const S={
  page:'home',signedIn:false,isPaid:false,showModal:false,
  authMode:'signup',email:'',pw:'',payMethod:'Visa',

  est:{pn:'Office Renovation',cn:'North Star Builders',currency:'USD',trade:'drywall',sqft:2000,csf:2.5,mat:1800,lab:2200,oh:10,pr:15},
  estRes:{b:0,d:0,o:0,p:0,t:0},

  safetyChecked:{},safetyNote:'',safetyDone:false,

  bids:[
    {id:1,project:'Downtown Office Reno',client:'North Star Builders',value:148200,status:'Pending',trade:'Drywall'},
    {id:2,project:'Warehouse Electrical Upgrade',client:'Apex Construction',value:93500,status:'Approved',trade:'Electrical'},
    {id:3,project:'Retail Flooring Buildout',client:'Prime Contractors',value:67800,status:'Rejected',trade:'Flooring'},
    {id:4,project:'Residential HVAC Install',client:'HomeBuilders Co.',value:34200,status:'Pending',trade:'HVAC'},
  ],showBidForm:false,

  logs:[
    {id:1,date:'2025-06-02',weather:'Sunny, 22°C',crew:8,notes:'Framing complete on floors 3-4. Drywall delivery arrived.',photos:3},
    {id:2,date:'2025-06-01',weather:'Cloudy, 18°C',crew:7,notes:'Electrical rough-in on floor 2. Minor delay — material shortage.',photos:1},
  ],showLogForm:false,

  punchItems:[
    {id:1,desc:'Paint touch-up lobby wall',location:'Lobby',assigned:'P. Chen',priority:'Low',status:'Open'},
    {id:2,desc:'HVAC duct exposed on ceiling',location:'Floor 2',assigned:'R. Singh',priority:'High',status:'Open'},
    {id:3,desc:'Missing door hardware Rm 204',location:'Floor 2',assigned:'T. Brown',priority:'Med',status:'Closed'},
    {id:4,desc:'Cracked tile near elevator',location:'Lobby',assigned:'P. Chen',priority:'Med',status:'Open'},
  ],

  tasks:[
    {name:'Site Preparation',start:0,dur:10,color:'#1848a8',done:100},
    {name:'Foundation',start:8,dur:14,color:'#1a7040',done:100},
    {name:'Structural Steel',start:20,dur:18,color:'#c06000',done:65},
    {name:'Electrical Rough-in',start:35,dur:12,color:'#6030a0',done:20},
    {name:'Drywall & Framing',start:40,dur:16,color:'#e09000',done:10},
    {name:'Finishes & FFE',start:54,dur:14,color:'#a82020',done:0},
  ],

  changeOrders:[
    {id:'CO-001',desc:'Additional waterproofing — B1 level',by:'Owner',value:8400,status:'Approved',date:'2025-05-20'},
    {id:'CO-002',desc:'Upgrade lobby flooring to marble',by:'Owner',value:24500,status:'Pending',date:'2025-06-01'},
    {id:'CO-003',desc:'Reroute electrical conduit FL3',by:'GC',value:3200,status:'Rejected',date:'2025-06-03'},
  ],

  costCodes:[
    {code:'1000',desc:'Site Work',budget:45000,actual:43200,committed:1800},
    {code:'2000',desc:'Concrete',budget:120000,actual:118500,committed:8000},
    {code:'3000',desc:'Structural Steel',budget:310000,actual:195000,committed:85000},
    {code:'4000',desc:'Electrical',budget:87000,actual:22000,committed:15000},
    {code:'5000',desc:'Mechanical/HVAC',budget:95000,actual:8000,committed:12000},
  ],

  subs:[
    {id:1,name:'Apex Electrical Inc.',trade:'Electrical',doc:'Invoice #4421',amount:'$12,400',status:'Pending'},
    {id:2,name:'Green Mechanical Ltd.',trade:'HVAC',doc:'Lien Waiver',amount:'—',status:'Approved'},
    {id:3,name:'FloorMaster Group',trade:'Flooring',doc:'Compliance Cert',amount:'—',status:'Pending'},
  ],

  workers:[
    {id:1,name:'James H.',trade:'Framer',clockIn:'7:02 AM',hours:6.5,onSite:true},
    {id:2,name:'Maria L.',trade:'Electrician',clockIn:'7:18 AM',hours:6.1,onSite:true},
    {id:3,name:'Derek W.',trade:'Laborer',clockIn:'—',hours:0,onSite:false},
    {id:4,name:'Priya S.',trade:'Drywaller',clockIn:'6:55 AM',hours:6.8,onSite:true},
  ],

  invoices:[
    {id:'INV-0041',client:'North Star Builders',amount:14200,due:'2025-06-15',status:'Unpaid'},
    {id:'INV-0040',client:'Apex Construction',amount:9800,due:'2025-05-30',status:'Paid'},
    {id:'INV-0039',client:'Prime Contractors',amount:6200,due:'2025-05-20',status:'Overdue'},
  ],

  incidents:[
    {id:1,date:'2025-06-01',type:'Near Miss',desc:'Worker slipped near excavation edge',status:'Open'},
    {id:2,date:'2025-05-28',type:'First Aid',desc:'Minor cut from exposed rebar',status:'Closed'},
  ],

  trainings:[
    {id:1,name:'Fall Protection',due:'2025-07-01',assigned:'All Crew',status:'Pending'},
    {id:2,name:'WHMIS 2015',due:'2025-06-15',assigned:'All Crew',status:'Complete'},
    {id:3,name:'Confined Space Entry',due:'2025-06-30',assigned:'J. Martinez, K. Wu',status:'Pending'},
  ],

  hazards:[
    {id:1,hazard:'Unprotected floor opening FL3',risk:'High',control:'Guardrail + signage installed',status:'Mitigated'},
    {id:2,hazard:'Overhead crane operation zone',risk:'High',control:'Exclusion zone + spotter assigned',status:'Active'},
    {id:3,hazard:'Silica dust from concrete cutting',risk:'Medium',control:'Wet cutting + N95 required',status:'Active'},
    {id:4,hazard:'Slippery ramp near loading dock',risk:'Low',control:'Anti-slip tape applied',status:'Mitigated'},
  ],

  complianceChecked:{},

  aiMessages:[{role:'ai',text:"Hi — I'm your Construction AI Copilot. I can summarize project status, predict budget overruns, generate task lists, flag safety risks, and more. What would you like to know?"}],
  aiInput:'',aiLoading:false,

  carbonMaterials:[
    {name:'Concrete (ready-mix)',qty:320,unit:'m³',factor:0.159,total:50.9},
    {name:'Structural Steel',qty:48,unit:'t',factor:1.46,total:70.1},
    {name:'Triple Glazing',qty:1200,unit:'m²',factor:0.024,total:28.8},
    {name:'EPS Insulation',qty:600,unit:'m²',factor:0.0031,total:1.9},
  ],

  drawings:[
    {name:'Floor Plan — Level 1',format:'PDF',rev:'Rev 3 · Jun 1, 2025',markups:3},
    {name:'Electrical Layout FL2',format:'PDF',rev:'Rev 1 · May 20, 2025',markups:1},
    {name:'Structural Section A-A',format:'PDF',rev:'Rev 2 · May 15, 2025',markups:0},
  ],

  surveys:[
    {name:'Site Perimeter Survey',date:'2025-06-01',size:'MP4 · 2.1 GB',note:'Progress documentation'},
    {name:'Roof Inspection — Section B',date:'2025-05-25',size:'JPG × 48 · 340 MB',note:'Structural concerns noted'},
    {name:'Foundation Overview',date:'2025-05-10',size:'GeoTIFF · 180 MB',note:'Baseline survey'},
  ],

  meetingChecked:{},meetingDone:false,
};

// ═══════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════
const TRADES={drywall:{label:'Drywall',cost:2.5},painting:{label:'Painting',cost:1.5},flooring:{label:'Flooring',cost:4.25},hvac:{label:'HVAC',cost:8.5},electrical:{label:'Electrical',cost:7.5}};

const SAFETY_ITEMS=[
  {id:'s1',txt:'PPE inspected and worn by all crew'},
  {id:'s2',txt:'Scaffolding inspected and secured'},
  {id:'s3',txt:'Fire extinguisher on site and accessible'},
  {id:'s4',txt:'Electrical panels locked out / tagged out'},
  {id:'s5',txt:'Hazmat stored and labeled correctly'},
  {id:'s6',txt:'Emergency exits clear and marked'},
  {id:'s7',txt:'First aid kit stocked and accessible'},
  {id:'s8',txt:'Toolbox talk completed with crew'},
];

const MEETING_ITEMS=[
  {id:'m1',txt:'Attendance recorded for all crew'},
  {id:'m2',txt:'Previous meeting minutes reviewed'},
  {id:'m3',txt:'Active hazards discussed and posted'},
  {id:'m4',txt:'Emergency procedures reviewed'},
  {id:'m5',txt:'PPE requirements confirmed per task'},
  {id:'m6',txt:'Near-miss reports reviewed'},
  {id:'m7',txt:'Upcoming high-risk tasks identified'},
];

const COMPLIANCE_ITEMS=[
  {id:'c1',txt:'OH&S Act requirements reviewed'},
  {id:'c2',txt:'Site signage meets regulatory standards'},
  {id:'c3',txt:'Worker certifications current and on file'},
  {id:'c4',txt:'Equipment inspection records up to date'},
  {id:'c5',txt:'Subcontractor compliance docs received'},
  {id:'c6',txt:'Environmental controls in place'},
];

const NAV=[
  {sec:'Overview',items:[
    {id:'home',icon:'⬡',label:'Dashboard'},
  ]},
  {sec:'Estimating & Bids',items:[
    {id:'estimator',icon:'📐',label:'Estimator'},
    {id:'bidtender',icon:'📋',label:'Bid Tender',pro:true},
    {id:'invoice',icon:'🧾',label:'Invoice & Quote'},
  ]},
  {sec:'Field Management',items:[
    {id:'dailylog',icon:'📓',label:'Daily Logs'},
    {id:'punchlist',icon:'✅',label:'Punch Lists'},
    {id:'schedule',icon:'📅',label:'Schedule Sync'},
    {id:'drawings',icon:'🗺',label:'Drawing Markups',pro:true},
    {id:'drone',icon:'🚁',label:'Drone Uploads',pro:true},
    {id:'ar',icon:'🥽',label:'AR Visualization',pro:true},
    {id:'gps',icon:'📍',label:'GPS Time Tracking',pro:true},
  ]},
  {sec:'Project Finance',items:[
    {id:'jobcost',icon:'💰',label:'Job Costing',pro:true},
    {id:'changes',icon:'🔄',label:'Change Orders',pro:true},
    {id:'subportal',icon:'🏗',label:'Sub Portal',pro:true},
    {id:'carbon',icon:'🌿',label:'Carbon Tracking',pro:true},
  ]},
  {sec:'Safety',items:[
    {id:'safety',icon:'🦺',label:'Daily Checklist'},
    {id:'meetings',icon:'📢',label:'Safety Meetings'},
    {id:'incidents',icon:'⚠️',label:'Incidents'},
    {id:'training',icon:'🎓',label:'Training'},
    {id:'hazards',icon:'🔶',label:'Hazard Register'},
    {id:'inspections',icon:'🔍',label:'Inspections'},
    {id:'compliance',icon:'📜',label:'Compliance'},
  ]},
  {sec:'Intelligence',items:[
    {id:'ai',icon:'🤖',label:'AI Copilot',pro:true},
  ]},
];

// ═══════════════════════════════════════════════════════
// UTILS
// ═══════════════════════════════════════════════════════
const $=id=>document.getElementById(id);
const money=(v,c='USD')=>new Intl.NumberFormat(c==='CAD'?'en-CA':'en-US',{style:'currency',currency:c,maximumFractionDigits:0}).format(v);
function pill(s){
  if(['Approved','Complete','Paid','Closed','Mitigated'].includes(s))return`<span class="pill p-green">${s}</span>`;
  if(['Rejected','Overdue','Active'].includes(s))return`<span class="pill p-red">${s}</span>`;
  if(['Pending','Open'].includes(s))return`<span class="pill p-gold">${s}</span>`;
  if(s==='High')return`<span class="pill p-red">${s}</span>`;
  if(s==='Medium'||s==='Med')return`<span class="pill p-gold">${s}</span>`;
  if(s==='Low')return`<span class="pill p-green">${s}</span>`;
  return`<span class="pill p-gray">${s}</span>`;
}
function ph(ico,title,sub,actions=''){
  return`<div class="ph"><div class="ph-l"><div class="ph-ico">${ico}</div><div><div class="ph-title">${title}</div><div class="ph-sub">${sub}</div></div></div><div>${actions}</div></div>`;
}
function srow(label,val){return`<div style="display:flex;justify-content:space-between;font-size:12.5px;margin-bottom:8px"><span style="color:var(--muted)">${label}</span><strong>${val}</strong></div>`}
function calcEst(){const e=S.est,b=e.sqft*e.csf,d=b+e.mat+e.lab,o=d*(e.oh/100),p=(d+o)*(e.pr/100);S.estRes={b,d,o,p,t:d+o+p}}
function proGate(fn){
  if(!S.isPaid)return`<div class="locked"><div style="font-size:36px;margin-bottom:10px">🔒</div><div style="font-family:var(--fh);font-size:17px;font-weight:800;margin-bottom:6px">Pro Feature</div><p style="color:var(--muted);margin-bottom:16px;max-width:320px;margin-left:auto;margin-right:auto">Upgrade to unlock this module and all 10+ advanced features.</p><button class="btn b-gold" id="gateBtn">Upgrade to Pro →</button></div>`;
  return fn();
}
function upgBanner(){return`<div class="upgrade-banner"><span>Free plan active — upgrade to unlock AI Copilot, GPS, Job Costing, AR, and more.</span><button class="btn b-gold b-sm" id="banBtn">Upgrade →</button></div>`}

// ═══════════════════════════════════════════════════════
// RENDER
// ═══════════════════════════════════════════════════════
function render(){
  const el=$('app');
  if(!S.signedIn&&S.page!=='home'){el.innerHTML=authHTML();bindAuth();return;}
  if(S.page==='home'&&!S.signedIn){el.innerHTML=heroHTML()+(S.showModal?modalHTML():'');bindHero();if(S.showModal)bindModal();return;}
  el.innerHTML=shellHTML();
  bindAll();
}

function shellHTML(){
  return`<div id="app" style="display:flex;flex-direction:column;height:100vh;overflow:hidden">
    ${topbarHTML()}
    <div id="body" style="display:flex;flex:1;overflow:hidden">
      ${sidebarHTML()}
      <div id="main" style="flex:1;overflow-y:auto;background:var(--slate)">
        <div class="page">${pageHTML()}</div>
      </div>
    </div>
    ${S.showModal?modalHTML():''}
  </div>`;
}

function topbarHTML(){
  return`<div id="topbar">
    <button class="t-logo" data-go="home">⬡ <span class="badge">Wizzard</span></button>
    <div class="t-right">
      ${S.isPaid?`<span class="t-pro">✦ PRO ACTIVE</span>`:`<button class="t-upgrade" id="topUpgrade">Upgrade to Pro ✦</button>`}
      <button class="t-pill" id="topExit">← Exit</button>
    </div>
  </div>`;
}

function sidebarHTML(){
  return`<div id="sidebar">`+NAV.map(sec=>`
    <div class="s-sec">${sec.sec}</div>
    ${sec.items.map(it=>`<button class="s-item${S.page===it.id?' active':''}" data-go="${it.id}">
      <span class="s-icon">${it.icon}</span>${it.label}
      ${it.pro&&!S.isPaid?`<span class="s-pro">PRO</span>`:''}
    </button>`).join('')}
  `).join('')+`</div>`;
}

function pageHTML(){
  const p=S.page;
  if(p==='home')return dashPage();
  if(p==='estimator')return estimatorPage();
  if(p==='bidtender')return proGate(bidPage);
  if(p==='invoice')return invoicePage();
  if(p==='dailylog')return dailyLogPage();
  if(p==='punchlist')return punchPage();
  if(p==='schedule')return schedulePage();
  if(p==='drawings')return proGate(drawingsPage);
  if(p==='drone')return proGate(dronePage);
  if(p==='ar')return proGate(arPage);
  if(p==='gps')return proGate(gpsPage);
  if(p==='jobcost')return proGate(jobCostPage);
  if(p==='changes')return proGate(changeOrderPage);
  if(p==='subportal')return proGate(subPortalPage);
  if(p==='carbon')return proGate(carbonPage);
  if(p==='safety')return safetyPage();
  if(p==='meetings')return meetingsPage();
  if(p==='incidents')return incidentsPage();
  if(p==='training')return trainingPage();
  if(p==='hazards')return hazardsPage();
  if(p==='inspections')return inspectionsPage();
  if(p==='compliance')return compliancePage();
  if(p==='ai')return proGate(aiPage);
  return`<p>Not found</p>`;
}

// ═══════════════════════════════════════════════════════
// HERO (logged-out)
// ═══════════════════════════════════════════════════════
function heroHTML(){
  const tools=[
    ['📐','Estimator','Trade-specific cost estimates with overhead & profit','Free'],
    ['📋','Bid Tender','Manage your full bid pipeline end-to-end','Pro'],
    ['📓','Daily Logs','Log progress, weather & photos from the field','Free'],
    ['✅','Punch Lists','Digital deficiency tracking & QC checklists','Free'],
    ['📅','Schedule Sync','Live Gantt charts synced across all stakeholders','Free'],
    ['💰','Job Costing','Budget vs actual by cost code in real time','Pro'],
    ['🔄','Change Orders','Track scope changes from request to approval','Pro'],
    ['🧾','Invoice & Quote','Professional invoices and quotes, ready to send','Free'],
    ['🏗','Sub Portal','Subs submit invoices, waivers & compliance docs','Pro'],
    ['📍','GPS Time Tracking','Geofenced auto clock-in/out for your crew','Pro'],
    ['🦺','Safety Suite','Checklists, incidents, training, hazards & audits','Free'],
    ['🤖','AI Copilot','Summarize updates, predict overruns, build task lists','Pro'],
    ['🗺','Drawing Markups','Annotate blueprints directly from the field','Pro'],
    ['🚁','Drone Uploads','Upload & review drone survey footage and images','Pro'],
    ['🥽','AR Visualization','Overlay 3D models onto your physical jobsite','Pro'],
    ['🌿','Carbon Tracking','Embodied carbon calculations for sustainability','Pro'],
  ];
  return`<div style="background:var(--slate)">
  <div class="hero">
    <div class="hero-bg"></div>
    <div class="hero-inner">
      <div class="hero-eye">Construction Intelligence Platform</div>
      <h1>Build smarter.<br/><em>Bid sharper.</em><br/>Stay safe.</h1>
      <p class="hero-sub">The all-in-one platform for modern construction teams. Estimating, field management, safety, finance, and AI insights — connected and live.</p>
      <div class="hero-ctas">
        <button class="hero-cta" id="hSignup">Get Started Free</button>
        <button class="hero-sec" id="hSignin">Sign In →</button>
      </div>
    </div>
  </div>
  <div style="max-width:1100px;margin:0 auto;padding:44px 24px 20px">
    <div style="font-size:9px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--faint);margin-bottom:18px">Everything your team needs on one platform</div>
    <div class="tool-grid">
      ${tools.map(([ico,title,desc,tag])=>`<button class="tc" data-tool="${title}">
        <div style="display:flex;justify-content:space-between;align-items:flex-start">
          <div class="tc-icon">${ico}</div>
          <span class="pill ${tag==='Pro'?'p-pro':tag==='Free'?'p-green':tag==='Core'?'p-blue':'p-gray'}" style="font-size:9px">${tag}</span>
        </div>
        <div class="tc-title">${title}</div>
        <div class="tc-desc">${desc}</div>
        <div class="tc-arrow">Open ${title} →</div>
      </button>`).join('')}
    </div>
  </div>
  <div class="stats-strip">
    ${[['$2.4B+','Estimated in bids'],['12,000+','Active contractors'],['99.2%','Uptime'],['4.9 ★','Avg rating']].map(([v,l])=>`<div style="text-align:center"><div style="font-family:var(--fh);font-size:24px;font-weight:800;color:var(--gold2)">${v}</div><div style="font-size:10px;color:#666;margin-top:2px">${l}</div></div>`).join('')}
  </div>
  <footer style="padding:16px 24px;display:flex;justify-content:space-between;border-top:1px solid var(--border);background:var(--slate);font-size:11px;color:var(--faint)">
    <span style="font-weight:700;font-family:var(--fh)">⬡ Construction Wizzard</span><span>© ${new Date().getFullYear()} All rights reserved</span>
  </footer>
  </div>`;
}

// ═══════════════════════════════════════════════════════
// DASHBOARD
// ═══════════════════════════════════════════════════════
function dashPage(){
  const totalBid=S.bids.reduce((a,b)=>a+b.value,0);
  const open=S.punchItems.filter(p=>p.status==='Open').length;
  return`${ph('⬡','Dashboard','Your project overview at a glance')}
  <div class="g4" style="margin-bottom:18px">
    <div class="sc"><div class="sv">$${(totalBid/1000).toFixed(0)}k</div><div class="sl">Bid Pipeline</div><div class="sdelta" style="color:var(--green)">↑ 12% this month</div></div>
    <div class="sc"><div class="sv">${S.bids.filter(b=>b.status==='Approved').length}</div><div class="sl">Won Bids</div></div>
    <div class="sc"><div class="sv">${S.workers.filter(w=>w.onSite).length}</div><div class="sl">On Site Today</div></div>
    <div class="sc"><div class="sv" style="color:var(--amber)">${open}</div><div class="sl">Open Punch Items</div></div>
  </div>
  <div class="g2" style="margin-bottom:18px">
    <div class="card">
      <div class="ch">Recent Logs <button class="btn b-out b-sm" data-go="dailylog">View All</button></div>
      ${S.logs.map(l=>`<div style="padding:9px 0;border-bottom:.5px solid var(--border);font-size:12.5px">
        <div style="display:flex;justify-content:space-between"><strong>${l.date}</strong><span class="pill p-blue">${l.weather}</span></div>
        <div style="color:var(--muted);margin-top:3px;line-height:1.5">${l.notes}</div>
      </div>`).join('')}
    </div>
    <div class="card">
      <div class="ch">Schedule <button class="btn b-out b-sm" data-go="schedule">View</button></div>
      ${S.tasks.slice(0,5).map(t=>`<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
        <div class="gantt-label">${t.name}</div>
        <div class="gantt-track" style="flex:1;height:18px;background:#eae7e0;border-radius:4px;position:relative;overflow:hidden">
          <div class="gantt-bar" style="left:${t.start/70*100}%;width:${t.dur/70*100}%;background:${t.color};position:absolute;height:100%;border-radius:4px;display:flex;align-items:center;padding-left:6px;font-size:9px;font-weight:700;color:#fff">${t.done}%</div>
        </div>
      </div>`).join('')}
    </div>
  </div>
  <div class="g2">
    <div class="card">
      <div class="ch">Punch Items <button class="btn b-out b-sm" data-go="punchlist">View All</button></div>
      <table class="tbl"><thead><tr><th>Issue</th><th>Priority</th><th>Status</th></tr></thead><tbody>
        ${S.punchItems.map(p=>`<tr><td>${p.desc}<div style="font-size:10px;color:var(--faint)">${p.location}</div></td><td>${pill(p.priority)}</td><td>${pill(p.status)}</td></tr>`).join('')}
      </tbody></table>
    </div>
    <div class="card">
      <div class="ch">Invoices <button class="btn b-out b-sm" data-go="invoice">View All</button></div>
      <table class="tbl"><thead><tr><th>Invoice</th><th>Amount</th><th>Status</th></tr></thead><tbody>
        ${S.invoices.map(i=>`<tr><td><strong>${i.id}</strong><div style="font-size:10px;color:var(--faint)">${i.client}</div></td><td><strong>${money(i.amount)}</strong></td><td>${pill(i.status)}</td></tr>`).join('')}
      </tbody></table>
    </div>
  </div>`;
}

// ═══════════════════════════════════════════════════════
// ESTIMATOR
// ═══════════════════════════════════════════════════════
function estimatorPage(){
  calcEst();const e=S.est,r=S.estRes;
  return`${ph('📐','Estimator','Build accurate trade-specific cost estimates')}
  ${!S.isPaid?upgBanner():''}
  <div class="g2">
    <div class="card">
      <div class="ch">Project Inputs</div>
      <div class="r2"><div class="field"><label>Project Name</label><input class="inp" id="e_pn" value="${e.pn}"/></div><div class="field"><label>Client</label><input class="inp" id="e_cn" value="${e.cn}"/></div></div>
      <div class="r2"><div class="field"><label>Currency</label><select class="inp" id="e_cur"><option value="USD"${e.currency==='USD'?' selected':''}>USD</option><option value="CAD"${e.currency==='CAD'?' selected':''}>CAD</option></select></div>
      <div class="field"><label>Trade</label><select class="inp" id="e_tr">${Object.entries(TRADES).map(([k,v])=>`<option value="${k}"${e.trade===k?' selected':''}>${v.label}</option>`).join('')}</select></div></div>
      <div class="field"><label>Upload Drawing PDF ${!S.isPaid?'🔒':''}</label>
        ${S.isPaid?`<input class="inp" type="file" accept="application/pdf"/>`:`<div style="padding:8px 10px;border:1px dashed var(--border2);border-radius:7px;font-size:11px;color:var(--faint);cursor:pointer;text-align:center" id="lkPdf">Upgrade to Pro to upload drawings →</div>`}</div>
      <div class="r2"><div class="field"><label>Square Feet</label><input class="inp" type="number" id="e_sf" value="${e.sqft}"/></div><div class="field"><label>Cost / Sq Ft</label><input class="inp" type="number" step="0.01" id="e_csf" value="${e.csf}"/></div></div>
      <div class="r2"><div class="field"><label>Materials ($)</label><input class="inp" type="number" id="e_mat" value="${e.mat}"/></div><div class="field"><label>Labor ($)</label><input class="inp" type="number" id="e_lab" value="${e.lab}"/></div></div>
      <div class="r2"><div class="field"><label>Overhead %</label><input class="inp" type="number" id="e_oh" value="${e.oh}"/></div><div class="field"><label>Profit %</label><input class="inp" type="number" id="e_pr" value="${e.pr}"/></div></div>
      <button class="btn b-ink b-full" id="calcBtn">Calculate Estimate</button>
    </div>
    <div class="card">
      <div class="ch">Summary</div>
      ${srow('Project',e.pn)}${srow('Client',e.cn)}${srow('Trade',TRADES[e.trade].label)}
      <hr class="divider"/>
      ${srow('Base Estimate',money(r.b,e.currency))}${srow('Materials',money(e.mat,e.currency))}${srow('Labor',money(e.lab,e.currency))}${srow('Direct Costs',money(r.d,e.currency))}${srow('Overhead',money(r.o,e.currency))}${srow('Profit',money(r.p,e.currency))}
      <hr class="divider"/>
      <div style="display:flex;justify-content:space-between;align-items:center"><span style="font-weight:700;font-size:14px">Total Bid</span><strong style="font-size:20px;font-family:var(--fh)">${money(r.t,e.currency)}</strong></div>
      <div style="margin-top:14px;padding:12px;background:var(--paper);border-radius:8px;font-size:11.5px;line-height:1.7;color:var(--muted)"><strong style="color:var(--ink)">${e.cn}</strong> — ${e.pn}<br/>${TRADES[e.trade].label} · ${e.sqft.toLocaleString()} sq ft · ${e.currency}<br/><em>Subject to site verification and final scope approval.</em></div>
      ${S.isPaid?`<button class="btn b-ink b-full" style="margin-top:10px">Export Proposal PDF</button>`:`<button class="btn b-out b-full" style="margin-top:10px" id="lkExport">🔒 Upgrade to Export</button>`}
    </div>
  </div>`;
}

// ═══════════════════════════════════════════════════════
// BID TENDER
// ═══════════════════════════════════════════════════════
function bidPage(){
  const tot=S.bids.reduce((a,b)=>a+b.value,0),won=S.bids.filter(b=>b.status==='Approved').reduce((a,b)=>a+b.value,0);
  return`${ph('📋','Bid Tender','Track submissions, approvals and your full pipeline')}
  <div class="g4" style="margin-bottom:16px">
    <div class="sc"><div class="sv">$${(tot/1000).toFixed(0)}k</div><div class="sl">Total Pipeline</div></div>
    <div class="sc"><div class="sv">$${(won/1000).toFixed(0)}k</div><div class="sl">Approved Value</div></div>
    <div class="sc"><div class="sv">${S.bids.filter(b=>b.status==='Pending').length}</div><div class="sl">Pending</div></div>
    <div class="sc"><div class="sv">${Math.round(S.bids.filter(b=>b.status==='Approved').length/S.bids.length*100)}%</div><div class="sl">Win Rate</div></div>
  </div>
  <div class="card">
    <div class="ch">Active Bids <button class="btn b-out b-sm" id="toggleBidForm">${S.showBidForm?'Cancel':'+ Add Bid'}</button></div>
    ${S.showBidForm?`<div style="background:var(--paper);border-radius:9px;padding:14px;margin-bottom:16px">
      <div class="r2"><div class="field"><label>Project</label><input class="inp" id="nb_p" placeholder="Project name"/></div><div class="field"><label>Client</label><input class="inp" id="nb_c" placeholder="Client"/></div></div>
      <div class="r2"><div class="field"><label>Value ($)</label><input class="inp" type="number" id="nb_v"/></div><div class="field"><label>Trade</label><select class="inp" id="nb_t">${Object.values(TRADES).map(t=>`<option>${t.label}</option>`).join('')}</select></div></div>
      <button class="btn b-ink" id="addBidBtn">Add Bid</button></div>`:''}
    <table class="tbl"><thead><tr><th>Project</th><th>Client</th><th>Trade</th><th>Value</th><th>Status</th></tr></thead><tbody>
      ${S.bids.map(b=>`<tr><td><strong>${b.project}</strong></td><td style="color:var(--muted)">${b.client}</td><td>${b.trade}</td><td><strong>${money(b.value)}</strong></td><td>${pill(b.status)}</td></tr>`).join('')}
    </tbody></table>
  </div>`;
}

// ═══════════════════════════════════════════════════════
// INVOICE
// ═══════════════════════════════════════════════════════
function invoicePage(){
  return`${ph('🧾','Invoice & Quote','Generate and track professional invoices and quotes')}
  <div class="g4" style="margin-bottom:16px">
    <div class="sc"><div class="sv">$30.2k</div><div class="sl">Total Invoiced</div></div>
    <div class="sc"><div class="sv" style="color:var(--green)">$9.8k</div><div class="sl">Collected</div></div>
    <div class="sc"><div class="sv" style="color:var(--amber)">$14.2k</div><div class="sl">Outstanding</div></div>
    <div class="sc"><div class="sv" style="color:var(--red)">$6.2k</div><div class="sl">Overdue</div></div>
  </div>
  <div class="g2">
    <div class="card">
      <div class="ch">Invoices <button class="btn b-ink b-sm">+ New Invoice</button></div>
      <table class="tbl"><thead><tr><th>Invoice</th><th>Client</th><th>Amount</th><th>Due</th><th>Status</th></tr></thead><tbody>
        ${S.invoices.map(i=>`<tr><td><strong>${i.id}</strong></td><td>${i.client}</td><td><strong>${money(i.amount)}</strong></td><td style="color:var(--muted)">${i.due}</td><td>${pill(i.status)}</td></tr>`).join('')}
      </tbody></table>
    </div>
    <div class="inv-doc">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:20px;padding-bottom:16px;border-bottom:1px solid var(--border)">
        <div><div style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.09em;color:var(--faint);margin-bottom:3px">Invoice</div><div style="font-family:var(--fh);font-size:20px;font-weight:800">INV-0041</div><div style="font-size:11px;color:var(--muted);margin-top:2px">Issued: Jun 1, 2025 · Due: Jun 15, 2025</div></div>
        ${pill('Unpaid')}
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:18px;font-size:12px">
        <div><div style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:var(--faint);margin-bottom:5px">From</div><strong>Construction Wizzard Inc.</strong><br/>123 Builder Ave, Toronto ON</div>
        <div><div style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:var(--faint);margin-bottom:5px">To</div><strong>North Star Builders</strong><br/>456 Site Road, Mississauga ON</div>
      </div>
      <table class="tbl" style="margin-bottom:14px"><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
        <tr><td>Drywall Installation — Office Reno</td><td>120h</td><td>$85/h</td><td><strong>$10,200</strong></td></tr>
        <tr><td>Materials — Drywall & Compound</td><td>1</td><td>$4,000</td><td><strong>$4,000</strong></td></tr>
      </tbody></table>
      <div style="text-align:right;font-size:13px">
        <div style="margin-bottom:4px">Subtotal: <strong>$14,200</strong></div>
        <div style="margin-bottom:4px">HST (13%): <strong>$1,846</strong></div>
        <div style="font-family:var(--fh);font-size:17px;margin-top:8px">Total: <strong>$16,046</strong></div>
      </div>
      <button class="btn b-ink b-full" style="margin-top:14px">Send Invoice</button>
    </div>
  </div>`;
}

// ═══════════════════════════════════════════════════════
// DAILY LOGS
// ═══════════════════════════════════════════════════════
function dailyLogPage(){
  return`${ph('📓','Daily Logs','Track progress, weather and crew activity from the field',`<button class="btn b-ink" id="showLogForm">${S.showLogForm?'Cancel':'+ New Log'}</button>`)}
  ${S.showLogForm?`<div class="card" style="margin-bottom:16px">
    <div class="ch">New Daily Log Entry</div>
    <div class="r2"><div class="field"><label>Date</label><input class="inp" type="date" id="log_d"/></div><div class="field"><label>Weather</label><input class="inp" id="log_w" placeholder="e.g. Sunny, 22°C"/></div></div>
    <div class="r2"><div class="field"><label>Crew on Site</label><input class="inp" type="number" id="log_c" placeholder="8"/></div><div class="field"><label>Site Photos</label><input class="inp" type="file" accept="image/*" multiple/></div></div>
    <div class="field"><label>Progress Notes</label><textarea class="inp" id="log_n" placeholder="Describe today's progress, delays, deliveries..."></textarea></div>
    <button class="btn b-ink" id="submitLog">Submit Log</button>
  </div>`:''}
  <div style="display:flex;flex-direction:column;gap:12px">
    ${S.logs.map(l=>`<div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
        <div style="font-family:var(--fh);font-size:14px;font-weight:700">${l.date}</div>
        <div style="display:flex;gap:6px">${pill('Closed')}<span class="pill p-blue">${l.weather}</span><span class="pill p-gray">👷 ${l.crew} crew</span></div>
      </div>
      <p style="font-size:12.5px;color:var(--muted);line-height:1.6">${l.notes}</p>
      <div style="margin-top:8px;font-size:11px;color:var(--blue);font-weight:600">📷 ${l.photos} photo${l.photos!==1?'s':''} attached</div>
    </div>`).join('')}
  </div>`;
}

// ═══════════════════════════════════════════════════════
// PUNCH LIST
// ═══════════════════════════════════════════════════════
function punchPage(){
  const open=S.punchItems.filter(p=>p.status==='Open').length;
  return`${ph('✅','Punch Lists','Quality control and deficiency tracking')}
  <div class="g4" style="margin-bottom:16px">
    <div class="sc"><div class="sv">${S.punchItems.length}</div><div class="sl">Total Items</div></div>
    <div class="sc"><div class="sv" style="color:var(--amber)">${open}</div><div class="sl">Open</div></div>
    <div class="sc"><div class="sv" style="color:var(--green)">${S.punchItems.filter(p=>p.status==='Closed').length}</div><div class="sl">Closed</div></div>
    <div class="sc"><div class="sv" style="color:var(--red)">${S.punchItems.filter(p=>p.priority==='High').length}</div><div class="sl">High Priority</div></div>
  </div>
  <div class="card">
    <div class="ch">Deficiency Register <button class="btn b-ink b-sm">+ Add Item</button></div>
    <table class="tbl"><thead><tr><th>Description</th><th>Location</th><th>Assigned</th><th>Priority</th><th>Status</th></tr></thead><tbody>
      ${S.punchItems.map(p=>`<tr><td><strong>${p.desc}</strong></td><td>${p.location}</td><td>${p.assigned}</td><td>${pill(p.priority)}</td><td>${pill(p.status)}</td></tr>`).join('')}
    </tbody></table>
  </div>`;
}

// ═══════════════════════════════════════════════════════
// SCHEDULE
// ═══════════════════════════════════════════════════════
function schedulePage(){
  return`${ph('📅','Schedule Sync','Dynamic Gantt charts — live for all stakeholders')}
  <div class="card">
    <div class="ch">Project Gantt — 70-Day Span</div>
    <div style="overflow-x:auto">
      <div style="display:flex;margin-bottom:6px;padding-left:148px">
        ${Array.from({length:7},(_,i)=>`<div style="flex:10;text-align:center;font-size:9px;font-weight:700;color:var(--faint);text-transform:uppercase">WK ${i+1}</div>`).join('')}
      </div>
      ${S.tasks.map(t=>`<div style="display:flex;align-items:center;gap:8px;margin-bottom:9px">
        <div class="gantt-label">${t.name}</div>
        <div class="gantt-track" style="flex:1">
          <div class="gantt-bar" style="left:${t.start/70*100}%;width:${t.dur/70*100}%;background:${t.color}">${t.done}%</div>
        </div>
      </div>`).join('')}
    </div>
    <div style="margin-top:14px;padding:11px 13px;background:var(--amber-bg);border-radius:8px;font-size:12px;color:var(--amber);font-weight:600">
      ⚠ Structural Steel is 65% complete — 5 days behind schedule. Downstream tasks auto-flagged. All stakeholders notified.
    </div>
  </div>`;
}

// ═══════════════════════════════════════════════════════
// DRAWINGS
// ═══════════════════════════════════════════════════════
function drawingsPage(){
  return`${ph('🗺','Drawing Markups','View blueprints and add digital field annotations')}
  <div class="g2">
    <div class="card">
      <div class="ch">Upload Drawing</div>
      <div style="text-align:center;padding:32px 16px;background:var(--paper);border-radius:9px;border:2px dashed var(--border2)">
        <div style="font-size:36px;margin-bottom:8px">🗺</div>
        <p style="font-weight:600;margin-bottom:4px">Drop a file or click to upload</p>
        <p style="font-size:11px;color:var(--muted);margin-bottom:14px">PDF, DWG, PNG, JPG supported</p>
        <button class="btn b-ink">Choose File</button>
      </div>
    </div>
    <div class="card">
      <div class="ch">Available Drawings</div>
      ${S.drawings.map(d=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:.5px solid var(--border);font-size:12.5px">
        <div><strong>${d.name}</strong><div style="font-size:10px;color:var(--muted);margin-top:1px">${d.format} · ${d.rev}</div></div>
        <div style="display:flex;gap:6px;align-items:center"><span class="pill p-blue">${d.markups} markup${d.markups!==1?'s':''}</span><button class="btn b-out b-sm">Annotate</button></div>
      </div>`).join('')}
    </div>
  </div>`;
}

// ═══════════════════════════════════════════════════════
// DRONE
// ═══════════════════════════════════════════════════════
function dronePage(){
  return`${ph('🚁','Drone Uploads','Survey footage, roof inspections and site progress imagery')}
  <div class="card" style="margin-bottom:16px">
    <div style="text-align:center;padding:32px;background:var(--paper);border-radius:9px;border:2px dashed var(--border2)">
      <div style="font-size:36px;margin-bottom:8px">🚁</div>
      <p style="font-weight:600;margin-bottom:4px">Upload Drone Survey Files</p>
      <p style="font-size:11px;color:var(--muted);margin-bottom:14px">MP4, MOV, JPG, GeoTIFF supported. Max 2 GB per file.</p>
      <button class="btn b-ink">Choose Drone Files</button>
    </div>
  </div>
  <div class="card">
    <div class="ch">Survey History</div>
    ${S.surveys.map(s=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:.5px solid var(--border);font-size:12.5px">
      <div><strong>${s.name}</strong><div style="font-size:10px;color:var(--muted);margin-top:1px">${s.date} · ${s.size}</div><div style="font-size:11px;margin-top:2px">${s.note}</div></div>
      <button class="btn b-out b-sm">View</button>
    </div>`).join('')}
  </div>`;
}

// ═══════════════════════════════════════════════════════
// AR
// ═══════════════════════════════════════════════════════
function arPage(){
  return`${ph('🥽','AR Visualization','Overlay 3D models onto the physical jobsite')}
  <div class="g2">
    <div class="card">
      <div class="ch">Launch AR Session</div>
      <div class="field"><label>BIM Model</label><select class="inp"><option>Office Renovation — Full Model v4</option><option>Structural Steel Only</option><option>MEP Systems</option></select></div>
      <div class="field"><label>Target Area</label><select class="inp"><option>Floor 1</option><option>Floor 2</option><option>Floor 3</option><option>Exterior</option></select></div>
      <div class="field"><label>Device</label><select class="inp"><option>iPhone (LiDAR)</option><option>iPad Pro</option><option>HoloLens 2</option><option>Android ARCore</option></select></div>
      <button class="btn b-gold b-full" style="margin-top:8px">Launch AR Session →</button>
      <p style="font-size:10px;color:var(--muted);margin-top:8px;text-align:center">Requires Construction Wizzard mobile app on LiDAR-capable device.</p>
    </div>
    <div class="card">
      <div class="ch">Recent AR Sessions</div>
      ${[['Floor 2 MEP Layout','2025-06-01','J. Martinez','14 min · 3 clash detections'],['Structural Steel FL3','2025-05-30','K. Oluwaseun','22 min · 0 clashes'],['Lobby Finishes Review','2025-05-26','P. Sullivan','8 min · 1 clash']].map(([model,date,user,info])=>`
        <div style="padding:10px 0;border-bottom:.5px solid var(--border)">
          <div style="display:flex;justify-content:space-between;align-items:center"><strong style="font-size:12.5px">${model}</strong>${pill('Closed')}</div>
          <div style="font-size:10px;color:var(--muted);margin-top:2px">${date} · ${user}</div>
          <div style="font-size:11px;margin-top:2px">${info}</div>
        </div>`).join('')}
    </div>
  </div>`;
}

// ═══════════════════════════════════════════════════════
// GPS TIME TRACKING
// ═══════════════════════════════════════════════════════
function gpsPage(){
  const onSite=S.workers.filter(w=>w.onSite).length;
  const hrs=S.workers.reduce((a,w)=>a+w.hours,0).toFixed(1);
  return`${ph('📍','GPS Time Tracking','Geofenced automatic clock-in/out for your crew')}
  <div class="g4" style="margin-bottom:16px">
    <div class="sc"><div class="sv">${onSite}</div><div class="sl">On Site Now</div></div>
    <div class="sc"><div class="sv">${S.workers.length-onSite}</div><div class="sl">Off Site</div></div>
    <div class="sc"><div class="sv">${hrs}h</div><div class="sl">Total Hours Today</div></div>
    <div class="sc" style="background:var(--green-bg)"><div class="sv" style="color:var(--green)">Active</div><div class="sl">Geofence Status</div></div>
  </div>
  <div class="card">
    <div class="ch">Crew Time Cards — Today</div>
    <table class="tbl"><thead><tr><th>Worker</th><th>Trade</th><th>Clock In</th><th>Hours</th><th>Status</th></tr></thead><tbody>
      ${S.workers.map(w=>`<tr><td><strong>${w.name}</strong></td><td>${w.trade}</td><td>${w.clockIn}</td><td><strong>${w.hours}h</strong></td><td>${w.onSite?`<span class="pill p-green">● On Site</span>`:`<span class="pill p-gray">Off Site</span>`}</td></tr>`).join('')}
    </tbody></table>
    <div style="margin-top:12px;padding:10px 12px;background:var(--blue-bg);border-radius:7px;font-size:11.5px;color:var(--blue)">📍 <strong>Geofence active</strong> — 150m radius at 123 Main St. Workers auto clock-in/out on entry/exit.</div>
  </div>`;
}

// ═══════════════════════════════════════════════════════
// JOB COSTING
// ═══════════════════════════════════════════════════════
function jobCostPage(){
  return`${ph('💰','Job Costing','Budget vs actual by cost code — real time project health')}
  <div class="card">
    <div class="ch">Cost Code Summary</div>
    <table class="tbl"><thead><tr><th>Code</th><th>Description</th><th>Budget</th><th>Actual</th><th>Committed</th><th>Variance</th><th>Health</th></tr></thead><tbody>
      ${S.costCodes.map(c=>{
        const variance=c.budget-c.actual-c.committed;
        const pct=Math.min(100,Math.round((c.actual+c.committed)/c.budget*100));
        const barColor=pct>90?'var(--red)':pct>75?'var(--gold)':'var(--green)';
        return`<tr><td><strong>${c.code}</strong></td><td>${c.desc}</td><td>${money(c.budget)}</td><td>${money(c.actual)}</td><td>${money(c.committed)}</td>
          <td style="font-weight:700;color:${variance>=0?'var(--green)':'var(--red)'}">${variance>=0?'+':''}${money(variance)}</td>
          <td style="min-width:90px"><div class="pb"><div class="pf" style="width:${pct}%;background:${barColor}"></div></div><div style="font-size:9px;color:var(--muted);margin-top:2px">${pct}% used</div></td>
        </tr>`;
      }).join('')}
    </tbody></table>
  </div>`;
}

// ═══════════════════════════════════════════════════════
// CHANGE ORDERS
// ═══════════════════════════════════════════════════════
function changeOrderPage(){
  const approved=S.changeOrders.filter(c=>c.status==='Approved').reduce((a,c)=>a+c.value,0);
  return`${ph('🔄','Change Orders','Track scope changes and approvals end-to-end')}
  <div class="g4" style="margin-bottom:16px">
    <div class="sc"><div class="sv">${S.changeOrders.length}</div><div class="sl">Total COs</div></div>
    <div class="sc"><div class="sv">$${(approved/1000).toFixed(1)}k</div><div class="sl">Approved Value</div></div>
    <div class="sc"><div class="sv">${S.changeOrders.filter(c=>c.status==='Pending').length}</div><div class="sl">Pending Approval</div></div>
    <div class="sc"><div class="sv">${S.changeOrders.filter(c=>c.status==='Rejected').length}</div><div class="sl">Rejected</div></div>
  </div>
  <div class="card">
    <div class="ch">Change Order Register <button class="btn b-ink b-sm">+ New CO</button></div>
    <table class="tbl"><thead><tr><th>CO #</th><th>Description</th><th>Requested By</th><th>Value</th><th>Date</th><th>Status</th></tr></thead><tbody>
      ${S.changeOrders.map(c=>`<tr><td><strong>${c.id}</strong></td><td>${c.desc}</td><td>${c.by}</td><td><strong>${money(c.value)}</strong></td><td style="color:var(--muted)">${c.date}</td><td>${pill(c.status)}</td></tr>`).join('')}
    </tbody></table>
  </div>`;
}

// ═══════════════════════════════════════════════════════
// SUB PORTAL
// ═══════════════════════════════════════════════════════
function subPortalPage(){
  return`${ph('🏗','Subcontractor Portal','Manage sub invoices, lien waivers and compliance docs')}
  <div class="card">
    <div class="ch">Submitted Documents <button class="btn b-ink b-sm">+ Request Document</button></div>
    <table class="tbl"><thead><tr><th>Subcontractor</th><th>Trade</th><th>Document</th><th>Amount</th><th>Status</th></tr></thead><tbody>
      ${S.subs.map(s=>`<tr><td><strong>${s.name}</strong></td><td>${s.trade}</td><td>${s.doc}</td><td>${s.amount}</td><td>${pill(s.status)}</td></tr>`).join('')}
    </tbody></table>
  </div>`;
}

// ═══════════════════════════════════════════════════════
// CARBON
// ═══════════════════════════════════════════════════════
function carbonPage(){
  const total=S.carbonMaterials.reduce((a,m)=>a+m.total,0);
  const budget=152;
  return`${ph('🌿','Carbon Tracking','Embodied carbon calculation — sustainability compliance')}
  <div class="g4" style="margin-bottom:16px">
    <div class="sc"><div class="sv">${total.toFixed(1)}</div><div class="sl">Total tCO₂e</div></div>
    <div class="sc"><div class="sv">${budget}</div><div class="sl">Project Target</div></div>
    <div class="sc" style="background:var(--green-bg)"><div class="sv" style="color:var(--green)">On Track</div><div class="sl">LEED v4 Status</div></div>
    <div class="sc"><div class="sv">${(total/budget*100).toFixed(0)}%</div><div class="sl">Budget Used</div></div>
  </div>
  <div class="card">
    <div class="ch">Materials Carbon Breakdown</div>
    <table class="tbl"><thead><tr><th>Material</th><th>Qty</th><th>Carbon Factor</th><th>Total (tCO₂e)</th><th>% of Budget</th></tr></thead><tbody>
      ${S.carbonMaterials.map(m=>{const pct=(m.total/budget*100).toFixed(1);return`<tr><td><strong>${m.name}</strong></td><td>${m.qty} ${m.unit}</td><td style="color:var(--muted)">${m.factor} tCO₂e/${m.unit}</td><td><strong>${m.total}</strong></td><td style="min-width:100px"><div class="pb"><div class="pf" style="width:${pct}%;background:var(--green)"></div></div><div style="font-size:9px;color:var(--muted);margin-top:1px">${pct}%</div></td></tr>`;}).join('')}
    </tbody></table>
    <div style="margin-top:12px"><div style="display:flex;justify-content:space-between;font-size:11px;color:var(--muted);margin-bottom:4px"><span>Total vs Budget</span><span>${total.toFixed(1)} / ${budget} tCO₂e</span></div><div class="pb" style="height:8px"><div class="pf" style="width:${(total/budget*100).toFixed(0)}%;background:var(--green)"></div></div></div>
  </div>`;
}

// ═══════════════════════════════════════════════════════
// SAFETY — DAILY CHECKLIST
// ═══════════════════════════════════════════════════════
function safetyPage(){
  const done=Object.values(S.safetyChecked).filter(Boolean).length;
  const pct=Math.round(done/SAFETY_ITEMS.length*100);
  return`${ph('🦺','Daily Safety Checklist','Site compliance check for today')}
  <div class="g2">
    <div class="card">
      <div class="ch">Checklist</div>
      <div style="margin-bottom:14px">
        <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--muted);margin-bottom:5px"><span>${done} / ${SAFETY_ITEMS.length} complete</span><strong style="color:${pct===100?'var(--green)':'var(--ink)'}">${pct}%</strong></div>
        <div class="pb"><div class="pf" style="width:${pct}%;background:${pct===100?'var(--green)':'var(--blue)'}"></div></div>
      </div>
      ${SAFETY_ITEMS.map(item=>`<label class="chk-row"><input type="checkbox" data-sc="${item.id}"${S.safetyChecked[item.id]?' checked':''}/><span style="font-size:12.5px;${S.safetyChecked[item.id]?'color:var(--faint);text-decoration:line-through':''}">${item.txt}</span></label>`).join('')}
      <div class="field" style="margin-top:12px"><label>Hazard Notes</label><textarea class="inp" id="safetyNote" placeholder="Describe any hazards or observations...">${S.safetyNote}</textarea></div>
      ${S.safetyDone?`<div style="padding:11px;background:var(--green-bg);border-radius:7px;color:var(--green);font-weight:700;text-align:center;margin-top:8px">✓ Report submitted for today</div>`:`<button class="btn b-ink b-full" id="safetySubmit" style="margin-top:8px">Submit Daily Report</button>`}
    </div>
    <div class="card">
      <div class="ch">Compliance Score</div>
      <div style="text-align:center;padding:22px 0 14px;border-bottom:1px solid var(--border);margin-bottom:12px">
        <div style="font-family:var(--fh);font-size:48px;font-weight:800;color:${pct===100?'var(--green)':'var(--blue)'}">${pct}%</div>
        <div style="font-size:11px;color:var(--faint)">Today's compliance</div>
      </div>
      ${SAFETY_ITEMS.map(item=>`<div style="display:flex;gap:8px;align-items:center;padding:6px 0;border-bottom:.5px solid var(--border);font-size:11.5px"><span>${S.safetyChecked[item.id]?'✅':'⬜'}</span><span style="color:${S.safetyChecked[item.id]?'var(--faint)':'var(--text)'}">${item.txt}</span></div>`).join('')}
    </div>
  </div>`;
}

// ═══════════════════════════════════════════════════════
// SAFETY — MEETINGS
// ═══════════════════════════════════════════════════════
function meetingsPage(){
  return`${ph('📢','Safety Meetings','Pre-shift toolbox talks and safety meeting records')}
  <div class="g2">
    <div class="card">
      <div class="ch">Today's Meeting Checklist</div>
      ${MEETING_ITEMS.map(item=>`<label class="chk-row"><input type="checkbox" data-mc="${item.id}"${S.meetingChecked[item.id]?' checked':''}/><span style="font-size:12.5px;${S.meetingChecked[item.id]?'color:var(--faint);text-decoration:line-through':''}">${item.txt}</span></label>`).join('')}
      <div class="field" style="margin-top:12px"><label>Attendees</label><input class="inp" placeholder="James H., Maria L., Derek W., ..."/></div>
      <div class="field"><label>Key Topics Discussed</label><textarea class="inp" placeholder="Hazards reviewed, upcoming tasks, PPE reminders..."></textarea></div>
      <div class="field"><label>Meeting Duration (minutes)</label><input class="inp" type="number" placeholder="15"/></div>
      ${S.meetingDone?`<div style="padding:11px;background:var(--green-bg);border-radius:7px;color:var(--green);font-weight:700;text-align:center;margin-top:8px">✓ Meeting signed off and recorded</div>`:`<button class="btn b-ink b-full" id="meetingSignOff" style="margin-top:8px">Sign Off & Record Meeting</button>`}
    </div>
    <div class="card">
      <div class="ch">Past Meetings</div>
      ${[['2025-06-02','9 attended','Fall protection, scaffold inspection','15 min'],['2025-06-01','7 attended','Electrical lockout procedures','20 min'],['2025-05-30','11 attended','Site orientation — new crew','30 min'],['2025-05-29','8 attended','Crane safety and exclusion zones','18 min']].map(([d,a,t,dur])=>`
        <div style="padding:10px 0;border-bottom:.5px solid var(--border)">
          <div style="display:flex;justify-content:space-between;align-items:center"><strong style="font-size:12.5px">${d}</strong>${pill('Closed')}</div>
          <div style="font-size:10.5px;color:var(--muted);margin-top:2px">${a} · ${dur} · ${t}</div>
        </div>`).join('')}
    </div>
  </div>`;
}

// ═══════════════════════════════════════════════════════
// SAFETY — INCIDENTS
// ═══════════════════════════════════════════════════════
function incidentsPage(){
  return`${ph('⚠️','Incident Investigation','Log, investigate and report site incidents',`<button class="btn b-red">+ Report Incident</button>`)}
  <div class="g2">
    <div class="card">
      <div class="ch">Incident Log</div>
      <table class="tbl"><thead><tr><th>Date</th><th>Type</th><th>Description</th><th>Status</th></tr></thead><tbody>
        ${S.incidents.map(i=>`<tr><td>${i.date}</td><td><span class="pill p-gold">${i.type}</span></td><td>${i.desc}</td><td>${pill(i.status)}</td></tr>`).join('')}
      </tbody></table>
    </div>
    <div class="card">
      <div class="ch">File New Report</div>
      <div class="field"><label>Date & Time</label><input class="inp" type="datetime-local"/></div>
      <div class="field"><label>Incident Type</label><select class="inp"><option>Near Miss</option><option>First Aid</option><option>Medical Aid</option><option>Lost Time Injury</option><option>Property Damage</option><option>Environmental Release</option></select></div>
      <div class="field"><label>Location on Site</label><input class="inp" placeholder="e.g. Floor 3, North stairwell"/></div>
      <div class="field"><label>Workers Involved</label><input class="inp" placeholder="Name(s) of involved parties"/></div>
      <div class="field"><label>Description</label><textarea class="inp" placeholder="Describe exactly what happened, sequence of events..."></textarea></div>
      <div class="field"><label>Immediate Actions Taken</label><textarea class="inp" placeholder="First aid, evacuation, notifications..."></textarea></div>
      <div class="field"><label>Root Cause (preliminary)</label><textarea class="inp" placeholder="Initial assessment of root cause..."></textarea></div>
      <div class="field"><label>Corrective Actions</label><textarea class="inp" placeholder="Steps to prevent recurrence..."></textarea></div>
      <div class="field"><label>Photos / Evidence</label><input class="inp" type="file" multiple accept="image/*"/></div>
      <button class="btn b-ink b-full">Submit Incident Report</button>
    </div>
  </div>`;
}

// ═══════════════════════════════════════════════════════
// SAFETY — TRAINING
// ═══════════════════════════════════════════════════════
function trainingPage(){
  return`${ph('🎓','Safety Training','Manage crew certifications and training compliance')}
  <div class="g2">
    <div class="card">
      <div class="ch">Training Register <button class="btn b-ink b-sm">+ Assign</button></div>
      <table class="tbl"><thead><tr><th>Course</th><th>Assigned To</th><th>Due Date</th><th>Status</th></tr></thead><tbody>
        ${S.trainings.map(t=>`<tr><td><strong>${t.name}</strong></td><td>${t.assigned}</td><td>${t.due}</td><td>${pill(t.status)}</td></tr>`).join('')}
      </tbody></table>
    </div>
    <div class="card">
      <div class="ch">Compliance Overview</div>
      ${[['Fall Protection','92%','var(--green)'],['WHMIS 2015','100%','var(--green)'],['First Aid Level 1','75%','var(--amber)'],['Confined Space Entry','40%','var(--red)'],['Working at Heights','88%','var(--green)']].map(([name,pct,color])=>`
        <div style="margin-bottom:13px">
          <div style="display:flex;justify-content:space-between;font-size:12.5px;margin-bottom:4px"><span>${name}</span><strong style="color:${color}">${pct}</strong></div>
          <div class="pb"><div class="pf" style="width:${pct};background:${color}"></div></div>
        </div>`).join('')}
    </div>
  </div>`;
}

// ═══════════════════════════════════════════════════════
// SAFETY — HAZARDS
// ═══════════════════════════════════════════════════════
function hazardsPage(){
  return`${ph('🔶','Hazard Register','Identify, assess and mitigate site hazards',`<button class="btn b-red">+ Log Hazard</button>`)}
  <div class="card">
    <div class="ch">Active Hazard Register</div>
    <table class="tbl"><thead><tr><th>#</th><th>Hazard</th><th>Risk Level</th><th>Control Measure</th><th>Status</th></tr></thead><tbody>
      ${S.hazards.map(h=>`<tr><td style="color:var(--faint)">${h.id}</td><td><strong>${h.hazard}</strong></td><td>${pill(h.risk)}</td><td style="font-size:11.5px;color:var(--muted)">${h.control}</td><td>${pill(h.status)}</td></tr>`).join('')}
    </tbody></table>
  </div>
  <div class="card" style="margin-top:16px">
    <div class="ch">Log New Hazard</div>
    <div class="r2">
      <div class="field"><label>Hazard Description</label><input class="inp" placeholder="Describe the hazard..."/></div>
      <div class="field"><label>Location</label><input class="inp" placeholder="e.g. Floor 3, East wing"/></div>
    </div>
    <div class="r2">
      <div class="field"><label>Risk Level</label><select class="inp"><option>High</option><option>Medium</option><option>Low</option></select></div>
      <div class="field"><label>Control Measure</label><input class="inp" placeholder="Action taken to mitigate..."/></div>
    </div>
    <button class="btn b-ink">Add to Register</button>
  </div>`;
}

// ═══════════════════════════════════════════════════════
// SAFETY — INSPECTIONS
// ═══════════════════════════════════════════════════════
function inspectionsPage(){
  return`${ph('🔍','Inspections & Risk Assessments','Formal site inspections and compliance audits')}
  <div class="g2">
    <div class="card">
      <div class="ch">Inspection History</div>
      ${[['Weekly Site Walk','2025-06-02','P. Sullivan','12 items — 2 deficiencies','Closed'],
         ['Crane Pre-Use Inspection','2025-06-01','J. Hartmann','All items compliant','Closed'],
         ['Fire & Life Safety Audit','2025-05-28','R. Singh','3 deficiencies found','Open'],
         ['Scaffolding Inspection','2025-05-25','M. Liu','Pass — re-inspect in 7 days','Closed']].map(([name,date,by,result,status])=>`
        <div style="padding:10px 0;border-bottom:.5px solid var(--border)">
          <div style="display:flex;justify-content:space-between;align-items:center"><strong style="font-size:12.5px">${name}</strong>${pill(status)}</div>
          <div style="font-size:10.5px;color:var(--muted);margin-top:2px">${date} · ${by}</div>
          <div style="font-size:11.5px;margin-top:2px">${result}</div>
        </div>`).join('')}
    </div>
    <div class="card">
      <div class="ch">New Inspection Report</div>
      <div class="field"><label>Inspection Type</label><select class="inp"><option>Weekly Site Walk</option><option>Pre-Use Equipment Check</option><option>Fire & Life Safety</option><option>Scaffold Inspection</option><option>Electrical Safety Audit</option><option>Environmental Audit</option></select></div>
      <div class="field"><label>Inspector Name</label><input class="inp" placeholder="Your name"/></div>
      <div class="field"><label>Date</label><input class="inp" type="date"/></div>
      <div class="field"><label>Items Inspected</label><input class="inp" type="number" placeholder="12"/></div>
      <div class="field"><label>Findings / Notes</label><textarea class="inp" placeholder="Describe findings, deficiencies, or pass notes..."></textarea></div>
      <div class="field"><label>Deficiencies Identified</label><textarea class="inp" placeholder="List any deficiencies or non-conformances..."></textarea></div>
      <div class="field"><label>Photos</label><input class="inp" type="file" multiple accept="image/*"/></div>
      <button class="btn b-ink b-full">Submit Inspection Report</button>
    </div>
  </div>`;
}

// ═══════════════════════════════════════════════════════
// SAFETY — COMPLIANCE
// ═══════════════════════════════════════════════════════
function compliancePage(){
  const done=Object.values(S.complianceChecked).filter(Boolean).length;
  const pct=Math.round(done/COMPLIANCE_ITEMS.length*100);
  return`${ph('📜','Compliance & Enforcement','Regulatory compliance tracking and enforcement log')}
  <div class="g2">
    <div class="card">
      <div class="ch">Compliance Checklist</div>
      <div style="margin-bottom:14px">
        <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--muted);margin-bottom:5px"><span>${done} / ${COMPLIANCE_ITEMS.length}</span><strong style="color:${pct===100?'var(--green)':'var(--ink)'}">${pct}%</strong></div>
        <div class="pb"><div class="pf" style="width:${pct}%;background:${pct===100?'var(--green)':'var(--blue)'}"></div></div>
      </div>
      ${COMPLIANCE_ITEMS.map(item=>`<label class="chk-row"><input type="checkbox" data-cc="${item.id}"${S.complianceChecked[item.id]?' checked':''}/><span style="font-size:12.5px;${S.complianceChecked[item.id]?'color:var(--faint);text-decoration:line-through':''}">${item.txt}</span></label>`).join('')}
      <button class="btn b-ink b-full" id="complianceSubmit" style="margin-top:10px">Save Compliance Record</button>
    </div>
    <div class="card">
      <div class="ch">Recent Orders & Notices</div>
      ${[['Stop Work Order','2025-04-15','Inspector: MLITSD','Unprotected floor opening FL2','Closed'],
         ['Written Notice','2025-03-20','Inspector: MLITSD','Missing WHMIS labels in storage','Closed'],
         ['Compliance Order','2025-02-10','Inspector: City Building','Inadequate site signage','Closed']].map(([type,date,by,issue,status])=>`
        <div style="padding:10px 0;border-bottom:.5px solid var(--border)">
          <div style="display:flex;justify-content:space-between;align-items:center"><strong style="font-size:12.5px">${type}</strong>${pill(status)}</div>
          <div style="font-size:10.5px;color:var(--muted);margin-top:2px">${date} · ${by}</div>
          <div style="font-size:11.5px;margin-top:2px">${issue}</div>
        </div>`).join('')}
    </div>
  </div>`;
}

// ═══════════════════════════════════════════════════════
// AI COPILOT
// ═══════════════════════════════════════════════════════
function aiPage(){
  return`${ph('🤖','AI Copilot','Ask anything about your project — powered by Construction AI')}
  <div class="g2">
    <div class="card" style="display:flex;flex-direction:column">
      <div class="ch">Chat</div>
      <div id="aiWrap" style="flex:1;overflow-y:auto;max-height:360px;display:flex;flex-direction:column;gap:10px;margin-bottom:12px;padding-right:4px">
        ${S.aiMessages.map(m=>`<div style="display:flex;gap:8px;align-items:flex-start;${m.role==='user'?'flex-direction:row-reverse':''}">
          <div class="ai-avatar" style="${m.role==='user'?'background:var(--ink3);color:#fff':''}">${m.role==='user'?'👤':'🤖'}</div>
          <div class="${m.role==='user'?'ai-bubble user-bubble':'ai-bubble'}">${m.text}</div>
        </div>`).join('')}
        ${S.aiLoading?`<div style="display:flex;gap:8px"><div class="ai-avatar">🤖</div><div class="ai-bubble" style="color:var(--muted)">Analysing…</div></div>`:''}
      </div>
      <div style="display:flex;gap:8px">
        <input class="inp" id="aiInput" placeholder="Ask about your project..." value="${S.aiInput}" style="flex:1"/>
        <button class="btn b-gold" id="aiSend">Send</button>
      </div>
    </div>
    <div class="card">
      <div class="ch">Quick Actions</div>
      ${[
        ['📊 Summarize project status','Summarize the current overall project status.'],
        ['💸 Predict budget overruns','Which cost codes are most at risk of overrunning?'],
        ['📋 Generate task list','Generate an initial task list for an office renovation.'],
        ['⚠ Flag top safety risks','What are the highest priority safety risks right now?'],
        ['📅 Identify schedule delays','Which tasks are behind and what is the impact?'],
        ['🌿 Carbon summary','Summarize the embodied carbon status vs our target.'],
      ].map(([label,prompt])=>`<button class="btn b-out b-sm" style="width:100%;text-align:left;margin-bottom:7px;padding:9px 11px" data-aip="${prompt}">${label}</button>`).join('')}
    </div>
  </div>`;
}

// ═══════════════════════════════════════════════════════
// AUTH
// ═══════════════════════════════════════════════════════
function authHTML(){
  return`<div class="auth-screen">
    <div class="auth-card">
      <div class="auth-logo">⬡ <span class="badge">Wizzard</span></div>
      <p style="font-size:12px;color:var(--muted);margin-bottom:2px">Sign in to access your platform</p>
      <div class="a-tabs">
        <button class="a-tab${S.authMode==='signup'?' active':''}" id="tabSU">New Account</button>
        <button class="a-tab${S.authMode==='signin'?' active':''}" id="tabSI">Sign In</button>
      </div>
      <div class="field"><label>Email</label><input class="inp" id="aEmail" type="email" value="${S.email}" placeholder="you@company.com"/></div>
      <div class="field"><label>Password</label><input class="inp" id="aPw" type="password" value="${S.pw}" placeholder="••••••••"/></div>
      <button class="btn b-ink b-full" id="aBtn">${S.authMode==='signup'?'Create Account & Enter':'Sign In'}</button>
      <button class="btn b-out b-full" style="margin-top:7px" id="aBack">← Back to Home</button>
    </div>
  </div>`;
}

// ═══════════════════════════════════════════════════════
// MODAL
// ═══════════════════════════════════════════════════════
function modalHTML(){
  return`<div class="modal-bg" id="modalBg">
    <div class="modal-box">
      <h3>Upgrade to Pro</h3>
      <p class="modal-sub">Unlock all 16+ modules: AI Copilot, GPS Tracking, Job Costing, Drawing Markups, AR, Carbon Tracking, Bid Tender and more.</p>
      <div class="field"><label>Plan</label><select class="inp"><option>Starter — $49/month</option><option>Pro — $99/month</option><option>Premium Builder — $199/month</option></select></div>
      <div class="field"><label>Payment Method</label><select class="inp" id="pmSel">${['Visa','Mastercard','American Express','Apple Pay','Google Pay'].map(m=>`<option${S.payMethod===m?' selected':''}>${m}</option>`).join('')}</select></div>
      <button class="btn b-gold b-full" id="payBtn">Pay & Unlock All Features</button>
      <button class="btn b-out b-full" style="margin-top:7px" id="closeModal">Cancel</button>
    </div>
  </div>`;
}

// ═══════════════════════════════════════════════════════
// BIND
// ═══════════════════════════════════════════════════════
function bindAll(){
  const g=id=>document.getElementById(id);
  const go=p=>{S.page=p;render()};
  const openModal=()=>{S.showModal=true;render()};

  document.querySelectorAll('[data-go]').forEach(el=>el.addEventListener('click',()=>go(el.dataset.go)));
  g('topUpgrade')?.addEventListener('click',openModal);
  g('topExit')?.addEventListener('click',()=>{S.signedIn=false;S.page='home';render()});
  g('gateBtn')?.addEventListener('click',openModal);
  g('banBtn')?.addEventListener('click',openModal);
  g('lkPdf')?.addEventListener('click',openModal);
  g('lkExport')?.addEventListener('click',openModal);

  // Modal
  g('modalBg')?.addEventListener('click',e=>{if(e.target===g('modalBg')){S.showModal=false;render()}});
  g('closeModal')?.addEventListener('click',()=>{S.showModal=false;render()});
  g('pmSel')?.addEventListener('change',e=>S.payMethod=e.target.value);
  g('payBtn')?.addEventListener('click',()=>{S.isPaid=true;S.showModal=false;render()});

  // Estimator
  const ef=(id,key)=>g(`e_${id}`)?.addEventListener('input',e=>S.est[key]=e.target.value);
  ef('pn','pn');ef('cn','cn');
  g('e_cur')?.addEventListener('change',e=>{S.est.currency=e.target.value;render()});
  g('e_tr')?.addEventListener('change',e=>{S.est.trade=e.target.value;S.est.csf=TRADES[e.target.value].cost;render()});
  ['sf','csf','mat','lab','oh','pr'].forEach(id=>g(`e_${id}`)?.addEventListener('input',e=>{S.est[id]=+e.target.value||0}));
  g('calcBtn')?.addEventListener('click',()=>render());

  // Bids
  g('toggleBidForm')?.addEventListener('click',()=>{S.showBidForm=!S.showBidForm;render()});
  g('addBidBtn')?.addEventListener('click',()=>{
    const p=g('nb_p')?.value,c=g('nb_c')?.value,v=g('nb_v')?.value,t=g('nb_t')?.value;
    if(!p||!c||!v){alert('Please fill all fields.');return;}
    S.bids.push({id:Date.now(),project:p,client:c,value:+v,status:'Pending',trade:t});
    S.showBidForm=false;render();
  });

  // Daily Log
  g('showLogForm')?.addEventListener('click',()=>{S.showLogForm=!S.showLogForm;render()});
  g('submitLog')?.addEventListener('click',()=>{
    const d=g('log_d')?.value;
    if(!d){alert('Please select a date.');return;}
    S.logs.unshift({id:Date.now(),date:d,weather:g('log_w')?.value||'Clear',crew:+(g('log_c')?.value||0),notes:g('log_n')?.value||'No notes.',photos:0});
    S.showLogForm=false;render();
  });

  // Safety checkboxes
  document.querySelectorAll('[data-sc]').forEach(el=>el.addEventListener('change',e=>{S.safetyChecked[el.dataset.sc]=e.target.checked;render()}));
  g('safetyNote')?.addEventListener('input',e=>S.safetyNote=e.target.value);
  g('safetySubmit')?.addEventListener('click',()=>{
    if(Object.values(S.safetyChecked).filter(Boolean).length<SAFETY_ITEMS.length){alert(`Complete all ${SAFETY_ITEMS.length} items first.`);return;}
    S.safetyDone=true;render();
  });

  // Meeting checkboxes
  document.querySelectorAll('[data-mc]').forEach(el=>el.addEventListener('change',e=>{S.meetingChecked[el.dataset.mc]=e.target.checked;render()}));
  g('meetingSignOff')?.addEventListener('click',()=>{S.meetingDone=true;render()});

  // Compliance checkboxes
  document.querySelectorAll('[data-cc]').forEach(el=>el.addEventListener('change',e=>{S.complianceChecked[el.dataset.cc]=e.target.checked;render()}));
  g('complianceSubmit')?.addEventListener('click',()=>alert('Compliance record saved.'));

  // AI
  g('aiSend')?.addEventListener('click',sendAI);
  g('aiInput')?.addEventListener('keydown',e=>{if(e.key==='Enter')sendAI()});
  document.querySelectorAll('[data-aip]').forEach(el=>el.addEventListener('click',()=>{
    S.aiInput=el.dataset.aip;
    if(g('aiInput'))g('aiInput').value=S.aiInput;
  }));
}

function bindHero(){
  const go=p=>{S.page=p;render()};
  document.getElementById('hSignup')?.addEventListener('click',()=>{S.authMode='signup';go('estimator')});
  document.getElementById('hSignin')?.addEventListener('click',()=>{S.authMode='signin';go('estimator')});
  const TOOL_MAP={'Estimator':'estimator','BidTender':'bidtender','DailyLogs':'dailylog','PunchLists':'punchlist','ScheduleSync':'schedule','JobCosting':'jobcost','ChangeOrders':'changes','Invoice&Quote':'invoice','SubPortal':'subportal','GPSTimeTracking':'gps','SafetySuite':'safety','AICopilot':'ai','DrawingMarkups':'drawings','DroneUploads':'drone','ARVisualization':'ar','CarbonTracking':'carbon'};
  document.querySelectorAll('[data-tool]').forEach(el=>el.addEventListener('click',()=>{
    const key=el.dataset.tool.replace(/\s+/g,'');
    const dest=TOOL_MAP[key]||'estimator';
    S.page=dest;render();
  }));
  if(S.showModal)bindModal();
}

function bindModal(){
  const g=id=>document.getElementById(id);
  g('modalBg')?.addEventListener('click',e=>{if(e.target===g('modalBg')){S.showModal=false;render()}});
  g('closeModal')?.addEventListener('click',()=>{S.showModal=false;render()});
  g('pmSel')?.addEventListener('change',e=>S.payMethod=e.target.value);
  g('payBtn')?.addEventListener('click',()=>{S.isPaid=true;S.showModal=false;render()});
}

function bindAuth(){
  const g=id=>document.getElementById(id);
  g('tabSU')?.addEventListener('click',()=>{S.authMode='signup';render()});
  g('tabSI')?.addEventListener('click',()=>{S.authMode='signin';render()});
  g('aEmail')?.addEventListener('input',e=>S.email=e.target.value);
  g('aPw')?.addEventListener('input',e=>S.pw=e.target.value);
  g('aBtn')?.addEventListener('click',()=>{
    if(!S.email||!S.pw){alert('Please enter email and password.');return;}
    S.signedIn=true;render();
  });
  g('aBack')?.addEventListener('click',()=>{S.page='home';render()});
}

function sendAI(){
  const input=document.getElementById('aiInput')?.value?.trim();
  if(!input)return;
  S.aiMessages.push({role:'user',text:input});
  S.aiInput='';S.aiLoading=true;render();
  setTimeout(()=>{
    const RESPONSES={
      'status':'Project is 48% complete. Structural steel is 5 days behind — pushing electrical and drywall downstream. Budget tracking within 3%. 2 open safety incidents need resolution before next inspection.',
      'budget':'Cost code 3000 (Structural Steel) is at 91% of budget with significant work remaining — high overrun risk. Code 2000 (Concrete) is also near cap. Recommend scope review this week.',
      'task':'Generated task list: 1) Site mobilization & temporary utilities 2) Demolition & strip-out 3) Structural assessment & remediation 4) MEP rough-in 5) Framing & drywall 6) Ceiling & flooring 7) Finishes & FFE 8) Commissioning 9) Final inspections & handover.',
      'safety':'Top risks: 1) Overhead crane exclusion zone needs stricter enforcement — 2 near-miss events this month. 2) Confined space entry crew not fully certified (40%). 3) Two open incidents unresolved.',
      'delay':'Structural steel is 5 days behind. Cascading impact: Electrical rough-in delayed 5 days, drywall 7 days, finishes 10 days. Projected completion shifts from Aug 15 to Aug 25.',
      'carbon':`Embodied carbon is at ${(S.carbonMaterials.reduce((a,m)=>a+m.total,0)).toFixed(1)} tCO₂e vs ${152} target — ${((S.carbonMaterials.reduce((a,m)=>a+m.total,0))/152*100).toFixed(0)}% of budget used. Currently on track for LEED v4. Structural steel is the largest contributor at 70.1 tCO₂e.`,
    };
    const key=Object.keys(RESPONSES).find(k=>input.toLowerCase().includes(k));
    S.aiMessages.push({role:'ai',text:key?RESPONSES[key]:`I've reviewed your project data across all modules. Here's my summary: the project is tracking close to plan but has three key watch areas — structural steel schedule, steel budget overrun risk, and two unresolved safety incidents. Would you like me to go deeper on any of these?`});
    S.aiLoading=false;render();
    setTimeout(()=>{const w=document.getElementById('aiWrap');if(w)w.scrollTop=w.scrollHeight;},50);
  },1100);
}

render();
</script>
</body>
</html>
