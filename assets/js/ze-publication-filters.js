function initializePublicationFilters() {
  const publications = document.querySelector('.publications');
  const filters = document.querySelector('.ze-filters');
  const search = document.querySelector('#ze-publication-search');
  const empty = document.querySelector('.ze-no-results');
  const resultCount = document.querySelector('[data-result-count]');

  if (!publications || !filters || !search || !empty || !resultCount) return;

  const state = { topic: 'all', type: 'all', year: 'all' };
  const buttons = [...filters.querySelectorAll('[data-filter] button')];
  const yearOf = (text) => Number(text.match(/(?:19|20)\d{2}/)?.[0]) || 0;
  const normalize = (text) => text.toLowerCase().normalize('NFD').replace(/\p{M}/gu, '').replace(/\s+/g, ' ').trim();
  const groups = [...publications.querySelectorAll(':scope > ol.bibliography')].map((list) => {
    const heading = list.previousElementSibling;
    const entries = [...list.querySelectorAll('.ze-publication')].map((entry) => ({
      entry,
      category: entry.dataset.category,
      topics: entry.dataset.keywords.split(',').map((topic) => topic.trim()),
      year: yearOf(entry.dataset.year),
      text: normalize(
        [...entry.querySelectorAll('.title, .author, .periodical, .ze-entry-topics')]
          .map((part) => part.textContent)
          .join(' '),
      ),
    }));
    return { list, heading, entries };
  });

  // Keep the published chronology ahead of forthcoming work and drafts.
  groups.sort((a, b) => yearOf(b.heading.textContent) - yearOf(a.heading.textContent));
  groups.forEach(({ heading, list }) => publications.append(heading, list));

  function matchesYear(year) {
    if (state.year === 'all') return true;
    if (state.year === 'in-progress') return year === 0;
    return Math.floor(year / 10) * 10 === Number(state.year);
  }

  function update() {
    const terms = normalize(search.value).split(' ').filter(Boolean);
    let shown = 0;

    groups.forEach(({ heading, list, entries }) => {
      let groupShown = 0;
      entries.forEach(({ entry, category, topics, year, text }) => {
        const topicMatches = state.topic === 'all' || topics.includes(state.topic);
        const typeMatches = state.type === 'all' || category === state.type;
        const queryMatches = terms.every((term) => text.includes(term));
        entry.hidden = !(topicMatches && typeMatches && matchesYear(year) && queryMatches);
        // Hide the bibliography item as well so list semantics match the visible results.
        entry.closest('li').hidden = entry.hidden;
        if (!entry.hidden) groupShown += 1;
      });
      list.hidden = heading.hidden = groupShown === 0;
      shown += groupShown;
    });

    empty.hidden = shown !== 0;
    resultCount.textContent = `${shown} ${shown === 1 ? 'result' : 'results'}`;

    buttons.forEach((button) => {
      const key = button.closest('[data-filter]').dataset.filter;
      const active = state[key] === button.dataset.value;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }

  buttons.forEach((button) =>
    button.addEventListener('click', () => {
      state[button.closest('[data-filter]').dataset.filter] = button.dataset.value;
      update();
    }),
  );

  publications.querySelectorAll('.ze-entry-topic').forEach((button) =>
    button.addEventListener('click', () => {
      state.topic = button.dataset.topic;
      update();
      const activeTopic = buttons.find(
        (filter) => filter.closest('[data-filter]').dataset.filter === 'topic' && filter.dataset.value === state.topic,
      );
      activeTopic?.focus();
    }),
  );

  search.addEventListener('input', update);
  filters.querySelector('.ze-reset-filters').addEventListener('click', () => {
    Object.assign(state, { topic: 'all', type: 'all', year: 'all' });
    search.value = '';
    update();
  });

  update();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializePublicationFilters, { once: true });
} else {
  initializePublicationFilters();
}
