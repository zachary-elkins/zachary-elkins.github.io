document.addEventListener('DOMContentLoaded',()=>{
  const state={topic:'all',type:'all'};
  const entries=[...document.querySelectorAll('.ze-publication')];
  const empty=document.querySelector('.ze-no-results');
  function update(){
    let shown=0;
    entries.forEach(entry=>{
      const topic=state.topic==='all'||(entry.dataset.keywords||'').split(/,\s*/).includes(state.topic);
      const type=state.type==='all'||entry.dataset.category===state.type;
      entry.hidden=!(topic&&type); if(!entry.hidden) shown++;
    });
    document.querySelectorAll('.bibliography').forEach(list=>{
      const visible=[...list.querySelectorAll('.ze-publication')].some(entry=>!entry.hidden);
      const heading=list.previousElementSibling;
      list.hidden=!visible;
      if(heading&&/^H[1-6]$/.test(heading.tagName)) heading.hidden=!visible;
    });
    empty.hidden=shown!==0;
  }
  document.querySelectorAll('[data-filter] button').forEach(button=>button.addEventListener('click',()=>{
    const group=button.closest('[data-filter]'); state[group.dataset.filter]=button.dataset.value;
    group.querySelectorAll('button').forEach(item=>item.classList.toggle('active',item===button)); update();
  }));
});
