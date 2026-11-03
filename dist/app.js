/* Climate City: a conceptual, interactive 3D masterplan and image-journey preview.
   Coordinates are illustrative, not surveyed. The camera moves through a genuine
   three-dimensional scene; destination journeys animate architectural stills. */
(() => {
'use strict';
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const base=[
 ['museum','Museum & Cultural Centre','African stories. A shared future.','A cultural heart for Nigerian and wider African heritage, with galleries, learning spaces and places to gather.',52,47,'Culture'],
 ['hospital','Hospital & Wellbeing','Care within reach.','A calm, connected setting for healthcare, recovery and everyday wellbeing.',32,30,'Wellbeing'],
 ['schools','Schools & Learning','A world of discovery.','Learning environments that connect education, practical skills and the natural world.',24,18,'Education'],
 ['sports','Sports Centre','Room to move.','Places for sport, recreation and community, bringing active living into the everyday.',13,35,'Active living'],
 ['market','Market & Enterprise','The rhythm of local life.','A vibrant meeting place for fresh food, makers, neighbourhood trade and local enterprise.',30,61,'Enterprise'],
 ['diplomatic','Diplomatic Park','Connected to the world.','A proposed setting for cultural exchange, international dialogue and collaboration.',48,20,'Exchange'],
 ['wildlife','Wildlife & Conservation','Let nature lead.','A landscape-led destination for conservation learning, observation and connection with nature.',75,20,'Nature'],
 ['hotel','Hotel & Hospitality','Stay a little longer.','Warm Nigerian hospitality expressed through considered spaces, generous landscapes and a sense of place.',80,43,'Hospitality'],
 ['landscape','Landscape & Gardens','A living landscape.','Connected gardens, shaded walking routes and restorative green spaces weave through the city.',65,32,'Landscape'],
 ['waterfront','Hotel Waterfront','Where the city unwinds.','A conceptual waterfront landscape for gathering, walking and enjoying the outdoors.',80,67,'Leisure'],
 ['station','Rail Station','An arrival to remember.','A proposed transport experience exploring a welcoming gateway and connections to the wider community. Rail integration is conceptual.',49,73,'Mobility'],
 ['homes','Homes & Neighbourhoods','Life, close to what matters.','Homes, shaded streets and local services form welcoming neighbourhoods for everyday living.',10,62,'Living'],
 ['energy','Clean Energy','Power for everyday life.','Solar generation, storage and managed services support the vision for a climate-responsive community.',13,10,'Infrastructure'],
 ['food','Food & Agriculture','Closer to the source.','Growing spaces, practical learning and local farmer connections bring food into community life.',55,91,'Livelihoods']
].map((d,i)=>({id:d[0],title:d[1],eyebrow:d[2],description:d[3],u:d[4],v:d[5],category:d[6],x:(d[4]-50)*1.1,z:(d[5]-50)*1.0,index:i,images:[]}));
let panorama=null, panoramaReady=false;
let destinations=base, dataReady=false, masterplan='assets/masterplan.jpg', aerialReady=false, mode='aerial';
const canvas=$('#map'),ctx=canvas.getContext('2d',{alpha:true});let W=innerWidth,H=innerHeight,DPR=Math.min(devicePixelRatio,2),mobile=W<=700;
const camera={angle:-.18,pitch:.72,distance:148,tx:0,tz:0};let auto=false, dragging=false,lastX=0,lastY=0,lastTouch=0,selected=null,entering=false,lastTime=0,dirty=true;
const homeCamera=()=>({angle:-.18,pitch:mobile?.83:.72,distance:mobile?170:148,tx:0,tz:0});Object.assign(camera,homeCamera());
const markerEls=new Map();let aerialZoom=1,aerialOffset={x:0,y:0};const imageSize={w:1672,h:940};
let rngState=92341;const rand=()=>{rngState=(rngState*1664525+1013904223)>>>0;return rngState/4294967296};
const objects=[];const mat={sand:'#c1ab80',cream:'#e0d5b8',earth:'#ad7855',roof:'#c3aa78',dark:'#61745c',glass:'#718b82'};
function poly(points,fill){objects.push({points,fill})}
function box(x,z,w,d,h,fill=mat.sand,y=0){
 const a=[x-w/2,y,z-d/2],b=[x+w/2,y,z-d/2],c=[x+w/2,y,z+d/2],d1=[x-w/2,y,z+d/2];
 const A=[a[0],y+h,a[2]],B=[b[0],y+h,b[2]],C=[c[0],y+h,c[2]],D=[d1[0],y+h,d1[2]];
 poly([a,b,B,A],shade(fill,.72));poly([b,c,C,B],shade(fill,.82));poly([c,d1,D,C],shade(fill,.90));poly([d1,a,A,D],shade(fill,.78));poly([A,B,C,D],fill);
}
function shade(hex,n){const a=hex.match(/[0-9a-f]{2}/gi).map(s=>Math.min(255,Math.round(parseInt(s,16)*n)));return `rgb(${a.join(',')})`}
function flat(x,z,w,d,color,y=.1){poly([[x-w/2,y,z-d/2],[x+w/2,y,z-d/2],[x+w/2,y,z+d/2],[x-w/2,y,z+d/2]],color)}
function tree(x,z,s=1){box(x,z,.23,.23,1.3,'#806c48');const top=[x,3.5*s,z];const ring=[[x-s,1.2,z-s*.65],[x+s,1.2,z-s*.65],[x+s*.8,1.2,z+s],[x-s*.8,1.2,z+s]];for(let i=0;i<4;i++)poly([ring[i],ring[(i+1)%4],top],['#668458','#55734a','#729061','#496d4a'][i]);}
function buildWorld(){
 // Raised terrain, a network of planted boulevards and a proposed waterfront.
 box(0,0,116,108,2.5,'#6d8058',-2.6);flat(0,0,113,105,'#7e8d61',0);
 flat(43,17,27,70,'#4e7d7a',.12);poly([[28,.15,-18],[56,.15,-30],[56,.15,53],[26,.15,53],[34,.15,32],[25,.15,13]],'#628f8a');
 for(let j=-44;j<48;j+=22){flat(j,0,2.4,102,'#a6a187',.17);flat(0,j,110,2.4,'#a6a187',.17)}
 for(let j=-44;j<48;j+=22){flat(j+.08,0,.12,102,'#d3c8a5',.18);flat(0,j+.08,110,.12,'#d3c8a5',.18)}
 // Museum: a courtyard composition with a ceremonial entrance and water garden.
 const m=base[0];flat(m.x,m.z,23,20,'#c1b18c',.21);box(m.x-8,m.z,4,14,5.5,mat.earth);box(m.x+8,m.z,4,14,5.5,mat.earth);box(m.x,m.z-5.5,13,3,6,mat.sand);box(m.x,m.z+6,15,3,7,mat.earth);flat(m.x,m.z,9,7,'#6a8652',.24);flat(m.x,m.z+13,9,5,'#6e9990',.24);for(let k=-5;k<=5;k+=2.5)box(m.x+k,m.z+7.6,.45,1,5.7,mat.cream);
 // Hospital, school and diplomatic quadrangles.
 for(const id of ['hospital','schools','diplomatic']){const q=base.find(x=>x.id===id);flat(q.x,q.z,19,15,'#c2b18c',.2);for(let k=-1;k<=1;k++){box(q.x+k*6,q.z-3,4.4,7,id==='hospital'?5:3.4,id==='diplomatic'?mat.earth:mat.cream);box(q.x+k*6,q.z+5,4.4,3,3,mat.sand)}for(let k=-6;k<=6;k+=3)tree(q.x+k,q.z+1.8,.7)}
 // Stadium rings, field and indoor arena.
 const s=base[3];flat(s.x,s.z,18,13,'#b3aa8b',.22);flat(s.x,s.z,11,7,'#577944',.24);for(let k=0;k<16;k++){const a=k/16*Math.PI*2;box(s.x+8*Math.cos(a),s.z+5.2*Math.sin(a),2.3,2.3,2.5,mat.cream)}box(s.x+4,s.z+10,9,5,4,mat.sand);
 // Market pavilions.
 const mk=base[4];flat(mk.x,mk.z,19,16,'#b4a581',.2);for(let a=-1;a<=1;a++)for(let b=-1;b<=1;b++){box(mk.x+a*6,mk.z+b*5,4.5,3,2,mat.earth);box(mk.x+a*6,mk.z+b*5,5,3.6,.35,mat.roof,2)}
 // Waterside hospitality.
 const ht=base[7];box(ht.x-4,ht.z,4,14,8,mat.cream);box(ht.x+3,ht.z-5,10,4,6,mat.sand);flat(ht.x+3,ht.z+3,8,6,'#8eb7a6',.2);for(let k=-6;k<=6;k+=3)tree(ht.x+8,ht.z+k,.85);
 const wt=base[9];for(let k=-1;k<=1;k++){flat(wt.x+k*5,wt.z+2,3.5,10,'#b5a17c',.3);box(wt.x+k*5,wt.z-3,3.2,3.2,2,mat.sand)}
 // Station with platform and railway lines.
 const st=base[10];flat(st.x,st.z,25,8,'#b5ad95',.2);box(st.x,st.z-1,23,4,3.3,mat.roof);flat(0,st.z+5,110,.4,'#586154',.25);flat(0,st.z+6,110,.4,'#586154',.25);box(st.x+2,st.z+5.5,16,1,1.2,'#e1ddc4');
 // Residential clusters to the west.
 for(let i=0;i<80;i++){let x=-52+rand()*23,z=-10+rand()*54;if(Math.abs(z-st.z)<6)continue;box(x,z,2+rand()*1.5,2+rand()*1.5,1.7+rand()*2.3,i%3?mat.sand:mat.earth)}
 // Clean-energy arrays and productive gardens.
 const en=base[12];for(let a=-3;a<=3;a++)for(let b=-2;b<=2;b++)box(en.x+a*2.9,en.z+b*2.8,2.3,2,.35,'#537477',.3);
 const fd=base[13];for(let a=-3;a<=3;a++)for(let b=-2;b<=2;b++)flat(fd.x+a*3.6,fd.z+b*2.2,2.8,1.7,(a+b)%2?'#718947':'#8c9a52',.2);
 // Landscape, conservation and the connected canopy.
 for(let i=0;i<360;i++){let x=-54+rand()*108,z=-49+rand()*98;if(x>27&&z>-18)continue;const near=base.some(q=>Math.abs(q.x-x)<10&&Math.abs(q.z-z)<9);if(near&&rand()>.12)continue;tree(x,z,.5+rand()*.65)}
 for(const id of ['wildlife','landscape']){const q=base.find(x=>x.id===id);box(q.x,q.z,5,4,2,mat.sand);for(let k=0;k<22;k++)tree(q.x+(rand()-.5)*17,q.z+(rand()-.5)*15,.7+rand()*.65)}
}
buildWorld();
let camPos, camRight,camUp,camForward;
const dot=(a,b)=>a[0]*b[0]+a[1]*b[1]+a[2]*b[2],cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]],norm=a=>{const l=Math.hypot(...a);return a.map(v=>v/l)};
function updateCamera(){camPos=[camera.tx+Math.sin(camera.angle)*Math.cos(camera.pitch)*camera.distance,Math.sin(camera.pitch)*camera.distance,camera.tz+Math.cos(camera.angle)*Math.cos(camera.pitch)*camera.distance];camForward=norm([camera.tx-camPos[0],-camPos[1],camera.tz-camPos[2]]);camRight=norm(cross(camForward,[0,1,0]));camUp=cross(camRight,camForward)}
function project(p){const r=[p[0]-camPos[0],p[1]-camPos[1],p[2]-camPos[2]],d=dot(r,camForward),f=Math.min(W,H)*1.23;return{x:W*.5+dot(r,camRight)*f/d,y:H*(mobile?.38:.51)-dot(r,camUp)*f/d,d}}
function resize(){dirty=true;W=innerWidth;H=innerHeight;mobile=W<=700;DPR=Math.min(devicePixelRatio,2);canvas.width=W*DPR;canvas.height=H*DPR;ctx.setTransform(DPR,0,0,DPR,0,0);if(!selected&&lastTouch===0)Object.assign(camera,homeCamera());updateMarkers()}
window.addEventListener('resize',resize);resize();
function render(t){requestAnimationFrame(render);if(document.hidden||selected||mode!=='3d'||(!auto&&!dragging&&!entering&&!dirty))return;if(t-lastTime<31)return;dirty=false;const dt=Math.min((t-lastTime)/1000,.06);lastTime=t;if(auto&&!dragging&&!entering)camera.angle=(camera.angle+dt*.075)%(Math.PI*2);updateCamera();ctx.clearRect(0,0,W,H);const faces=objects.map(o=>{const p=o.points.map(project);return{p,fill:o.fill,d:p.reduce((a,x)=>a+x.d,0)/p.length}}).filter(o=>o.d>3).sort((a,b)=>b.d-a.d);for(const o of faces){ctx.beginPath();o.p.forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y));ctx.closePath();ctx.fillStyle=o.fill;ctx.fill()}updateMarkers()}
requestAnimationFrame(render);
function makeMarkers(){for(const d of destinations){const b=document.createElement('button');b.className='marker'+(d.id==='museum'?' featured':'')+(['landscape','energy','food','homes'].includes(d.id)?' minor':'');b.setAttribute('aria-label','Explore '+d.title);b.innerHTML=`<span class="pin">${String(d.index+1).padStart(2,'0')}</span><span class="pin-name"></span>`;b.querySelector('.pin-name').textContent=shortName(d.id);b.onclick=()=>enter(d.id);$('#markers').append(b);markerEls.set(d.id,b)}updateMarkers()}
function shortName(id){return{museum:'Museum',hospital:'Hospital',schools:'Schools',sports:'Sports Centre',market:'Market',diplomatic:'Diplomatic Park',wildlife:'Wildlife',hotel:'Hotel',landscape:'Gardens',waterfront:'Waterfront',station:'Rail Station',homes:'Homes',energy:'Clean Energy',food:'Agriculture'}[id]}
function aerialPoint(d){const sc=Math.max(W/imageSize.w,H/imageSize.h)*aerialZoom;return{x:(W-imageSize.w*sc)/2+d.u/100*imageSize.w*sc+aerialOffset.x,y:(H-imageSize.h*sc)/2+d.v/100*imageSize.h*sc+aerialOffset.y,d:1}}
function updateMarkers(){if(mode==='aerial'&&panoramaReady){$('#markers').hidden=true;return}$('#markers').hidden=false;if(!camPos)updateCamera();for(const d of destinations){const b=markerEls.get(d.id);if(!b)continue;const p=mode==='aerial'?aerialPoint(d):project([d.x,7,d.z]);b.style.left=p.x+'px';b.style.top=p.y+'px';b.style.opacity=(p.x<12||p.x>W-12||p.y<100||p.y>H-110||entering)?0:1;b.style.pointerEvents=b.style.opacity==='0'?'none':'auto';b.style.zIndex=Math.round(1000-p.d)}}
function setMode(value){dirty=true;mode=value;$('#aerial').hidden=value!=='aerial';canvas.style.visibility=value==='3d'?'visible':'hidden';$('#view3d').classList.toggle('active',value==='3d');$('#viewAerial').classList.toggle('active',value==='aerial');$('#view3d').setAttribute('aria-pressed',value==='3d');$('#viewAerial').setAttribute('aria-pressed',value==='aerial');$('#rotate').disabled=value!=='3d'&&!panoramaReady;if(panoramaReady){if(value==='aerial'){panorama.resize();if(auto)panorama.startAutoRotate(-2)}else panorama.stopAutoRotate();}$('#rotate').title=value==='aerial'?'Orbit is available in 3D world':'Toggle orbit';updateMarkers()}
function updateAerial(){if(panoramaReady){panorama.resize();updateMarkers();return}const sc=Math.max(W/imageSize.w,H/imageSize.h)*aerialZoom;$('#aerial').style.backgroundSize=`${imageSize.w*sc}px ${imageSize.h*sc}px`;$('#aerial').style.backgroundPosition=`calc(50% + ${aerialOffset.x}px) calc(50% + ${aerialOffset.y}px)`;updateMarkers()}
$('#view3d').onclick=()=>setMode('3d');$('#viewAerial').onclick=()=>setMode('aerial');$('#rotate').onclick=()=>{auto=!auto;if(panoramaReady&&mode==='aerial'){if(auto)panorama.startAutoRotate(-2);else panorama.stopAutoRotate();}$('#rotate').textContent=auto?'Pause':'Rotate';$('#rotate').setAttribute('aria-label',auto?'Pause orbit':'Start orbit')};
function zoom(f){if(panoramaReady&&mode==='aerial'){panorama.setHfov(Math.max(70,Math.min(115,panorama.getHfov()*f)),250);return}dirty=true;lastTouch=1;if(mode==='3d')camera.distance=Math.max(80,Math.min(240,camera.distance*f));else{aerialZoom=Math.max(1,Math.min(1.3,aerialZoom/f));updateAerial()}}
$('#zoomIn').onclick=()=>zoom(.87);$('#zoomOut').onclick=()=>zoom(1.15);$('#resetView').onclick=()=>{if(panoramaReady&&mode==='aerial')panorama.lookAt(-25,0,100,reduce?0:600);dirty=true;Object.assign(camera,homeCamera());aerialZoom=1;aerialOffset={x:0,y:0};updateAerial();lastTouch=0};
const world=$('#world');world.addEventListener('pointerdown',e=>{if(mode==='aerial'&&panoramaReady)return;if(e.target.closest('button'))return;dragging=true;lastX=e.clientX;lastY=e.clientY;world.setPointerCapture(e.pointerId);auto=false;$('#rotate').textContent='Rotate';$('#rotate').setAttribute('aria-label','Start orbit');lastTouch=1});world.addEventListener('pointermove',e=>{if(!dragging)return;dirty=true;const dx=e.clientX-lastX,dy=e.clientY-lastY;lastX=e.clientX;lastY=e.clientY;if(mode==='3d'){camera.angle-=dx*.006;camera.pitch=Math.max(.25,Math.min(1.25,camera.pitch+dy*.003))}else{aerialOffset.x+=dx;aerialOffset.y+=dy;updateAerial()}});world.addEventListener('pointerup',()=>dragging=false);world.addEventListener('pointercancel',()=>dragging=false);world.addEventListener('wheel',e=>{if(mode==='aerial'&&panoramaReady)return;e.preventDefault();zoom(e.deltaY>0?1.06:.94)},{passive:false});
let menuPreviousFocus=null;function toggleMenu(show){if(show)menuPreviousFocus=document.activeElement;$('#destinationsMenu').hidden=!show;$('#destinationsToggle').setAttribute('aria-expanded',show);for(const el of [$('#world'),$('#overview'),$('.topbar'),$('#journey')])el.inert=show;if(show)$('#closeMenu').focus();else if(menuPreviousFocus&&!menuPreviousFocus.closest('[hidden]'))menuPreviousFocus.focus()}
$('#destinationsToggle').onclick=()=>toggleMenu($('#destinationsMenu').hidden);$('#closeMenu').onclick=()=>toggleMenu(false);$('#journeyMenu').onclick=()=>toggleMenu(true);
function buildMenu(){const list=$('#destinationList');list.replaceChildren();for(const d of destinations){const b=document.createElement('button');b.className='destination-row';const index=document.createElement('span');index.className='row-index';index.textContent=String(d.index+1).padStart(2,'0');const info=document.createElement('span');info.className='row-text';const name=document.createElement('strong');name.textContent=d.title;const sub=document.createElement('small');sub.textContent=d.category+' · '+(d.images.length?`${d.images.length} views`:'Overview');info.append(name,sub);const arrow=document.createElement('span');arrow.textContent='';b.append(index,info,arrow);b.onclick=()=>enter(d.id);list.append(b)}}
const journey=$('#journey');let activeImages=[],activeIndex=-1,currentProgress=0,journeyFrame=0,previousFocus=null;
let targetProgress=0,renderedProgress=0,lastJourneyTime=0;
const imgA=$('#journeyImageA'),imgB=$('#journeyImageB'),journeyCopy=$('.journey-copy');let srcA='',srcB='';
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const smoothstep=v=>{v=clamp(v,0,1);return v*v*(3-2*v)};
const journeyUnit=()=>Math.max(1,journey.clientHeight*1.2);
const journeyEnd=()=>Math.max(0,activeImages.length-.0001);
function syncJourneyHeight(){ $('#journeyScrollSpace').style.height=(activeImages.length*journeyUnit())+'px'; }
function assignImage(img,src,alt,which){if(which==='a'&&srcA===src||which==='b'&&srcB===src)return;img.src=src;img.alt=alt||'';img.decoding='async';if(which==='a')srcA=src;else srcB=src;img.onerror=()=>{img.style.opacity='0';$('#announcer').textContent='This visual could not load. Use the next-view control to continue.'}}
function setCopy(i){if(activeIndex===i)return;activeIndex=i;const a=activeImages[i]||{};$('#journeyEyebrow').textContent=selected.category+' / '+selected.title;$('#journeyTitle').textContent=a.title||selected.eyebrow;$('#journeyDescription').textContent=a.description||selected.description;$('#imageCount').textContent=`${String(i+1).padStart(2,'0')} / ${String(activeImages.length).padStart(2,'0')}`;$('#journeyCategory').textContent=activeImages.length>1?'SPACES TO EXPLORE':'CONCEPT OVERVIEW';$('#journeyDots').querySelectorAll('button').forEach((b,n)=>{b.classList.toggle('active',n===i);b.setAttribute('aria-current',n===i?'true':'false')});$('#previousImage').disabled=i===0;$('#nextImage').disabled=i===activeImages.length-1;$('#announcer').textContent=selected.title+', '+(a.title||selected.eyebrow);const ahead=activeImages[i+2];if(ahead){const preload=new Image();preload.decoding='async';preload.src=ahead.src}}
// Each still has a deliberate, reversible dolly-and-pan path. Adjacent images
// meet at the same starting transform, so crossing a scene boundary never snaps.
function cameraPath(index,t,incoming=false){
 const paths=[[66,47,-2.8,.8],[60,43,2.4,-.8],[70,51,-2.1,-1],[58,48,2.8,.7],[65,45,-2.6,-.5],[62,50,2.3,.8],[68,46,-2.5,.6]];
 const [ox,oy,dx,dy]=paths[index%paths.length],travel=smoothstep(t),strength=mobile?.68:1;
 const scale=incoming?1.005+travel*.015:1.02+travel*.10;
 const x=incoming?0:dx*travel*strength*.3,y=incoming?0:dy*travel*strength*.3;
 return{origin:`${ox}% ${oy}%`,transform:`translate3d(${x.toFixed(3)}%,${y.toFixed(3)}%,0) scale(${scale.toFixed(4)})`};
}
function paintJourney(progress){
 if(!selected||!activeImages.length)return;
 progress=clamp(progress,0,journeyEnd());currentProgress=progress;
 const i=Math.min(activeImages.length-1,Math.floor(progress)),t=progress-i,next=Math.min(activeImages.length-1,i+1),hasNext=next!==i;
 const cross=hasNext?(reduce?(t>.8?1:0):smoothstep((t-.62)/.38)):0;
 assignImage(imgA,activeImages[i].src,activeImages[i].title,'a');assignImage(imgB,activeImages[next].src,activeImages[next].title,'b');
 // Keep the outgoing frame opaque under the dissolve to avoid a dark flash.
 imgA.style.opacity='1';imgB.style.opacity=String(cross);
 if(reduce){imgA.style.transform='none';imgB.style.transform='none';journeyCopy.style.opacity='1';journeyCopy.style.setProperty('--copy-shift','0px')}
 else{const a=cameraPath(i,t),b=cameraPath(next,cross,true);imgA.style.transformOrigin=a.origin;imgA.style.transform=a.transform;imgB.style.transformOrigin=b.origin;imgB.style.transform=b.transform;
   const fade=hasNext?Math.abs(1-2*cross):1;journeyCopy.style.opacity=String(smoothstep(fade));journeyCopy.style.setProperty('--copy-shift',`${hasNext?(cross<.5?-12*cross*2:12*(1-cross)*2):0}px`)
 }
 setCopy(cross>.5?next:i);
 $('#journeyProgress').style.width=(progress/journeyEnd()*100)+'%';
 $('#scrollHint').style.opacity=progress>.24?.45:1;
}
function tickJourney(now){
 journeyFrame=0;if(!selected)return;
 const dt=lastJourneyTime?Math.min(48,now-lastJourneyTime):16;lastJourneyTime=now;
 const delta=targetProgress-renderedProgress;
 renderedProgress=reduce?targetProgress:renderedProgress+delta*(1-Math.exp(-dt/135));
 if(Math.abs(targetProgress-renderedProgress)<.00015)renderedProgress=targetProgress;
 paintJourney(renderedProgress);
 if(Math.abs(targetProgress-renderedProgress)>.0001)journeyFrame=requestAnimationFrame(tickJourney);else lastJourneyTime=0;
}
function requestJourneyFrame(){if(!journeyFrame)journeyFrame=requestAnimationFrame(tickJourney)}
function updateJourney(){if(!selected)return;targetProgress=clamp(journey.scrollTop/journeyUnit(),0,journeyEnd());if(reduce){renderedProgress=targetProgress;paintJourney(renderedProgress)}else requestJourneyFrame()}
function setJourneyTarget(progress){targetProgress=clamp(progress,0,journeyEnd());journey.scrollTo({top:targetProgress*journeyUnit(),behavior:'auto'});requestJourneyFrame()}
journey.addEventListener('scroll',updateJourney,{passive:true});
journey.addEventListener('wheel',e=>{
 if(!selected||!$('#destinationsMenu').hidden||e.ctrlKey)return;
 if(reduce)return; // Native scroll + discrete stills for reduced-motion visitors.
 e.preventDefault();
 const pixels=e.deltaY*(e.deltaMode===1?16:e.deltaMode===2?journey.clientHeight:1);
 const step=clamp(pixels,-110,110)/journeyUnit();
 // Wheel bursts can lead the rendered camera by only part of one room.
 // Reversing the wheel immediately changes direction rather than draining a queue.
 const reversing=step*(targetProgress-renderedProgress)<0;
 const basis=reversing?renderedProgress:targetProgress;
 setJourneyTarget(clamp(basis+step,renderedProgress-.48,renderedProgress+.48));
},{passive:false});
function goImage(i){i=clamp(i,0,activeImages.length-1);setJourneyTarget(i)}
$('#previousImage').onclick=()=>goImage(activeIndex-1);$('#nextImage').onclick=()=>goImage(activeIndex+1);
async function enter(id){if(entering)return;const d=destinations.find(x=>x.id===id);if(!d)return;toggleMenu(false);if(selected){selected=null;journey.hidden=true}entering=true;previousFocus=document.activeElement;document.body.classList.add('entering');$('#enterName').textContent=d.title;auto=false;if(panoramaReady&&mode==='aerial'){panorama.stopAutoRotate();const pos=panoPositions[d.id];panorama.lookAt(pos.pitch,pos.yaw,70,reduce?0:900);}const start={...camera};const at=performance.now();const duration=reduce?0:900;
 await new Promise(resolve=>{function step(now){dirty=true;const p=duration?Math.min(1,(now-at)/duration):1,e=1-Math.pow(1-p,3);if(mode==='3d'){camera.tx=start.tx+(d.x-start.tx)*e;camera.tz=start.tz+(d.z-start.tz)*e;camera.distance=start.distance+(47-start.distance)*e;camera.pitch=start.pitch+(.4-start.pitch)*e}else if(!panoramaReady){$('#aerial').style.transformOrigin=`${d.u}% ${d.v}%`;$('#aerial').style.transform=`scale(${1+e*.15})`}if(p>.55)$('#loadingCurtain').classList.add('active');if(p<1)requestAnimationFrame(step);else resolve()}requestAnimationFrame(step)});
 selected=d;activeImages=d.images.length?d.images:[{src:masterplan,title:d.eyebrow,description:d.description}];activeIndex=-1;srcA='';srcB='';$('#destinationName').textContent=d.title;$('#journeyDots').replaceChildren();activeImages.forEach((a,i)=>{const b=document.createElement('button');b.setAttribute('aria-label',`View ${i+1}: ${a.title||d.title}`);b.onclick=()=>goImage(i);$('#journeyDots').append(b)});journey.hidden=false;syncJourneyHeight();journey.scrollTop=0;targetProgress=0;renderedProgress=0;lastJourneyTime=0;if(journeyFrame)cancelAnimationFrame(journeyFrame);journeyFrame=0;paintJourney(0);$('#scrollHint').innerHTML=(mobile?'Swipe':'Scroll')+' to explore';$('#backToCity').focus();await new Promise(r=>setTimeout(r,reduce?0:80));$('#loadingCurtain').classList.remove('active');entering=false;document.body.classList.remove('entering');history.replaceState(null,'','#'+d.id)
}
function leave(){if(!selected)return;if(journeyFrame)cancelAnimationFrame(journeyFrame);journeyFrame=0;dirty=true;selected=null;journey.hidden=true;Object.assign(camera,homeCamera());$('#aerial').style.transform='';auto=false;if(panoramaReady&&mode==='aerial'){panorama.lookAt(-25,0,100,reduce?0:600);if(auto)panorama.startAutoRotate(-2);}$('#rotate').textContent=auto?'Pause':'Rotate';$('#rotate').setAttribute('aria-label',auto?'Pause orbit':'Start orbit');history.replaceState(null,'',location.pathname+location.search);(previousFocus&&!previousFocus.closest('[hidden]')?previousFocus:$('#destinationsToggle')).focus();updateMarkers()}
$('#backToCity').onclick=leave;$('.brand').onclick=e=>{e.preventDefault();leave();toggleMenu(false);Object.assign(camera,homeCamera())};document.addEventListener('keydown',e=>{if(!$('#destinationsMenu').hidden&&e.key==='Tab'){const els=[...$('#destinationsMenu').querySelectorAll('button,a[href]')];const first=els[0],last=els[els.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}return}if(e.key==='Escape'){if(!$('#destinationsMenu').hidden)toggleMenu(false);else leave()}if(selected&&$('#destinationsMenu').hidden){if(e.key==='ArrowRight'){e.preventDefault();goImage(activeIndex+1)}if(e.key==='ArrowLeft'){e.preventDefault();goImage(activeIndex-1)}}});
world.addEventListener('keydown',e=>{if(panoramaReady&&mode==='aerial'){if(e.key===' ') {e.preventDefault();$('#rotate').click()}if(e.key==='Home'){e.preventDefault();$('#resetView').click()}return;}if(e.target!==world)return;const k=e.key;if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','+','=','-','Home',' '].includes(k))return;e.preventDefault();dirty=true;lastTouch=1;if(k==='+'||k==='=')zoom(.87);else if(k==='-')zoom(1.15);else if(k==='Home')$('#resetView').click();else if(k===' '&&mode==='3d')$('#rotate').click();else if(mode==='3d'){auto=false;$('#rotate').textContent='Rotate';$('#rotate').setAttribute('aria-label','Start orbit');if(k==='ArrowLeft')camera.angle-=.12;if(k==='ArrowRight')camera.angle+=.12;if(k==='ArrowUp')camera.pitch=Math.min(1.25,camera.pitch+.08);if(k==='ArrowDown')camera.pitch=Math.max(.25,camera.pitch-.08)}else{if(k==='ArrowLeft')aerialOffset.x+=40;if(k==='ArrowRight')aerialOffset.x-=40;if(k==='ArrowUp')aerialOffset.y+=40;if(k==='ArrowDown')aerialOffset.y-=40;updateAerial()}});
window.addEventListener('resize',()=>{if(mode==='aerial')updateAerial();if(selected){syncJourneyHeight();journey.scrollTop=targetProgress*journeyUnit();paintJourney(renderedProgress);$('#scrollHint').innerHTML=(mobile?'Swipe':'Scroll')+' to explore'}});

// Coordinates refer to the regenerated spherical concept, not the flat masterplan.
const panoPositions={museum:{yaw:0,pitch:-28},hospital:{yaw:-43,pitch:-10},schools:{yaw:-52,pitch:6},sports:{yaw:-90,pitch:-11},market:{yaw:-52,pitch:-47},diplomatic:{yaw:0,pitch:1},wildlife:{yaw:65,pitch:6},hotel:{yaw:82,pitch:-23},landscape:{yaw:27,pitch:-9},waterfront:{yaw:99,pitch:-43},station:{yaw:0,pitch:-63},homes:{yaw:-116,pitch:-43},energy:{yaw:-85,pitch:12},food:{yaw:0,pitch:-79}};
function initPanorama(){
 if(!window.pannellum)return;
 panorama=pannellum.viewer('aerial',{type:'equirectangular',panorama:'assets/city-locator-8k.jpg',autoLoad:true,showControls:false,showLoading:true,hfov:100,minHfov:70,maxHfov:115,pitch:-25,yaw:0,minPitch:-80,maxPitch:20,autoRotate:reduce?0:-2,autoRotateInactivityDelay:-1,mouseZoom:true,keyboardZoom:true,hotSpots:destinations.map(d=>({...panoPositions[d.id],cssClass:'city-hotspot',createTooltipFunc:el=>{const b=document.createElement('button');b.className='pano-location';b.setAttribute('aria-label','Explore '+d.title);const n=document.createElement('span');n.className='pin';n.textContent=String(d.index+1).padStart(2,'0');const label=document.createElement('span');label.className='pin-name';label.textContent=shortName(d.id);b.append(n,label);b.onclick=e=>{e.stopPropagation();enter(d.id)};el.append(b)}}))});
 panorama.on('load',()=>{panoramaReady=true;$('#aerial').style.backgroundImage='none';if(!selected&&!entering)setMode('aerial');$('#rotate').title='Toggle panoramic rotation';});
 panorama.on('mousedown',()=>{auto=false;$('#rotate').textContent='Rotate';$('#rotate').setAttribute('aria-label','Start orbit')});
 panorama.on('error',()=>{$('#announcer').textContent='Panorama could not load. The 3D model remains available.';setMode('3d')});
}

async function loadData(){try{const r=await fetch('data.json');if(r.ok){const data=await r.json();masterplan=data.masterplan||masterplan;for(const incoming of(data.destinations||[])){const d=destinations.find(x=>x.id===incoming.id);if(d){Object.assign(d,Object.fromEntries(Object.entries(incoming).filter(([k])=>!['x','z','u','v','index'].includes(k))));d.images=(incoming.images||[]).map(a=>typeof a==='string'?{src:a}:a)}}}}catch(e){console.info('Using initial concept data.')}masterplan='assets/city-locator-8k.jpg';const points={museum:[50,65],hospital:[38,55],schools:[35,47],sports:[25,56],market:[37,73],diplomatic:[50,49],wildlife:[64,48],hotel:[73,62],landscape:[59,59],waterfront:[76,76],station:[50,85],homes:[17,76],energy:[28,43],food:[50,94]};for(const d of destinations){[d.u,d.v]=points[d.id]}dataReady=true;buildMenu();makeMarkers();const aerial=new Image();aerial.onload=()=>{imageSize.w=aerial.naturalWidth;imageSize.h=aerial.naturalHeight;aerialReady=true;$('#aerial').style.backgroundImage=`url("${masterplan}")`;$('#viewAerial').hidden=false;if(!selected&&!entering){setMode('aerial');updateAerial()}};aerial.src=masterplan;const id=location.hash.slice(1);if(destinations.some(d=>d.id===id))enter(id)}
loadData();
})();

(()=>{const close=document.getElementById('closeExplore');close.onclick=()=>{if(window.parent!==window){window.parent.postMessage({type:'climate-close'},location.origin)}else location.href='index.html#vision';};})();
