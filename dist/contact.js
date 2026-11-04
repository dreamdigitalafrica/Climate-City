document.getElementById('contactForm').addEventListener('submit',function(event){
  event.preventDefault();
  const name=document.getElementById('contactName');
  const message=document.getElementById('contactMessage');
  for(const field of [name,message]){
    field.setCustomValidity(field.value.trim()?'':'Please fill in this field.');
    if(!field.reportValidity())return;
  }
  const email=document.getElementById('contactEmail').value.trim();
  const phone=document.getElementById('contactPhone').value.trim();
  const text=`Hello Climate City, my name is ${name.value.trim()}.\n\n${email ? `Email: ${email}\n` : ''}${phone ? `Phone: ${phone}\n` : ''}\n\n${message.value.trim()}`;
  const url='https://wa.me/2347082064914?text='+encodeURIComponent(text);
  document.getElementById('contactFallback').href=url;
  document.getElementById('contactStatus').hidden=false;
  window.open(url,'_blank','noopener,noreferrer');
});
for(const input of document.querySelectorAll('#contactForm input,#contactForm textarea'))input.addEventListener('input',()=>input.setCustomValidity(''));
