(()=>{
 const title=document.getElementById('welcomeTyping'),section=document.getElementById('cityWelcomeFilm'),video=document.getElementById('welcomeVideo'),close=document.getElementById('exitCityFilm'),playback=document.getElementById('welcomePlayback');
 const reduced=matchMedia('(prefers-reduced-motion:reduce)').matches;
 if(!reduced){let n=0;title.textContent='';const timer=setInterval(()=>{title.textContent='Climate City'.slice(0,++n);if(n===12)clearInterval(timer)},70)}
 let trigger;
 function sync(){playback.textContent=video.ended?'Replay':video.paused?'Play':'Pause';playback.setAttribute('aria-label',playback.textContent+' city film')}
 document.querySelectorAll('#openCityFilm,[data-open-city-film]').forEach(button=>button.addEventListener('click',()=>{
  trigger=button;section.hidden=false;section.scrollIntoView({behavior:reduced?'instant':'smooth',block:'start'});video.currentTime=0;video.play().catch(sync);close.focus({preventScroll:true});
 }));
 close.addEventListener('click',()=>{video.pause();section.hidden=true;trigger?.focus();});
 playback.addEventListener('click',()=>{if(video.paused){if(video.ended)video.currentTime=0;video.play().catch(sync)}else video.pause()});
 ['play','pause','ended','error'].forEach(event=>video.addEventListener(event,sync));
})();
