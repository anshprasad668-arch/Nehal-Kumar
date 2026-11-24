/* Nehal Kumar website interactions */
(() => {
  const $ = (s, r=document) => r.querySelector(s);
  const menu = $('#nav-menu'), toggle = $('#mobile-toggle');
  if (toggle && menu) { toggle.addEventListener('click', () => { const open=menu.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); }); menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');toggle.setAttribute('aria-expanded','false')})); }
  const setLanguage = lang => { document.documentElement.lang=lang==='hi'?'hi':'en'; document.querySelectorAll('[data-en][data-hi]').forEach(el=>{const value=el.dataset[lang];if(value!==undefined)el.textContent=value}); const code=$('#active-lang-code'), label=$('#active-lang-label'); if(code)code.textContent=lang==='hi'?'HI':'EN';if(label)label.textContent=lang==='hi'?'English':'हिन्दी'; try{localStorage.setItem('nehal-site-language',lang)}catch(e){} };
  let lang='en';try{lang=localStorage.getItem('nehal-site-language')||'en'}catch(e){} setLanguage(lang);
  $('#btn-choose-en')?.addEventListener('click',()=>{setLanguage('en');$('#language-modal')?.classList.add('hidden')});
  $('#btn-choose-hi')?.addEventListener('click',()=>{setLanguage('hi');$('#language-modal')?.classList.add('hidden')});
  $('#lang-toggle-btn')?.addEventListener('click',()=>setLanguage((document.documentElement.lang||'en')==='hi'?'en':'hi'));
  const year=$('#year');if(year)year.textContent=new Date().getFullYear();
  // Smoothly reveal cards while respecting reduced-motion preferences.
  if('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.card,.section-header').forEach(el=>io.observe(el));}
  // Give images a useful fallback if a user later mistypes a filename.
  document.querySelectorAll('img').forEach(img=>img.addEventListener('error',()=>{img.alt=img.alt||'Image unavailable — check the image filename in this HTML file';img.classList.add('image-missing')},{once:true}));
})();
