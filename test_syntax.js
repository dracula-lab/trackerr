
const ROADMAP = [
  {id:'python', name:'Python fundamentals', color:'blue', items:[
    'Syntax, data types, loops, functions','String / list / dict operations','File handling',
    'OOP basics (classes, objects, inheritance)','Write a 30-50 line program unaided']},
  {id:'dsa', name:'DSA foundations', color:'purple', items:[
    'Arrays & Strings','Recursion','Sorting & Searching','Linked Lists','Stacks & Queues',
    'Hashing','Trees','Graphs (BFS/DFS)','Dynamic Programming (basic)','150-200 problems solved']},
  {id:'core', name:'CS core subjects', color:'teal', items:[
    'DBMS (ER, normalization, SQL, transactions, indexing)','Operating Systems (processes, scheduling, deadlocks, memory)',
    'Computer Networks (OSI/TCP-IP, HTTP/HTTPS, DNS)','OOP concepts with Python examples']},
  {id:'ai_ds', name:'AI & Data Science Specialization', color:'amber', items:[
    'NumPy, Pandas & EDA','Matplotlib / Seaborn','Statistics & Probability',
    'Scikit-learn (Regression, Classification, Clustering)','Deep Learning basics (Neural Networks, PyTorch/TensorFlow)',
    'Compare/build advanced models (e.g., Auto-Associative Memory)']},
  {id:'nptel', name:'NPTEL & SWAYAM Certifications', color:'cyan', items:[
    'C Programming and Assembly Language assignments',
    'Marketing Research and Analysis-II prep',
    'English Language for Competitive Exams prep',
    'Register for upcoming proctored exams']},
  {id:'leadership', name:'Campus Leadership & Events', color:'rose', items:[
    'Coordinate multi-track student competitions (ideathons, debates)',
    'Manage campus awareness campaigns (e.g., energy conservation)',
    'Draft event itineraries and timing sheets',
    'Translate leadership experience into resume bullet points']},
  {id:'proj', name:'Projects + GitHub', color:'pink', items:[
    'EDA project on a public dataset','ML prediction project (classification/regression)',
    'SQL + Python integration project','DSA/algorithms project (benchmark or recommender)',
    'All projects on GitHub with clean READMEs']},
  {id:'apt', name:'Aptitude + verbal (CRT)', color:'green', items:[
    'Quantitative aptitude basics','Logical reasoning (puzzles, series, seating)','Verbal (RC, grammar, vocab)',
    'Weekly mock tests once CRT starts']},
  {id:'resume', name:'Resume, LinkedIn, interviews', color:'slate', items:[
    'LinkedIn profile built (headline, about, projects)','Resume drafted and reviewed',
    '2-3 project deep-dives you can explain end-to-end','Mock interviews done','"Why data science" answer ready']}
];

const CATEGORY_COLOR = {
  'python':'blue', 'dsa':'purple', 'core-cs':'teal', 'ai_ds':'amber',
  'course':'cyan', 'project':'pink', 'aptitude':'green', 'nptel':'cyan', 
  'leadership':'rose', 'other':'slate'
};
const DEFAULT_COURSE_URL = 'https://courses.aajsecode.com/s/courses/663f10c1b48d0c3f23f4ac0b/take';
const LINKS_CONFIG = [
  {id:'leetcode', label:'LeetCode', color:'amber', type:'profile', base:'https://leetcode.com', profile:u=>`https://leetcode.com/u/${u}/`},
  {id:'github', label:'GitHub', color:'slate', type:'profile', base:'https://github.com', profile:u=>`https://github.com/${u}`},
  {id:'gfg', label:'GeeksforGeeks', color:'green', type:'profile', base:'https://www.geeksforgeeks.org', profile:u=>`https://www.geeksforgeeks.org/user/${u}/`},
  {id:'linkedin', label:'LinkedIn', color:'blue', type:'profile', base:'https://www.linkedin.com', profile:u=>`https://www.linkedin.com/in/${u}/`},
  {id:'jecrc', label:'JECRC University', color:'rose', type:'url', base:'https://jecrcuniversity.edu.in/'},
  {id:'course', label:'My Course', color:'cyan', type:'url', base:DEFAULT_COURSE_URL}
];
const TUTOR_SYSTEM = "You are a capable, direct assistant for a 3rd-year B.Tech CSE (AI & DS) student. You're especially strong at coding, DSA, core CS, data science, and full-stack development — use whichever programming language actually fits the question, not just Python. But you are not limited to coding at all: answer general knowledge, other academic subjects, writing help, everyday advice, or anything else they ask, just as capably and directly as any general-purpose assistant would. If an image, video, or file is attached, look at it carefully and use it to answer. Keep answers clear and focused, not padded.";
const COURSE_NOTES_SYSTEM = "You are a study-notes assistant. The student just finished a lesson in a Full Stack Development course and is giving you their own rough notes or summary of what it covered. Turn that into: (1) clean, well-organized study notes using short headings and bullet points, staying strictly within what they described — do not invent facts about the lesson you weren't told, and (2) a section titled 'Review questions' with 4-6 questions (mix of conceptual and practical/code-based) that test the material, without answering them. Keep it tight and skimmable.";
const MOCK_INTERVIEW_SYSTEM = "You are conducting a mock placement interview for a 3rd-year B.Tech CSE (AI & DS) student preparing for campus placements (Python, DSA, core CS subjects, data science, and a full-stack web dev course). Ask exactly ONE interview-style question — keep it short and realistic, the way a real interviewer would phrase it. Mix it up across turns: sometimes technical (DSA, core CS, a project deep-dive), sometimes behavioral/HR-style ('tell me about yourself', 'why this role', a conflict-resolution scenario). Only output the question itself, nothing else — no preamble, no answer.";
const MOCK_FEEDBACK_SYSTEM = "You are an experienced technical interviewer giving feedback on a candidate's spoken answer to a mock interview question. Be honest and specific: what worked, what was missing, vague, or too rambling, and one concrete way to strengthen it. Keep it short — a few sentences or bullet points, not an essay. End with one brief line of encouragement.";
const WEEKLY_RECAP_SYSTEM = "You are a supportive but honest study coach reviewing a placement-prep student's activity log from the past 7 days. You'll be given a raw list of what they logged (date, category, short description, hours). Write a short weekly recap: (1) what they actually got done, staying strictly to what's listed — don't invent anything, (2) one honest observation about the pattern (e.g. a category they've been avoiding, or good consistency), (3) one clear, specific suggestion for what to prioritize next week. Keep it warm but direct — a short paragraph or a few bullet points, not long.";
const RESUME_REVIEW_SYSTEM = "You are an experienced campus-placement recruiter reviewing resumes for CS/AI/Data-Science student applicants in India. The student will paste their resume as plain text. Review it specifically for campus placement and internship applications, organized with short headings: (1) first impression in one line, (2) concrete strengths, (3) weak or vague bullet points — quote the specific line and suggest a stronger, more measurable rewrite, (4) anything missing that recruiters expect (quantified impact, project links, relevant coursework, a clear skills section), (5) formatting or ATS red flags apparent from the text structure (inconsistent dates, walls of text, no clear sections). Be direct and specific to what they actually wrote, not generic advice.";
const GEMINI_MODEL = 'gemini-1.5-flash';

if(!window.storage){
  window.storage = {
    async get(key){
      const raw = localStorage.getItem('cj_'+key);
      if(raw===null) throw new Error('not found');
      return { key, value: raw, shared:false };
    },
    async set(key, value){
      localStorage.setItem('cj_'+key, value);
      return { key, value, shared:false };
    },
    async delete(key){
      localStorage.removeItem('cj_'+key);
      return { key, deleted:true, shared:false };
    },
    async list(prefix){
      const p = 'cj_'+(prefix||'');
      const keys = Object.keys(localStorage).filter(k=>k.startsWith(p)).map(k=>k.slice(3));
      return { keys, prefix, shared:false };
    }
  };
}
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(regs => {
    for (let r of regs) r.unregister();
  }).catch(()=>{});
}
if ('caches' in window) {
  caches.keys().then(names => {
    for (let name of names) caches.delete(name);
  }).catch(()=>{});
}

let state = {
  checklist:{}, logs:[], notes:'', chat:[], links:{}, focusPhase:null,
  taskLevel:1, tasksCompleted:0, dailyTask:null,
  course:{items:[]}, courseLog:[], geminiKey:'', grokKey:'', openrouterKey:'', aiProvider:'openrouter', selectedGrokModel:'grok-2-latest', selectedOpenrouterModel:'google/gemini-2.0-flash-lite-preview-02-05:free', noteAttachments:[],
  targetDate:null, achievements:[], mockInterview:{history:[], currentQuestion:null},
  companies:[], weeklyRecaps:[], goals:[], reminders:[], arcade:{xp:0,correct:0,total:0,dailyStreak:0,lastCorrectDate:null,answers:{}}, snakeBest:0, typingBest:0, resumeText:'', resumeReviews:[]
};
let saveTimer = null;
let pendingAttachment = null; 

function todayStr(d=new Date()){
  const local = new Date(d.getTime() - d.getTimezoneOffset()*60000);
  return local.toISOString().slice(0,10);
}
function colorVar(name){ return 'var(--'+name+')'; }
function colorBgVar(name){ return 'var(--'+name+'-bg)'; }
function escapeHtml(s){
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}
async function copyText(text, button){
  const value = String(text||'');
  if(!value.trim()) return;
  try{
    if(navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(value);
    else {
      const area=document.createElement('textarea'); area.value=value; area.setAttribute('readonly',''); area.style.position='fixed'; area.style.opacity='0';
      document.body.appendChild(area); area.select(); document.execCommand('copy'); area.remove();
    }
    if(button){ const original=button.textContent; button.textContent='copied'; button.classList.add('copied'); setTimeout(()=>{button.textContent=original;button.classList.remove('copied');},1200); }
  }catch(e){ alert('Could not copy automatically. Please select the text and copy it manually.'); }
}

async function loadState(){
  try{
    const res = await window.storage.get('tracker-data', false);
    if(res && res.value){
      const loaded = JSON.parse(res.value);
      state = Object.assign({
        checklist:{}, logs:[], notes:'', chat:[], links:{}, focusPhase:null,
        taskLevel:1, tasksCompleted:0, dailyTask:null,
        course:{items:[]}, courseLog:[], geminiKey:'', noteAttachments:[],
        targetDate:null, achievements:[], mockInterview:{history:[], currentQuestion:null},
        companies:[], weeklyRecaps:[], goals:[], reminders:[], arcade:{xp:0,correct:0,total:0,dailyStreak:0,lastCorrectDate:null,answers:{}}, snakeBest:0, typingBest:0, resumeText:'', resumeReviews:[]
      }, loaded);
      if(!state.arcade || typeof state.arcade !== 'object') state.arcade = {xp:0,correct:0,total:0,dailyStreak:0,lastCorrectDate:null,answers:{}};
      if(!state.arcade.answers) state.arcade.answers = {};
      if(!Array.isArray(state.reminders)) state.reminders = [];
      
      if (state.links && state.links.course && state.links.course.includes('jecrcuniversity.edu.in')) {
          state.links.course = 'https://courses.aajsecode.com/s/courses/663f10c1b48d0c3f23f4ac0b/take';
      }
    }
  }catch(e){}
  
  if(!state.links) state.links = {};
  if(!state.links.course || state.links.course.includes('jecrcuniversity.edu.in')) {
      state.links.course = 'https://courses.aajsecode.com/s/courses/663f10c1b48d0c3f23f4ac0b/take';
  }
  render();
}
async function saveState(){
  clearTimeout(saveTimer);
  saveTimer = setTimeout(async ()=>{
    try{ await window.storage.set('tracker-data', JSON.stringify(state), false); }
    catch(e){ console.error('save failed', e); }
  }, 250);
}

window.activateTabByName = function(tabName) {
  const tabs = document.querySelectorAll('.tab');
  const views = document.querySelectorAll('.panel-view');
  tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === tabName));
  views.forEach(v => v.classList.toggle('active', v.id === 'view-' + tabName));
};

const appTabs = [...document.querySelectorAll('.tab')];
function activateTab(tab){
  if(!tab) return;
  if (typeof tab === 'string') {
    window.activateTabByName(tab);
    return;
  }
  const tabName = tab.dataset ? tab.dataset.tab : tab;
  window.activateTabByName(tabName);
  if (tab.scrollIntoView) tab.scrollIntoView({block:'nearest', inline:'center'});
}
function cycleTab(direction){
  const tabs = [...document.querySelectorAll('.tab')];
  const current = Math.max(0, tabs.findIndex(tab=>tab.classList.contains('active')));
  activateTab(tabs[(current+direction+tabs.length)%tabs.length]);
}
document.addEventListener('click', (e) => {
  const tabEl = e.target.closest('.tab');
  if (tabEl && tabEl.dataset && tabEl.dataset.tab) {
    activateTab(tabEl);
  }
});
window.addEventListener('keydown', (event)=>{
  if(event.ctrlKey && event.key==='Tab'){
    event.preventDefault(); cycleTab(event.shiftKey ? -1 : 1);
  }
  if(event.ctrlKey && event.shiftKey && (event.key==='ArrowRight' || event.key==='ArrowLeft')){
    event.preventDefault(); cycleTab(event.key==='ArrowRight' ? 1 : -1);
  }
  if(!event.ctrlKey && !event.altKey && !event.metaKey && /^[0-9]$/.test(event.key)){
    const activeTag = document.activeElement && document.activeElement.tagName;
    const isEditable = activeTag==='INPUT' || activeTag==='TEXTAREA' || activeTag==='SELECT' ||
      (document.activeElement && document.activeElement.isContentEditable);
    if(!isEditable){
      const idx = event.key==='0' ? 9 : Number(event.key)-1;
      if(appTabs[idx]){ event.preventDefault(); activateTab(appTabs[idx]); }
    }
  }
});

function renderApiKeyRow(){
  const el = document.getElementById('apikey-row');
  const provider = (state.aiProvider === 'gemini') ? 'gemini' : 'openrouter';
  
  let currentKey = '';
  let providerLink = '';
  let keyPrompt = '';
  
  if (provider === 'openrouter') {
    currentKey = state.openrouterKey || '';
    providerLink = `<a href="https://openrouter.ai/keys" target="_blank" rel="noopener">Powered by OpenRouter · get a free key ↗</a>`;
    keyPrompt = 'Paste your free OpenRouter API key (from openrouter.ai/keys — starts with "sk-or-"):';
  } else {
    currentKey = state.geminiKey || '';
    providerLink = `<a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener">Powered by Google Gemini · free key ↗</a>`;
    keyPrompt = 'Paste your Gemini API key (from Google AI Studio — starts with "AIza"):';
  }

  const has = !!(currentKey && currentKey.trim());
  const masked = has ? ('•••• ' + currentKey.trim().slice(-4)) : 'not set';
  
  const geminiModel = state.selectedModel || 'gemini-2.0-flash';
  const openrouterModel = state.selectedOpenrouterModel || 'google/gemini-2.0-flash-lite-preview-02-05:free';

  let modelSelectHtml = '';
  if (provider === 'openrouter') {
    modelSelectHtml = `
      <select id="model-selector" style="background:var(--bg); border:1px solid var(--border); color:var(--text); padding:4px 8px; border-radius:6px; font-family:var(--font-mono); font-size:12.5px; cursor:pointer;">
        <option value="google/gemini-2.0-flash-lite-preview-02-05:free" ${openrouterModel==='google/gemini-2.0-flash-lite-preview-02-05:free'?'selected':''}>Gemini 2.0 Flash Lite (Free ⚡)</option>
        <option value="deepseek/deepseek-r1:free" ${openrouterModel==='deepseek/deepseek-r1:free'?'selected':''}>DeepSeek R1 (Free 🧠)</option>
        <option value="meta-llama/llama-3.3-70b-instruct:free" ${openrouterModel==='meta-llama/llama-3.3-70b-instruct:free'?'selected':''}>Meta LLaMA 3.3 70B (Free 🦙)</option>
        <option value="qwen/qwen-2.5-coder-32b-instruct:free" ${openrouterModel==='qwen/qwen-2.5-coder-32b-instruct:free'?'selected':''}>Qwen 2.5 Coder 32B (Free 💻)</option>
        <option value="openrouter/auto" ${openrouterModel==='openrouter/auto'?'selected':''}>OpenRouter Auto (Best Free)</option>
      </select>
    `;
  } else {
    modelSelectHtml = `
      <select id="model-selector" style="background:var(--bg); border:1px solid var(--border); color:var(--text); padding:4px 8px; border-radius:6px; font-family:var(--font-mono); font-size:12.5px; cursor:pointer;">
        <option value="gemini-2.0-flash" ${geminiModel==='gemini-2.0-flash'?'selected':''}>gemini-2.0-flash (Fast ⚡)</option>
        <option value="gemini-1.5-flash" ${geminiModel==='gemini-1.5-flash'?'selected':''}>gemini-1.5-flash (Standard)</option>
        <option value="gemini-1.5-pro" ${geminiModel==='gemini-1.5-pro'?'selected':''}>gemini-1.5-pro (Reasoning)</option>
      </select>
    `;
  }

  el.innerHTML = `
    <div class="apikey-card">
      <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
        <div style="display:flex; align-items:center; gap:6px;">
          <span style="font-size:12.5px; color:var(--text-faint);">Engine:</span>
          <select id="provider-selector" style="background:var(--bg); border:1px solid var(--border); color:var(--text); padding:4px 8px; border-radius:6px; font-family:var(--font-mono); font-size:12.5px; cursor:pointer; font-weight:600;">
            <option value="openrouter" ${provider==='openrouter'?'selected':''}>OpenRouter (Free Keys 🌐)</option>
            <option value="gemini" ${provider==='gemini'?'selected':''}>Google Gemini ♊</option>
          </select>
        </div>

        <div>
          ${providerLink}
          <div class="apikey-status ${has?'set':''}">${has?'<span class="pulse-dot"></span> ':''}key: ${masked}</div>
        </div>

        <div style="display:flex; align-items:center; gap:6px;">
          <span style="font-size:12.5px; color:var(--text-faint);">Model:</span>
          ${modelSelectHtml}
        </div>
      </div>
      <div class="apikey-btns">
        <button class="lc-edit" id="apikey-set-btn">${has?'change key':'set key'}</button>
        ${has ? '<button class="lc-edit" id="apikey-clear-btn">clear</button>' : ''}
      </div>
    </div>
  `;

  document.getElementById('provider-selector').addEventListener('change', (e) => {
    state.aiProvider = e.target.value;
    saveState(); renderApiKeyRow();
  });

  const selEl = document.getElementById('model-selector');
  if(selEl) {
    selEl.addEventListener('change', (e) => {
      if (provider === 'openrouter') state.selectedOpenrouterModel = e.target.value;
      else state.selectedModel = e.target.value;
      saveState();
    });
  }

  document.getElementById('apikey-set-btn').addEventListener('click', ()=>{
    const entered = prompt(keyPrompt, currentKey);
    if(entered===null) return;
    if (provider === 'openrouter') state.openrouterKey = entered.trim();
    else state.geminiKey = entered.trim();
    saveState(); renderApiKeyRow();
  });

  const clearBtn = document.getElementById('apikey-clear-btn');
  if(clearBtn) clearBtn.addEventListener('click', ()=>{
    const name = provider === 'openrouter' ? 'OpenRouter' : 'Gemini';
    if(!confirm(`Remove your saved ${name} API key?`)) return;
    if (provider === 'openrouter') state.openrouterKey = '';
    else state.geminiKey = '';
    saveState(); renderApiKeyRow();
  });
}

function renderQuickLaunch(){
  const el = document.getElementById('quicklaunch');
  el.innerHTML='';
  LINKS_CONFIG.forEach(cfg=>{
    if(cfg.id === 'course') return;
    const val = (state.links && state.links[cfg.id]) || '';
    const href = cfg.type==='url' ? (val || cfg.base) : (val ? cfg.profile(val) : cfg.base);
    const sub = cfg.type==='url' ? (val ? 'open portal →' : 'open →') : (val ? '@'+escapeHtml(val) : 'open →');
    const chip = document.createElement('div');
    chip.className='launch-chip';
    chip.innerHTML = `
      <a class="lc-main" href="${href}" target="_blank" rel="noopener" style="box-shadow:inset 3px 0 0 ${colorVar(cfg.color)}">
        <span class="lc-label">${cfg.label}</span>
        <span class="lc-sub">${sub}</span>
      </a>
      <button class="lc-edit" data-id="${cfg.id}">${val ? 'edit' : 'set'}</button>
    `;
    chip.querySelector('.lc-edit').addEventListener('click', ()=> editLink(cfg));
    el.appendChild(chip);
  });
}
function editLink(cfg){
  const current = (state.links && state.links[cfg.id]) || (cfg.type==='url' ? cfg.base : '');
  const label = cfg.type==='url' ? `${cfg.label} URL:` : `Your ${cfg.label} username (leave blank to just link the homepage):`;
  const entered = prompt(label, current);
  if(entered===null) return;
  if(!state.links) state.links = {};
  state.links[cfg.id] = entered.trim();
  saveState(); renderQuickLaunch();
  if(cfg.id==='course') renderCourseTab();
}

function computeStreak(){
  const days = new Set(state.logs.map(l => l.date));
  let streak = 0; let d = new Date();
  if(!days.has(todayStr(d))){ d.setDate(d.getDate()-1); if(!days.has(todayStr(d))) return 0; }
  while(days.has(todayStr(d))){ streak++; d.setDate(d.getDate()-1); }
  return streak;
}
function computeTotalHours(){ return state.logs.reduce((s,l)=> s + (Number(l.hours)||0), 0); }
function computeChecklistPct(){
  let total=0, done=0;
  ROADMAP.forEach(p=> p.items.forEach((_,i)=>{ total++; if(state.checklist[p.id+':'+i]) done++; }));
  return total ? Math.round((done/total)*100) : 0;
}
function renderStats(){
  const streak = computeStreak();
  document.getElementById('stat-streak').textContent = streak;
  document.getElementById('stat-streak').className = 'n' + (streak===0 ? ' zero':'');
  document.getElementById('stat-hours').textContent = Math.round(computeTotalHours()*10)/10;
  document.getElementById('stat-pct').textContent = computeChecklistPct() + '%';
}
function renderCountdown(){
  const el = document.getElementById('stat-countdown');
  if(!state.targetDate){
    el.textContent = 'set'; el.className = 'n zero'; el.style.color = '';
    return;
  }
  const target = new Date(state.targetDate+'T00:00:00');
  const today = new Date(todayStr()+'T00:00:00');
  const diff = Math.ceil((target-today)/86400000);
  el.textContent = diff > 0 ? diff : (diff===0 ? "today" : "past");
  el.className = 'n' + (diff<=0 ? ' zero':'');
  if(diff>0 && diff<=30) el.style.color = 'var(--red)';
  else if(diff>0 && diff<=90) el.style.color = 'var(--amber)';
  else el.style.color = '';
}
document.getElementById('countdown-stat').addEventListener('click', ()=>{
  const entered = prompt('Target date for placement season, e.g. when CRT/drives start (YYYY-MM-DD):', state.targetDate || '');
  if(entered===null) return;
  const val = entered.trim();
  if(val && !/^\d{4}-\d{2}-\d{2}$/.test(val)){ alert('Please use YYYY-MM-DD format, e.g. 2027-01-15'); return; }
  state.targetDate = val || null;
  saveState(); renderCountdown();
});

function renderHeatmap(){
  const el = document.getElementById('heatmap');
  el.innerHTML='';
  const hoursByDate = {};
  state.logs.forEach(l=>{ hoursByDate[l.date] = (hoursByDate[l.date]||0) + (Number(l.hours)||0.5); });
  const days = 26*7;
  const start = new Date(); start.setDate(start.getDate() - (days-1));
  for(let i=0;i<days;i++){
    const d = new Date(start); d.setDate(d.getDate()+i);
    const key = todayStr(d); const h = hoursByDate[key]||0;
    let lvl = 0; if(h>0) lvl=1; if(h>=1) lvl=2; if(h>=2.5) lvl=3; if(h>=4) lvl=4;
    const cell = document.createElement('div');
    cell.className='cell'; cell.dataset.lvl=lvl;
    cell.title = key + (h ? (' — ' + (Math.round(h*10)/10) + 'h') : ' — no activity');
    el.appendChild(cell);
  }
}
function renderBoot(){
  const streak = computeStreak(); const boot = document.getElementById('boot');
  let msg = '';
  if(streak===0 && state.logs.length===0){ msg = 'welcome. first boot — log some progress on the dashboard tab to start your streak.'; } 
  else if(streak===0){ msg = 'streak reset. <span class="ok">no pressure — commit something today to start a new one.</span>'; } 
  else if(streak===1){ msg = '<span class="ok">day 1 of a new streak.</span> keep it going.'; } 
  else { msg = `<span class="ok">${streak}-day streak.</span> don't break the chain today.`; }
  if(state.focusPhase){
    const p = ROADMAP.find(r=>r.id===state.focusPhase);
    if(p) msg += `  <span class="focus">today's focus: ${p.name}</span>`;
  }
  boot.innerHTML = '$ status --check<br>' + msg;
}

function renderFocusRow(){
  const el = document.getElementById('focus-row');
  el.innerHTML='';
  ROADMAP.forEach(phase=>{
    const pill = document.createElement('div');
    const active = state.focusPhase === phase.id;
    pill.className = 'focus-pill' + (active ? ' active':'');
    pill.style.setProperty('--pill-color', colorVar(phase.color));
    pill.innerHTML = `<span class="focus-dot"></span>${phase.name}`;
    pill.addEventListener('click', ()=>{
      state.focusPhase = active ? null : phase.id;
      saveState(); renderFocusRow(); renderPhases(); renderBoot();
    });
    el.appendChild(pill);
  });
}

function renderPhases(){
  const el = document.getElementById('phases');
  el.innerHTML='';
  const query = (document.getElementById('roadmap-search')?.value || '').trim().toLowerCase();
  ROADMAP.forEach(phase=>{
    if(query && !phase.name.toLowerCase().includes(query) && !phase.items.some(item=>item.toLowerCase().includes(query))) return;
    const total = phase.items.length;
    const done = phase.items.filter((_,i)=> state.checklist[phase.id+':'+i]).length;
    const pct = Math.round((done/total)*100);
    const wrap = document.createElement('div'); wrap.className='phase';
    wrap.style.boxShadow = 'inset 3px 0 0 ' + colorVar(phase.color) + (state.focusPhase===phase.id ? ', 0 0 0 1px ' + colorVar(phase.color) : '');
    const head = document.createElement('div'); head.className='phase-head';
    head.innerHTML = `
      <div class="phase-name"><span class="arrow" id="arrow-${phase.id}">&#9656;</span>${phase.name}</div>
      <div class="phase-progress" id="prog-${phase.id}">${done}/${total}<div class="phase-bar-wrap"><div class="phase-bar" style="width:${pct}%;background:${colorVar(phase.color)}"></div></div></div>
    `;
    head.addEventListener('click', ()=>{
      document.getElementById('items-'+phase.id).classList.toggle('open');
      document.getElementById('arrow-'+phase.id).classList.toggle('open');
    });
    const items = document.createElement('div'); items.className='items'; items.id='items-'+phase.id;
    phase.items.forEach((label,i)=>{
      if(query && !label.toLowerCase().includes(query) && !phase.name.toLowerCase().includes(query)) return;
      const key = phase.id+':'+i; const checked = !!state.checklist[key];
      const row = document.createElement('div'); row.className='item'+(checked?' done':'');
      const cbid = 'cb-'+key.replace(':','-');
      row.innerHTML = `<input type="checkbox" id="${cbid}" style="accent-color:${colorVar(phase.color)}" ${checked?'checked':''}><label for="${cbid}">${label}</label>`;
      row.querySelector('input').addEventListener('change', (e)=>{
        state.checklist[key] = e.target.checked;
        row.classList.toggle('done', e.target.checked);
        saveState(); updatePhaseProgress(phase); renderStats(); checkAchievements();
      });
      items.appendChild(row);
    });
    wrap.appendChild(head); wrap.appendChild(items); el.appendChild(wrap);
  });
}
document.getElementById('roadmap-search').addEventListener('input', renderPhases);
function updatePhaseProgress(phase){
  const total = phase.items.length;
  const done = phase.items.filter((_,i)=> state.checklist[phase.id+':'+i]).length;
  const pct = Math.round((done/total)*100);
  const progEl = document.getElementById('prog-'+phase.id);
  progEl.innerHTML = `${done}/${total}<div class="phase-bar-wrap"><div class="phase-bar" style="width:${pct}%;background:${colorVar(phase.color)}"></div></div>`;
}

function fmtRelDate(dateStr){
  const d = new Date(dateStr+'T00:00:00');
  const today = new Date(todayStr()+'T00:00:00');
  const diff = Math.round((today-d)/86400000);
  if(diff===0) return 'today';
  if(diff===1) return 'yesterday';
  if(diff<7) return diff+'d ago';
  return dateStr;
}
function renderLog(){
  const el = document.getElementById('log-feed');
  el.innerHTML='';
  if(!state.logs.length){ el.innerHTML = '<div class="empty">no commits yet — log your first bit of progress above</div>'; return; }
  const sorted = [...state.logs].sort((a,b)=> (b.date+b.ts).localeCompare(a.date+a.ts));
  sorted.slice(0,50).forEach(entry=>{
    const col = CATEGORY_COLOR[entry.category] || 'slate';
    const row = document.createElement('div'); row.className='log-entry';
    row.style.setProperty('--entry-color', colorVar(col));
    row.innerHTML = `
      <div class="log-body">
        <div class="log-msg">${escapeHtml(entry.message)}</div>
        <div class="log-tags">
          <span class="tag" style="color:${colorVar(col)};background:${colorBgVar(col)}">${entry.category}</span>
          ${entry.hours ? `<span class="tag hrs">${entry.hours}h</span>` : ''}
          <span class="tag">${fmtRelDate(entry.date)}</span>
        </div>
      </div>
      <div class="company-actions"><button class="copy-btn log-copy" type="button">copy</button><button class="del-btn" title="delete entry" data-id="${entry.id}">&times;</button></div>
    `;
    row.querySelector('.del-btn').addEventListener('click', ()=>{ state.logs = state.logs.filter(l=>l.id!==entry.id); saveState(); render(); });
    row.querySelector('.log-copy').addEventListener('click', (e)=> copyText(entry.message, e.currentTarget));
    el.appendChild(row);
  });
}

document.getElementById('commit-btn').addEventListener('click', async ()=>{
  const input = document.getElementById('log-input');
  const cat = document.getElementById('log-category').value;
  const hrsInput = document.getElementById('log-hours');
  const msg = input.value.trim();
  if(!msg) { input.focus(); return; }
  state.logs.push({
    id: Date.now().toString(36)+Math.random().toString(36).slice(2,6),
    date: todayStr(), ts: new Date().toISOString(),
    message: msg, category: cat, hours: hrsInput.value ? Number(hrsInput.value) : 0
  });
  input.value=''; hrsInput.value='';
  await saveState(); render(); checkAchievements();
});
document.getElementById('log-input').addEventListener('keydown', (e)=>{
  if(e.key==='Enter' && (e.metaKey||e.ctrlKey)){ document.getElementById('commit-btn').click(); }
});

function addAutoLog(message, category){
  state.logs.push({
    id: Date.now().toString(36)+Math.random().toString(36).slice(2,6),
    date: todayStr(), ts: new Date().toISOString(),
    message, category, hours:0
  });
}

function formatAssistantText(raw){
  let text = escapeHtml(raw);
  text = text.replace(/```([a-zA-Z]*)\n([\s\S]*?)```/g, (m, lang, code)=>{ return '<pre><code>'+code.replace(/\n$/,'')+'</code></pre>'; });
  text = text.replace(/`([^`\n]+)`/g, '<code>$1</code>');
  text = text.replace(/\n/g, '<br>');
  return text;
}
async function callAI(messages, system, maxRetries = 1){
  const provider = state.aiProvider || 'openrouter';

  if (provider === 'openrouter') {
    const key = (state.openrouterKey || '').trim();
    if (!key) {
      throw new Error('Add your free OpenRouter API key first — click "set key" in the top bar.');
    }
    const userModel = state.selectedOpenrouterModel || 'google/gemini-2.0-flash-lite-preview-02-05:free';
    const modelsToTry = [
      userModel,
      'google/gemini-2.0-flash-lite-preview-02-05:free',
      'deepseek/deepseek-r1:free',
      'meta-llama/llama-3.3-70b-instruct:free',
      'qwen/qwen-2.5-coder-32b-instruct:free',
      'openrouter/auto'
    ].filter((v, i, a) => a.indexOf(v) === i);

    const formattedMsgs = [];
    if (system) {
      formattedMsgs.push({ role: 'system', content: system });
    }
    messages.forEach(m => {
      formattedMsgs.push({
        role: m.role === 'assistant' ? 'assistant' : m.role === 'error' ? 'assistant' : 'user',
        content: m.content
      });
    });

    let lastErrorMsg = 'OpenRouter API request failed';

    for (const modelName of modelsToTry) {
      try {
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${key}`,
            'HTTP-Referer': 'https://github.com/coding-journey',
            'X-Title': 'Coding Journey Tracker'
          },
          body: JSON.stringify({
            model: modelName,
            messages: formattedMsgs,
            temperature: 0.6
          })
        });

        const data = await response.json();

        if (response.status === 401 || (data?.error?.message && /invalid|unauthorized|key/i.test(data.error.message))) {
          throw new Error('Invalid OpenRouter API Key. Please check your key at openrouter.ai/keys (starts with "sk-or-").');
        }

        if (data && data.choices && data.choices.length) {
          const reply = data.choices[0].message && data.choices[0].message.content;
          if (reply) return reply.trim();
        }

        if (data && data.error) {
          const errMsg = typeof data.error === 'string' ? data.error : (data.error.message || JSON.stringify(data.error));
          lastErrorMsg = `OpenRouter (${modelName}): ${errMsg}`;
          continue;
        }
      } catch (err) {
        if (err.message && err.message.includes('Invalid OpenRouter API Key')) {
          throw err;
        }
        lastErrorMsg = err.message || lastErrorMsg;
      }
    }
    throw new Error(lastErrorMsg);
  }

  // Google Gemini provider implementation
  const key = (state.geminiKey||'').trim();
  if(!key){ throw new Error('Add your free Gemini API key first — see the bar near the top of the page.'); }
  const contents = messages.map(m => {
    const parts = [];
    if(m.attachment){ parts.push({ inline_data: { mime_type: m.attachment.mimeType, data: m.attachment.data } }); }
    parts.push({ text: m.content });
    return { role: m.role === 'assistant' ? 'model' : 'user', parts };
  });
  const body = { contents, generationConfig: { maxOutputTokens: 2048 } };
  const sys = system || TUTOR_SYSTEM;
  if(sys) body.system_instruction = { parts: [{ text: sys }] };

  // Use user-selected model or default to gemini-2.0-flash, then fallback
  const userModel = state.selectedModel || 'gemini-2.0-flash';
  const modelsToTry = [userModel, 'gemini-2.0-flash', 'gemini-1.5-flash', 'gemini-1.5-pro'].filter((v, i, a) => a.indexOf(v) === i);

  for (const modelName of modelsToTry) {
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent`, {
          method: "POST", 
          headers: { "Content-Type": "application/json", "x-goog-api-key": key }, 
          body: JSON.stringify(body)
        });
        const data = await response.json();

        const isRateLimited = response.status === 429 || 
                              data?.error?.code === 429 || 
                              data?.error?.status === "RESOURCE_EXHAUSTED" ||
                              (data?.error?.message && /quota|rate limit|resource_exhausted/i.test(data.error.message));

        if (isRateLimited) {
          if (attempt < maxRetries) {
            await new Promise(res => setTimeout(res, 800 * (attempt + 1)));
            continue;
          }
          break; // Try next model in list
        }

        if(data && data.candidates && data.candidates.length){
          const parts = (data.candidates[0].content && data.candidates[0].content.parts) || [];
          const text = parts.map(p=>p.text||'').join('\n').trim();
          if(text) return text;
        }
        if(data && data.error && !isRateLimited){
          break; // Try next model
        }
      } catch (err) {
        if (attempt < maxRetries) {
          await new Promise(res => setTimeout(res, 600));
          continue;
        }
      }
    }
  }
  throw new Error('Rate limit exceeded (HTTP 429). Please wait 30 seconds before asking another question.');
}

function renderChat(){
  const el = document.getElementById('chat-thread');
  el.innerHTML='';
  if(!state.chat.length){ el.innerHTML = '<div class="empty">no questions yet — ask something below to get started</div>'; return; }
  state.chat.forEach(m=>{
    const row = document.createElement('div');
    row.className = 'msg ' + (m.role==='user' ? 'user' : m.role==='error' ? 'error' : 'assistant');
    const who = m.role==='user' ? 'you' : m.role==='error' ? 'error' : 'gemini';
    const attachHtml = m.attachmentName ? `<div class="msg-attach">📎 ${escapeHtml(m.attachmentName)}</div>` : '';
    row.innerHTML = `<div class="who">${who}</div>${attachHtml}<div class="msg-text">${m.role==='user' ? escapeHtml(m.content) : formatAssistantText(m.content)}</div><div style="margin-top:8px;"><button class="copy-btn msg-copy" type="button">copy</button></div>`;
    row.querySelector('.msg-copy').addEventListener('click', (e)=> copyText(m.content, e.currentTarget));
    el.appendChild(row);
  });
  el.scrollTop = el.scrollHeight;
}
function renderAttachPreview(){
  const el = document.getElementById('solve-attach-preview');
  if(!el) return;
  if(!pendingAttachment){ el.innerHTML=''; return; }
  el.innerHTML = `<div class="attach-chip">${pendingAttachment.previewUrl ? `<img src="${pendingAttachment.previewUrl}" alt="">` : '📄'}<span class="name">${escapeHtml(pendingAttachment.name)}</span><button class="remove" id="solve-attach-remove" type="button">&times;</button></div>`;
  document.getElementById('solve-attach-remove').addEventListener('click', ()=>{ pendingAttachment=null; renderAttachPreview(); });
}
async function setPendingAttachment(file){
  const maxBytes = 15*1024*1024;
  if(file.size > maxBytes){ alert('That file is too large to attach. Try a smaller image.'); return; }
  const isImage = file.type.startsWith('image/');
  const dataUrl = await new Promise((resolve, reject)=>{
    const r = new FileReader(); r.onload = ()=> resolve(r.result); r.onerror = reject; r.readAsDataURL(file);
  });
  pendingAttachment = {
    name: file.name, mimeType: file.type || 'application/octet-stream',
    base64: dataUrl.split(',')[1], isImage, previewUrl: isImage ? dataUrl : null
  };
  renderAttachPreview();
}
document.getElementById('solve-attach-btn').addEventListener('click', ()=> document.getElementById('solve-file-input').click());
document.getElementById('solve-file-input').addEventListener('change', async (e)=>{
  const file = e.target.files[0]; if(file) await setPendingAttachment(file); e.target.value = '';
});

async function askSolver(){
  const input = document.getElementById('solve-input');
  const btn = document.getElementById('solve-btn');
  let q = input.value.trim();
  if(!q && !pendingAttachment) { input.focus(); return; }
  if(!q) q = pendingAttachment.isImage ? 'Take a look at this image and tell me about it.' : 'Take a look at this file and tell me about it.';

  const attachmentForThisMsg = pendingAttachment;
  state.chat.push({role:'user', content:q, attachmentName: attachmentForThisMsg ? attachmentForThisMsg.name : null});
  input.value=''; pendingAttachment = null; renderAttachPreview(); renderChat(); saveState();

  btn.disabled = true; btn.textContent = 'running…';
  const el = document.getElementById('chat-thread');
  const thinkingRow = document.createElement('div'); thinkingRow.className = 'msg assistant';
  thinkingRow.innerHTML = '<div class="who">gemini</div><div class="thinking">compiling response<span class="blink">_</span></div>';
  el.appendChild(thinkingRow); el.scrollTop = el.scrollHeight;

  try{
    const history = state.chat.slice(-14).map(m=>({role: m.role==='error' ? 'assistant' : m.role, content: m.content}));
    if(attachmentForThisMsg && history.length){ history[history.length-1].attachment = { mimeType: attachmentForThisMsg.mimeType, data: attachmentForThisMsg.base64 }; }
    const text = await callAI(history);
    thinkingRow.remove(); state.chat.push({role:'assistant', content: text || '(no response text returned)'});
  }catch(e){
    thinkingRow.remove(); state.chat.push({role:'error', content: e.message || 'network error reaching the API. try again.'});
  }

  if(state.chat.length > 40){ state.chat = state.chat.slice(-40); }
  btn.disabled = false; btn.textContent = 'run →';
  renderChat(); saveState();
}
document.getElementById('solve-btn').addEventListener('click', askSolver);
document.getElementById('solve-input').addEventListener('keydown', (e)=>{ if(e.key==='Enter' && (e.metaKey||e.ctrlKey)){ askSolver(); } });
document.getElementById('clear-chat-btn').addEventListener('click', ()=>{
  if(!confirm('Clear this conversation?')) return;
  state.chat = []; saveState(); renderChat();
});

function pickCategoryPhase(){
  if(state.focusPhase){
    const fp = ROADMAP.find(p=>p.id===state.focusPhase);
    if(fp){ const total=fp.items.length, done=fp.items.filter((_,i)=>state.checklist[fp.id+':'+i]).length; if(done<total) return fp; }
  }
  for(const p of ROADMAP){ const total=p.items.length, done=p.items.filter((_,i)=>state.checklist[p.id+':'+i]).length; if(done<total) return p; }
  return ROADMAP[ROADMAP.length-1];
}
function levelLabel(lvl){
  if(lvl<=2) return 'warm-up'; if(lvl<=4) return 'building'; if(lvl<=6) return 'solid'; if(lvl<=8) return 'challenging'; return 'advanced';
}
function parseTaskResponse(raw){
  const lines = raw.split('\n');
  if(lines[0] && lines[0].toLowerCase().startsWith('title:')){ return { title: lines[0].slice(6).trim(), body: lines.slice(1).join('\n').trim() }; }
  return { title: 'Practice task', body: raw.trim() };
}
function renderDailyTask(){
  const el = document.getElementById('task-container');
  const level = state.taskLevel || 1;
  const today = todayStr();
  const task = state.dailyTask;
  const hasToday = task && task.date === today;

  if(!hasToday){
    el.innerHTML = `
      <div class="task-card hud-corners" style="--task-color:var(--coral); --hud-color:var(--coral)">
        <div class="task-empty">
          <p>no task generated for today yet.<br>level ${level}/10 — ${levelLabel(level)}</p>
          <button class="primary" id="gen-task-btn" onclick="if(window.generateDailyTask) window.generateDailyTask(true)">generate today's task</button>
        </div>
      </div>
    `;
    document.getElementById('gen-task-btn').addEventListener('click', ()=> generateDailyTask(true));
    return;
  }

  const phase = ROADMAP.find(p=>p.id===task.categoryId) || ROADMAP[0];
  const dots = Array.from({length:10}, (_,i)=> `<span class="ld ${i<level?'filled':''}"></span>`).join('');

  let actionsHtml = '';
  if(task.status === 'active'){
    actionsHtml = `
      <div class="task-actions">
        <button class="primary" id="task-done-btn">mark as done</button>
        <button class="secondary" id="task-solution-btn" ${task.solutionLoading?'disabled':''}>${task.solution ? 'hide solution' : (task.solutionLoading ? 'loading…' : 'reveal solution')}</button>
        <button class="clear-link" id="task-new-btn">new task instead</button>
      </div>
    `;
  }

  let solutionHtml = '';
  if(task.showSolution){
    solutionHtml = `<div class="solution-block"><div class="solution-label">solution</div><div class="msg-text task-body">${formatAssistantText(task.solution)}</div></div>`;
  }

  let feedbackHtml = '';
  if(task.status === 'done'){
    if(!task.feedbackGiven){
      feedbackHtml = `
        <div class="feedback-row">
          <p>how did that feel?</p>
          <div class="feedback-btns">
            <button class="fb-btn" data-fb="easy">too easy — push me harder</button>
            <button class="fb-btn" data-fb="ok">just right</button>
            <button class="fb-btn" data-fb="hard">too hard — ease off</button>
          </div>
        </div>
      `;
    } else {
      feedbackHtml = `<div class="done-note">nice — logged. level is now ${state.taskLevel}/10. come back tomorrow for the next one, or generate a fresh one anytime.</div>
        <div class="task-actions"><button class="secondary" id="task-new-btn2">generate another</button></div>`;
    }
  }

  el.innerHTML = `
    <div class="task-card hud-corners" style="--task-color:${colorVar(phase.color)}; --hud-color:${colorVar(phase.color)}">
      <div class="task-top">
        <span class="task-cat-pill" style="color:${colorVar(phase.color)};background:${colorBgVar(phase.color)}">${phase.name}</span>
        <div class="level-block">
          <span class="level-label">level ${level}/10 · ${levelLabel(level)}</span>
          <div class="level-dots">${dots}</div>
        </div>
      </div>
      <h3 class="task-title">${escapeHtml(task.title)}</h3>
      <div class="task-body">${formatAssistantText(task.body)}</div>
      <div style="margin-top:12px;"><button class="copy-btn" id="copy-task-btn" type="button">copy task</button></div>
      ${solutionHtml}
      ${actionsHtml}
      ${feedbackHtml}
      <div class="task-stats">tasks completed so far: ${state.tasksCompleted||0}</div>
    </div>
  `;

  const doneBtn = document.getElementById('task-done-btn');
  if(doneBtn) doneBtn.addEventListener('click', markTaskDone);
  const solBtn = document.getElementById('task-solution-btn');
  if(solBtn) solBtn.addEventListener('click', toggleSolution);
  const copyTaskBtn = document.getElementById('copy-task-btn');
  if(copyTaskBtn) copyTaskBtn.addEventListener('click', ()=> copyText(task.title+'\n\n'+task.body+(task.solution ? '\n\nSolution:\n'+task.solution : ''), copyTaskBtn));
  const newBtn = document.getElementById('task-new-btn') || document.getElementById('task-new-btn2');
  if(newBtn) newBtn.addEventListener('click', ()=>{
    if(task.status==='active' && !confirm('Swap this task for a new one?')) return;
    generateDailyTask(true);
  });
  document.querySelectorAll('.fb-btn').forEach(b=>{ b.addEventListener('click', ()=> giveFeedback(b.dataset.fb)); });
}
async function generateDailyTask(forceNew){
  const today = todayStr();
  if(!forceNew && state.dailyTask && state.dailyTask.date === today){ renderDailyTask(); return; }
  const phase = pickCategoryPhase(); const level = state.taskLevel || 1;
  const container = document.getElementById('task-container');
  container.innerHTML = `<div class="task-card" style="--task-color:${colorVar(phase.color)}"><div class="thinking">generating today's task<span class="blink">_</span></div></div>`;

  try{
    const prompt = `Generate one daily practice task for a placement-prep student. Category: ${phase.name}. Difficulty: ${level}/10 (1 = complete beginner warm-up, 10 = advanced placement-level). It should be solvable in roughly 20-40 minutes. Do NOT include the solution or full code — only the task statement, any relevant example or constraints, and one small hint at the end. Format your reply with a short title on the first line starting exactly with "Title:", then the task on the following lines.`;
    const raw = await callAI([{role:'user', content: prompt}]);
    const parsed = parseTaskResponse(raw);
    state.dailyTask = {
      date: today, categoryId: phase.id, level, title: parsed.title, body: parsed.body,
      solution: null, showSolution:false, solutionLoading:false, status:'active', feedbackGiven:false
    };
  }catch(e){
    state.dailyTask = {
      date: today, categoryId: phase.id, level,
      title: 'Could not generate a task', body: 'Something went wrong: ' + escapeHtml(e.message||'unknown error') + '. Try again in a moment.',
      solution:null, showSolution:false, solutionLoading:false, status:'active', feedbackGiven:false
    };
  }
  saveState(); renderDailyTask();
}
async function toggleSolution(){
  const task = state.dailyTask; if(!task) return;
  if(task.solution){ task.showSolution = !task.showSolution; renderDailyTask(); return; }
  task.solutionLoading = true; renderDailyTask();
  try{
    const prompt = `Here is today's practice task, titled "${task.title}":\n\n${task.body}\n\nNow give the full solution: a short explanation of the approach, its time/space complexity if relevant, and clean example code (prefer Python).`;
    const text = await callAI([{role:'user', content: prompt}]);
    task.solution = text; task.showSolution = true;
  }catch(e){
    task.solution = 'Could not load the solution: ' + (e.message || 'unknown error') + '. Try again.'; task.showSolution = true;
  }
  task.solutionLoading = false; saveState(); renderDailyTask();
}
function markTaskDone(){
  if(!state.dailyTask) return;
  state.dailyTask.status = 'done';
  state.tasksCompleted = (state.tasksCompleted||0) + 1;
  const autoLevel = Math.min(10, 1 + Math.floor(state.tasksCompleted/3));
  if(autoLevel > (state.taskLevel||1)) state.taskLevel = autoLevel;
  saveState(); renderDailyTask(); checkAchievements();
}
function giveFeedback(kind){
  if(!state.dailyTask || state.dailyTask.feedbackGiven) return;
  if(kind==='easy') state.taskLevel = Math.min(10, (state.taskLevel||1)+1);
  if(kind==='hard') state.taskLevel = Math.max(1, (state.taskLevel||1)-1);
  state.dailyTask.feedbackGiven = true; saveState(); renderDailyTask();
}

function renderCourseTab(){
  const link = document.getElementById('course-link');
  link.href = (state.links && state.links.course) || DEFAULT_COURSE_URL;
  document.getElementById('course-edit-btn').onclick = ()=> editLink(LINKS_CONFIG.find(c=>c.id==='course'));

  const items = state.course.items || [];
  const done = items.filter(i=>i.done).length;
  document.getElementById('course-progress-line').textContent = items.length ? `${done}/${items.length} modules complete` : 'no modules added yet';

  const listEl = document.getElementById('course-list');
  if(!items.length){ listEl.innerHTML = '<div class="empty">add each module or lesson as you reach it — e.g. "Module 1: HTML & CSS basics"</div>'; } 
  else {
    listEl.innerHTML='';
    items.forEach(item=>{
      const row = document.createElement('div'); row.className = 'item' + (item.done ? ' done':'');
      const cbid = 'course-cb-'+item.id;
      row.innerHTML = `<input type="checkbox" id="${cbid}" style="accent-color:var(--cyan)" ${item.done?'checked':''}><label for="${cbid}">${escapeHtml(item.name)}</label><button class="del-btn" data-id="${item.id}">&times;</button>`;
      row.querySelector('input').addEventListener('change', (e)=>{ item.done = e.target.checked; saveState(); renderCourseTab(); renderStats(); });
      row.querySelector('.del-btn').addEventListener('click', ()=>{ state.course.items = state.course.items.filter(i=>i.id!==item.id); saveState(); renderCourseTab(); });
      listEl.appendChild(row);
    });
  }
  renderCourseLog();
}
document.getElementById('course-item-add').addEventListener('click', ()=>{
  const input = document.getElementById('course-item-input'); const name = input.value.trim();
  if(!name) { input.focus(); return; }
  if(!state.course) state.course = {items:[]};
  state.course.items.push({id: Date.now().toString(36)+Math.random().toString(36).slice(2,6), name, done:false});
  input.value=''; saveState(); renderCourseTab();
});
document.getElementById('course-item-input').addEventListener('keydown', (e)=>{ if(e.key==='Enter'){ document.getElementById('course-item-add').click(); } });

function renderCourseLog(){
  const el = document.getElementById('course-log-feed');
  el.innerHTML='';
  if(!state.courseLog || !state.courseLog.length){ el.innerHTML = '<div class="empty">no lessons logged yet — fill in the box above after your next lesson</div>'; return; }
  const sorted = [...state.courseLog].sort((a,b)=> (b.date+b.ts).localeCompare(a.date+a.ts));
  sorted.slice(0,30).forEach(entry=>{
    const row = document.createElement('div'); row.className = 'msg assistant'; row.style.boxShadow = 'inset 3px 0 0 var(--cyan)';
    row.innerHTML = `
      <div class="who"><span>${escapeHtml(entry.lessonName)} · ${fmtRelDate(entry.date)}</span><span style="display:flex;gap:6px;align-items:center;"><button class="copy-btn course-log-copy" type="button">copy</button><button class="del-btn" data-id="${entry.id}" style="font-size:15px;">&times;</button></span></div>
      <div class="msg-text">${formatAssistantText(entry.notes)}</div>
    `;
    row.querySelector('.course-log-copy').addEventListener('click', (e)=> copyText(entry.notes, e.currentTarget));
    row.querySelector('.del-btn').addEventListener('click', ()=>{ state.courseLog = state.courseLog.filter(c=>c.id!==entry.id); saveState(); renderCourseLog(); });
    el.appendChild(row);
  });
}
document.getElementById('course-generate-btn').addEventListener('click', async ()=>{
  const nameInput = document.getElementById('course-lesson-name'); const bodyInput = document.getElementById('course-lesson-input');
  const btn = document.getElementById('course-generate-btn');
  const lessonName = nameInput.value.trim() || 'Untitled lesson'; const raw = bodyInput.value.trim();
  if(!raw){ bodyInput.focus(); return; }

  btn.disabled = true; btn.textContent = 'generating…';
  try{
    const prompt = `Lesson: ${lessonName}\n\nMy notes on what it covered:\n${raw}`;
    const notes = await callAI([{role:'user', content: prompt}], COURSE_NOTES_SYSTEM);
    state.courseLog.push({
      id: Date.now().toString(36)+Math.random().toString(36).slice(2,6),
      date: todayStr(), ts: new Date().toISOString(), lessonName, notes
    });
    if(state.courseLog.length > 30) state.courseLog = state.courseLog.slice(-30);
    addAutoLog('Studied: ' + lessonName, 'course');
    nameInput.value=''; bodyInput.value='';
  }catch(e){
    state.courseLog.push({ id: Date.now().toString(36)+Math.random().toString(36).slice(2,6), date: todayStr(), ts: new Date().toISOString(), lessonName, notes: 'Could not generate notes: ' + (e.message||'unknown error') + '. Try again.' });
  }
  btn.disabled = false; btn.textContent = 'generate notes & quiz';
  saveState(); renderCourseTab(); renderStats(); renderHeatmap(); renderLog(); checkAchievements();
});

const ACHIEVEMENTS = [
  {id:'first-commit', label:'First Commit', color:'green', check: s => s.logs.length>=1},
  {id:'week-warrior', label:'7-Day Streak', color:'blue', check: s => computeStreak()>=7},
  {id:'month-marathon', label:'30-Day Streak', color:'purple', check: s => computeStreak()>=30},
  {id:'task-master', label:'10 Tasks Done', color:'coral', check: s => (s.tasksCompleted||0)>=10},
  {id:'quarter-roadmap', label:'25% Roadmap', color:'teal', check: s => computeChecklistPct()>=25},
  {id:'half-roadmap', label:'50% Roadmap', color:'amber', check: s => computeChecklistPct()>=50},
  {id:'roadmap-done', label:'Roadmap Complete', color:'green', check: s => computeChecklistPct()>=100},
  {id:'course-crusher', label:'10 Lessons Logged', color:'cyan', check: s => (s.courseLog||[]).length>=10},
  {id:'interview-ready', label:'5 Mock Interviews', color:'rose', check: s => ((s.mockInterview&&s.mockInterview.history)||[]).length>=5},
  {id:'first-target', label:'First Target Added', color:'teal', check: s => (s.companies||[]).length>=1},
  {id:'got-offer', label:'Got an Offer', color:'green', check: s => (s.companies||[]).some(c=>c.status==='offer')},
  {id:'first-recap', label:'First Weekly Recap', color:'blue', check: s => (s.weeklyRecaps||[]).length>=1},
  {id:'speed-typer', label:'40+ WPM', color:'lime', check: s => (Number(s.typingBest)||0) >= 40},
  {id:'resume-reviewed', label:'Resume Reviewed', color:'pink', check: s => (s.resumeReviews||[]).length>=1}
];
function badgeInitials(label){ return label.split(' ').map(w=>w[0]).join('').slice(0,3).toUpperCase(); }
function checkAchievements(){
  if(!state.achievements) state.achievements = [];
  let unlockedNew = false;
  ACHIEVEMENTS.forEach(a=>{
    if(!state.achievements.includes(a.id) && a.check(state)){ state.achievements.push(a.id); unlockedNew = true; showToast('Achievement unlocked', a.label); }
  });
  if(unlockedNew) saveState(); renderAchievements();
}
function renderAchievements(){
  const el = document.getElementById('badge-strip'); if(!el) return;
  const unlocked = state.achievements || [];
  el.innerHTML = ACHIEVEMENTS.map(a=>{
    const isUnlocked = unlocked.includes(a.id);
    return `<div class="badge ${isUnlocked?'unlocked':''}" title="${escapeHtml(a.label)}${isUnlocked?'':' — locked'}">
      <div class="badge-icon" style="--badge-color:${colorVar(a.color)}">${badgeInitials(a.label)}</div>
      <div class="badge-label">${escapeHtml(a.label)}</div>
    </div>`;
  }).join('');
}
function showToast(title, body){
  let toast = document.getElementById('achievement-toast');
  if(!toast){ toast = document.createElement('div'); toast.id = 'achievement-toast'; toast.className = 'toast'; document.body.appendChild(toast); }
  toast.innerHTML = `<div class="toast-star">★</div><div><div class="toast-t1">${escapeHtml(title)}</div><div class="toast-t2">${escapeHtml(body)}</div></div>`;
  toast.classList.add('show'); clearTimeout(toast._hideTimer);
  toast._hideTimer = setTimeout(()=> toast.classList.remove('show'), 3800);
}

let timerSeconds = 1500; let timerDefault = 1500; let timerInterval = null; let timerRunning = false;
function renderTimer(){
  const disp = document.getElementById('timer-display'); if(!disp) return;
  const mins = Math.floor(timerSeconds/60).toString().padStart(2,'0'); const secs = (timerSeconds%60).toString().padStart(2,'0');
  disp.textContent = `${mins}:${secs}`; disp.className = 'timer-display' + (timerRunning?' running':'');
  document.querySelectorAll('.timer-preset').forEach(b=>{ b.classList.toggle('active', Number(b.dataset.secs)===timerDefault); b.disabled = timerRunning; });
  const startBtn = document.getElementById('timer-start-btn');
  if(startBtn) startBtn.textContent = timerRunning ? 'pause' : (timerSeconds < timerDefault && timerSeconds > 0 ? 'resume' : 'start');
}
function setTimerPreset(secs){ if(timerRunning) return; timerDefault = secs; timerSeconds = secs; renderTimer(); }
function tickTimer(){
  timerSeconds--;
  if(timerSeconds<=0){ clearInterval(timerInterval); timerInterval=null; timerRunning=false; timerSeconds=0; renderTimer(); completeTimerSession(); return; }
  renderTimer();
}
function toggleTimer(){
  if(timerRunning){ clearInterval(timerInterval); timerInterval=null; timerRunning=false; } 
  else { if(timerSeconds<=0) timerSeconds = timerDefault; timerRunning = true; timerInterval = setInterval(tickTimer, 1000); }
  renderTimer();
}
function resetTimer(){
  clearInterval(timerInterval); timerInterval=null; timerRunning=false; timerSeconds = timerDefault; renderTimer();
}
function completeTimerSession(){
  const mins = Math.round(timerDefault/60);
  addAutoLog(`Focus session: ${mins} min`, 'other');
  const last = state.logs[state.logs.length-1]; if(last) last.hours = Math.round((mins/60)*100)/100;
  saveState(); renderStats(); renderHeatmap(); renderLog(); showToast('Focus session complete', `${mins} minutes logged to today`); checkAchievements();
}
document.querySelectorAll('.timer-preset').forEach(b=>{ b.addEventListener('click', ()=> setTimerPreset(Number(b.dataset.secs))); });
document.getElementById('timer-start-btn')?.addEventListener('click', toggleTimer);
document.getElementById('timer-reset-btn')?.addEventListener('click', resetTimer);

async function generateInterviewQuestion(){
  const container = document.getElementById('interview-container');
  container.innerHTML = `<div class="task-card" style="--task-color:var(--rose)"><div class="thinking">preparing a question<span class="blink">_</span></div></div>`;
  try{
    const q = await callAI([{role:'user', content:'Give me one mock interview question now.'}], MOCK_INTERVIEW_SYSTEM);
    state.mockInterview.currentQuestion = q;
  }catch(e){ state.mockInterview.currentQuestion = 'Could not generate a question: ' + (e.message||'unknown error') + '. Try again.'; }
  saveState(); renderInterview();
}
async function submitInterviewAnswer(){
  const input = document.getElementById('interview-answer'); const answer = input.value.trim();
  if(!answer){ input.focus(); return; }
  const question = state.mockInterview.currentQuestion; const btn = document.getElementById('interview-submit-btn');
  btn.disabled = true; btn.textContent = 'getting feedback…';
  let feedback = '';
  try{
    feedback = await callAI([{role:'user', content: `Interview question: ${question}\n\nMy spoken answer: ${answer}\n\nGive me feedback on this answer.`}], MOCK_FEEDBACK_SYSTEM);
  }catch(e){ feedback = 'Could not get feedback: ' + (e.message||'unknown error') + '. Try again.'; }
  if(!state.mockInterview) state.mockInterview = {history:[], currentQuestion:null};
  state.mockInterview.history.push({question, answer, feedback, date: todayStr()});
  if(state.mockInterview.history.length > 30) state.mockInterview.history = state.mockInterview.history.slice(-30);
  state.mockInterview.currentQuestion = null; saveState(); renderInterview(); checkAchievements();
}
function renderInterview(){
  const el = document.getElementById('interview-container'); if(!el) return;
  const mi = state.mockInterview || {history:[], currentQuestion:null}; let html = '';
  if(mi.currentQuestion){
    html += `
      <div class="task-card" style="--task-color:var(--rose)">
        <span class="task-cat-pill" style="color:var(--rose);background:var(--rose-bg); display:inline-block; margin-bottom:12px;">interview question</span>
        <div class="task-body">${formatAssistantText(mi.currentQuestion)}</div>
        <textarea id="interview-answer" placeholder="type your answer as if you were saying it out loud..." style="min-height:100px; margin-top:14px;"></textarea>
        <div class="task-actions"><button class="primary" id="interview-submit-btn" type="button">submit answer</button></div>
      </div>
    `;
  } else {
    html += `
      <div class="task-card" style="--task-color:var(--rose)">
        <div class="task-empty">
          <p>${mi.history.length ? "ready for another one?" : "no question yet \u2014 start when you're ready."}</p>
          <button class="primary" id="interview-start-btn" type="button">${mi.history.length ? 'next question' : 'start mock interview'}</button>
        </div>
      </div>
    `;
  }
  el.innerHTML = html;
  const startBtn = document.getElementById('interview-start-btn'); if(startBtn) startBtn.addEventListener('click', generateInterviewQuestion);
  const submitBtn = document.getElementById('interview-submit-btn'); if(submitBtn) submitBtn.addEventListener('click', submitInterviewAnswer);

  if(mi.history.length){
    const feedWrap = document.createElement('div'); feedWrap.style.marginTop = '22px';
    feedWrap.innerHTML = '<div class="sec-head" style="margin-bottom:10px;"><div class="sec-head-left"><span class="dollar">#</span><h2>past answers</h2></div></div>';
    const list = document.createElement('div'); list.className = 'chat-thread';
    [...mi.history].reverse().slice(0,20).forEach(h=>{
      const q = document.createElement('div'); q.className = 'msg user'; q.innerHTML = `<div class="who">question</div><div class="msg-text">${escapeHtml(h.question)}</div>`;
      const f = document.createElement('div'); f.className = 'msg assistant'; f.innerHTML = `<div class="who">feedback</div><div class="msg-text">${formatAssistantText(h.feedback)}</div><div style="margin-top:8px;"><button class="copy-btn interview-copy" type="button">copy</button></div>`;
      f.querySelector('.interview-copy').addEventListener('click', (e)=> copyText(h.feedback, e.currentTarget));
      list.appendChild(q); list.appendChild(f);
    });
    feedWrap.appendChild(list); el.appendChild(feedWrap);
  }
}

function exportData(){
  const exportObj = Object.assign({}, state, { geminiKey:'', _exportedAt: new Date().toISOString() });
  const blob = new Blob([JSON.stringify(exportObj, null, 2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = `coding-journey-backup-${todayStr()}.json`;
  document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
}
document.getElementById('export-btn')?.addEventListener('click', exportData);
document.getElementById('import-btn')?.addEventListener('click', ()=> document.getElementById('import-file-input')?.click());
document.getElementById('import-file-input')?.addEventListener('change', async (e)=>{
  const file = e.target.files[0]; e.target.value = ''; if(!file) return;
  if(!confirm('Importing will overwrite your current progress. Continue?')) return;
  try{
    const text = await file.text(); const imported = JSON.parse(text);
    const keepKey = state.geminiKey; const keepAttachments = state.noteAttachments;
    state = Object.assign({
      checklist:{}, logs:[], notes:'', chat:[], links:{}, focusPhase:null,
      taskLevel:1, tasksCompleted:0, dailyTask:null,
      course:{items:[]}, courseLog:[], geminiKey:'', noteAttachments:[],
      targetDate:null, achievements:[], mockInterview:{history:[], currentQuestion:null},
      companies:[], weeklyRecaps:[], goals:[], reminders:[], arcade:{xp:0,correct:0,total:0,dailyStreak:0,lastCorrectDate:null,answers:{}}, snakeBest:0, typingBest:0, resumeText:'', resumeReviews:[]
    }, imported);
    if(!imported.geminiKey) state.geminiKey = keepKey;
    if(!imported.noteAttachments || !imported.noteAttachments.length) state.noteAttachments = keepAttachments;
    await saveState(); render(); alert('Backup imported.');
  }catch(err){ alert("Could not read that file \u2014 make sure it's a backup exported from this tracker."); }
});

const STATUS_CONFIG = [
  {id:'researching', label:'Researching', color:'slate'},
  {id:'applied', label:'Applied', color:'blue'},
  {id:'oa', label:'OA / Test', color:'amber'},
  {id:'interview', label:'Interview', color:'purple'},
  {id:'offer', label:'Offer', color:'green'},
  {id:'rejected', label:'Rejected', color:'red'}
];
function statusConfig(id){ return STATUS_CONFIG.find(s=>s.id===id) || STATUS_CONFIG[0]; }
function renderCompanies(){
  const summaryEl = document.getElementById('company-summary'); const listEl = document.getElementById('company-list');
  if(!listEl) return;
  const term = (document.getElementById('company-search')?.value || '').trim().toLowerCase();
  const statusFilter = document.getElementById('company-status-filter')?.value || '';
  const list = (state.companies || []).filter(c=>{
    const text = [c.name,c.role,c.notes].join(' ').toLowerCase();
    const matchesStatus = !statusFilter || (statusFilter==='active' ? ['applied','oa','interview'].includes(c.status) : c.status===statusFilter);
    return (!term || text.includes(term)) && matchesStatus;
  });
  if(!list.length){
    if(summaryEl) summaryEl.textContent = 'no companies added yet';
    listEl.innerHTML = '<div class="empty">add companies you\'re targeting and track where you stand with each</div>';
    return;
  }
  const offers = list.filter(c=>c.status==='offer').length; const active = list.filter(c=>['applied','oa','interview'].includes(c.status)).length;
  if(summaryEl) summaryEl.textContent = `${list.length} companies tracked · ${active} in progress${offers ? ' · ' + offers + ' offer' + (offers>1?'s':'') : ''}`;

  listEl.innerHTML = '';
  [...list].sort((a,b)=> (b.updatedAt||b.addedAt||'').localeCompare(a.updatedAt||a.addedAt||'')).forEach(c=>{
    const sc = statusConfig(c.status); const card = document.createElement('div'); card.className = 'company-card';
    card.style.boxShadow = 'inset 3px 0 0 ' + colorVar(sc.color);
    card.innerHTML = `
      <div class="company-top">
        <div class="company-id"><div class="company-name">${escapeHtml(c.name)}</div>${c.role ? `<div class="company-role">${escapeHtml(c.role)}</div>` : ''}</div>
        <div class="company-actions">
          <select class="company-status" data-id="${c.id}" style="border-color:${colorVar(sc.color)}; color:${colorVar(sc.color)};">
            ${STATUS_CONFIG.map(s=>`<option value="${s.id}" ${s.id===c.status?'selected':''}>${s.label}</option>`).join('')}
          </select>
          <button class="del-btn" data-id="${c.id}" title="remove">&times;</button>
        </div>
      </div>
      <input type="text" class="company-notes" data-id="${c.id}" placeholder="notes — referral, OA date, round details..." value="${escapeHtml(c.notes||'')}">
    `;
    card.querySelector('.company-status').addEventListener('change', (e)=>{ updateCompany(c.id, {status: e.target.value}); });
    card.querySelector('.company-notes').addEventListener('change', (e)=>{ updateCompany(c.id, {notes: e.target.value}); });
    card.querySelector('.del-btn').addEventListener('click', ()=>{ state.companies = state.companies.filter(x=>x.id!==c.id); saveState(); renderCompanies(); });
    listEl.appendChild(card);
  });
}
function updateCompany(id, patch){
  const c = (state.companies||[]).find(x=>x.id===id); if(!c) return;
  Object.assign(c, patch, {updatedAt: new Date().toISOString()}); saveState(); renderCompanies(); checkAchievements();
}
document.getElementById('company-add-btn')?.addEventListener('click', ()=>{
  const nameInput = document.getElementById('company-name-input'); const roleInput = document.getElementById('company-role-input');
  if(!nameInput) return;
  const name = nameInput.value.trim(); if(!name){ nameInput.focus(); return; }
  if(!state.companies) state.companies = [];
  state.companies.push({ id: Date.now().toString(36)+Math.random().toString(36).slice(2,6), name, role: roleInput ? roleInput.value.trim() : '', status:'researching', notes:'', addedAt: new Date().toISOString() });
  nameInput.value=''; if(roleInput) roleInput.value=''; saveState(); renderCompanies(); checkAchievements();
});
document.getElementById('company-name-input')?.addEventListener('keydown', (e)=>{ if(e.key==='Enter'){ document.getElementById('company-add-btn')?.click(); } });
document.getElementById('company-search')?.addEventListener('input', renderCompanies);
document.getElementById('company-status-filter')?.addEventListener('change', renderCompanies);

function renderWeeklyRecaps(){
  const el = document.getElementById('recap-list'); if(!el) return;
  const list = state.weeklyRecaps || [];
  if(!list.length){ el.innerHTML = '<div class="empty">no recap yet — generate one anytime, ideally once a week, to see the past 7 days summarized</div>'; return; }
  const shown = [...list].reverse().slice(0,12);
  el.innerHTML = shown.map((r,i) => `
    <div class="recap-card">
      <div class="recap-head"><span class="recap-label">${escapeHtml(r.weekLabel)}</span><span class="recap-date">generated ${fmtRelDate(r.generatedAt.slice(0,10))}</span></div>
      <div class="msg-text">${formatAssistantText(r.text)}</div>
      <div style="margin-top:8px;"><button class="copy-btn recap-copy" type="button" data-idx="${i}">copy</button></div>
    </div>
  `).join('');
  el.querySelectorAll('.recap-copy').forEach(btn=>{ btn.addEventListener('click', (e)=> copyText(shown[Number(btn.dataset.idx)].text, e.currentTarget)); });
}
async function generateWeeklyRecap(){
  const btn = document.getElementById('generate-recap-btn'); if(!btn) return; btn.disabled = true; btn.textContent = 'generating…';
  const end = new Date(); const start = new Date(); start.setDate(start.getDate()-6);
  const startStr = todayStr(start), endStr = todayStr(end);
  const weekLogs = state.logs.filter(l => l.date >= startStr && l.date <= endStr);

  let text;
  if(!weekLogs.length){ text = "No activity logged in the past 7 days. Pick one small thing today and the streak will have something to work with next time."; } 
  else {
    const lines = weekLogs.sort((a,b)=> a.date.localeCompare(b.date)).map(l => `${l.date} [${l.category}] ${l.message}${l.hours ? ' ('+l.hours+'h)' : ''}`).join('\n');
    try{ text = await callAI([{role:'user', content: `Here is my activity log from the past 7 days:\n\n${lines}\n\nWrite my weekly recap.`}], WEEKLY_RECAP_SYSTEM);
    }catch(e){ text = 'Could not generate a recap: ' + (e.message||'unknown error') + '. Try again.'; }
  }

  if(!state.weeklyRecaps) state.weeklyRecaps = [];
  state.weeklyRecaps.push({ id: Date.now().toString(36)+Math.random().toString(36).slice(2,6), weekLabel: `Week of ${startStr} – ${endStr}`, generatedAt: new Date().toISOString(), text });
  if(state.weeklyRecaps.length > 20) state.weeklyRecaps = state.weeklyRecaps.slice(-20);
  btn.disabled = false; btn.textContent = "generate this week's recap"; saveState(); renderWeeklyRecaps(); checkAchievements();
}
document.getElementById('generate-recap-btn')?.addEventListener('click', generateWeeklyRecap);

// ---------- resume review ----------
const resumeInput = document.getElementById('resume-input');
if(resumeInput){
  resumeInput.addEventListener('input', ()=>{
    state.resumeText = resumeInput.value;
    saveState();
  });
}
function renderResumeReviews(){
  const el = document.getElementById('resume-review-feed');
  if(!el) return;
  const list = state.resumeReviews || [];
  if(!list.length){ el.innerHTML = '<div class="empty">no reviews yet — paste your resume above and hit review</div>'; return; }
  const shown = [...list].reverse().slice(0,15);
  el.innerHTML = shown.map((r,i) => `
    <div class="msg assistant">
      <div class="who"><span>review #${list.length - i} · ${fmtRelDate(r.date)}</span><button class="copy-btn resume-copy" type="button" data-idx="${i}">copy</button></div>
      <div class="msg-text">${formatAssistantText(r.text)}</div>
    </div>
  `).join('');
  el.querySelectorAll('.resume-copy').forEach(btn=>{
    btn.addEventListener('click', (e)=> copyText(shown[Number(btn.dataset.idx)].text, e.currentTarget));
  });
}
async function reviewResume(){
  const btn = document.getElementById('resume-review-btn');
  const text = (resumeInput.value||'').trim();
  if(!text){ resumeInput.focus(); return; }
  btn.disabled = true; btn.textContent = 'reviewing…';
  let review;
  try{
    review = await callAI([{role:'user', content: `Here is my resume:\n\n${text}`}], RESUME_REVIEW_SYSTEM);
  }catch(e){
    review = 'Could not review the resume: ' + (e.message||'unknown error') + '. Try again.';
  }
  if(!state.resumeReviews) state.resumeReviews = [];
  state.resumeReviews.push({
    id: Date.now().toString(36)+Math.random().toString(36).slice(2,6),
    date: todayStr(), generatedAt: new Date().toISOString(), text: review
  });
  if(state.resumeReviews.length > 20) state.resumeReviews = state.resumeReviews.slice(-20);
  btn.disabled = false; btn.textContent = 'review my resume';
  saveState();
  renderResumeReviews();
  checkAchievements();
}
const resumeReviewBtn = document.getElementById('resume-review-btn');
if(resumeReviewBtn) resumeReviewBtn.addEventListener('click', reviewResume);

const CODE_SAMPLES = {
  python: `# write Python here and hit run\nfor i in range(5):\n    print(i, i*i)\n`,
  javascript: `// write JavaScript here and hit run\nfor (let i = 0; i < 5; i++) {\n  console.log(i, i*i);\n}\n`,
  c: `// C/C++ practice runner (C++ stream syntax is most reliable here)\n#include <iostream>\nusing namespace std;\n\nint main() {\n  for (int i = 0; i < 5; i++) {\n    cout << i << " " << i * i << endl;\n  }\n  return 0;\n}\n`
};
let codeLang = 'python'; let pyodideInstance = null; const codeDrafts = {...CODE_SAMPLES};
const CODE_LABELS = {python:'python.py', javascript:'javascript.js', c:'c-cpp.cpp'};
let codeFileNames = {};
const codeEditor = document.getElementById('code-editor');
codeEditor.value = codeDrafts.python;
function updateCodeLabel(){ document.getElementById('code-editor-label').textContent = (codeFileNames && codeFileNames[codeLang] ? codeFileNames[codeLang] : CODE_LABELS[codeLang]) + ' · separate workspace'; }
codeEditor.addEventListener('keydown', (e)=>{
  if(e.key === 'Tab'){ e.preventDefault(); const start = codeEditor.selectionStart, end = codeEditor.selectionEnd;
    codeEditor.value = codeEditor.value.slice(0,start) + '  ' + codeEditor.value.slice(end); codeEditor.selectionStart = codeEditor.selectionEnd = start + 2; }
});
codeEditor.addEventListener('input', ()=>{ codeDrafts[codeLang] = codeEditor.value; });

function setCodeOutput(text, isError){
  const el = document.getElementById('code-output');
  if(!text){ el.innerHTML = '<span class="placeholder">(no output)</span>'; return; }
  el.innerHTML = isError ? `<span class="err">${escapeHtml(text)}</span>` : escapeHtml(text);
}
function switchLang(lang){
  if(codeLang === lang) return;
  codeDrafts[codeLang] = codeEditor.value; codeLang = lang;
  document.getElementById('lang-python-btn').classList.toggle('active', lang==='python');
  document.getElementById('lang-js-btn').classList.toggle('active', lang==='javascript');
  document.getElementById('lang-c-btn').classList.toggle('active', lang==='c');
  codeEditor.value = codeDrafts[lang] || CODE_SAMPLES[lang]; updateCodeLabel(); setCodeOutput('', false);
}
document.getElementById('lang-python-btn').addEventListener('click', ()=> switchLang('python'));
document.getElementById('lang-js-btn').addEventListener('click', ()=> switchLang('javascript'));
document.getElementById('lang-c-btn').addEventListener('click', ()=> switchLang('c'));
document.getElementById('clear-code-btn').addEventListener('click', ()=>{ codeEditor.value = ''; codeDrafts[codeLang] = ''; setCodeOutput('', false); codeEditor.focus(); });
document.getElementById('copy-code-btn').addEventListener('click', (e)=> copyText(codeEditor.value, e.currentTarget));

const LANG_EXT = { python: CODE_LABELS.python.split('.').pop(), javascript: CODE_LABELS.javascript.split('.').pop(), c: CODE_LABELS.c.split('.').pop() };
const codeFileNames = { python: 'untitled.' + LANG_EXT.python, javascript: 'untitled.' + LANG_EXT.javascript, c: 'untitled.' + LANG_EXT.c };
const openFileInput = document.getElementById('open-code-file-input');
document.getElementById('open-code-btn').addEventListener('click', ()=>{ openFileInput.accept = '.' + LANG_EXT[codeLang]; openFileInput.click(); });
openFileInput.addEventListener('change', async (e)=>{
  const file = e.target.files[0]; e.target.value = ''; if(!file) return;
  const expectedExt = LANG_EXT[codeLang]; const actualExt = (file.name.split('.').pop() || '').toLowerCase();
  if(actualExt !== expectedExt){ alert(`This editor is set to ${CODE_LABELS[codeLang]}. Switch language tabs first.`); return; }
  try{ const text = await file.text(); codeDrafts[codeLang] = text; codeEditor.value = text; codeFileNames[codeLang] = file.name; updateCodeLabel(); setCodeOutput('', false); }
  catch(err){ alert('Could not read that file.'); }
});
document.getElementById('save-code-btn').addEventListener('click', ()=>{
  const ext = LANG_EXT[codeLang]; const current = codeFileNames[codeLang] || ('untitled.' + ext);
  const entered = prompt('Save as filename:', current); if(entered === null) return;
  let filename = entered.trim() || current; if(!filename.toLowerCase().endsWith('.' + ext)) filename += '.' + ext;
  codeFileNames[codeLang] = filename;
  const blob = new Blob([codeEditor.value], {type:'plain/text'}); const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url); updateCodeLabel();
});
document.getElementById('copy-output-btn').addEventListener('click', (e)=> copyText(document.getElementById('code-output').innerText, e.currentTarget));

async function ensurePyodide(runBtn){
  if(pyodideInstance) return pyodideInstance;
  runBtn.disabled = true; runBtn.textContent = 'loading Python…'; setCodeOutput('Downloading the Python runtime (~10-15s)…', false);
  if(!window.loadPyodide){ await new Promise((resolve, reject)=>{ const s = document.createElement('script'); s.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js'; s.onload = resolve; s.onerror = reject; document.head.appendChild(s); }); }
  pyodideInstance = await window.loadPyodide(); return pyodideInstance;
}
async function runPython(code, runBtn){
  try{
    const pyodide = await ensurePyodide(runBtn); let out = '';
    pyodide.setStdout({ batched: (s)=>{ out += s + '\n'; } }); pyodide.setStderr({ batched: (s)=>{ out += s + '\n'; } });
    runBtn.textContent = 'running…';
    try{ await pyodide.runPythonAsync(code); }catch(err){ setCodeOutput(out + (err.message || String(err)), true); return; }
    setCodeOutput(out, false);
  }catch(e){ setCodeOutput('Could not run Python: ' + (e.message||'error'), true); }
}
function runJavaScript(code){
  const logs = []; const stringify = (a)=>{ if(typeof a === 'object') { try{ return JSON.stringify(a); }catch(e){ return String(a); } } return String(a); };
  const capture = (...args)=> logs.push(args.map(stringify).join(' '));
  const safeConsole = {log:capture, info:capture, warn:capture, error:capture, debug:capture, table:capture};
  try{ const result = new Function('console', code)(safeConsole); if(result !== undefined) logs.push('=> ' + stringify(result)); setCodeOutput(logs.join('\n') || 'Success (no output).', false); }
  catch(e){ logs.push((e.name ? e.name + ': ' : '') + (e.message || String(e))); setCodeOutput(logs.join('\n'), true); }
}
async function ensureJSCPP(){
  if(window.JSCPP) return window.JSCPP;
  await new Promise((resolve, reject)=>{ const s = document.createElement('script'); s.src = 'https://cdn.jsdelivr.net/npm/JSCPP@2.0.9/dist/JSCPP.es5.min.js'; s.onload = resolve; s.onerror = reject; document.head.appendChild(s); });
  return window.JSCPP;
}
async function runC(code, runBtn){
  try{
    runBtn.textContent = 'loading C runtime…'; const JSCPPLib = await ensureJSCPP(); runBtn.textContent = 'running…';
    let out = ''; let exitCode = 0;
    try{ exitCode = JSCPPLib.run(code, '', { stdio: { write: (s)=>{ out += s; } }, unsigned_overflow:'warn' }); }
    catch(err){ setCodeOutput((out ? out + '\n' : '') + (err.message || String(err)), true); return; }
    setCodeOutput(out || `Success (exit code ${exitCode}).`, false);
  }catch(e){ setCodeOutput('Could not run C: ' + (e.message||'error'), true); }
}
document.getElementById('run-code-btn').addEventListener('click', async ()=>{
  const runBtn = document.getElementById('run-code-btn'); const code = codeEditor.value;
  if(!code.trim()){ setCodeOutput('', false); return; }
  if(codeLang === 'javascript'){ runJavaScript(code); return; }
  runBtn.disabled = true;
  if(codeLang === 'c'){ await runC(code, runBtn); } else { await runPython(code, runBtn); }
  runBtn.disabled = false; runBtn.textContent = '▶ run';
});

const NOTE_STORE_LIMIT = 1500000;
function humanSize(bytes){ if(bytes < 1024) return bytes+' B'; if(bytes < 1024*1024) return (bytes/1024).toFixed(1)+' KB'; return (bytes/(1024*1024)).toFixed(2)+' MB'; }
function fileExtBadge(name){ return (name.split('.').pop() || 'file').toUpperCase().slice(0,4); }
async function handleNoteFile(file){
  const canStoreFull = file.size <= NOTE_STORE_LIMIT;
  const id = Date.now().toString(36)+Math.random().toString(36).slice(2,6);
  const meta = { id, name:file.name, type:file.type||'application/octet-stream', size:file.size, stored:false, added:todayStr() };
  if(canStoreFull){
    try{
      const dataUrl = await new Promise((resolve,reject)=>{ const r = new FileReader(); r.onload = ()=> resolve(r.result); r.onerror = reject; r.readAsDataURL(file); });
      await window.storage.set('attachment:'+id, dataUrl, false); meta.stored = true;
    }catch(e){ }
  }
  if(!state.noteAttachments) state.noteAttachments = [];
  state.noteAttachments.push(meta);
  if(!canStoreFull){ alert(`"${file.name}" is ${humanSize(file.size)} — too big to save the actual file here. Saved it as a reference card instead.`); }
  saveState(); renderNoteAttachments();
}
async function renderNoteAttachments(){
  const el = document.getElementById('note-attach-grid'); if(!el) return;
  const list = state.noteAttachments || [];
  if(!list.length){ el.innerHTML = '<div class="empty">nothing saved yet.</div>'; return; }
  el.innerHTML = '<div class="empty">loading…</div>';
  const cards = await Promise.all(list.map(async (att)=>{
    let dataUrl = '';
    if(att.stored){ try{ const res = await window.storage.get('attachment:'+att.id, false); dataUrl = res ? res.value : ''; }catch(e){ dataUrl=''; } }
    const isImage = (att.type||'').startsWith('image/') && dataUrl;
    return `
      <div class="attach-card">
        <button class="del-btn" data-id="${att.id}" title="remove">&times;</button>
        ${isImage ? `<img src="${dataUrl}" alt="${escapeHtml(att.name)}">` : `<div class="file-icon">${fileExtBadge(att.name)}</div>`}
        <div class="meta"><div class="fname" title="${escapeHtml(att.name)}">${escapeHtml(att.name)}</div><div class="fsize">${humanSize(att.size)}${att.stored ? '' : ' · reference only'}</div></div>
        ${dataUrl ? `<a href="${dataUrl}" download="${escapeHtml(att.name)}" style="display:block; text-align:center; font-size:11px; color:var(--text-dim); padding:6px 0; border-top:1px solid var(--border-soft); text-decoration:none;">save file</a>` : ''}
      </div>
    `;
  }));
  el.innerHTML = cards.join('');
  el.querySelectorAll('.del-btn').forEach(btn=>{ btn.addEventListener('click', ()=> deleteNoteAttachment(btn.dataset.id)); });
}
async function deleteNoteAttachment(id){
  const att = (state.noteAttachments||[]).find(a=>a.id===id);
  state.noteAttachments = (state.noteAttachments||[]).filter(a=>a.id!==id);
  if(att && att.stored){ try{ await window.storage.delete('attachment:'+id, false); }catch(e){} }
  saveState(); renderNoteAttachments();
}
document.getElementById('note-attach-btn').addEventListener('click', ()=> document.getElementById('note-file-input').click());
document.getElementById('note-file-input').addEventListener('change', async (e)=>{ const file = e.target.files[0]; e.target.value = ''; if(file) await handleNoteFile(file); });

const notesArea = document.getElementById('notes-area');
document.getElementById('copy-notes-btn').addEventListener('click', (e)=> copyText(notesArea.value, e.currentTarget));
notesArea.addEventListener('input', ()=>{
  state.notes = notesArea.value; saveState();
  const flash = document.getElementById('save-flash'); flash.classList.add('show');
  clearTimeout(notesArea._flashTimer); notesArea._flashTimer = setTimeout(()=> flash.classList.remove('show'), 900);
});

document.getElementById('reset-btn').addEventListener('click', async ()=>{
  if(!confirm('This clears all tracked data. Continue?')) return;
  const keepKey = state.geminiKey;
  for(const att of (state.noteAttachments||[])){ if(att.stored){ try{ await window.storage.delete('attachment:'+att.id, false); }catch(e){} } }
  state = {
    checklist:{}, logs:[], notes:'', chat:[], links:{}, focusPhase:null, taskLevel:1, tasksCompleted:0, dailyTask:null,
    course:{items:[]}, courseLog:[], geminiKey: keepKey, noteAttachments:[], targetDate: state.targetDate, achievements:[], mockInterview:{history:[], currentQuestion:null},
    companies: state.companies, weeklyRecaps:[], goals:[], reminders:[], arcade:{xp:0,correct:0,total:0,dailyStreak:0,lastCorrectDate:null,answers:{}}, snakeBest: state.snakeBest, typingBest: state.typingBest, resumeText: state.resumeText, resumeReviews: state.resumeReviews
  };
  state.links.course = 'https://courses.aajsecode.com/s/courses/663f10c1b48d0c3f23f4ac0b/take'; await saveState(); render();
});

function id(){ return Date.now().toString(36)+Math.random().toString(36).slice(2,6); }
function logHoursByDate(){ return (state.logs||[]).reduce((map, entry)=>{ map[entry.date]=(map[entry.date]||0)+(Number(entry.hours)||0.5); return map; }, {}); }
function renderAnalytics(){
  const summary = document.getElementById('analytics-summary'); const categoryEl = document.getElementById('analytics-categories');
  if(!summary || !categoryEl) return;
  const today = new Date(); const weekStart = new Date(today); weekStart.setDate(today.getDate()-6); const weekStartKey = todayStr(weekStart);
  const weekly = (state.logs||[]).filter(l=>l.date>=weekStartKey);
  const weeklyHours = weekly.reduce((sum,l)=>sum+(Number(l.hours)||0),0);
  const activeDays = new Set(weekly.map(l=>l.date)).size;
  
  const due = Array.isArray(state.reminders) ? state.reminders.filter(r=>!r.done && r.date && r.date>=todayStr()).length : 0;
  
  summary.innerHTML = [
    ['this week', Math.round(weeklyHours*10)/10+'h', activeDays+' active day'+(activeDays===1?'':'s')],
    ['completion', computeChecklistPct()+'%', 'roadmap checklist'],
    ['next actions', due, due===1?'upcoming reminder':'upcoming reminders']
  ].map(x=>`<div class="insight-card"><div class="k">${x[0]}</div><div class="v">${x[1]}</div><div class="s">${x[2]}</div></div>`).join('');
  const totals = {}; (state.logs||[]).forEach(l=> totals[l.category]=(totals[l.category]||0)+(Number(l.hours)||0.5));
  const max = Math.max(1,...Object.values(totals)); const entries = Object.entries(totals).sort((a,b)=>b[1]-a[1]);
  categoryEl.innerHTML = entries.length ? entries.map(([cat,h])=>{
    const color = CATEGORY_COLOR[cat]||'slate'; const rounded=Math.round(h*10)/10;
    return `<div class="bar-row"><span>${escapeHtml(cat)}</span><div class="bar-track"><div class="bar-fill" style="width:${(h/max)*100}%;background:${colorVar(color)}"></div></div><span>${rounded}h</span></div>`;
  }).join('') : '<div class="empty">log activity to see your strongest study areas</div>';
}
function renderCalendar(){
  const el=document.getElementById('calendar-view'); if(!el) return;
  const hours=logHoursByDate(); const now=new Date(); const first=new Date(now.getFullYear(),now.getMonth(),1);
  const last=new Date(now.getFullYear(),now.getMonth()+1,0); const labels=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  el.innerHTML=labels.map(d=>`<div class="cal-head">${d}</div>`).join('');
  for(let i=0;i<first.getDay();i++) el.insertAdjacentHTML('beforeend','<div></div>');
  for(let d=1;d<=last.getDate();d++){
    const date=new Date(now.getFullYear(),now.getMonth(),d), key=todayStr(date), h=hours[key]||0;
    el.insertAdjacentHTML('beforeend',`<div class="cal-day ${h?'active':''} ${key===todayStr()?'today':''}" title="${key}: ${h?Math.round(h*10)/10+'h':'no activity'}">${d}${h?`<span class="hours">${Math.round(h*10)/10}h</span>`:''}</div>`);
  }
}
function renderGoals(){
  const el=document.getElementById('goal-list'); if(!el) return;
  const goals=state.goals||[];
  el.innerHTML=goals.length ? goals.map(g=>{
    const target=Math.max(1,Number(g.target)||1), current=Math.max(0,Number(g.current)||0), pct=Math.min(100,Math.round(current/target*100));
    return `<div class="goal-card"><div class="goal-top"><div><div class="goal-name">${escapeHtml(g.title)}</div><div class="goal-meta">${current} / ${target} · ${pct}% complete</div></div><div class="company-actions"><button class="lc-edit goal-step" data-id="${g.id}" data-delta="-1">−</button><button class="lc-edit goal-step" data-id="${g.id}" data-delta="1">+</button><button class="del-btn goal-delete" data-id="${g.id}" title="remove">×</button></div></div><div class="goal-progress"><span style="width:${pct}%"></span></div></div>`;
  }).join('') : '<div class="empty">add a measurable milestone — it can be DSA problems, mock interviews, applications, or anything else.</div>';
  el.querySelectorAll('.goal-step').forEach(b=>b.addEventListener('click',()=>{ const g=state.goals.find(x=>x.id===b.dataset.id); if(g){g.current=Math.max(0,(Number(g.current)||0)+Number(b.dataset.delta));saveState();renderGoals();renderAnalytics();} }));
  el.querySelectorAll('.goal-delete').forEach(b=>b.addEventListener('click',()=>{state.goals=state.goals.filter(g=>g.id!==b.dataset.id);saveState();renderGoals();}));
}

function renderReminders(){
  const el=document.getElementById('reminder-list'); if(!el) return;
  const today=todayStr(); 
  const items=[...(state.reminders||[])].sort((a,b)=>(a.done-b.done)||String(a.date).localeCompare(String(b.date)));
  el.innerHTML=items.length ? items.map(r=>{ 
    const urgent=!r.done && r.date && r.date<=today; 
    return `<div class="reminder ${urgent?'urgent':''} ${r.done?'done':''}"><div><div class="reminder-title">${escapeHtml(r.title)}</div><div class="reminder-date">${r.date ? (urgent ? 'due ' : 'due ') + escapeHtml(r.date) : 'no date set'}</div></div><div class="company-actions"><button class="lc-edit reminder-done" data-id="${r.id}">${r.done?'undo':'done'}</button><button class="del-btn reminder-delete" data-id="${r.id}" title="remove">×</button></div></div>`; 
  }).join('') : '<div class="empty">no reminders — add application dates, online assessments, interviews, or revision deadlines.</div>';
  
  el.querySelectorAll('.reminder-done').forEach(b=>b.addEventListener('click',()=>{
    const r=state.reminders.find(x=>x.id===b.dataset.id);
    if(r){r.done=!r.done;saveState();renderReminders();renderAnalytics();}
  }));
  el.querySelectorAll('.reminder-delete').forEach(b=>b.addEventListener('click',()=>{
    state.reminders=state.reminders.filter(r=>r.id!==b.dataset.id);saveState();renderReminders();renderAnalytics();
  }));
}
const reminderAddBtn = document.getElementById('reminder-add');
if (reminderAddBtn) {
  reminderAddBtn.addEventListener('click', ()=>{
    const title=document.getElementById('reminder-title');
    const date=document.getElementById('reminder-date');
    if(!title.value.trim()){title.focus();return;}
    if(!Array.isArray(state.reminders)) state.reminders = [];
    state.reminders.push({id:id(),title:title.value.trim(),date:date.value||'',done:false,createdAt:new Date().toISOString()});
    title.value='';date.value='';
    saveState();renderReminders();renderAnalytics();
  });
}

function renderActivityResults(){
  const el=document.getElementById('activity-results'); if(!el) return;
  const query=(document.getElementById('activity-search').value||'').trim().toLowerCase(); const cat=document.getElementById('activity-category').value;
  const rows=[...(state.logs||[])].filter(l=>(!query || [l.message,l.category,l.date].join(' ').toLowerCase().includes(query)) && (!cat || l.category===cat)).sort((a,b)=>(b.date+b.ts).localeCompare(a.date+a.ts)).slice(0,60);
  el.innerHTML=rows.length ? rows.map(l=>`<div class="log-entry" style="--entry-color:${colorVar(CATEGORY_COLOR[l.category]||'slate')}"><div class="log-body"><div class="log-msg">${escapeHtml(l.message)}</div><div class="log-tags"><span class="tag">${escapeHtml(l.category)}</span>${l.hours?`<span class="tag hrs">${l.hours}h</span>`:''}<span class="tag">${fmtRelDate(l.date)}</span></div></div></div>`).join('') : '<div class="empty">no matching activity</div>';
}
document.getElementById('goal-add')?.addEventListener('click',()=>{const title=document.getElementById('goal-title'),target=document.getElementById('goal-target');if(!title || !title.value.trim() || Number(target.value)<1){if(title) title.focus();return;}state.goals.push({id:id(),title:title.value.trim(),target:Number(target.value),current:0,createdAt:new Date().toISOString()});title.value='';target.value='';saveState();renderGoals();renderAnalytics();});
document.getElementById('activity-search')?.addEventListener('input',renderActivityResults);
document.getElementById('activity-category')?.addEventListener('change',renderActivityResults);

const EASY_ARCADE_QUESTIONS = [
  {topic:'DSA', prompt:'Which data structure is naturally used for breadth-first search (BFS)?', options:['Stack','Queue','Heap','Hash map'], answer:1, note:'BFS visits nodes in first-in, first-out order, so it uses a queue.'},
  {topic:'Complexity', prompt:'What is the average-case lookup time in a well-implemented hash table?', options:['O(1)','O(log n)','O(n)','O(n log n)'], answer:0, note:'A hash table is designed for average O(1) insert, lookup, and delete.'},
  {topic:'DBMS', prompt:'Which SQL clause filters grouped results after GROUP BY?', options:['WHERE','ORDER BY','HAVING','LIMIT'], answer:2, note:'WHERE filters rows before grouping; HAVING filters the completed groups.'},
  {topic:'OS', prompt:'What is the main purpose of a process scheduler?', options:['Encrypt files','Choose the next process for CPU time','Allocate IP addresses','Compile source code'], answer:1, note:'The scheduler decides which ready process gets CPU time next.'},
  {topic:'Networks', prompt:'Which protocol resolves a domain name such as example.com to an IP address?', options:['HTTP','DNS','FTP','SSH'], answer:1, note:'DNS translates human-readable domain names into IP addresses.'},
  {topic:'Python', prompt:'What does a Python dictionary store?', options:['Only numbers','Key-value pairs','Ordered bytes only','A single value'], answer:1, note:'Dictionaries map unique keys to values for efficient lookup.'},
  {topic:'Aptitude', prompt:'A task takes 10 days for one person. At the same rate, how many days for two people?', options:['20','10','5','2'], answer:2, note:'With twice the workers at the same rate, the time is halved.'},
  {topic:'OOP', prompt:'Which OOP principle hides implementation details behind a public interface?', options:['Inheritance','Encapsulation','Polymorphism','Recursion'], answer:1, note:'Encapsulation groups data and behavior while controlling how internals are exposed.'},
  {topic:'DSA', prompt:'Which traversal of a binary search tree yields values in sorted order?', options:['Preorder','Inorder','Postorder','Level order'], answer:1, note:'Inorder visits left subtree, node, then right subtree.'},
  {topic:'Data science', prompt:'Which metric balances precision and recall?', options:['Accuracy','F1 score','Mean squared error','R-squared'], answer:1, note:'F1 is the harmonic mean of precision and recall.'}
];
const MEDIUM_ARCADE_QUESTIONS = [
  {topic:'DSA', prompt:'What is the time complexity of binary search on a sorted array?', options:['O(1)','O(log n)','O(n)','O(n log n)'], answer:1, note:'Each comparison discards half of the remaining search range.'},
  {topic:'DBMS', prompt:'Which normal form removes partial dependency on part of a composite key?', options:['1NF','2NF','3NF','BCNF'], answer:1, note:'Second normal form removes partial dependencies.'},
  {topic:'OS', prompt:'Which scheduling algorithm can cause starvation without aging?', options:['Round Robin','FCFS','Priority scheduling','FIFO'], answer:2, note:'Low-priority processes can wait indefinitely unless aging is used.'},
  {topic:'Networks', prompt:'Which TCP feature helps ensure reliable, ordered delivery?', options:['MAC address','Sequence numbers and acknowledgements','DNS cache','IP fragmentation'], answer:1, note:'TCP uses sequence numbers and acknowledgements to track and recover data.'},
  {topic:'Python', prompt:'What does the expression [x*x for x in range(3)] produce?', options:['[1, 4, 9]','[0, 1, 4]','[0, 1, 2]','An error'], answer:1, note:'range(3) is 0, 1, 2, and each value is squared.'}
];
const HARD_ARCADE_QUESTIONS = [
  {topic:'DSA', prompt:'Which technique is most suitable for finding the shortest path in an unweighted graph?', options:['DFS','BFS','Merge sort','Binary search'], answer:1, note:'BFS reaches vertices in increasing number of edges from the source.'},
  {topic:'DBMS', prompt:'Which isolation issue occurs when one transaction reads data written but not committed by another?', options:['Phantom read','Dirty read','Deadlock','Lost update'], answer:1, note:'A dirty read uses data that might later be rolled back.'},
  {topic:'OS', prompt:'What is the primary reason virtual memory uses pages?', options:['To make CPU faster','To avoid all disk use','To map fixed-size memory blocks efficiently','To remove context switching'], answer:2, note:'Fixed-size pages make allocation, mapping, and swapping manageable.'},
  {topic:'Data science', prompt:'If a model has high training accuracy but low validation accuracy, it is most likely:', options:['Underfitting','Overfitting','Perfectly calibrated','Unsupervised'], answer:1, note:'The model learned the training data too specifically and does not generalize well.'}
];
function arcadeDifficulty(){
  const arcade=state.arcade||{}; const quizSkill=(Number(arcade.correct)||0)*2-(Number(arcade.total)||0);
  const trackerProgress=Math.floor(computeChecklistPct()/25)+Math.floor((Number(state.tasksCompleted)||0)/5);
  const score=quizSkill+trackerProgress;
  if(score<5) return {level:1,label:'Easy',pool:EASY_ARCADE_QUESTIONS};
  if(score<16) return {level:2,label:'Medium',pool:MEDIUM_ARCADE_QUESTIONS};
  return {level:3,label:'Hard',pool:HARD_ARCADE_QUESTIONS};
}
function arcadeQuestionForToday(){
  const arcade=state.arcade || (state.arcade={xp:0,correct:0,total:0,dailyStreak:0,lastCorrectDate:null,answers:{}});
  const date=todayStr(); let assigned=arcade.dailyQuiz;
  if(!assigned || assigned.date!==date){
    const difficulty=arcadeDifficulty(); let seed=0; for(const char of date) seed=(seed*31+char.charCodeAt(0))>>>0;
    assigned={date,level:difficulty.level,index:seed%difficulty.pool.length}; arcade.dailyQuiz=assigned;
  }
  const levels={1:{label:'Easy',pool:EASY_ARCADE_QUESTIONS},2:{label:'Medium',pool:MEDIUM_ARCADE_QUESTIONS},3:{label:'Hard',pool:HARD_ARCADE_QUESTIONS}};
  const difficulty=levels[assigned.level]||levels[1];
  return {question:difficulty.pool[assigned.index%difficulty.pool.length], key:date, difficulty};
}
function arcadeRank(xp){
  if(xp>=500) return 'Interview Ace'; if(xp>=250) return 'Problem Solver'; if(xp>=100) return 'Quiz Explorer'; return 'Placement Rookie';
}
function renderArcade(){
  const el=document.getElementById('arcade-card'); if(!el) return;
  const arcade=state.arcade || (state.arcade={xp:0,correct:0,total:0,dailyStreak:0,lastCorrectDate:null,answers:{}});
  const {question,key,difficulty}=arcadeQuestionForToday(); const choice=arcade.answers[key]; const answered=Number.isInteger(choice);
  const score=arcade.total ? Math.round((arcade.correct/arcade.total)*100) : 0;
  let result='Choose an answer — correct answers earn 25 XP.'; let resultClass='';
  if(answered){ const good=choice===question.answer; result=good ? `Correct! +25 XP. ${question.note}` : `Not this time. ${question.note}`; resultClass=good?'ok':'no'; }
  el.innerHTML=`<div class="arcade-head"><div><div class="arcade-rank">${arcadeRank(Number(arcade.xp)||0)}</div><div class="arcade-meta">${Number(arcade.xp)||0} XP · ${Number(arcade.dailyStreak)||0}-day quiz streak · ${score}% accuracy · adaptive: ${difficulty.label}</div></div><span class="tag" style="color:var(--purple);background:var(--purple-bg)">${question.topic}</span></div><div class="arcade-question">${escapeHtml(question.prompt)}</div><div class="arcade-options">${question.options.map((option,index)=>{const cl=answered ? (index===question.answer?'correct':index===choice?'wrong':'') : ''; return `<button class="arcade-option ${cl}" data-answer="${index}" ${answered?'disabled':''} type="button">${String.fromCharCode(65+index)}. ${escapeHtml(option)}</button>`;}).join('')}</div><div class="arcade-result ${resultClass}">${result}</div>`;
  if(!answered) el.querySelectorAll('.arcade-option').forEach(button=>button.addEventListener('click',()=>answerArcade(Number(button.dataset.answer))));
}
function answerArcade(choice){
  const arcade=state.arcade || (state.arcade={xp:0,correct:0,total:0,dailyStreak:0,lastCorrectDate:null,answers:{}});
  const {question,key}=arcadeQuestionForToday(); if(Number.isInteger(arcade.answers[key])) return;
  arcade.answers[key]=choice; arcade.total=(Number(arcade.total)||0)+1;
  if(choice===question.answer){
    arcade.correct=(Number(arcade.correct)||0)+1; arcade.xp=(Number(arcade.xp)||0)+25;
    const yesterday=new Date(); yesterday.setDate(yesterday.getDate()-1);
    arcade.dailyStreak=arcade.lastCorrectDate===todayStr(yesterday) ? (Number(arcade.dailyStreak)||0)+1 : 1;
    arcade.lastCorrectDate=key;
  }
  const keys=Object.keys(arcade.answers).sort(); if(keys.length>120) keys.slice(0,keys.length-120).forEach(oldKey=>delete arcade.answers[oldKey]);
  saveState(); renderArcade();
}

function render(){
  renderBoot(); renderStats(); renderCountdown(); renderQuickLaunch(); renderApiKeyRow();
  renderHeatmap(); renderFocusRow(); renderPhases(); renderLog(); renderChat();
  renderDailyTask(); renderCourseTab(); renderNoteAttachments(); renderAchievements();
  renderTimer(); renderInterview(); renderCompanies(); renderWeeklyRecaps(); renderResumeReviews();
  renderAnalytics(); renderCalendar(); renderGoals(); renderReminders(); renderActivityResults(); renderArcade();
  renderStreakBanner();
  if(window.refreshSnakeBest) window.refreshSnakeBest();
  if(window.refreshTypingBest) window.refreshTypingBest();
  if(resumeInput) resumeInput.value = state.resumeText || '';
  if(notesArea) notesArea.value = state.notes || '';
}

const CHEATSHEETS = [
  {
    id: 'bigo', cat: 'dsa', title: 'DSA Time & Space Complexities', badge: 'Big-O', color: 'purple',
    content: `<b>Array/String:</b> Lookup O(1), Search O(n), Insert/Delete O(n)<br><b>Hash Table:</b> Avg O(1), Worst O(n)<br><b>BST:</b> Avg O(log n), Worst O(n)<br><b>Sorting:</b> QuickSort/MergeSort O(n log n), Bubble O(n²)<br><b>Heap:</b> Insert O(log n), Top O(1)`
  },
  {
    id: 'patterns', cat: 'dsa', title: 'Core DSA Patterns', badge: 'Patterns', color: 'purple',
    content: `<b>Two Pointers:</b> Sorted arrays/strings (pairs, palindrome)<br><b>Sliding Window:</b> Subarrays of size K or max condition<br><b>Fast & Slow Pointer:</b> Cycle detection, LinkedList middle<br><b>BFS/DFS:</b> Tree levels, shortest path, connected graph`
  },
  {
    id: 'sql', cat: 'dbms', title: 'SQL Joins & Order of Clauses', badge: 'SQL', color: 'teal',
    content: `<b>Order:</b> FROM ➔ WHERE ➔ GROUP BY ➔ HAVING ➔ SELECT ➔ ORDER BY<br><b>INNER JOIN:</b> Matching rows in both tables<br><b>LEFT JOIN:</b> All left rows + matched right rows<br><b>HAVING vs WHERE:</b> WHERE before GROUP BY; HAVING after`
  },
  {
    id: 'dbms_acid', cat: 'dbms', title: 'DBMS ACID & Normalization', badge: 'DBMS', color: 'teal',
    content: `<b>Atomicity:</b> All or nothing execution<br><b>Consistency:</b> Valid state transitions<br><b>Isolation:</b> Concurrent safety<br><b>Durability:</b> Committed data persists<br><b>1NF-3NF:</b> Atomic ➔ No partial ➔ No transitive deps`
  },
  {
    id: 'python_ds', cat: 'python', title: 'Python & Pandas Snippets', badge: 'Python/DS', color: 'amber',
    content: `<b>List Comp:</b> <code>[x**2 for x in nums if x%2==0]</code><br><b>Pandas Filter:</b> <code>df[(df['age']>20) & (df['score']>=80)]</code><br><b>NumPy Dot:</b> <code>np.dot(A, B)</code> or <code>A @ B</code><br><b>ML Flow:</b> <code>fit(X_train, y_train)</code> ➔ <code>predict(X_test)</code>`
  },
  {
    id: 'core_os_cn', cat: 'core', title: 'OS & Computer Networks', badge: 'Core CS', color: 'cyan',
    content: `<b>Process vs Thread:</b> Process = separate memory space; Thread = shared memory<br><b>Deadlock 4:</b> Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait<br><b>OSI 7 Layers:</b> App, Pres, Sess, Trans, Net, Link, Phys`
  },
  {
    id: 'git_cs', cat: 'core', title: 'Git & Command Line Cheatsheet', badge: 'Git', color: 'blue',
    content: `<code>git checkout -b feature</code> (New branch)<br><code>git commit -m "msg"</code> (Commit changes)<br><code>git stash</code> / <code>git stash pop</code> (Save draft)<br><code>git log --oneline --graph</code> (Commit tree)`
  }
];

function renderCheatsheetGrid() {
  const grid = document.getElementById('cheatsheet-grid'); if(!grid) return;
  const searchVal = (document.getElementById('cheatsheet-search')?.value || '').toLowerCase().trim();
  const catVal = document.getElementById('cheatsheet-category')?.value || 'all';

  const filtered = CHEATSHEETS.filter(item => {
    const matchCat = catVal === 'all' || item.cat === catVal;
    const matchSearch = !searchVal || item.title.toLowerCase().includes(searchVal) || item.content.toLowerCase().includes(searchVal) || item.badge.toLowerCase().includes(searchVal);
    return matchCat && matchSearch;
  });

  if (!filtered.length) {
    grid.innerHTML = `<div class="empty" style="grid-column:1/-1;">No cheatsheets match "${escapeHtml(searchVal)}". Search 'binary', 'sql', or 'python'.</div>`;
    return;
  }

  grid.innerHTML = filtered.map(item => `
    <div style="border:1px solid var(--border); border-radius:10px; padding:14px; background:var(--panel); border-left:4px solid var(--${item.color});">
      <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:8px;">
        <span style="font-weight:700; font-family:var(--font-display); font-size:14px; color:var(--text);">${escapeHtml(item.title)}</span>
        <span class="tag" style="font-size:11px; font-weight:600; background:var(--bg); border:1px solid var(--border);">${item.badge}</span>
      </div>
      <div style="font-size:12.5px; color:var(--text-dim); line-height:1.5;">${item.content}</div>
    </div>
  `).join('');
}

function renderStreakBanner() {
  const banner = document.getElementById('streak-banner'); if(!banner) return;
  const today = todayStr();
  const logsToday = (state.logs || []).filter(l => l.date === today);
  const hoursToday = logsToday.reduce((acc, l) => acc + (Number(l.hours) || 0), 0);
  const streak = computeStreak();

  if (hoursToday > 0) {
    banner.innerHTML = `
      <div style="background:rgba(63,185,80,0.1); border:1px solid var(--green); border-radius:8px; padding:10px 14px; margin-bottom:14px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:10px;">
        <div style="display:flex; align-items:center; gap:8px;">
          <span class="pulse-dot"></span>
          <span style="color:var(--green); font-weight:700; font-size:13.5px;">🔥 Streak Protected Today!</span>
          <span style="color:var(--text-dim); font-size:13px;">Logged <b>${Math.round(hoursToday*10)/10}h</b> across ${logsToday.length} commit(s). Outstanding effort!</span>
        </div>
        <button class="lc-edit" id="set-alarm-btn" style="font-size:12px;" type="button">⏰ Alarm: ${state.reminderTime || '19:00'}</button>
      </div>
    `;
  } else {
    banner.innerHTML = `
      <div style="background:rgba(255,95,86,0.12); border:1px solid #ff5f56; border-radius:8px; padding:10px 14px; margin-bottom:14px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:10px;">
        <div style="display:flex; align-items:center; gap:8px;">
          <span class="pulse-dot" style="background:#ff5f56; box-shadow:0 0 0 0 rgba(255,95,86,0.6);"></span>
          <span style="color:#ff5f56; font-weight:700; font-size:13.5px;">⚠️ STREAK AT RISK!</span>
          <span style="color:var(--text); font-size:13px;">No progress logged today. Log at least 30m of practice to save your <b>${streak}-day streak</b>!</span>
        </div>
        <div style="display:flex; gap:8px; align-items:center;">
          <button class="primary" id="quick-log-btn" style="padding:4px 10px; font-size:12.5px;" type="button">+ Log 1h Study</button>
          <button class="lc-edit" id="set-alarm-btn" style="font-size:12px;" type="button">⏰ Alarm: ${state.reminderTime || '19:00'}</button>
        </div>
      </div>
    `;

    const quickLog = document.getElementById('quick-log-btn');
    if (quickLog) {
      quickLog.addEventListener('click', () => {
        state.logs.push({
          id: Date.now().toString(36)+Math.random().toString(36).slice(2,6),
          date: todayStr(), ts: new Date().toISOString(),
          message: "1h DSA & Placement practice", category: "dsa", hours: 1
        });
        saveState(); render(); checkAchievements();
      });
    }
  }

  const alarmBtn = document.getElementById('set-alarm-btn');
  if (alarmBtn) {
    alarmBtn.addEventListener('click', () => {
      const newTime = prompt('Set your daily study alarm time (HH:MM in 24h format):', state.reminderTime || '19:00');
      if (newTime && /^\d{2}:\d{2}$/.test(newTime.trim())) {
        state.reminderTime = newTime.trim();
        saveState(); renderStreakBanner();
        if (window.Notification && Notification.permission !== 'granted') {
          Notification.requestPermission();
        }
      }
    });
  }
}

// Attach Cheatsheet Modal Listeners
setTimeout(() => {
  const csModal = document.getElementById('cheatsheet-modal');
  const csBtn = document.getElementById('voice-cheatsheet-btn');
  const csClose = document.getElementById('cheatsheet-close');

  if (csBtn && csModal) {
    csBtn.addEventListener('click', () => {
      csModal.style.display = 'flex';
      renderCheatsheetGrid();
    });
  }
  if (csClose && csModal) {
    csClose.addEventListener('click', () => {
      csModal.style.display = 'none';
    });
  }
  document.getElementById('cheatsheet-search')?.addEventListener('input', renderCheatsheetGrid);
  document.getElementById('cheatsheet-category')?.addEventListener('change', renderCheatsheetGrid);
}, 800);

// Daily Study Alarm interval check
setInterval(() => {
  if (!state.reminderTime) return;
  const now = new Date();
  const curTime = String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');
  const today = todayStr();
  const hoursToday = (state.logs || []).filter(l => l.date === today).reduce((acc, l) => acc + (Number(l.hours) || 0), 0);

  if (curTime === state.reminderTime && hoursToday === 0 && now.getSeconds() < 10) {
    if (window.Notification && Notification.permission === 'granted') {
      new Notification("🔥 Streak at Risk! Time to Study!", {
        body: "You haven't logged any progress today. Complete your daily CSE task now to protect your streak!",
        icon: "favicon.ico"
      });
    }
  }
}, 25000);

(function initSnake(){
  const canvas = document.getElementById('snake-canvas'); if(!canvas) return;
  const ctx = canvas.getContext('2d'); const CELL = 20, COLS = canvas.width / CELL, ROWS = canvas.height / CELL;
  const scoreEl = document.getElementById('snake-score'); const bestEl = document.getElementById('snake-best');
  const statusEl = document.getElementById('snake-status'); const startBtn = document.getElementById('snake-start-btn');
  const colHead = '#3fb950', colBody = '#238636', colFood = '#ff8a65';
  let snake, dir, nextDir, food, score, running, paused, loopId;

  function bestScore(){ return Number(state.snakeBest)||0; }
  function saveBestIfNeeded(){ if(score > bestScore()){ state.snakeBest = score; saveState(); } }
  function updateHud(){ scoreEl.textContent = score; bestEl.textContent = bestScore(); }
  function placeFood(){
    let pos; do{ pos = {x:Math.floor(Math.random()*COLS), y:Math.floor(Math.random()*ROWS)}; } while(snake.some(s=>s.x===pos.x && s.y===pos.y)); food = pos;
  }
  function resetGame(){ snake = [{x:8,y:10},{x:7,y:10},{x:6,y:10}]; dir = {x:1,y:0}; nextDir = {x:1,y:0}; score = 0; placeFood(); updateHud(); }
  function draw(){
    ctx.fillStyle = '#000'; ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = colFood; ctx.fillRect(food.x*CELL+2, food.y*CELL+2, CELL-4, CELL-4);
    snake.forEach((seg,i)=>{ ctx.fillStyle = i===0 ? colHead : colBody; ctx.fillRect(seg.x*CELL+1, seg.y*CELL+1, CELL-2, CELL-2); });
  }
  function endGame(){
    running = false; clearInterval(loopId); saveBestIfNeeded(); updateHud();
    statusEl.textContent = `game over — score ${score}. click start to try again.`; startBtn.textContent = 'start';
  }
  function currentSpeedMs(){ return Math.max(70, 190 - score * 5); }
  function restartLoop(){ clearInterval(loopId); loopId = setInterval(tick, currentSpeedMs()); }
  function tick(){
    if(paused) return; dir = nextDir;
    const head = {x:snake[0].x+dir.x, y:snake[0].y+dir.y};
    if(head.x<0 || head.x>=COLS || head.y<0 || head.y>=ROWS || snake.some(s=>s.x===head.x && s.y===head.y)){ endGame(); return; }
    snake.unshift(head);
    if(head.x===food.x && head.y===food.y){ score++; updateHud(); placeFood(); restartLoop(); } else { snake.pop(); }
    draw();
  }
  function startGame(){
    resetGame(); running = true; paused = false; draw();
    statusEl.textContent = 'arrow keys / WASD to steer, space to pause'; startBtn.textContent = 'restart';
    clearInterval(loopId); loopId = setInterval(tick, currentSpeedMs()); canvas.focus();
  }
  function steer(k){
    if(!running) return;
    if((k==='up') && dir.y===0) nextDir={x:0,y:-1}; else if((k==='down') && dir.y===0) nextDir={x:0,y:1};
    else if((k==='left') && dir.x===0) nextDir={x:-1,y:0}; else if((k==='right') && dir.x===0) nextDir={x:1,y:0};
  }
  startBtn.addEventListener('click', startGame); canvas.addEventListener('click', ()=> canvas.focus());
  canvas.addEventListener('keydown', (e)=>{
    const k = e.key; const controlKeys = ['ArrowUp','ArrowDown','ArrowLeft','ArrowRight',' ','w','a','s','d','W','A','S','D'];
    if(controlKeys.includes(k)) e.preventDefault();
    if(k==='ArrowUp'||k==='w'||k==='W') steer('up'); else if(k==='ArrowDown'||k==='s'||k==='S') steer('down');
    else if(k==='ArrowLeft'||k==='a'||k==='A') steer('left'); else if(k==='ArrowRight'||k==='d'||k==='D') steer('right');
    else if(k===' ' && running){ paused = !paused; statusEl.textContent = paused ? 'paused — press space to resume' : 'arrow keys / WASD to steer, space to pause'; }
  });
  document.querySelectorAll('.snake-dpad button').forEach(btn=>{
    btn.addEventListener('click', ()=>{ steer(btn.classList.contains('up') ? 'up' : btn.classList.contains('down') ? 'down' : btn.classList.contains('left') ? 'left' : 'right'); canvas.focus(); });
  });
  resetGame(); draw(); window.refreshSnakeBest = ()=>{ bestEl.textContent = bestScore(); };
})();

(function initTyping(){
  const passageEl = document.getElementById('typing-passage'); if(!passageEl) return;
  const inputEl = document.getElementById('typing-input'); const wpmEl = document.getElementById('typing-wpm');
  const accEl = document.getElementById('typing-acc'); const bestEl = document.getElementById('typing-best');
  const statusEl = document.getElementById('typing-status'); const newBtn = document.getElementById('typing-new-btn');

  const PASSAGES = [
    "the quick brown fox jumps over the lazy dog while the sun sets slowly",
    "practice makes progress, not perfection, so keep showing up every day",
    "consistency beats intensity when you are building a long term habit",
    "small daily effort compounds into a skill nobody can take away from you",
    "for i in range(10): print(i, i * i)",
    "const sum = (a, b) => a + b;",
    "def is_even(n): return n % 2 == 0",
    "int main() { printf(\"hello world\\n\"); return 0; }",
    "arr.sort(key=lambda x: x[1], reverse=True)",
    "let result = numbers.filter(n => n % 2 === 0).map(n => n * 2);",
    "while (left <= right) { mid = (left + right) / 2; }",
    "class Node: def __init__(self, val): self.val = val; self.next = None",
    "SELECT name, email FROM users WHERE active = 1 ORDER BY created_at DESC",
    "git commit -m \"fix: handle edge case for empty array input\"",
    "the best way to get better at coding interviews is to solve one problem daily"
  ];
  let target = ''; let startTime = null; let finished = false;

  function bestWpm(){ return Number(state.typingBest)||0; }
  function saveBestIfNeeded(wpm){ if(wpm > bestWpm()){ state.typingBest = wpm; saveState(); checkAchievements(); } }
  function renderPassage(typed){
    let html = '';
    for(let i=0; i<target.length; i++){
      const ch = target[i]; let cls = 'pending';
      if(i < typed.length) cls = typed[i]===ch ? 'correct' : 'incorrect'; else if(i === typed.length) cls = 'pending current';
      html += `<span class="${cls}">${ch===' ' ? '&nbsp;' : escapeHtml(ch)}</span>`;
    }
    passageEl.innerHTML = html;
  }
  function computeStats(typed){
    if(!startTime) return {wpm:0, acc:100};
    const elapsedMin = Math.max((Date.now()-startTime)/60000, 1/60000); let correct = 0;
    for(let i=0; i<typed.length; i++){ if(typed[i]===target[i]) correct++; }
    const wpm = Math.round((correct/5)/elapsedMin); const acc = typed.length ? Math.round((correct/typed.length)*100) : 100;
    return {wpm, acc};
  }
  function pickPassage(){
    target = PASSAGES[Math.floor(Math.random()*PASSAGES.length)];
    startTime = null; finished = false; inputEl.value = ''; inputEl.disabled = false; renderPassage('');
    wpmEl.textContent = '0'; accEl.textContent = '100%'; bestEl.textContent = bestWpm();
    statusEl.textContent = 'click the box above and just start typing'; inputEl.focus();
  }
  inputEl.addEventListener('input', ()=>{
    if(finished) return; const typed = inputEl.value; if(!startTime) startTime = Date.now(); renderPassage(typed);
    const {wpm, acc} = computeStats(typed); wpmEl.textContent = wpm; accEl.textContent = acc + '%';
    if(typed.length >= target.length){
      finished = true; inputEl.disabled = true; saveBestIfNeeded(wpm); bestEl.textContent = bestWpm();
      statusEl.textContent = `done — ${wpm} wpm at ${acc}% accuracy. click "new passage" to go again.`;
    }
  });
  inputEl.addEventListener('paste', (e)=> e.preventDefault()); passageEl.addEventListener('click', ()=> inputEl.focus()); newBtn.addEventListener('click', pickPassage);
  pickPassage(); window.refreshTypingBest = ()=>{ bestEl.textContent = bestWpm(); };
})();

(function initVoiceAssistant() {
  const fab = document.getElementById('voice-fab');
  const popup = document.getElementById('voice-popup');
  const statusEl = document.getElementById('voice-status');
  const textEl = document.getElementById('voice-text');
  const closeBtn = document.getElementById('voice-close');
  const wwInput = document.getElementById('wake-word-input');
  const actionsEl = document.getElementById('voice-actions');
  const sendBtn = document.getElementById('voice-send-btn');
  const clearBtn = document.getElementById('voice-clear-btn');
  const copyBtn = document.getElementById('voice-copy-btn');
  const typeInput = document.getElementById('voice-type-input');

  const orbCanvas = document.getElementById('voice-orb');
  const orbCtx = orbCanvas ? orbCanvas.getContext('2d') : null;
  let orbAnalyser = null, orbAudioCtx = null;
  let orbLevelSmoothed = 0;

  let streakRemindedThisSession = false; // STREAK REMINDER ONLY ONCE PER SESSION RULE!

  async function setupOrbMic(){
    if(orbAudioCtx) return;
    try{
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      orbAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
      orbAnalyser = orbAudioCtx.createAnalyser();
      orbAnalyser.fftSize = 64;
      orbAnalyser.smoothingTimeConstant = 0.6;
      orbAudioCtx.createMediaStreamSource(stream).connect(orbAnalyser);
    }catch(e){
      orbAnalyser = null;
    }
  }

  function currentOrbState(){
    if(fab.classList.contains('speaking')) return 'speaking';
    if(fab.classList.contains('thinking')) return 'thinking';
    if(fab.classList.contains('listening')) return 'listening';
    return 'idle';
  }

  function drawOrb(){
    if(orbCtx){
      const w = orbCanvas.width, h = orbCanvas.height, cx = w/2, cy = h/2;
      const t = performance.now() / 1000;
      const mode = currentOrbState();

      let level = 0;
      if(mode === 'listening' && orbAnalyser){
        const data = new Uint8Array(orbAnalyser.frequencyBinCount);
        orbAnalyser.getByteFrequencyData(data);
        let sum = 0; for(let i=0;i<data.length;i++) sum += data[i];
        level = Math.min(1, (sum / data.length) / 70);
      } else if(mode === 'speaking'){
        level = 0.38 + Math.sin(t*7)*0.18 + Math.sin(t*15.3)*0.09;
      } else if(mode === 'thinking'){
        level = 0.3 + Math.sin(t*3.2)*0.12;
      } else {
        level = 0.14 + Math.sin(t*1.1)*0.06;
      }
      orbLevelSmoothed += (Math.max(0.06, Math.min(1, level)) - orbLevelSmoothed) * 0.22;
      const lvl = orbLevelSmoothed;

      const colors = { listening:'0,229,255', speaking:'63,185,80', thinking:'255,215,0', idle:'0,229,255' };
      const rgb = colors[mode];

      orbCtx.clearRect(0,0,w,h);

      if(mode === 'thinking'){
        for(let i=0;i<4;i++){
          const a = t*3.2 + i*(Math.PI/2);
          const px = cx + Math.cos(a)*26, py = cy + Math.sin(a)*26;
          orbCtx.beginPath(); orbCtx.arc(px, py, 4, 0, Math.PI*2);
          orbCtx.fillStyle = `rgba(${rgb},0.9)`; orbCtx.fill();
        }
      } else {
        for(let ring=3; ring>=1; ring--){
          const r = 20 + ring*9 + lvl*24;
          orbCtx.beginPath(); orbCtx.arc(cx, cy, r, 0, Math.PI*2);
          orbCtx.strokeStyle = `rgba(${rgb},${(0.18/ring) + lvl*0.06})`;
          orbCtx.lineWidth = 2; orbCtx.stroke();
        }
      }
      const coreR = 15 + lvl*11;
      const grad = orbCtx.createRadialGradient(cx,cy,1,cx,cy,coreR);
      grad.addColorStop(0, `rgba(${rgb},0.95)`);
      grad.addColorStop(1, `rgba(${rgb},0.1)`);
      orbCtx.beginPath(); orbCtx.arc(cx,cy,coreR,0,Math.PI*2);
      orbCtx.fillStyle = grad; orbCtx.fill();
    }
    requestAnimationFrame(drawOrb);
  }
  if(orbCtx) requestAnimationFrame(drawOrb);
  if(fab) fab.addEventListener('click', setupOrbMic, { once:true });

  function playSciFiSound(type) {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      const now = ctx.currentTime;

      if (type === 'activate') {
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.exponentialRampToValueAtTime(1046.50, now + 0.14);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.14);
        osc.start(now); osc.stop(now + 0.14);
      } else if (type === 'success') {
        osc.frequency.setValueAtTime(587.33, now);
        osc.frequency.setValueAtTime(739.99, now + 0.07);
        osc.frequency.setValueAtTime(880.00, now + 0.14);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.22);
        osc.start(now); osc.stop(now + 0.22);
      } else if (type === 'listening_loop') {
        osc.frequency.setValueAtTime(700, now);
        osc.frequency.exponentialRampToValueAtTime(1100, now + 0.08);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.08);
        osc.start(now); osc.stop(now + 0.08);
      }
    } catch(e) {}
  }

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if(!SpeechRecognition || !window.speechSynthesis) {
    if(fab) fab.style.display = 'none';
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.continuous = true; 
  recognition.interimResults = true;
  recognition.lang = 'en-US';

  let isListening = false;
  let isSpeaking = false;
  let wakeWord = "jarvis";
  let continuousMode = false;
  let currentTranscript = "";
  let silenceTimer = null;
  let speechSafetyTimer = null;
  let lastAssistantResponse = "";

  function safeStartMic() {
    if (isSpeaking) return;
    try { recognition.stop(); } catch(e) {}
    setTimeout(() => {
      try {
        recognition.start();
        isListening = true;
        if (fab) fab.className = 'voice-fab listening';
      } catch(err) {
        setTimeout(() => {
          try {
            recognition.start();
            isListening = true;
            if (fab) fab.className = 'voice-fab listening';
          } catch(e2) {}
        }, 250);
      }
    }, 150);
  }

  setTimeout(safeStartMic, 1000);
  document.body.addEventListener('click', safeStartMic, {once: true});

  if(wwInput) {
    wwInput.addEventListener('change', (e) => {
      wakeWord = e.target.value.trim().toLowerCase() || "jarvis";
    });
  }

  document.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
    if ((e.ctrlKey || e.metaKey || e.altKey) && (e.code === 'Space' || e.key.toLowerCase() === 'j')) {
      e.preventDefault();
      if (fab) fab.click();
    }
  });

  if(copyBtn) {
    copyBtn.addEventListener('click', () => {
      if(!lastAssistantResponse) return;
      navigator.clipboard.writeText(lastAssistantResponse).then(() => {
        copyBtn.textContent = 'Copied! ✓';
        setTimeout(() => copyBtn.textContent = '📋 Copy Answer', 2000);
      }).catch(() => {
        const textarea = document.createElement('textarea');
        textarea.value = lastAssistantResponse;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        copyBtn.textContent = 'Copied! ✓';
        setTimeout(() => copyBtn.textContent = '📋 Copy Answer', 2000);
      });
    });
  }

  function showPopup(status, htmlContent, showActions = true, rawTextToCopy = '') {
    if(!popup) return;
    popup.classList.add('show');
    if(statusEl) statusEl.textContent = status;
    if(textEl && htmlContent) {
      textEl.innerHTML = htmlContent;
      textEl.classList.remove('reveal');
      void textEl.offsetWidth;
      textEl.classList.add('reveal');
      textEl.scrollTop = textEl.scrollHeight;
    }
    if(rawTextToCopy) lastAssistantResponse = rawTextToCopy;
    if(actionsEl) actionsEl.style.display = 'flex';
  }

  function speakText(spokenText, onEndCallback) {
    try { recognition.stop(); } catch(e) {}
    isListening = false;
    isSpeaking = true;
    if(fab) fab.className = 'voice-fab speaking';
    
    window.speechSynthesis.cancel();
    clearTimeout(speechSafetyTimer);

    const utterance = new SpeechSynthesisUtterance(spokenText);
    
    // Select Deep British / English Voice for Authentic J.A.R.V.I.S. Audio Tone
    const voices = window.speechSynthesis.getVoices();
    const jarvisVoice = voices.find(v => (v.lang.includes('en-GB') || v.lang.includes('en-UK')) && (v.name.includes('Male') || v.name.includes('George') || v.name.includes('Oliver') || v.name.includes('Natural'))) ||
                        voices.find(v => v.lang.includes('en') && (v.name.includes('Male') || v.name.includes('Google') || v.name.includes('Natural')));
    if(jarvisVoice) utterance.voice = jarvisVoice;
    utterance.pitch = 0.92; // Slightly lower, authoritative British tone
    utterance.rate = 1.05;  // Crisp, efficient pace

    const finish = () => {
      clearTimeout(speechSafetyTimer);
      isSpeaking = false;
      
      // CONTINUOUS MULTI-TURN HANDS-FREE LOOP:
      if (popup && popup.classList.contains('show')) {
        continuousMode = true;
        if(fab) fab.className = 'voice-fab listening';
        popup.classList.remove('speaking-mode');
        popup.classList.add('listening-mode');
        if(statusEl) statusEl.textContent = 'J.A.R.V.I.S. Online 🎙️';
        showPopup('J.A.R.V.I.S. Online', `<b>Listening...</b> Speak your next instruction out loud 🎙️`, true);
        playSciFiSound('listening_loop');
      } else {
        if(fab) fab.className = 'voice-fab listening';
        if(statusEl) statusEl.textContent = 'J.A.R.V.I.S. AI Engine 🤖';
      }
      if(onEndCallback) onEndCallback();
      safeStartMic();
    };

    utterance.onend = finish;
    utterance.onerror = finish;

    const maxDuration = Math.max(3000, (spokenText ? spokenText.length : 10) * 90);
    speechSafetyTimer = setTimeout(finish, maxDuration);

    window.speechSynthesis.speak(utterance);
  }

  function stopAll() {
    clearTimeout(silenceTimer);
    clearTimeout(speechSafetyTimer);
    silenceTimer = null;
    currentTranscript = "";
    continuousMode = false;
    if(isListening) { try{ recognition.stop(); }catch(e){} isListening = false; }
    if(isSpeaking) { try{ window.speechSynthesis.cancel(); }catch(e){} isSpeaking = false; }
    if(fab) fab.className = 'voice-fab';
    if(popup) popup.classList.remove('listening-mode', 'speaking-mode');
  }

  if(closeBtn) {
    closeBtn.addEventListener('click', () => {
      popup.classList.remove('show');
      stopAll();
      setTimeout(safeStartMic, 400);
    });
  }

  if(clearBtn) {
    clearBtn.addEventListener('click', () => {
      clearTimeout(silenceTimer);
      currentTranscript = "";
      showPopup('J.A.R.V.I.S. Ready', `At your service, sir. Speak your next command. 🎙️`, true);
    });
  }

  const handleSendQuery = () => {
    clearTimeout(silenceTimer);
    const typedText = typeInput ? typeInput.value.trim() : "";
    const voiceText = currentTranscript.trim();
    const cmd = typedText || voiceText;

    if (cmd) {
      if (typeInput) typeInput.value = "";
      currentTranscript = "";
      processVoiceCommand(cmd);
    }
  };

  if(sendBtn) {
    sendBtn.addEventListener('click', handleSendQuery);
  }

  if(typeInput) {
    typeInput.addEventListener('keydown', (e) => {
      if(e.key === 'Enter') {
        e.preventDefault();
        handleSendQuery();
      }
    });
  }

  if(fab) {
    fab.addEventListener('click', () => {
      if(isSpeaking) {
        stopAll();
        showPopup('Paused', 'JARVIS speech paused.');
        setTimeout(safeStartMic, 400);
        return;
      }
      playSciFiSound('activate');
      continuousMode = true;
      currentTranscript = "";
      fab.className = 'voice-fab listening';
      popup.classList.remove('speaking-mode');
      popup.classList.add('show', 'listening-mode');
      showPopup('J.A.R.V.I.S. Online', `<b>J.A.R.V.I.S. Protocol Active 🎙️</b><br>At your service, sir. What are we building today?`, true);
      if(typeInput) setTimeout(() => typeInput.focus(), 200);
      safeStartMic();
    });
  }

  function tryLocalCommand(text) {
    const raw = text.toLowerCase().replace(/[^a-z0-9\s\+\-\*\/\(\)\^\%\.]/g, '').trim();
    
    // 0. Instant Math & Calculus Evaluator (0ms latency!)
    const mathMatch = text.trim().match(/^(?:calculate|solve|what is|compute)?\s*([\d\.\s\+\-\*\/\(\)\^\%]+|(?:sqrt|sin|cos|tan|log|pow)\([^\)]+\))\s*\??$/i);
    if (mathMatch) {
      const expr = mathMatch[1].replace(/\^/g, '**').trim();
      if (/^[\d\.\s\+\-\*\/\(\)\%]|Math\./.test(expr) && expr.length >= 3 && /\d/.test(expr)) {
        try {
          const sanitized = expr.replace(/sqrt/g, 'Math.sqrt').replace(/sin/g, 'Math.sin').replace(/cos/g, 'Math.cos').replace(/tan/g, 'Math.tan').replace(/log/g, 'Math.log10').replace(/pow/g, 'Math.pow');
          const mathResult = Function('"use strict";return (' + sanitized + ')')();
          if (typeof mathResult === 'number' && !isNaN(mathResult) && isFinite(mathResult)) {
            const formattedRes = Math.abs(mathResult - Math.round(mathResult)) < 1e-9 ? Math.round(mathResult) : Math.round(mathResult * 100000) / 100000;
            playSciFiSound('success');
            return {
              intent: 'math',
              spoken: `The calculation yields ${formattedRes}, sir.`,
              display: `🔢 <b>J.A.R.V.I.S. Math Computation:</b><br><code style="font-size:17px; color:var(--cyan);">${escapeHtml(text)}</code> = <b style="font-size:22px; color:var(--green);">${formattedRes}</b>`
            };
          }
        } catch (e) {}
      }
    }

    const norm = raw
      .replace(/\broad map\b/g, 'roadmap')
      .replace(/\bdash board\b/g, 'dashboard')
      .replace(/\bcode run\b/g, 'coderun')
      .replace(/\bcode runner\b/g, 'coderun')
      .replace(/\bmy course\b/g, 'course')
      .replace(/\bmock interview\b/g, 'interview')
      .replace(/\bplacements?\b/g, 'targets');

    const tabMap = {
      'today': 'today', 'task': 'today', 'daily': 'today',
      'course': 'course', 'portal': 'course', 'swayam': 'course', 'nptel': 'course',
      'dashboard': 'dashboard', 'analytics': 'dashboard', 'stats': 'dashboard',
      'roadmap': 'roadmap', 'checklist': 'roadmap', 'phase': 'roadmap',
      'target': 'targets', 'targets': 'targets', 'company': 'targets', 'companies': 'targets',
      'reminder': 'reminders', 'reminders': 'reminders', 'deadline': 'reminders',
      'interview': 'interview', 'mock': 'interview',
      'resume': 'resume', 'cv': 'resume',
      'solve': 'solve', 'chat': 'solve', 'ask': 'solve',
      'coderun': 'coderun', 'code': 'coderun', 'editor': 'coderun',
      'note': 'notes', 'notes': 'notes', 'notepad': 'notes', 'cheatsheet': 'notes',
      'arcade': 'arcade', 'game': 'arcade', 'snake': 'arcade', 'quiz': 'arcade'
    };

    for (const [key, tabId] of Object.entries(tabMap)) {
      if (norm.includes(key)) {
        if (window.activateTabByName) {
          window.activateTabByName(tabId);
          playSciFiSound('success');
          return {
            intent: 'navigate',
            tab: tabId,
            spoken: `Displaying the ${tabId} module now, sir.`,
            display: `Switched view to the <b>${tabId}</b> module.`
          };
        }
      }
    }

    // Telemetry Status — REMIND STREAK ONLY ONCE PER SESSION RULE!
    if (norm.includes('status') || norm.includes('streak') || norm.includes('hours') || norm.includes('telemetry')) {
      const streak = computeStreak();
      const hours = Math.round(computeTotalHours() * 10) / 10;
      const pct = computeChecklistPct();
      playSciFiSound('success');

      let streakNote = '';
      if (!streakRemindedThisSession) {
        streakRemindedThisSession = true;
        streakNote = streak > 0 ? ` Your ${streak} day streak is active and impressive.` : ` A minor reminder: your streak is at zero, sir.`;
      }

      return {
        intent: 'status',
        spoken: `You have logged ${hours} hours total with ${pct} percent of the roadmap cleared.${streakNote}`,
        display: `<b>J.A.R.V.I.S. System Telemetry:</b><br>🔥 <b>${streak}-day streak</b><br>⏱️ <b>${hours} total hours</b><br>🎯 <b>${pct}% roadmap complete</b>`
      };
    }

    if (norm.includes('timer') || norm.includes('pomodoro')) {
      if (norm.includes('reset') || norm.includes('clear') || norm.includes('stop')) {
        resetTimer();
        playSciFiSound('success');
        return { intent: 'timer', spoken: "Focus timer reset, sir.", display: "Focus timer reset." };
      }
      const numMatch = norm.match(/\b(\d+)\b/);
      if (numMatch) {
        const mins = parseInt(numMatch[1], 10);
        if (mins > 0 && mins <= 180) {
          setTimerPreset(mins * 60);
          if (!timerRunning) toggleTimer();
          playSciFiSound('success');
          return { intent: 'timer', spoken: `Focus timer configured for ${mins} minutes.`, display: `Timer set to <b>${mins} minutes</b>.` };
        }
      }
      toggleTimer();
      playSciFiSound('success');
      return { intent: 'timer', spoken: timerRunning ? "Focus timer initiated." : "Timer paused.", display: timerRunning ? "Focus timer active." : "Timer paused." };
    }

    if (norm.includes('log') || norm.includes('commit') || norm.includes('add hours')) {
      const hoursMatch = norm.match(/(\d+(?:\.\d+)?)\s*(?:hour|hours|hr|hrs)/);
      const hours = hoursMatch ? parseFloat(hoursMatch[1]) : 1;
      
      let category = 'other';
      if (norm.includes('python')) category = 'python';
      else if (norm.includes('dsa') || norm.includes('array') || norm.includes('tree') || norm.includes('graph') || norm.includes('algo')) category = 'dsa';
      else if (norm.includes('course') || norm.includes('lesson')) category = 'course';
      else if (norm.includes('project')) category = 'project';
      else if (norm.includes('core') || norm.includes('dbms') || norm.includes('os') || norm.includes('network')) category = 'core-cs';
      else if (norm.includes('ai') || norm.includes('data science') || norm.includes('ml')) category = 'ai_ds';

      let msg = text.replace(/^log\s*/i, '').replace(/(\d+(?:\.\d+)?)\s*(?:hour|hours|hr|hrs)/i, '').trim();
      if (!msg) msg = "Logged via J.A.R.V.I.S.";

      state.logs.push({
        id: id(), date: todayStr(), ts: new Date().toISOString(),
        message: msg, category, hours
      });
      saveState(); render(); checkAchievements();
      playSciFiSound('success');
      return {
        intent: 'log',
        spoken: `Logged ${hours} hours for ${category}. Outstanding work, sir.`,
        display: `Logged: <b>${hours}h</b> · ${category} · <i>"${escapeHtml(msg)}"</i>`
      };
    }

    if (norm.includes('generate task') || norm.includes('new task')) {
      if (window.generateDailyTask) window.generateDailyTask(true);
      playSciFiSound('success');
      return { intent: 'action', spoken: "I have prepared your practice task for today, sir.", display: "New placement task generated." };
    }

    return null;
  }

  let lastSpokenErrorTime = 0;

  function getOfflineCSAnswer(text) {
    const raw = text.toLowerCase();
    if (raw.includes('dsa') || raw.includes('data structure')) {
      return "Data Structures & Algorithms form the core of problem-solving. Primary structures include Arrays, Linked Lists, Trees, Graphs, and Hash Tables.";
    }
    if (raw.includes('binary search')) {
      return "Binary Search divides a sorted array in half at each step, operating in O(log n) time complexity.";
    }
    if (raw.includes('oop') || raw.includes('object oriented')) {
      return "OOP is built on four core pillars: Encapsulation, Abstraction, Inheritance, and Polymorphism.";
    }
    if (raw.includes('python')) {
      return "Python is a high-level interpreted language favoured for AI, ML, and web backend development due to NumPy, PyTorch, and Pandas.";
    }
    if (raw.includes('dbms') || raw.includes('sql')) {
      return "DBMS handles structured relational data using ACID transactions, indexing, and normalized schemas.";
    }
    return null;
  }

  function getDSAVisualDiagram(text) {
    const raw = text.toLowerCase();
    if (raw.includes('binary search')) {
      return `
        <div style="margin:10px 0; padding:12px; background:var(--bg); border:1px solid #00e5ff; border-radius:10px; text-align:center;">
          <div style="font-size:11px; text-transform:uppercase; color:#00e5ff; font-weight:700; margin-bottom:8px;">📊 J.A.R.V.I.S. Diagram: Binary Search (O(log n))</div>
          <div style="display:flex; justify-content:center; gap:6px; font-family:var(--font-mono); font-size:12px; flex-wrap:wrap;">
            <span style="border:1px solid var(--border); padding:4px 8px; border-radius:4px; opacity:0.5;">2</span>
            <span style="border:1px solid var(--border); padding:4px 8px; border-radius:4px; opacity:0.5;">5</span>
            <span style="border:1px solid #00e5ff; background:rgba(0,229,255,0.1); color:#00e5ff; padding:4px 8px; border-radius:4px; font-weight:700;">8 [LOW]</span>
            <span style="border:1px solid var(--green); background:var(--green-bg); color:var(--green); padding:4px 8px; border-radius:4px; font-weight:700;">12 [MID] 🎯</span>
            <span style="border:1px solid var(--cyan); background:var(--cyan-bg); color:var(--cyan); padding:4px 8px; border-radius:4px; font-weight:700;">16 [HIGH]</span>
            <span style="border:1px solid var(--border); padding:4px 8px; border-radius:4px; opacity:0.5;">23</span>
          </div>
          <div style="font-size:11.5px; color:var(--text-faint); margin-top:6px;">Interval halved each step: <b>[Low, High] ➔ Mid = (L + H) / 2</b></div>
        </div>
      `;
    }
    if (raw.includes('sliding window')) {
      return `
        <div style="margin:10px 0; padding:12px; background:var(--bg); border:1px solid #00e5ff; border-radius:10px; text-align:center;">
          <div style="font-size:11px; text-transform:uppercase; color:#00e5ff; font-weight:700; margin-bottom:8px;">📐 J.A.R.V.I.S. Diagram: Sliding Window (K=3)</div>
          <div style="display:flex; justify-content:center; gap:6px; font-family:var(--font-mono); font-size:12px; flex-wrap:wrap;">
            <span style="border:2px solid #00e5ff; background:rgba(0,229,255,0.1); color:#00e5ff; padding:4px 8px; border-radius:4px; font-weight:700;">[ 1</span>
            <span style="border-top:2px solid #00e5ff; border-bottom:2px solid #00e5ff; background:rgba(0,229,255,0.1); color:#00e5ff; padding:4px 8px; font-weight:700;">3</span>
            <span style="border:2px solid #00e5ff; background:rgba(0,229,255,0.1); color:#00e5ff; padding:4px 8px; border-radius:4px; font-weight:700;">-1 ] ➔</span>
            <span style="border:1px solid var(--border); padding:4px 8px; border-radius:4px; opacity:0.5;">-3</span>
            <span style="border:1px solid var(--border); padding:4px 8px; border-radius:4px; opacity:0.5;">5</span>
          </div>
          <div style="font-size:11.5px; color:var(--text-faint); margin-top:6px;">Add right element, subtract left element in O(1) time</div>
        </div>
      `;
    }
    return '';
  }

  async function processVoiceCommand(commandText) {
    if (!commandText || commandText.trim().length < 2) return;
    clearTimeout(silenceTimer);

    const localResult = tryLocalCommand(commandText);
    if (localResult) {
      popup.classList.remove('listening-mode');
      popup.classList.add('speaking-mode');
      showPopup('Command Executed ⚡', `<b>You:</b> ${escapeHtml(commandText)}<br><br><b>J.A.R.V.I.S.:</b> ${localResult.display}`, true, localResult.spoken);
      speakText(localResult.spoken);
      return;
    }

    const offlineAns = getOfflineCSAnswer(commandText);
    if (offlineAns) {
      popup.classList.remove('listening-mode');
      popup.classList.add('speaking-mode');
      const visual = getDSAVisualDiagram(commandText);
      showPopup('Local Intelligence ⚡', `<b>You:</b> ${escapeHtml(commandText)}<br><br>${visual}<b>J.A.R.V.I.S.:</b> ${escapeHtml(offlineAns)}`, true, offlineAns);
      speakText(offlineAns);
      return;
    }

    let activeKey = '';
    let providerName = 'OpenRouter';
    if (state.aiProvider === 'gemini') {
      activeKey = state.geminiKey; providerName = 'Gemini';
    } else {
      activeKey = state.openrouterKey; providerName = 'OpenRouter';
    }

    if (!activeKey) {
      showPopup('Key Required', `Please configure your ${providerName} API key in the top bar, sir.`, true);
      speakText(`Please configure your ${providerName} API key in the top bar, sir.`);
      return;
    }

    if(fab) fab.className = 'voice-fab thinking';
    showPopup('Computing...', `<b>You:</b> ${escapeHtml(commandText)}<br><br><span class="blink">J.A.R.V.I.S. neural synthesis active... 🤖</span>`, true);

    try {
      const ctxStreak = computeStreak();
      const ctxHours = Math.round(computeTotalHours() * 10) / 10;
      const ctxPct = computeChecklistPct();
      const ctxFocus = state.focusPhase ? (ROADMAP.find(p=>p.id===state.focusPhase)||{}).name : null;

      let streakContextInstruction = "";
      if (!streakRemindedThisSession) {
        streakRemindedThisSession = true;
        streakContextInstruction = ` Current streak is ${ctxStreak} days (mention streak subtly only if user asks about progress).`;
      } else {
        streakContextInstruction = ` Do NOT mention streak in this turn unless explicitly asked.`;
      }

      const systemInstruction = `You are J.A.R.V.I.S. (Just A Rather Very Intelligent System), personal AI assistant to a brilliant 3rd-year B.Tech CSE (AI & DS) student. Your persona is kickass, razor-sharp, refined, highly competent, witty, and subtly humorous (Iron Man style). Address the user naturally or as 'sir'. You excel at Calculus/Math step-by-step, Full-Stack Coding (Python, C++, JS, SQL), Data Science/ML models, system architecture, and general knowledge. ${streakContextInstruction} Live stats: ${ctxHours} hours logged, ${ctxPct}% roadmap done${ctxFocus ? `, current focus ${ctxFocus}` : ''}. Keep spoken answer punchy in 1-2 crisp sentences while providing complete markdown on screen.`;
      const aiResponse = await callAI([{ role: 'user', content: commandText }], systemInstruction);

      let spokenText = aiResponse.replace(/```[\s\S]*?```/g, 'I have generated the code on screen, sir.').replace(/[`#*_]/g, '').trim();
      if (spokenText.length > 180) spokenText = spokenText.slice(0, 180) + '...';

      const visual = getDSAVisualDiagram(commandText);
      popup.classList.remove('listening-mode');
      popup.classList.add('speaking-mode');
      showPopup('J.A.R.V.I.S. Core 🤖', `<b>You:</b> ${escapeHtml(commandText)}<br><br>${visual}<b>J.A.R.V.I.S.:</b> ${formatAssistantText(aiResponse)}`, true, aiResponse);
      playSciFiSound('success');
      speakText(spokenText);

    } catch (err) {
      const msg = err.message || 'Quantum synthesis error';
      showPopup('J.A.R.V.I.S. Error', `<b>You:</b> ${escapeHtml(commandText)}<br><br><b>J.A.R.V.I.S.:</b> ${escapeHtml(msg)}`, true, msg);
      if (Date.now() - lastSpokenErrorTime > 25000) {
        lastSpokenErrorTime = Date.now();
        speakText("An error occurred during synthesis, sir.");
      }
    }
  }

  recognition.onresult = (event) => {
    if (isSpeaking) return;

    let interim = '';
    let finalStr = '';

    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        finalStr += event.results[i][0].transcript;
      } else {
        interim += event.results[i][0].transcript;
      }
    }

    let fullText = (finalStr + " " + interim).trim();
    if (!fullText || fullText.length < 2) return;

    let lowerText = fullText.toLowerCase();
    const popupVisible = popup && popup.classList.contains('show');
    const hasWakeWord = lowerText.includes(wakeWord);

    if (popupVisible || continuousMode || hasWakeWord) {
      continuousMode = true;
      if (fab) fab.className = 'voice-fab listening';
      if (popup) {
        popup.classList.add('show', 'listening-mode');
        popup.classList.remove('speaking-mode');
      }

      let cleanText = fullText;
      if (hasWakeWord) {
        cleanText = fullText.replace(new RegExp('^.*?' + wakeWord, 'i'), '').trim();
      }
      if (!cleanText) cleanText = fullText;

      currentTranscript = cleanText;
      showPopup('J.A.R.V.I.S. Listening', `Hearing: "<i>${escapeHtml(currentTranscript)}</i>"`, true);

      clearTimeout(silenceTimer);
      if (currentTranscript.trim().length >= 2) {
        silenceTimer = setTimeout(() => {
          if (currentTranscript.trim().length >= 2) {
            const cmd = currentTranscript.trim();
            currentTranscript = "";
            processVoiceCommand(cmd);
          }
        }, 500);
      }
    }
  };

  recognition.onend = () => {
    isListening = false;
    if (!isSpeaking) {
      setTimeout(safeStartMic, 200);
    }
  };

  recognition.onerror = (e) => {
    isListening = false;
    if (!isSpeaking && e.error !== 'aborted') {
      setTimeout(safeStartMic, 350);
    }
  };

  window.speechSynthesis.onvoiceschanged = () => { window.speechSynthesis.getVoices(); };
})();

// Smart Code Debugger & Edge Case Generator
(function initCodeDebugger() {
  const debugBtn = document.getElementById('debug-code-btn');
  const testBtn = document.getElementById('testcases-code-btn');
  const closeBtn = document.getElementById('debug-close-btn');
  const debugPanel = document.getElementById('debug-panel');
  const debugContent = document.getElementById('debug-content');

  if (closeBtn && debugPanel) {
    closeBtn.addEventListener('click', () => { debugPanel.style.display = 'none'; });
  }

  if (debugBtn) {
    debugBtn.addEventListener('click', async () => {
      const code = codeEditor.value;
      const outputEl = document.getElementById('code-output');
      const outputText = outputEl ? outputEl.innerText : '';

      if (!code.trim()) { alert('Please enter code first.'); return; }

      debugBtn.disabled = true;
      debugBtn.textContent = 'analyzing code…';
      debugPanel.style.display = 'block';
      debugContent.innerHTML = '<div class="thinking">MODOK analyzing stack trace & logic<span class="blink">_</span></div>';

      try {
        const prompt = `Language: ${codeLang}\n\nCode:\n\`\`\`${codeLang}\n${code}\n\`\`\`\n\nRuntime Output / Stack Trace:\n${outputText || '(No runtime error captured, check for logic bugs)'}\n\nIdentify bugs concisely, explain fix, and provide complete drop-in fixed code inside a single block starting with \`\`\`${codeLang}\n.`;
        const aiAns = await callAI([{ role: 'user', content: prompt }], "You are MODOK Smart Debugger & Fixer. Explain bugs concisely and provide drop-in corrected code.");

        const codeMatch = aiAns.match(/```[a-zA-Z]*\n([\s\S]*?)```/);
        const fixedCode = codeMatch ? codeMatch[1].trim() : '';

        let html = formatAssistantText(aiAns);
        if (fixedCode) {
          window.lastFixedCode = fixedCode;
          html += `
            <div style="margin-top:14px; display:flex; gap:10px; flex-wrap:wrap;">
              <button class="primary" id="apply-fix-btn" type="button" style="background:var(--green-dim);">✨ Apply Fix to Editor</button>
              <button class="secondary" id="copy-fix-btn" type="button">📋 Copy Fix</button>
            </div>
          `;
        }
        debugContent.innerHTML = html;

        const applyBtn = document.getElementById('apply-fix-btn');
        if (applyBtn) {
          applyBtn.addEventListener('click', () => {
            if (window.lastFixedCode) {
              codeEditor.value = window.lastFixedCode;
              codeDrafts[codeLang] = window.lastFixedCode;
              showToast('Code Updated', 'Applied fixed code directly to editor!');
              debugPanel.style.display = 'none';
            }
          });
        }
        const copyFixBtn = document.getElementById('copy-fix-btn');
        if (copyFixBtn) {
          copyFixBtn.addEventListener('click', (e) => copyText(window.lastFixedCode, e.currentTarget));
        }
      } catch (err) {
        debugContent.innerHTML = `<div class="msg error">Could not debug code: ${escapeHtml(err.message || 'Error')}</div>`;
      }
      debugBtn.disabled = false;
      debugBtn.textContent = '🐞 Auto-Debug & Fix';
    });
  }

  if (testBtn) {
    testBtn.addEventListener('click', async () => {
      const code = codeEditor.value;
      if (!code.trim()) { alert('Please enter code first.'); return; }

      testBtn.disabled = true;
      testBtn.textContent = 'generating edge cases…';
      debugPanel.style.display = 'block';
      debugContent.innerHTML = '<div class="thinking">MODOK generating 5 edge-case test vectors<span class="blink">_</span></div>';

      try {
        const prompt = `Language: ${codeLang}\n\nCode:\n\`\`\`${codeLang}\n${code}\n\`\`\`\n\nGenerate 5 comprehensive edge-case test inputs (empty, negative, duplicates, large bounds, single element) and explain why each tests the function. Provide test runner code in ${codeLang}.`;
        const aiAns = await callAI([{ role: 'user', content: prompt }], "You are MODOK Edge-Case Generator.");
        debugContent.innerHTML = formatAssistantText(aiAns);
      } catch (err) {
        debugContent.innerHTML = `<div class="msg error">Could not generate test cases: ${escapeHtml(err.message || 'Error')}</div>`;
      }
      testBtn.disabled = false;
      testBtn.textContent = '🧪 Edge Cases';
    });
  }
})();

loadState();
