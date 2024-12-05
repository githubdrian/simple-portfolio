function toggleMenu() {
   const menu = document.querySelector(".menu");
   const hamburger = document.querySelector(".hamburger");

   menu.classList.toggle("active");
   hamburger.classList.toggle("active");
 }

 document.addEventListener("click", function (event) {
   const menu = document.querySelector(".menu");
   const hamburger = document.querySelector(".hamburger");

   if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
     menu.classList.remove("active");
     hamburger.classList.remove("active");
   }
 });