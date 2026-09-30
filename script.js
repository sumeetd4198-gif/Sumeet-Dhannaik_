const menuToggle=document.querySelector(".menu-toggle"),navLinks=document.querySelector(".nav-links");
menuToggle.addEventListener("click",()=>navLinks.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));

const tabs=document.querySelectorAll(".category-tabs button");
const products=document.querySelectorAll(".product-card");
tabs.forEach(tab=>tab.addEventListener("click",()=>{
  tabs.forEach(t=>t.classList.remove("active")); tab.classList.add("active");
  const filter=tab.dataset.filter;
  products.forEach(p=>p.style.display=filter==="all"||p.dataset.category===filter?"block":"none");
}));

const form=document.getElementById("orderForm"), msg=document.getElementById("formMessage");
form.addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const phone=document.getElementById("phone").value.trim();
  const email=document.getElementById("email").value.trim();
  const type=document.getElementById("type").value;
  const details=document.getElementById("details").value.trim();
  if(name.length<2){show("Please enter your name.");return}
  if(!/^[6-9]\d{9}$/.test(phone)){show("Please enter a valid 10-digit Indian phone number.");return}
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){show("Please enter a valid email address.");return}
  if(!type){show("Please select a product type.");return}
  if(details.length<10){show("Please provide a few order details.");return}
  msg.textContent="Thank you! Your order inquiry has been received.";
  msg.style.color="#39804b"; form.reset();
});
function show(text){msg.textContent=text;msg.style.color="#b64035"}