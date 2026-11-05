// Native disclosures remain usable without JavaScript.
document.querySelectorAll('.design-disclosure').forEach(row=>{
 row.addEventListener('toggle',()=>{
  if(row.open)document.querySelectorAll('.design-disclosure[open]').forEach(other=>{if(other!==row)other.open=false;});
 });
});
