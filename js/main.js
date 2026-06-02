(function(){
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
  const menu=$('.menu'), hamb=$('.hamb'); if(hamb&&menu) hamb.addEventListener('click',()=>menu.classList.toggle('open'));
  $$('.menu a').forEach(a=>{ if(a.pathname===location.pathname) a.classList.add('active'); });
  const reveals=$$('.section,.page-hero,.service-card,.project-card,.text-card'); reveals.forEach(el=>el.classList.add('reveal'));
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08}); reveals.forEach(el=>io.observe(el));

  // carousel
  $$('[data-carousel]').forEach(car=>{
    const track=$('[data-track]',car)||$('.projects-track',car);
    const prev=$('[data-prev]',car);
    const next=$('[data-next]',car);
    const dots=$('[data-dots]',car);
    if(!track)return;

    const cards=$$('.project-card',track);
    let idx=0;

    const upd=()=>{
      if(!dots)return;
      dots.innerHTML='';
      cards.forEach((_,i)=>{
        const b=document.createElement('button');
        b.className=i===idx?'active':'';
        b.setAttribute('aria-label','Prejsť na projekt '+(i+1));
        b.onclick=()=>go(i);
        dots.appendChild(b);
      });
    };

    const go=i=>{
      idx=Math.max(0,Math.min(i,cards.length-1));
      cards[idx].scrollIntoView({behavior:'smooth',inline:'start',block:'nearest'});
      upd();
    };

    prev&&prev.addEventListener('click',()=>go(idx-1));
    next&&next.addEventListener('click',()=>go(idx+1));

    track.addEventListener('scroll',()=>{
      const w=cards[0]?.getBoundingClientRect().width||1;
      idx=Math.round(track.scrollLeft/(w+18));
      upd();
    },{passive:true});

    upd();
  });

  // filters
  const filters=$$('.filter'), photos=$$('[data-cat]'); if(filters.length){ const set=cat=>{filters.forEach(b=>b.classList.toggle('active',b.dataset.filter===cat)); photos.forEach(p=>{ if(p.classList.contains('filter')) return; p.style.display=(cat==='all'||p.dataset.cat===cat)?'':'none';}); const u=new URL(location); if(cat==='all')u.searchParams.delete('filter'); else u.searchParams.set('filter',cat); history.replaceState(null,'',u);}; filters.forEach(b=>b.addEventListener('click',()=>set(b.dataset.filter))); set(new URLSearchParams(location.search).get('filter')||'all'); }

  // lightbox - pracuje iba s aktuálne viditeľnými fotkami po filtri
  const light=$('.lightbox'); if(light){ const img=$('img',light); const allPics=$$('[data-lightbox]'); let visiblePics=[], i=0; const refresh=()=>{ visiblePics=allPics.filter(p=>p.offsetParent!==null && getComputedStyle(p).display!=='none'); if(!visiblePics.length) visiblePics=allPics; }; const openEl=el=>{ refresh(); i=Math.max(0,visiblePics.indexOf(el)); const im=$('img',visiblePics[i]); if(!im)return; img.src=im.src; img.alt=im.alt; light.classList.add('open');}; const open=n=>{ refresh(); i=(n+visiblePics.length)%visiblePics.length; const im=$('img',visiblePics[i]); if(!im)return; img.src=im.src; img.alt=im.alt; light.classList.add('open');}; const close=()=>light.classList.remove('open'); const step=d=>open(i+d); allPics.forEach(p=>p.addEventListener('click',()=>openEl(p))); $('.lb-close',light)?.addEventListener('click',close); $('.lb-prev',light)?.addEventListener('click',()=>step(-1)); $('.lb-next',light)?.addEventListener('click',()=>step(1)); document.addEventListener('keydown',e=>{ if(!light.classList.contains('open'))return; if(e.key==='Escape')close(); if(e.key==='ArrowLeft')step(-1); if(e.key==='ArrowRight')step(1);}); let sx=0; light.addEventListener('touchstart',e=>sx=e.touches[0].clientX,{passive:true}); light.addEventListener('touchend',e=>{let dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>50)step(dx>0?-1:1);},{passive:true}); }

  // cookies
  const cookie=$('.cookie'), modal=$('.cookie-modal'); const saved=localStorage.getItem('pvstolCookies'); if(cookie&&saved) cookie.style.display='none'; $$('[data-cookie]').forEach(b=>b.addEventListener('click',()=>{localStorage.setItem('pvstolCookies',b.dataset.cookie); if(cookie)cookie.style.display='none'; if(modal)modal.classList.remove('open');})); $('[data-cookie-settings]')?.addEventListener('click',()=>modal?.classList.add('open')); $('[data-cookie-close]')?.addEventListener('click',()=>modal?.classList.remove('open')); $('[data-cookie-save]')?.addEventListener('click',()=>{localStorage.setItem('pvstolCookies',JSON.stringify({analytics:$('#analyticsCookies')?.checked,marketing:$('#marketingCookies')?.checked})); if(cookie)cookie.style.display='none'; modal?.classList.remove('open');});

  // form file label
  $$('input[type=file]').forEach(inp=>{ inp.addEventListener('change',()=>{ const ui=inp.closest('label')?.querySelector('.file-ui small'); if(ui) ui.textContent=inp.files[0]?.name||'PNG, JPG, PDF do 8 MB'; }); });
})();
