const t=document.getElementById('mobileToggle'),m=document.getElementById('mobileMenu');t.onclick=()=>{m.hidden=!m.hidden;t.setAttribute('aria-expanded',String(!m.hidden))};m.querySelectorAll('a').forEach(a=>a.onclick=()=>{m.hidden=true;t.setAttribute('aria-expanded','false')});
// Keep one sector open, including browsers without details grouping.
document.querySelectorAll('.sector').forEach(row=>row.addEventListener('toggle',()=>{if(row.open)document.querySelectorAll('.sector[open]').forEach(other=>{if(other!==row)other.open=false})}));
