(()=>{
const title=document.getElementById('welcomeTyping'),dialog=document.getElementById('cityWelcomeFilm'),video=document.getElementById('welcomeVideo'),open=document.getElementById('openCityFilm'),close=document.getElementById('exitCityFilm');
const words='Climate City';
if(!matchMedia('(prefers-reduced-motion:reduce)').matches){let n=0;title.textContent='';const timer=setInterval(()=>{title.textContent=words.slice(0,++n);if(n===words.length)clearInterval(timer)},70)}
let overflow='';
open.addEventListener('click',()=>{overflow=document.body.style.overflow;dialog.showModal();document.body.style.overflow='hidden';video.currentTime=0;video.play().catch(()=>{});close.focus()});
close.addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>{video.pause();document.body.style.overflow=overflow;open.focus()});
})();