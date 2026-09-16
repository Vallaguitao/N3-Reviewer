/* Midnight Washi 1.1 — optional atmosphere, entrances, hover readings,
   card flips and counters. Independent of theme.js. No dependencies. */
(() => {
  'use strict';
  if (window.MidnightWashiMotion) return;
  const states = new WeakMap();
  const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia?.('(hover: hover) and (pointer: fine)');
  const clamp = (n,min,max) => Math.min(max,Math.max(min,n));
  const own = (root,selector) => [...root.querySelectorAll(selector)].filter(el=>el.closest('.mw-theme')===root);
  function roots(scope) {
    return [...new Set([scope.closest?.('.mw-theme'),...scope.querySelectorAll('.mw-theme')].filter(Boolean))];
  }
  function listen(state,target,event,callback) {
    target?.addEventListener(event,callback);
    state.cleanup.push(()=>target?.removeEventListener(event,callback));
  }
  function resetPointer(state) {
    cancelAnimationFrame(state.pointerFrame);
    state.pointerFrame = 0;
    state.root.style.setProperty('--mw-pointer-x','0');
    state.root.style.setProperty('--mw-pointer-y','0');
    if (state.tilt) {
      state.tilt.style.removeProperty('--mw-tilt-x');
      state.tilt.style.removeProperty('--mw-tilt-y');
      state.tilt = null;
    }
  }
  function finishCounters(state) {
    for (const [el,count] of state.counters) {
      cancelAnimationFrame(count.frame); count.frame=0; el.textContent=count.final;
    }
  }
  function sync(state) {
    const paused = state.paused || Boolean(reduced?.matches) || document.hidden;
    state.root.dataset.mwMotionState = paused ? 'paused' : 'running';
    for (const button of own(state.root,'button[data-mw-motion-toggle]')) {
      button.hidden=false; button.disabled=Boolean(reduced?.matches);
      button.textContent=reduced?.matches ? 'Reduced motion' : state.paused ? 'Resume motion' : 'Pause motion';
    }
    if (paused) { resetPointer(state); finishCounters(state); }
  }
  function countUp(el,state) {
    const value=Number(el.dataset.mwCount);
    if (!Number.isFinite(value) || value<0 || value>1e9) return;
    const final=el.dataset.mwComma!==undefined ? value.toLocaleString('en-US') : String(value);
    const record=state.counters.get(el) || {original:el.textContent,frame:0,final};
    cancelAnimationFrame(record.frame); state.counters.set(el,record);
    if (state.root.dataset.mwMotionState!=='running' || !state.observer) { el.textContent=final; return; }
    let start;
    const step=now=> {
      if (start===undefined) start=now;
      const progress=clamp((now-start)/1500,0,1);
      const number=Math.round(value*(1-Math.pow(1-progress,3)));
      el.textContent=el.dataset.mwComma!==undefined ? number.toLocaleString('en-US') : String(number);
      if (progress<1) record.frame=requestAnimationFrame(step);
      else { record.frame=0; el.textContent=final; }
    };
    record.frame=requestAnimationFrame(step);
  }
  function enter(el,state) {
    el.classList.add('mw-seen');
    if (el.hasAttribute('data-mw-count')) countUp(el,state);
  }
  function makeState(root) {
    const state={root,cleanup:[],initialized:new WeakSet(),counters:new Map(),paused:false,pointerFrame:0,tilt:null};
    states.set(root,state);
    if ('IntersectionObserver' in window) {
      state.observer=new IntersectionObserver(entries=> {
        for (const entry of entries) if(entry.isIntersecting) { enter(entry.target,state); state.observer.unobserve(entry.target); }
      },{threshold:.1});
    }
    if(root.hasAttribute('data-mw-background')) {
      const layer=document.createElement('div'); layer.className='mw-atmosphere'; layer.setAttribute('aria-hidden','true');
      const field=document.createElement('div'); field.className='mw-floaters'; layer.append(field);
      const symbols=Array.from(root.dataset.mwSymbols || '漢字勉強読書語験試選働泳覚習学筆順部首単継続力道');
      const requested=Number(root.dataset.mwDensity ?? 22);
      const density=Number.isFinite(requested) ? clamp(Math.round(requested),0,40) : 22;
      for(let i=0;i<density;i++) {
        const glyph=document.createElement('span'); glyph.className='mw-floater';
        glyph.textContent=symbols[Math.floor(Math.random()*symbols.length)];
        glyph.style.left=`${(i*37+Math.random()*10)%100}%`;
        glyph.style.top=`${(i*23+Math.random()*10)%100}%`;
        glyph.style.fontSize=`clamp(2rem,${(3+Math.random()*5).toFixed(2)}vw,7rem)`;
        glyph.style.setProperty('--mw-drift-duration',`${14+Math.random()*18}s`);
        glyph.style.setProperty('--mw-drift-delay',`${-Math.random()*20}s`);
        field.append(glyph);
      }
      root.prepend(layer); state.layer=layer;
    }
    listen(state,root,'pointermove',event=> {
      if(state.root.dataset.mwMotionState!=='running' || finePointer?.matches===false || event.pointerType==='touch' || event.target.closest?.('.mw-theme')!==root) return;
      const x=event.clientX,y=event.clientY;
      const candidate=event.target.closest?.('[data-mw-tilt]');
      const card=candidate?.closest('.mw-theme')===root ? candidate : null;
      cancelAnimationFrame(state.pointerFrame);
      state.pointerFrame=requestAnimationFrame(()=> {
        state.pointerFrame=0;
        const box=root.dataset.mwBackground==='fixed' ? {left:0,top:0,width:innerWidth,height:innerHeight} : root.getBoundingClientRect();
        if(box.width && box.height) {
          root.style.setProperty('--mw-pointer-x',clamp((x-box.left)/box.width*2-1,-1,1).toFixed(3));
          root.style.setProperty('--mw-pointer-y',clamp((y-box.top)/box.height*2-1,-1,1).toFixed(3));
        }
        if(state.tilt && state.tilt!==card) { state.tilt.style.removeProperty('--mw-tilt-x'); state.tilt.style.removeProperty('--mw-tilt-y'); }
        state.tilt=card;
        if(card) {
          const r=card.getBoundingClientRect();
          if(r.width && r.height) {
            card.style.setProperty('--mw-tilt-x',`${clamp((.5-(y-r.top)/r.height)*6,-3,3).toFixed(2)}deg`);
            card.style.setProperty('--mw-tilt-y',`${clamp(((x-r.left)/r.width-.5)*6,-3,3).toFixed(2)}deg`);
          }
        }
      });
    });
    listen(state,root,'pointerleave',()=>resetPointer(state));
    listen(state,reduced,'change',()=>sync(state));
    listen(state,document,'visibilitychange',()=>sync(state));
    resetPointer(state); sync(state); return state;
  }
  function init(scope=document) {
    for(const root of roots(scope)) {
      if(!root.hasAttribute('data-mw-background') && !own(root,'[data-mw-reveal],[data-mw-count],[data-mw-tilt],button[data-mw-flip],button[data-mw-word],button[data-mw-motion-toggle],button[data-mw-replay]').length) continue;
      const state=states.get(root) || makeState(root);
      for(const el of own(root,'[data-mw-reveal],[data-mw-count],button[data-mw-flip],button[data-mw-word],button[data-mw-motion-toggle],button[data-mw-replay]')) {
        if(state.initialized.has(el)) continue;
        state.initialized.add(el);
        if(el.matches('[data-mw-reveal],[data-mw-count]')) {
          if(state.observer) state.observer.observe(el); else enter(el,state);
        }
        if(el.matches('button[data-mw-flip]')) {
          const front=el.querySelector('[data-mw-face="front"]'); const back=el.querySelector('[data-mw-face="back"]');
          if(front && back) {
            const update=flipped=> { el.setAttribute('aria-pressed',String(flipped)); front.setAttribute('aria-hidden',String(flipped)); back.setAttribute('aria-hidden',String(!flipped)); };
            el.type='button'; el.classList.add('mw-flip-ready'); update(false);
            listen(state,el,'click',()=>update(el.getAttribute('aria-pressed')!=='true'));
            state.cleanup.push(()=> { el.classList.remove('mw-flip-ready'); el.removeAttribute('aria-pressed'); front.removeAttribute('aria-hidden'); back.removeAttribute('aria-hidden'); });
          }
        }
        if(el.matches('button[data-mw-word]')) {
          el.type='button'; el.classList.add('mw-word-ready'); el.setAttribute('aria-pressed','false');
          listen(state,el,'click',()=>el.setAttribute('aria-pressed',String(el.getAttribute('aria-pressed')!=='true')));
          state.cleanup.push(()=>{el.classList.remove('mw-word-ready');el.removeAttribute('aria-pressed');});
        }
        if(el.matches('button[data-mw-motion-toggle]')) {
          el.type='button'; listen(state,el,'click',()=>{state.paused=!state.paused;sync(state);});
          state.cleanup.push(()=>{el.hidden=true;el.disabled=false;el.textContent='Pause motion';});
        }
        if(el.matches('button[data-mw-replay]')) {
          el.type='button'; el.hidden=false;
          listen(state,el,'click',()=>replay(el.closest('.mw-scene') || root));
          state.cleanup.push(()=>{el.hidden=true;});
        }
      }
      sync(state);
    }
  }
  function replay(scope=document) {
    for(const el of scope.querySelectorAll('[data-mw-reveal],[data-mw-count]')) {
      const state=states.get(el.closest('.mw-theme')); if(!state || state.root.dataset.mwMotionState!=='running') continue;
      const r=el.getBoundingClientRect(); if(r.bottom<0 || r.top>innerHeight) continue;
      el.classList.remove('mw-seen'); void el.offsetWidth; enter(el,state);
    }
  }
  function destroy(scope=document) {
    const candidates = new Set([
      ...roots(scope),
      scope,
      scope.closest?.('.mw-theme'),
      document.body,
      document.documentElement
    ].filter(Boolean));
    for(const root of candidates) {
      const state=states.get(root); if(!state) continue;
      resetPointer(state); finishCounters(state); state.observer?.disconnect();
      state.cleanup.forEach(fn=>fn()); state.layer?.remove();
      own(root,'.mw-seen').forEach(el=>el.classList.remove('mw-seen'));
      root.style.removeProperty('--mw-pointer-x');root.style.removeProperty('--mw-pointer-y');
      delete root.dataset.mwMotionState; states.delete(root);
    }
    scope.querySelectorAll?.('.mw-atmosphere').forEach(el=>el.remove());
    if (document.querySelectorAll) {
      document.querySelectorAll('.mw-atmosphere').forEach(el=>el.remove());
    }
  }
  window.MidnightWashiMotion=Object.freeze({init,replay,destroy});
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',()=>init(),{once:true});
  else init();
})();
