(function(){
'use strict';
var IMG='assets/img/';
var PROJECTS=[
 {slug:'soft-head-hammer',title:'Soft Head Hammer',course:'Machine Shop',tag:'Featured',tone:'sky',cover:'hammer-2-cut.webp',
  short:'A working soft-faced hammer, turned, drilled and knurled from raw stock in the machine shop.',
  lead:'A working soft-head hammer made from raw stock: a turned steel head, two press-in soft caps and a <em>knurled handle that threads into place.</em>',
  body:['The project took a part from drawing to a usable tool. Each component was planned on paper first, so the order of lathe operations set up the next step cleanly.',
        'It was a first real test of tolerances: small errors on a single part only show when everything is assembled, so measuring at every stage was part of the job.'],
  meta:[['Course','Machine Shop'],['Type','Hands-on build'],['Processes','Turning, knurling'],['Output','Working tool']],
  tags:['Lathe turning','Facing','Drilling','Knurling','Threading','Precision measuring'],
  steps:[['Read the drawing','Started from the part drawings for the head, caps and handle, and planned the order of operations for each part.'],
         ['Turn the head','Faced and turned the steel head to size on the lathe, then drilled the cross hole that takes the handle.'],
         ['Make the handle','Turned the handle, cut the thread that joins it to the head and knurled the grip so it holds well in the hand.'],
         ['Fit and finish','Pressed the soft red caps onto both ends, assembled the parts and checked fit and finish.']],
  gallery:[['hammer-1.webp','Components before assembly: handle, steel head and soft cap'],['hammer-2.webp','The finished hammer, assembled'],['hammer-3.webp','Close-up of the head and threaded handle joint']],
  learned:[['Precision matters','Small errors on one part show up at assembly, so measuring at each step pays off.'],['Plan the sequence','The order of lathe operations decides how easy the next one is.'],['Shop discipline','Working on real machines builds good habits and respect for the tools.']]},
 {slug:'injection-molding-keychain',title:'Injection Molded Keychain Tag',course:'Material Processes',tag:'Polymers',tone:'butter',cover:'keychain-1-cut.webp',
  short:'An oval keychain tag with raised lettering, produced by injection molding.',
  lead:'A small oval tag with raised lettering and a ring hole, made to see how <em>a mold turns molten plastic into a finished part.</em>',
  body:['Injection molding is how most everyday plastic parts are made. This project followed the full cycle: melting the polymer, injecting it into the cavity, cooling and ejecting the part.',
        'The detail in the lettering and the patterned face made it a good test of how well the mold fills, and how process settings change the surface finish.'],
  meta:[['Course','Material Processes'],['Process','Injection molding'],['Material','Thermoplastic'],['Output','Molded tags']],
  tags:['Injection molding','Mold design','Polymers','Process parameters','Quality inspection'],
  steps:[['Design the tag','Defined the oval shape, the raised lettering and the hole for the key ring.'],
         ['Prepare the mold','Set up the mold cavity so the text and edges fill cleanly.'],
         ['Mold the part','Melted the plastic and injected it into the mold, then let it cool and set before ejecting.'],
         ['Inspect','Checked the finished tags for complete fill, sharp lettering and surface finish.']],
  gallery:[['keychain-1.webp','Front face of the molded tag'],['keychain-2.webp','A second molded tag with raised text']],
  learned:[['Design for the process','Wall thickness and text depth affect how well the mold fills.'],['Parameters count','Temperature, pressure and cooling time all change the result.'],['Theory, made visible','Seeing a polymer process in action made the class material concrete.']]},
 {slug:'stainless-steel-sword',title:'Stainless Steel Sword',course:'Mechanics, Statics & Dynamics',tag:'AutoCAD',tone:'navy',cover:'sword-cad.webp',flat:true,
  short:'From a hand sketch to a fully dimensioned AutoCAD drawing, ready to manufacture in stainless steel.',
  lead:'Designing and manufacturing a stainless steel sword: <em>first sketched by hand, then drawn and dimensioned in AutoCAD</em> so it could be made.',
  body:['The design started as a quick proportional sketch on lined paper, working out the blade, guard, grip and pommel.',
        'It was then rebuilt as a clean 2D drawing in AutoCAD with every feature dimensioned, from the overall 65 unit length to the R4 radius and the Ø10 pommel, applying statics and dynamics ideas to the shape along the way.'],
  meta:[['Course','Statics & Dynamics'],['Software','AutoCAD'],['Material','Stainless steel'],['Output','Drawing and part']],
  tags:['AutoCAD','Technical drawing','Dimensioning','Statics','Dynamics','Manufacturing'],
  steps:[['Sketch the idea','Drew the sword by hand to work out proportions for the blade, guard, grip and pommel.'],
         ['Draw in AutoCAD','Rebuilt the sketch as a clean 2D drawing with every feature dimensioned, including radii and the Ø10 pommel.'],
         ['Check the mechanics','Applied statics and dynamics to the shape, thinking about balance and the loads on the blade.'],
         ['Manufacture','Used the drawing as the reference to cut and finish the part in stainless steel.']],
  gallery:[['sword-sketch.webp','First hand sketch with rough dimensions'],['sword-cad.webp','Dimensioned AutoCAD drawing']],contain:true,
  learned:[['Sketch, then refine','A quick sketch makes the CAD work faster and clearer.'],['Dimensions tell the story','A complete drawing is what lets someone else make the part.'],['Theory meets shape','Statics and dynamics explain why a design feels balanced.']]},
 {slug:'blow-molding-bottle',title:'Blow Molded Bottle',course:'Material Processes',tag:'Polymers',tone:'warm',cover:'bottle-line.svg',flat:true,
  short:'A hollow plastic bottle made by inflating a heated preform against a mold.',
  lead:'A plastic bottle made by blow molding: a heated preform is <em>inflated with air until it takes the shape of the mold.</em>',
  body:['Blow molding is the process behind bottles and other hollow parts that injection molding cannot make in one piece.',
        'The project looked at the bottle as three zones, neck, shoulder and body, and at how heat and stretch decide how evenly the wall thins out.'],
  meta:[['Course','Material Processes'],['Process','Blow molding'],['Material','Thermoplastic'],['Output','Hollow bottle']],
  tags:['Blow molding','Polymers','Hollow parts','Mold design'],
  steps:[['Understand the part','Looked at the bottle as neck, shoulder and body, and where wall thickness changes.'],
         ['Prepare the preform','Heated the plastic preform until it was soft enough to stretch.'],
         ['Blow and cool','Closed the mold and blew air into the preform so it pressed against the mold walls, then let it cool.'],
         ['Inspect','Checked the bottle for even walls, a clean parting line and a well-formed neck.']],
  gallery:[['bottle-drawing.svg','Concept sketch of the bottle and mold parting line']],contain:true,
  learned:[['Hollow parts, different rules','Blow molding suits containers that other processes cannot make in one piece.'],['Even walls','Heat and stretch decide how evenly the plastic thins.'],['Comparing processes','Working with both molding processes showed the trade-offs between them.']]}
];

var $=function(s,c){return (c||document).querySelector(s)};
var $$=function(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))};
var root=document.documentElement, body=document.body;
var nav=$('.nav'), lastY=0, prog=$('.prog'), lgt=$('.lgt');
var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
function pad(n){return (n<10?'0':'')+n}

/* ---------- project view ---------- */
function renderProject(i){
  var p=PROJECTS[i], nx=PROJECTS[(i+1)%PROJECTS.length], pv=PROJECTS[(i+PROJECTS.length-1)%PROJECTS.length];
  var g=p.gallery.length;
  $('#proj').innerHTML=
  '<section class="ph veil-d dark"><div class="wrap">'+
    '<a class="crumb" href="#work"><i>←</i> All work</a>'+
    '<span class="lab rv">No. '+pad(i+1)+' · '+p.course+'</span>'+
    '<h1 class="rv" style="--d:.05s">'+p.title.replace(/ (\S+)$/,' <em style="font-style:italic">$1</em>')+'<span class="dot">.</span></h1>'+
    '<dl class="meta rv" style="--d:.15s">'+p.meta.map(function(m){return '<div><dt>'+m[0]+'</dt><dd>'+m[1]+'</dd></div>'}).join('')+'</dl>'+
  '</div></section>'+
  '<div class="pstage"><div class="wrap"><div class="pstage-in t-'+p.tone+' rv-img"><span class="dimv"></span>'+
    '<img src="'+IMG+p.cover+'" alt="'+p.title+'"><span class="cap">Fig. '+pad(i+1)+' · '+p.title+'</span></div></div></div>'+
  '<section class="sec veil-l p-intro" style="padding-top:clamp(40px,6vw,90px)"><div class="wrap">'+
    '<div class="dim rv"><span class="n">A</span><span class="lab">Overview</span></div>'+
    '<div class="split"><div class="aside"><span class="lab rv mut">The brief</span></div><div>'+
      '<p class="big rv">'+p.lead+'</p>'+
      '<div class="cols">'+p.body.map(function(b,k){return '<p class="rv" style="--d:'+k*.1+'s">'+b+'</p>'}).join('')+'</div>'+
      '<div class="tags rv">'+p.tags.map(function(t){return '<span>'+t+'</span>'}).join('')+'</div>'+
      (p.slug==='blow-molding-bottle'?'<p class="note rv">Photos of the finished bottle will be added here.</p>':'')+
    '</div></div>'+
  '</div></section>'+
  '<section class="sec veil-s"><div class="wrap">'+
    '<div class="dim rv"><span class="n">B</span><span class="lab">Process</span></div>'+
    '<div class="split" style="margin-bottom:clamp(30px,4vw,56px)"><div class="aside"><h2 class="h-xl rv">From plan <em>to part</em></h2></div><div></div></div>'+
    '<div class="steps">'+p.steps.map(function(s,k){return '<div class="step rv"><span class="n">'+pad(k+1)+'</span><h3>'+s[0]+'</h3><p>'+s[1]+'</p></div>'}).join('')+'</div>'+
  '</div></section>'+
  '<section class="sec veil-l"><div class="wrap">'+
    '<div class="dim rv"><span class="n">C</span><span class="lab">Gallery</span></div>'+
    '<div class="gal n'+Math.min(g,3)+'">'+p.gallery.map(function(f,k){return '<figure class="rv" style="--d:'+k*.1+'s" data-zoom="'+IMG+f[0]+'" data-cap="'+f[1]+'"><div class="fr"><img class="'+(p.contain?'contain':'')+'" src="'+IMG+f[0]+'" alt="'+f[1]+'" loading="lazy"></div><figcaption><b>'+pad(k+1)+'</b>'+f[1]+'</figcaption></figure>'}).join('')+'</div>'+
  '</div></section>'+
  '<section class="sec veil-s"><div class="wrap">'+
    '<div class="dim rv"><span class="n">D</span><span class="lab">Takeaways</span></div>'+
    '<div class="learn">'+p.learned.map(function(l,k){return '<div class="rv" style="--d:'+k*.1+'s"><h4>'+l[0]+'</h4><p>'+l[1]+'</p></div>'}).join('')+'</div>'+
  '</div></section>'+
  '<nav class="pn veil-c dark" aria-label="More projects"><a class="next" href="#work-'+pv.slug+'"><span class="lab">Previous project · '+pv.course+'</span><h2><i>←</i>'+pv.title+'</h2></a>'+
  '<a class="next" href="#work-'+nx.slug+'"><span class="lab">Next project · '+nx.course+'</span><h2>'+nx.title+'<i>→</i></h2></a></nav>';
  document.title=p.title+' · Salma Wael';
  bindZoom($('#proj')); observe($('#proj'));
}


var hasG=!!(window.gsap&&window.ScrollTrigger)&&!reduce;
if(!hasG)root.classList.add('no-gsap');
var lenis=null;

/* ---------- split text ---------- */
$$('[data-split]').forEach(function(el){var t=el.textContent;el.setAttribute('aria-label',t);el.innerHTML=t.split('').map(function(c,i){return '<span class="ch" aria-hidden="true" style="--i:'+i+'"><i>'+(c===' '?'&nbsp;':c)+'</i></span>'}).join('')});
var nb=$('.st-name.b');if(nb){$$('.ch',nb).forEach(function(c,i){c.style.setProperty('--i',i+5)})}
$$('[data-lines]').forEach(function(el){var out=[],k=0;Array.prototype.slice.call(el.childNodes).forEach(function(n){var it=n.nodeType===1;(n.textContent||'').trim().split(/\s+/).forEach(function(w){if(!w)return;var inner=it?'<em>'+w+'</em>':w;out.push('<span class="l" style="display:inline-block"><span style="--i:'+(k++)+'">'+inner+'</span></span>')})});el.innerHTML=out.join(' ')});

/* ---------- render work carousel ---------- */
$('#works').innerHTML=PROJECTS.map(function(p,i){
  var tt=p.title.replace(/ (\S+)$/,' <em>$1</em>');
  return '<a class="wcc t-'+p.tone+'" data-k="'+i+'" href="#work-'+p.slug+'"><div class="v"><img src="'+IMG+p.cover+'" alt="'+p.title+'" loading="lazy"></div>'+
   '<div class="t"><span class="no">'+pad(i+1)+'</span><span class="lab">'+p.course+'</span><h3>'+tt+'</h3><p>'+p.short+'</p><span class="go"><i>→</i>Open project</span></div></a>';
}).join('');
$('#wcTabs').innerHTML=PROJECTS.map(function(p,i){return '<button class="wc-tab" data-k="'+i+'"><span>'+pad(i+1)+' · '+p.course+'</span><b>'+p.title+'</b></button>'}).join('');
var wcI=0, N=PROJECTS.length;
function setWork(k){wcI=(k+N)%N;
  $$('.wcc').forEach(function(c){var i=+c.dataset.k,d=i-wcI;if(d>N/2)d-=N;if(d<-N/2)d+=N;
    var ad=Math.abs(d);c.classList.toggle('on',d===0);
    c.style.transform='translateX(calc(-50% + '+(d*78)+'%)) scale('+(d===0?1:.82)+')';
    c.style.opacity=ad>1?0:1;c.style.zIndex=10-ad;c.style.filter=d===0?'none':'brightness(.5) saturate(.8)';c.style.pointerEvents=ad>1?'none':'auto'});
  $$('.wc-tab').forEach(function(b){b.classList.toggle('on',+b.dataset.k===wcI)});
  var n=$('#wcNow');if(n)n.textContent=pad(wcI+1)}
setWork(0);
$('#wcPrev').addEventListener('click',function(){setWork(wcI-1)});
$('#wcNext').addEventListener('click',function(){setWork(wcI+1)});
$$('.wc-tab').forEach(function(b){b.addEventListener('click',function(){setWork(+b.dataset.k)})});
$$('.wcc').forEach(function(c){c.addEventListener('click',function(e){if(window.innerWidth>900&&!c.classList.contains('on')){e.preventDefault();setWork(+c.dataset.k)}})});
(function(){var st=$('#wcStage'),x0=null,moved=false;
  st.addEventListener('pointerdown',function(e){if(window.innerWidth<=900)return;x0=e.clientX;moved=false});
  st.addEventListener('pointermove',function(e){if(x0!==null&&Math.abs(e.clientX-x0)>8)moved=true});
  st.addEventListener('pointerup',function(e){if(x0===null)return;var dx=e.clientX-x0;x0=null;if(Math.abs(dx)>60)setWork(wcI+(dx<0?1:-1))});
  st.addEventListener('click',function(e){if(moved){e.preventDefault();e.stopPropagation();moved=false}},true);
  document.addEventListener('keydown',function(e){if(body.classList.contains('is-proj'))return;var r=st.getBoundingClientRect();if(r.top>innerHeight||r.bottom<0)return;if(e.key==='ArrowRight')setWork(wcI+1);if(e.key==='ArrowLeft')setWork(wcI-1)});
})();


/* ---------- CV availability ---------- */
(function(){var btn=$('#cvBtn');if(!btn)return;function off(){btn.classList.add('off');btn.innerHTML='Coming soon';btn.removeAttribute('href');$('#cvNote').textContent='My CV will be available to view here soon.'}
  try{fetch(btn.getAttribute('href'),{method:'HEAD'}).then(function(r){if(!r.ok)off()}).catch(off)}catch(e){off()}})();

/* ---------- reveal ---------- */
var io='IntersectionObserver' in window? new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15,rootMargin:'0px 0px -6% 0px'}):null;
function observe(scope){$$('.rv,.rv-img,.reveal-h,.foot-name,[data-lines],.ab4-collage',scope).forEach(function(el){if(!io||reduce){el.classList.add('in')}else io.observe(el)})}
observe(document);

/* ---------- smooth scroll ---------- */
if(window.Lenis&&!reduce){
  lenis=new Lenis({duration:1.25,easing:function(t){return Math.min(1,1.001-Math.pow(2,-10*t))},smoothWheel:true});
  root.classList.add('has-lenis');
  if(hasG){lenis.on('scroll',ScrollTrigger.update);gsap.ticker.add(function(t){lenis.raf(t*1000)});gsap.ticker.lagSmoothing(0)}
  else{(function raf(t){lenis.raf(t);requestAnimationFrame(raf)})(0)}
  lenis.on('scroll',function(){navState()});
}
function scrollToY(y,imm){if(imm)window.scrollTo(0,y);if(lenis)lenis.scrollTo(y,{immediate:!!imm,force:true});else window.scrollTo({top:y,behavior:imm||reduce?'auto':'smooth'})}
function scrollToEl(el,imm){if(!el)return;if(lenis)lenis.scrollTo(el,{immediate:!!imm,force:true,duration:1.6});else el.scrollIntoView({behavior:imm||reduce?'auto':'smooth'})}

/* ---------- scroll choreography (home) ---------- */
function buildHome(){
  if(!hasG)return;
  gsap.registerPlugin(ScrollTrigger);
  // 1. hero pinned; the About sheet slides up over it
  ScrollTrigger.create({trigger:'.stage',start:'top top',end:'bottom top',pin:true,pinSpacing:false});
  var tl=gsap.timeline({scrollTrigger:{trigger:'#sheet',start:'top bottom',end:'top top',scrub:true}});
  tl.to('.st-name.a',{xPercent:-35,yPercent:-40,opacity:0,ease:'none'},0)
    .to('.st-name.b',{xPercent:35,yPercent:40,opacity:0,ease:'none'},0)
    .to('.st-port',{scale:.86,yPercent:6,ease:'none'},0)
    .to('.st-ring',{scale:1.35,rotate:40,opacity:0,ease:'none'},0)
    .to('.st-sunw',{yPercent:-160,xPercent:80,ease:'none'},0)
    .to('.st-foot',{opacity:0,y:-40,ease:'none'},0)
    .to('.st-dim',{opacity:.42,ease:'none'},0);
  gsap.fromTo('#sheet',{borderTopLeftRadius:'56px',borderTopRightRadius:'56px'},{borderTopLeftRadius:'0px',borderTopRightRadius:'0px',ease:'none',scrollTrigger:{trigger:'#sheet',start:'top 35%',end:'top top',scrub:true}});
  // 2. campus photo parallax; the arched portrait rises a little faster
  gsap.fromTo('.ab4-campus img',{yPercent:-6},{yPercent:6,ease:'none',scrollTrigger:{trigger:'.ab4-collage',start:'top bottom',end:'bottom top',scrub:true}});
  gsap.matchMedia().add('(min-width:901px)',function(){
    gsap.fromTo('.ab4-arch',{y:80},{y:-30,ease:'none',scrollTrigger:{trigger:'.ab4-collage',start:'top bottom',end:'bottom top',scrub:true}});
  });
  // 6. certificate straightens as it arrives
  gsap.fromTo('.cr-cert img',{rotateX:22,rotateZ:-8,scale:.82,y:60},{rotateX:0,rotateZ:-1.5,scale:1,y:0,ease:'none',scrollTrigger:{trigger:'.cr',start:'top 85%',end:'center 55%',scrub:true}});
  // 7. contact parallax
  gsap.fromTo('.ct h2',{y:80},{y:0,ease:'none',scrollTrigger:{trigger:'.ct',start:'top bottom',end:'top 30%',scrub:true}});
}

/* ---------- routing ---------- */
var curtain=$('.cur'), first=true, curView=null;
function parse(){var h=(location.hash||'').slice(1);var m=/^work-(.+)$/.exec(h);if(m){for(var i=0;i<PROJECTS.length;i++)if(PROJECTS[i].slug===m[1])return {proj:i};}return {sec:h||'home'}}
function refresh(){if(lenis&&lenis.resize)lenis.resize();if(hasG)ScrollTrigger.refresh();if(lenis&&lenis.resize)lenis.resize()}
function show(r){
  if(r.proj!=null){body.classList.add('is-proj');renderProject(r.proj);refresh();scrollToY(0,true);curView='p'+r.proj}
  else{body.classList.remove('is-proj');document.title='Salma Wael · E-Portfolio';curView='home';refresh();
    var el=document.getElementById(r.sec);
    if(el&&r.sec!=='home')scrollToEl(el,true);else scrollToY(0,true)}
  navState();
}
function route(){
  var r=parse(); var target=r.proj!=null?'p'+r.proj:'home';
  if(first){first=false;show(r);return}
  if(target===curView){if(r.sec)scrollToEl(r.sec==='home'?document.body:document.getElementById(r.sec));return}
  if(reduce){show(r);return}
  if(lenis)lenis.stop();
  curtain.classList.remove('out');curtain.classList.add('in');
  setTimeout(function(){if(lenis)lenis.start();show(r);curtain.classList.remove('in');curtain.classList.add('out');
    setTimeout(function(){curtain.classList.remove('out')},950)},1000);
}
window.addEventListener('hashchange',route);

/* ---------- preloader ---------- */
var pl=$('.pl');
function ready(){root.classList.add('ready')}
buildHome();
if(reduce){pl.classList.add('gone');ready();route()}
else{
  route(); if(lenis)lenis.stop();
  var cnt=$('.pl-n'), t0=performance.now(), D=2200;
  (function step(now){var p=Math.min(1,(now-t0)/D);p=1-Math.pow(1-p,3);cnt.textContent=Math.round(p*100);pl.style.setProperty('--p',(p*100).toFixed(1));if(p<1)requestAnimationFrame(step)})(t0);
  var imgs=$$('.st-port img,.ab4-campus img,.ab4-arch img').map(function(im){return im.decode?im.decode().catch(function(){}):0});
  setTimeout(function(){refresh()},1800);
  var minT=new Promise(function(res){setTimeout(res,2600)});
  Promise.all([minT,Promise.race([Promise.all(imgs),new Promise(function(r){setTimeout(r,4500)})])]).then(function(){
    pl.classList.add('out');setTimeout(ready,350);setTimeout(function(){pl.classList.add('gone');if(lenis)lenis.start()},1150)});
}

/* ---------- nav ---------- */
function navState(){
  var y=window.scrollY, h=window.innerHeight;
  nav.classList.toggle('solid',y>40);
  nav.classList.toggle('hide',y>lastY+2&&y>h*.6&&!body.classList.contains('menu-open'));
  if(y<lastY-2)nav.classList.remove('hide');
  var onDark=false;
  $$('.dark').forEach(function(d){if(d.offsetParent===null&&!d.closest('.pin-spacer'))return;var b=d.getBoundingClientRect();if(b.top<=42&&b.bottom>=42)onDark=true});
  nav.classList.toggle('ondark',onDark);
  var max=document.documentElement.scrollHeight-h; prog.style.transform='scaleX('+(max>0?y/max:0)+')';
  lastY=y;
  if(!body.classList.contains('is-proj')){var cur='';['about','capabilities','work','credentials','contact'].forEach(function(id){var s=document.getElementById(id);if(s&&s.getBoundingClientRect().top<h*.45)cur=id});
    $$('.nav ul a').forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+cur)})}
  else $$('.nav ul a').forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#work')});
}
if(!lenis){var tick=false;window.addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(function(){navState();tick=false})}},{passive:true})}
window.addEventListener('resize',navState);

var burger=$('.burger');
burger.addEventListener('click',function(){var o=body.classList.toggle('menu-open');burger.setAttribute('aria-expanded',o);if(lenis){o?lenis.stop():lenis.start()}});
$$('.mmenu a').forEach(function(a){a.addEventListener('click',function(){body.classList.remove('menu-open');burger.setAttribute('aria-expanded','false');if(lenis)lenis.start()})});
$('.totop').addEventListener('click',function(){scrollToY(0)});
// same-hash clicks: hashchange will not fire, so scroll anyway
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href^="#"]');if(!a)return;var h=a.getAttribute('href');if(h==='#'){e.preventDefault();return}
  if(h===location.hash||(h==='#home'&&!location.hash)){e.preventDefault();var r=parse();if(r.proj!=null){scrollToY(0);return}scrollToEl(h==='#home'?document.body:document.getElementById(h.slice(1)))}});

/* ---------- cursor light ---------- */


/* ---------- lightbox ---------- */
var lb=$('.lb'), lbi=$('.lb img'), lbp=$('.lb p');
function bindZoom(scope){$$('[data-zoom]',scope).forEach(function(el){el.addEventListener('click',function(){lbi.src=el.getAttribute('data-zoom');lbi.alt=el.getAttribute('data-cap')||'';lbp.textContent=el.getAttribute('data-cap')||'';lb.classList.add('open');if(lenis)lenis.stop()})})}
bindZoom(document);
function closeLb(){lb.classList.remove('open');if(lenis&&!body.classList.contains('menu-open'))lenis.start()}
lb.addEventListener('click',closeLb);
document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeLb();body.classList.remove('menu-open')}});
window.addEventListener('load',refresh);
})();
