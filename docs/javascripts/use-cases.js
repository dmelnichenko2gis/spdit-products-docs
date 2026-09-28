(function () {
  function initUseCases() {
    const aside = document.querySelector('[data-usecase-aside]');
    const panel = document.querySelector('[data-usecase-panel]');
    if (!aside || !panel) return;

    const buttons = aside.querySelectorAll('button[data-target]');
    const cards = panel.querySelectorAll('.spdit-usecase');

    function activate(id) {
      buttons.forEach((b) => b.classList.toggle('is-active', b.dataset.target === id));
      cards.forEach((c) => c.classList.toggle('is-active', c.id === id));
    }

    buttons.forEach((btn) =>
      btn.addEventListener('click', () => activate(btn.dataset.target))
    );

    const hash = location.hash.replace('#', '');
    const initial =
      hash && document.getElementById(hash) ? hash : buttons[0]?.dataset.target;
    if (initial) activate(initial);
  }

  function initLayersFilter() {
    const search = document.querySelector('[data-layers-search]');
    if (!search) return;
    const filterBtns = document.querySelectorAll('[data-geom-filter]');
    const cards = document.querySelectorAll('.layer-card');
    let activeGeom = 'all', query = '';

    function apply() {
      cards.forEach((card) => {
        const name = (card.dataset.name || '').toLowerCase();
        const geom = card.dataset.geom || '';
        const matchQuery = !query || name.includes(query);
        const matchGeom = activeGeom === 'all' || geom === activeGeom;
        card.classList.toggle('is-hidden', !(matchQuery && matchGeom));
      });
    }

    search.addEventListener('input', (e) => {
      query = e.target.value.trim().toLowerCase();
      apply();
    });
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterBtns.forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        activeGeom = btn.dataset.geomFilter;
        apply();
      });
    });
  }

  function init() {
    initUseCases();
    initLayersFilter();
  }

  if (window.document$) document$.subscribe(init);
  else document.addEventListener('DOMContentLoaded', init);
})();