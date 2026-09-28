(function () {
  'use strict';

  function init() {
    // Делегирование клика на строки
    document.addEventListener('click', function (e) {
      const row = e.target.closest('.layer-fields.compact .field-row');
      if (!row) return;
      if (row.classList.contains('no-details')) return;

      toggleRow(row);
    });

    // Кнопка "Развернуть все / Свернуть все"
    document.querySelectorAll('.expand-all-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const isActive = btn.classList.toggle('is-active');
        btn.textContent = isActive
          ? 'Свернуть все подробности'
          : 'Развернуть все подробности';

        document.querySelectorAll('.layer-fields.compact .field-row').forEach(function (r) {
          if (r.classList.contains('no-details')) return;
          setRowState(r, isActive);
        });
      });
    });
  }

  function toggleRow(row) {
    const details = row.nextElementSibling;
    if (!details || !details.classList.contains('field-details')) return;

    const isOpen = row.classList.contains('open');
    setRowState(row, !isOpen);
  }

  function setRowState(row, open) {
    const details = row.nextElementSibling;
    if (!details || !details.classList.contains('field-details')) return;

    row.classList.toggle('open', open);
    details.classList.toggle('open', open);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Поддержка mkdocs-material instant navigation
  if (typeof document$ !== 'undefined') {
    document$.subscribe(init);
  }
})();