const accordionBtns=document.querySelectorAll(".faq__btn");accordionBtns.forEach(t=>{t.addEventListener("click",e=>{t.classList.toggle("active"),t.classList.toggle("open");const c=t.nextElementSibling;t.classList.contains("active")?c.style.maxHeight=c.scrollHeight+"px":c.style.maxHeight=0})});