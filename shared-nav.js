// Shared navigation bar for all Rex Ventures pages
// Include with: <script src="shared-nav.js" defer></script>
// Place <div id="shared-nav"></div> where nav should appear

const NAV_HTML = `
<nav style="background:#0f172a;border-bottom:1px solid #1e293b;padding:0;position:sticky;top:0;z-index:1000;">
  <div style="max-width:1000px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;padding:10px 20px;">
    <div style="display:flex;align-items:center;gap:16px;">
      <a href="/Local-reach1/" style="color:#fff;text-decoration:none;font-weight:700;font-size:16px;">Rex Ventures</a>
      <span style="color:#475569;font-size:12px;">|</span>
      <a href="/Local-reach1/" style="color:#94a3b8;text-decoration:none;font-size:13px;transition:color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#94a3b8'">🏠 Home</a>
      <a href="/Local-reach1/gbp-audit.html" style="color:#94a3b8;text-decoration:none;font-size:13px;transition:color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#94a3b8'">🔍 Free Audit</a>
      <a href="/Local-reach1/demo.html" style="color:#94a3b8;text-decoration:none;font-size:13px;transition:color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#94a3b8'">🤖 AI Demos</a>
      <a href="/Local-reach1/ops.html" style="color:#94a3b8;text-decoration:none;font-size:13px;transition:color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#94a3b8'">📊 Ops</a>
      <a href="/Local-reach1/score.html" style="color:#94a3b8;text-decoration:none;font-size:13px;transition:color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#94a3b8'">🔥 Prospects</a>
      <a href="/Local-reach1/launch.html" style="color:#94a3b8;text-decoration:none;font-size:13px;transition:color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#94a3b8'">🚀 Status</a>
    </div>
    <div style="display:flex;align-items:center;gap:12px;">
      <a href="/Local-reach1/call.html" style="color:#3b82f6;text-decoration:none;font-size:13px;font-weight:600;">📞 Call</a>
      <a href="mailto:marcus@localreach.co" style="color:#94a3b8;text-decoration:none;font-size:13px;">marcus@localreach.co</a>
    </div>
  </div>
</nav>
`;

document.addEventListener('DOMContentLoaded', function() {
  const navTarget = document.getElementById('shared-nav');
  if (navTarget) {
    navTarget.innerHTML = NAV_HTML;
  }
});
