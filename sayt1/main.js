// Navbar smooth scroll
document.querySelectorAll('nav a').forEach(anchor=>{
  anchor.addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// Hero button scroll to menu
document.querySelector('.hero button').addEventListener('click',()=>{
  document.querySelector('#menu').scrollIntoView({behavior:'smooth'});
});

// Hero parallax effect
window.addEventListener('scroll',()=>{
  const hero=document.querySelector('.hero');
  hero.style.backgroundPositionY=window.scrollY*0.5+'px';
});

// Testimonials slider
let testimonials=document.querySelectorAll('.testimonial');
let current=0;
function showTestimonial(index){
  testimonials.forEach((t,i)=>{
    t.classList.remove('active');
    if(i===index) t.classList.add('active');
  });
}
showTestimonial(current);
setInterval(()=>{
  current=(current+1)%testimonials.length;
  showTestimonial(current);
},4000);

// Gallery lightbox
document.querySelectorAll('.gallery-images img').forEach(img=>{
  img.addEventListener('click',()=>{
    let overlay=document.createElement('div');
    overlay.style.position='fixed';
    overlay.style.top='0';
    overlay.style.left='0';
    overlay.style.width='100%';
    overlay.style.height='100%';
    overlay.style.background='rgba(0,0,0,0.95)';
    overlay.style.display='flex';
    overlay.style.justifyContent='center';
    overlay.style.alignItems='center';
    overlay.style.cursor='pointer';
    overlay.style.zIndex='10000';
    let largeImg=document.createElement('img');
    largeImg.src=img.src;
    largeImg.style.maxWidth='90%';
    largeImg.style.maxHeight='90%';
    largeImg.style.borderRadius='10px';
    overlay.appendChild(largeImg);
    document.body.appendChild(overlay);
    overlay.addEventListener('click',()=>overlay.remove());
  });
});

