/* ============================================================
   GRĂDINA NOASTRĂ — blog.js
   ============================================================ */

const MONTHS_RO = [
  'ianuarie','februarie','martie','aprilie','mai','iunie',
  'iulie','august','septembrie','octombrie','noiembrie','decembrie'
];

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return `${d.getDate()} ${MONTHS_RO[d.getMonth()]} ${d.getFullYear()}`;
}

/* ─── CARD ───────────────────────────────────────────────────── */
function renderCard(article) {
  const seriesBadge = article.series
    ? `<span class="blog-card-series">📂 ${article.series}</span>`
    : '';
  return `
    <article class="blog-card reveal">
      <a href="articol.html?id=${article.id}" class="blog-card-img">
        <img src="${article.image}" alt="${article.title}" loading="lazy">
        <span class="blog-card-cat">${article.category}</span>
      </a>
      <div class="blog-card-body">
        <p class="blog-card-meta">${formatDate(article.date)} · ${article.author}</p>
        ${seriesBadge}
        <h3 class="blog-card-title">
          <a href="articol.html?id=${article.id}">${article.title}</a>
        </h3>
        <p class="blog-card-excerpt">${article.excerpt}</p>
        <a href="articol.html?id=${article.id}" class="blog-read-more">Citește mai mult →</a>
      </div>
    </article>`;
}

/* ─── REVEAL ─────────────────────────────────────────────────── */
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal:not(.observed)').forEach(el => {
    el.classList.add('observed');
    obs.observe(el);
  });
}

/* ─── INDEX.HTML ─────────────────────────────────────────────── */
function initHomeBlog() {
  const container = document.getElementById('blog-preview-grid');
  if (!container) return;
  container.innerHTML = ARTICLES.slice(0, 3).map(renderCard).join('');
  initReveal();
}

/* ─── BLOG.HTML ──────────────────────────────────────────────── */
function initBlogList() {
  const container = document.getElementById('blog-grid');
  const filterBar  = document.getElementById('blog-filter-bar');
  if (!container) return;

  function renderGrouped(list) {
    if (!list.length) {
      container.innerHTML = '<p class="blog-empty">Niciun articol în această categorie.</p>';
      return;
    }

    // Grupează articolele cu series sub un header
    const groups = [];
    const seriesSeen = {};
    const standalone = [];

    list.forEach(article => {
      if (article.series) {
        if (!seriesSeen[article.series]) {
          seriesSeen[article.series] = [];
          groups.push({ type: 'series', name: article.series, articles: seriesSeen[article.series] });
        }
        seriesSeen[article.series].push(article);
      } else {
        standalone.push(article);
      }
    });

    let html = '';

    // Articole standalone
    standalone.forEach(a => { html += renderCard(a); });

    // Grupuri cu series
    groups.forEach(g => {
      html += `
        <div class="blog-series-group reveal">
          <div class="blog-series-header">
            <span class="blog-series-icon">📂</span>
            <h2 class="blog-series-title">${g.name}</h2>
          </div>
          <div class="blog-series-cards">
            ${g.articles.map(renderCard).join('')}
          </div>
        </div>`;
    });

    container.innerHTML = html;
    initReveal();
  }

  if (filterBar) {
    const categories = ['Toate', ...new Set(ARTICLES.map(a => a.category))];
    filterBar.innerHTML = categories.map(cat =>
      `<button class="blog-filter-btn${cat === 'Toate' ? ' active' : ''}" data-cat="${cat}">${cat}</button>`
    ).join('');

    filterBar.addEventListener('click', e => {
      const btn = e.target.closest('.blog-filter-btn');
      if (!btn) return;
      document.querySelectorAll('.blog-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      renderGrouped(cat === 'Toate' ? ARTICLES : ARTICLES.filter(a => a.category === cat));
    });
  }

  renderGrouped([]);
}

/* ─── ARTICOL.HTML ───────────────────────────────────────────── */
function initArticlePage() {
  const container = document.getElementById('article-container');
  if (!container) return;

  const id      = new URLSearchParams(window.location.search).get('id');
  const article = ARTICLES.find(a => a.id === id);

  if (!article) {
    container.innerHTML = `
      <div style="text-align:center;padding:8rem 5vw">
        <p class="section-label">Eroare 404</p>
        <h1 class="section-title">Articolul nu a fost găsit</h1>
        <a href="blog.html" class="btn-green" style="display:inline-block;margin-top:2rem">← Înapoi la blog</a>
      </div>`;
    return;
  }

  document.title = `${article.title} — Grădina Noastră`;

  const idx  = ARTICLES.findIndex(a => a.id === id);
  const prev = ARTICLES[idx + 1];
  const next = ARTICLES[idx - 1];

  const seriesInfo = article.series
    ? `<p class="article-series">📂 Din seria: <strong>${article.series}</strong></p>`
    : '';

  container.innerHTML = `
    <div class="article-hero" style="background-image:url('${article.image}')">
      <div class="article-hero-overlay"></div>
      <div class="article-hero-content">
        <p class="section-label">${article.category}</p>
        <h1 class="article-title">${article.title}</h1>
        <p class="article-meta">${formatDate(article.date)} · ${article.author}</p>
      </div>
    </div>
    <div class="article-body">
      ${seriesInfo}
      <div class="article-content">${article.content}</div>
      <div class="article-tags">
        ${article.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
      <div class="article-nav">
        <div>${prev ? `<a href="articol.html?id=${prev.id}" class="article-nav-link">← ${prev.title}</a>` : ''}</div>
        <div>${next ? `<a href="articol.html?id=${next.id}" class="article-nav-link">${next.title} →</a>` : ''}</div>
      </div>
      <div class="article-back">
        <a href="blog.html" class="btn-green">← Înapoi la blog</a>
      </div>
    </div>`;
}