let navbar = document.querySelector('.navbar');
let fabars = document.querySelector('.fa-bars');

fabars.onclick = () =>{
    navbar.classList.toggle("active")

};

  var swiper = new Swiper(".home-solid", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

var swiper = new swiper(".team-slid", { 
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

  });