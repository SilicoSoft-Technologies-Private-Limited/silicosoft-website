const header=document.querySelector('.site-header');const menuBtn=document.querySelector('.menu-button');const mobileMenu=document.querySelector('.mobile-menu');window.addEventListener('scroll',()=>header?.classList.toggle('scrolled',scrollY>25));menuBtn?.addEventListener('click',()=>{const open=mobileMenu.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open);mobileMenu.setAttribute('aria-hidden',!open)});mobileMenu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mobileMenu.classList.remove('open')));const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));const data={healthcare:{num:'01 / Healthcare',title:'Connected care, from registration to decision-making.',text:'Digitize clinical, diagnostic, administrative and financial workflows while protecting continuity of care and operational control.',chips:['Hospitals','Diagnostic centres','Nursing homes','Medical colleges'],nodes:['EMR','LAB','ERP'],core:'+'},education:{num:'02 / Education',title:'One campus platform for every learner journey.',text:'Connect admissions, academics, fees, examinations, attendance, hostels and student communication in one controlled environment.',chips:['Colleges','Nursing institutes','Universities','Training centres'],nodes:['LMS','FEE','EXAM'],core:'E'},enterprise:{num:'03 / Enterprise',title:'Accurate workforce operations at every scale.',text:'Unify employee data, shifts, attendance, leave, payroll, compliance and performance with employee self-service.',chips:['Manufacturing','Services','Healthcare groups','Multi-site teams'],nodes:['HR','PAY','BIO'],core:'◎'},government:{num:'04 / Government & Projects',title:'Transparent systems for complex public programs.',text:'Build auditable platforms for citizen services, project tracking, field operations, reporting and institutional collaboration.',chips:['PPP projects','Public health','E-governance','Program monitoring'],nodes:['MIS','GIS','API'],core:'G'}};document.querySelectorAll('.industry-tabs button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.industry-tabs button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const d=data[btn.dataset.tab],p=document.getElementById('industryPanel');p.style.opacity='.25';setTimeout(()=>{p.querySelector('.industry-copy>span').textContent=d.num;p.querySelector('.industry-copy h3').textContent=d.title;p.querySelector('.industry-copy p').textContent=d.text;p.querySelector('.chip-row').innerHTML=d.chips.map(x=>`<i>${x}</i>`).join('');p.querySelector('.core').textContent=d.core;['n1','n2','n3'].forEach((c,i)=>p.querySelector('.'+c).textContent=d.nodes[i]);p.style.opacity='1'},180)}));

(()=>{
  const style=document.createElement('style');
  style.textContent=`
    .brand-icon{background:transparent url('assets/silicosoft-logo.png') center/contain no-repeat!important;color:transparent!important;border-radius:0!important;box-shadow:none!important;width:44px!important;height:44px!important}
    .tm-mark{font:700 .38em/1 var(--font);vertical-align:super;margin-left:2px;letter-spacing:0;color:inherit;opacity:.82}
    .site-copyright-watermark{position:fixed;right:14px;bottom:10px;z-index:90;pointer-events:none;user-select:none;font:700 9px/1.2 var(--font);letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.34);background:rgba(7,17,31,.58);border:1px solid rgba(255,255,255,.10);border-radius:999px;padding:7px 10px;backdrop-filter:blur(8px)}
    .site-legal-strip{background:#06101d;color:#8fa5ae;padding:18px clamp(24px,6vw,92px);font-size:11px;line-height:1.6;border-top:1px solid rgba(255,255,255,.08);text-align:center}
    .site-legal-strip a{color:#c7d4da;text-decoration:none;margin-left:10px}.site-legal-strip a:hover{text-decoration:underline}
    .product-card h3 .tm-mark,.product-hero h1 .tm-mark{font-size:.34em}
    @media(max-width:640px){.site-copyright-watermark{font-size:8px;right:8px;bottom:7px;padding:6px 8px}.brand-icon{width:40px!important;height:40px!important}}
  `;
  document.head.appendChild(style);

  document.querySelectorAll('.brand-icon').forEach(el=>{el.textContent='';el.setAttribute('aria-label','SilicoSoft logo')});

  document.querySelectorAll('.brand').forEach(brand=>{
    const name=[...brand.children].find(el=>el.tagName==='SPAN'&&!el.classList.contains('brand-icon'));
    if(name&&!name.querySelector('.tm-mark')){
      const mark=document.createElement('sup');mark.className='tm-mark';mark.textContent='™';
      const small=name.querySelector('small');small?name.insertBefore(mark,small):name.appendChild(mark);
    }
  });

  document.querySelectorAll('.back').forEach(el=>{if(!el.textContent.includes('™'))el.append('™')});
  document.querySelectorAll('.product-card h3,.product-hero h1').forEach(el=>{
    if(!el.querySelector('.tm-mark')){const mark=document.createElement('sup');mark.className='tm-mark';mark.textContent='™';el.appendChild(mark)}
  });

  const existingFooter=document.querySelector('.footer-bottom');
  if(existingFooter){
    const spans=existingFooter.querySelectorAll('span');
    if(spans[0])spans[0].textContent='© 2026 SilicoSoft Technologies Private Limited. All rights reserved.';
    if(spans[1])spans[1].innerHTML='<a href="legal.html" style="color:inherit;text-decoration:none">Trademark & Copyright</a> · <a href="privacy.html" style="color:inherit;text-decoration:none">Privacy</a> · <a href="data-deletion.html" style="color:inherit;text-decoration:none">Data Deletion</a>';
  }

  if(!document.querySelector('.site-legal-strip')){
    const strip=document.createElement('div');strip.className='site-legal-strip';
    strip.innerHTML='SilicoSoft Technologies™ and product names displayed with ™ are marks claimed by SilicoSoft Technologies Private Limited. Website content, artwork and original materials are protected by applicable copyright law. The ™ symbol does not imply government registration. <a href="legal.html">Legal notice</a>';
    document.body.appendChild(strip);
  }

  if(!document.querySelector('.site-copyright-watermark')){
    const watermark=document.createElement('div');watermark.className='site-copyright-watermark';watermark.textContent='© SilicoSoft Technologies';document.body.appendChild(watermark);
  }
})();
