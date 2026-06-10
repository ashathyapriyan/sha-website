'use client';

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Link from 'next/link';
import Q from '@/lib/questions';

const TOTAL = Q.length;

function buildSrcdoc(q, code) {
  if (q.lang === 'html') return code;
  if (q.lang === 'css') {
    return '<!DOCTYPE html><html><head><style>' + code + '</style></head><body><h1>Heading</h1><p>Paragraph text here.</p><div class="box">A div box</div><button>Button</button><ul><li>One</li><li>Two</li><li>Three</li><li>Four</li></ul><a href="#">A link</a></body></html>';
  }
  if (q.lang === 'js') {
    return '<!DOCTYPE html><html><body><div id="out" style="font-family:monospace;padding:14px;font-size:13px;line-height:1.5;"></div><scr' + 'ipt>' +
      'var logs=[];console.log=function(){logs.push([].map.call(arguments,function(x){return (typeof x==="object"&&x!==null)?JSON.stringify(x,null,2):String(x);}).join(" "));document.getElementById("out").innerHTML=logs.map(function(l){return "<div style=\\"border-bottom:1px solid #eee;padding:4px 0;white-space:pre-wrap\\">"+l.replace(/</g,"&lt;")+"</div>";}).join("");};' +
      'try{' + code + '}catch(e){document.getElementById("out").innerHTML+="<div style=\\"color:#c00\\">Error: "+e.message+"</div>";}' +
      '</scr' + 'ipt></body></html>';
  }
  return '';
}

export default function InterviewCoursePage() {
  const [currentId, setCurrentId] = useState(1);
  const [done, setDone] = useState([]);
  const [dark, setDark] = useState(false);
  const [filter, setFilter] = useState('');
  const [collapsed, setCollapsed] = useState({});
  const [sidebarShow, setSidebarShow] = useState(false);
  const [mobOpen, setMobOpen] = useState(false);
  const [editorOpen, setEditorOpen] = useState(false);
  const [code, setCode] = useState('');
  const [srcdoc, setSrcdoc] = useState('');
  const debTimer = useRef(null);

  const q = Q.find((x) => x.id === currentId) || Q[0];

  // load persisted state + hash
  useEffect(() => {
    try {
      setDone(JSON.parse(localStorage.getItem('wdcourse_done') || '[]'));
      if (localStorage.getItem('wdcourse_dark') === '1') setDark(true);
    } catch {}
    const h = window.location.hash.replace('#q', '');
    if (h && !isNaN(h) && Q.find((x) => x.id === parseInt(h))) setCurrentId(parseInt(h));
  }, []);

  const cats = useMemo(() => {
    const c = {};
    Q.forEach((qq) => {
      (c[qq.catId] = c[qq.catId] || { icon: qq.icon, cat: qq.cat, items: [] }).items.push(qq);
    });
    return c;
  }, []);

  const navigate = useCallback((id) => {
    setCurrentId(id);
    setEditorOpen(false);
    const nq = Q.find((x) => x.id === id);
    setCode(nq ? nq.code : '');
    history.replaceState(null, '', '#q' + id);
    window.scrollTo(0, 0);
    if (window.innerWidth <= 900) setSidebarShow(false);
  }, []);

  useEffect(() => { setCode(q.code); }, [q]);

  function markDone(id) {
    const next = done.includes(id) ? done.filter((x) => x !== id) : [...done, id];
    setDone(next);
    try { localStorage.setItem('wdcourse_done', JSON.stringify(next)); } catch {}
  }

  function toggleDark() {
    const d = !dark;
    setDark(d);
    try { localStorage.setItem('wdcourse_dark', d ? '1' : '0'); } catch {}
  }

  function runCode(c) {
    setSrcdoc(buildSrcdoc(q, c !== undefined ? c : code));
  }

  function onCodeChange(e) {
    const v = e.target.value;
    setCode(v);
    clearTimeout(debTimer.current);
    debTimer.current = setTimeout(() => runCode(v), 400);
  }

  function onKeyDown(e) {
    if (e.key === 'Tab') {
      e.preventDefault();
      const ta = e.target;
      const s = ta.selectionStart;
      const v = ta.value.substring(0, s) + '  ' + ta.value.substring(ta.selectionEnd);
      setCode(v);
      requestAnimationFrame(() => { ta.selectionStart = ta.selectionEnd = s + 2; });
    }
  }

  const f = filter.toLowerCase();

  return (
    <div className={'wdc' + (dark ? ' dark' : '')}>
      <div id="progress-bar" style={{ width: (done.length / TOTAL) * 100 + '%' }}></div>
      <nav className="wdc-nav">
        <Link className="brand" href="/">sha.dev</Link>
        <Link className="nav-link" href="/">🏠 Home</Link>
        <Link className="nav-link" href="/seo-analyzer" style={{ color: 'var(--accent)', fontSize: '.8rem' }}>🔍 SEO Tool</Link>
        <Link className="nav-link" href="/ai-agent" style={{ fontSize: '.8rem' }}>🤖 AI Agent</Link>
        <input
          id="nav-search"
          type="text"
          placeholder="Search questions..."
          value={filter}
          onChange={(e) => { setFilter(e.target.value); if (window.innerWidth <= 900) setSidebarShow(true); }}
        />
        <span className="nav-spacer"></span>
        <button className="nav-btn" onClick={() => setSidebarShow(!sidebarShow)}>☰</button>
        <button className="nav-btn" id="links-btn" onClick={() => setMobOpen(true)}>🔗 Links</button>
        <button className="nav-btn" onClick={toggleDark}>{dark ? '☾ Dark' : '☀ Light'}</button>
        <span id="prog-count">{done.length}/{TOTAL} ✓</span>
      </nav>

      <aside id="sidebar" className={sidebarShow ? 'show' : ''}>
        <div className="sb-search">
          <input
            id="sidebar-search"
            type="text"
            placeholder="Filter..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <div id="sidebar-list">
          {Object.keys(cats).sort((a, b) => a - b).map((cid) => {
            const c = cats[cid];
            return (
              <div key={cid}>
                <div className="cat-header" onClick={() => setCollapsed({ ...collapsed, [cid]: !collapsed[cid] })}>
                  <span>{c.icon} {c.cat} ({c.items.length})</span><span>▾</span>
                </div>
                {!collapsed[cid] && (
                  <div className="cat-questions">
                    {c.items.map((item) => {
                      const label = `${item.id}. ${item.title}`;
                      if (f && !label.toLowerCase().includes(f)) return null;
                      return (
                        <a
                          key={item.id}
                          className={
                            'q-link' +
                            (item.id === currentId ? ' active' : '') +
                            (done.includes(item.id) ? ' done' : '')
                          }
                          onClick={() => navigate(item.id)}
                        >
                          {label}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </aside>

      <div className={'mob-overlay' + (mobOpen ? ' open' : '')}>
        <div className="mob-top">
          <div className="mob-logo">sha<span>.</span>dev</div>
          <button className="mob-close" onClick={() => setMobOpen(false)}>✕</button>
        </div>
        <div className="mob-links">
          <Link href="/" onClick={() => setMobOpen(false)}>🏠 Home</Link>
          <Link href="/seo-analyzer" onClick={() => setMobOpen(false)}>🔍 SEO Analyzer</Link>
          <Link href="/interview-course" onClick={() => setMobOpen(false)} style={{ color: 'var(--accent)', fontWeight: 700 }}>📚 Interview Course</Link>
          <Link href="/ai-agent" onClick={() => setMobOpen(false)}>🤖 AI Agent</Link>
          <Link href="/#contact" onClick={() => setMobOpen(false)}>📞 Contact</Link>
        </div>
      </div>

      <main className="wdc-main">
        <div className="breadcrumb">{q.icon} {q.cat} › Question {q.id}</div>
        <div className="lesson-nav">
          {q.id > 1 ? <button onClick={() => navigate(q.id - 1)}>← Prev</button> : <span></span>}
          <span className="counter">{q.id} / {TOTAL}</span>
          {q.id < TOTAL ? <button onClick={() => navigate(q.id + 1)}>Next →</button> : <span></span>}
        </div>
        <h1>{q.title}</h1>
        <div className="lesson-content" dangerouslySetInnerHTML={{ __html: q.lesson }} />

        {q.lang !== 'none' && (
          <>
            <div className="example-label">📋 Example</div>
            <pre className="code-box">{q.code}</pre>
            <button
              className="try-btn"
              onClick={() => { setEditorOpen(true); runCode(); }}
            >
              Try it Yourself »
            </button>
            <div className={'editor-wrap' + (editorOpen ? ' open' : '')}>
              <div className="editor-toolbar"><span>{q.lang.toUpperCase()} Editor</span></div>
              <div className="editor-body">
                <textarea spellCheck={false} value={code} onChange={onCodeChange} onKeyDown={onKeyDown} />
                <iframe sandbox="allow-scripts allow-modals" srcDoc={srcdoc} title="Try it yourself output" />
              </div>
              <div className="editor-actions">
                <button className="btn-run" onClick={() => runCode()}>▶ Run</button>
                <button className="btn-reset" onClick={() => { setCode(q.code); runCode(q.code); }}>↻ Reset</button>
                <button className="btn-close" onClick={() => setEditorOpen(false)}>✕ Close Editor</button>
              </div>
            </div>
          </>
        )}

        <div className="lesson-nav bottom">
          {q.id > 1 ? <button onClick={() => navigate(q.id - 1)}>← Prev</button> : <span></span>}
          <button className="mark-done" onClick={() => markDone(q.id)}>
            {done.includes(q.id) ? '✓ Completed' : 'Mark as Complete'}
          </button>
          {q.id < TOTAL ? <button onClick={() => navigate(q.id + 1)}>Next →</button> : <span></span>}
        </div>
      </main>
    </div>
  );
}
