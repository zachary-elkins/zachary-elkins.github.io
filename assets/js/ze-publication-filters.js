function initializePublicationFilters() {
  const state = { topic: 'all', type: 'all', year: 'all' };
  const publications = document.querySelector('.publications');
  const empty = document.querySelector('.ze-no-results');
  const resultCount = document.querySelector('[data-result-count]');

  if (!publications) return;

  // Move groups made entirely of working papers to the end so published scholarship leads.
  [...publications.querySelectorAll('.bibliography')]
    .filter((list) => {
      const items = [...list.querySelectorAll('.ze-publication')];
      return items.length > 0 && items.every((item) => item.dataset.category === 'working papers');
    })
    .forEach((list) => {
      const heading = list.previousElementSibling;
      if (heading && /^H[1-6]$/.test(heading.tagName)) publications.appendChild(heading);
      publications.appendChild(list);
    });

  const entries = [...document.querySelectorAll('.ze-publication')];

  function matchesYear(entry) {
    if (state.year === 'all') return true;
    if (state.year === 'in-progress') return entry.dataset.category === 'working papers';

    const year = (entry.dataset.year || '').match(/(?:19|20)\d{2}/);
    return year && Math.floor(Number(year[0]) / 10) * 10 === Number(state.year);
  }

  function update() {
    let shown = 0;

    entries.forEach((entry) => {
      const topic = state.topic === 'all' || (entry.dataset.keywords || '').split(/,\s*/).includes(state.topic);
      const type = state.type === 'all' || entry.dataset.category === state.type;
      entry.hidden = !(topic && type && matchesYear(entry));
      if (!entry.hidden) shown += 1;
    });

    document.querySelectorAll('.bibliography').forEach((list) => {
      const visible = [...list.querySelectorAll('.ze-publication')].some((entry) => !entry.hidden);
      const heading = list.previousElementSibling;
      list.hidden = !visible;
      if (heading && /^H[1-6]$/.test(heading.tagName)) heading.hidden = !visible;
    });

    if (empty) empty.hidden = shown !== 0;
    if (resultCount) resultCount.textContent = shown;
  }

  document.querySelectorAll('[data-filter] button').forEach((button) =>
    button.addEventListener('click', () => {
      const group = button.closest('[data-filter]');
      state[group.dataset.filter] = button.dataset.value;
      group.querySelectorAll('button').forEach((item) => item.classList.toggle('active', item === button));
      update();
    }),
  );

  document.querySelectorAll('.ze-entry-topic').forEach((button) =>
    button.addEventListener('click', () => {
      state.topic = button.dataset.topic;
      state.type = 'all';
      state.year = 'all';

      document.querySelectorAll('[data-filter] button').forEach((item) => {
        const group = item.closest('[data-filter]');
        const value = group.dataset.filter === 'topic' ? state.topic : 'all';
        item.classList.toggle('active', item.dataset.value === value);
      });

      update();
      document.querySelector('[data-filter="topic"]')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }),
  );

  document.querySelector('.ze-reset-filters')?.addEventListener('click', () => {
    Object.keys(state).forEach((key) => {
      state[key] = 'all';
    });
    document.querySelectorAll('[data-filter] button').forEach((item) => item.classList.toggle('active', item.dataset.value === 'all'));
    update();
  });

  update();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializePublicationFilters, { once: true });
} else {
  initializePublicationFilters();
}
