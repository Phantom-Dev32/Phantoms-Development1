const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(menuToggle&&nav){menuToggle.addEventListener('click',()=>nav.classList.toggle('open'));}
const contactForm=document.querySelector('#contactForm');
if(contactForm){contactForm.addEventListener('submit',(event)=>{event.preventDefault();const data=new FormData(contactForm);const subject=encodeURIComponent(`Phantoms Development enquiry - ${data.get('service')}`);const body=encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\nService: ${data.get('service')}\n\nProject details:\n${data.get('message')}`);window.location.href=`mailto:phantom-csg1246@outlook.com?subject=${subject}&body=${body}`;});}
