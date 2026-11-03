/* Museum arrival pilot: click to play, wheel/swipe to scrub, then reveal rooms. */
(()=>{
 const portrait=matchMedia('(max-width:700px)').matches;
 const layer=document.createElement('section');layer.className='museum-flight';layer.hidden=true;layer.setAttribute('aria-label','Museum arrival flight');
 const video=document.createElement('video');video.muted=true;video.playsInline=true;video.preload='auto';video.poster='assets/city-locator-4k.jpg';video.src=portrait?'assets/museum-flight-mobile.mp4':'assets/museum-flight-desktop.mp4';
 const back=document.createElement('button');back.className='flight-back';back.textContent='Back to city';
 const label=document.createElement('div');label.className='flight-label';label.innerHTML='<span>Museum & Cultural Centre</span><h2>Grand arrival</h2><p>Scroll to guide your arrival</p>';
 const skip=document.createElement('button');skip.className='flight-skip';skip.textContent='Enter galleries';
 layer.append(video,back,label,skip);document.body.append(layer);
 let resolveFlight=null,timer,y=0;
 function finish(ok){if(!resolveFlight)return;clearTimeout(timer);video.pause();const resolve=resolveFlight;resolveFlight=null;resolve(ok)}
 back.onclick=()=>finish(false);skip.onclick=()=>finish(true);video.onended=()=>finish(true);video.onerror=()=>finish(true);
 video.ontimeupdate=()=>{label.classList.toggle('revealed',video.currentTime>5);if(video.duration&&video.currentTime>=video.duration-.08)finish(true)};
 function scrub(delta){if(!resolveFlight||!Number.isFinite(video.duration))return;video.pause();video.currentTime=Math.max(0,Math.min(video.duration-.01,video.currentTime+Math.max(-.6,Math.min(.6,delta*.005))));if(video.currentTime>=video.duration-.09)finish(true)}
 layer.addEventListener('wheel',e=>{e.preventDefault();scrub(e.deltaY*(e.deltaMode===1?16:1))},{passive:false});
 layer.addEventListener('touchstart',e=>{y=e.touches[0].clientY},{passive:true});layer.addEventListener('touchmove',e=>{if(e.target.closest('button'))return;e.preventDefault();const next=e.touches[0].clientY;scrub(y-next);y=next},{passive:false});
 layer.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();e.stopPropagation();finish(false)}if(e.key==='Tab'){e.preventDefault();(document.activeElement===back?skip:back).focus()}if(e.key==='ArrowDown'){e.preventDefault();scrub(100)}if(e.key==='ArrowUp'){e.preventDefault();scrub(-100)}});
 window.MuseumFlight={play(){layer.hidden=false;label.classList.remove('revealed');video.currentTime=0;back.focus();return new Promise(resolve=>{resolveFlight=resolve;timer=setTimeout(()=>{skip.textContent='Enter galleries';skip.focus()},15000);video.play().catch(()=>{skip.textContent='Enter galleries'})})},hide(){finish(false);layer.hidden=true;video.pause()}};
})();
