// typing effect
const text="AWS Cloud & DevOps Engineer | Terraform | Docker | Kubernetes | Automation";
let i=0;
const typing=document.querySelector(".typing");
(function type(){
  if(i<text.length){
    typing.innerHTML+=text.charAt(i);
    i++;
    setTimeout(type,80);
  }
})();

// scroll reveal + skill animation
const sections=document.querySelectorAll("section");
window.addEventListener("scroll",()=>{
  sections.forEach(sec=>{
    if(sec.getBoundingClientRect().top < window.innerHeight - 120){
      sec.classList.add("active");
      sec.querySelectorAll(".bar div").forEach(bar=>{
        bar.style.width = bar.dataset.level + "%";
      });
    }
  });
});
