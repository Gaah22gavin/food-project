$('#menu').on('click', function(){
    $("header").toggleClass("open");
    $(".menu").toggleClass("openner")
});
// ==================================
    const countdown = () =>{
      const countDate = new Date("sep 20, 2021 00:00:00").getTime();
      let now = new Date().getTime();
      const gap = countDate - now;

      // ============
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;
      // ============ 

      const textDay = Math.floor(gap / day);
      const textHour = Math.floor((gap % day) / hour);
      const textMinute = Math.floor((gap % hour) / minute);
      const textSecond = Math.floor((gap % minute) / second);

      document.querySelector('.day').innerText = textDay;
      document.querySelector('.day').innerText = textDay;
      document.querySelector('.hour').innerText = textHour;
      document.querySelector('.minute').innerText = textMinute;
      document.querySelector('.second').innerText = textSecond;

    };
    // countdown();
    setInterval(countdown, 1000);
// ============================

$(document).on('ready', function(){

  // $(".center").slick({
  //     dots: false,
  //     infinite: true,
  //     centerMode: true,
  //     slidesToShow:2,
  //     slidesToScroll: 3,
  //     autoplay:true,

  //     // responsive:[        
  //     //     {
  //     //       breakpoint:480,
  //     //       settings:{
  //     //         slidesToShow:1,
  //     //         slidesToScroll:3,
  //     //       }        
  //     //     },

  //     //     {
  //     //       breakpoint:1024,
  //     //       settings:{
  //     //         slidesToShow:3,
  //     //         slidesToScroll:3,
  //     //       }
  //     //     }
  //     // ]
  // });

  // $(".center").slick({
  //   dots: false,
  //   infinite: true,
  //   centerMode: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 3,
  //   prevArrow:"#prev",
  //   nextArrow:"#next",
  //   autoplay:false,
  // });


  $(".center").slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:"#prev",
    nextArrow:"#next",
  });


  $(".center_two").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:false,
    arrow:false,
  });


});


function setupTabs() {
  const buttons = document.querySelectorAll(".tab__btn");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const sidebar = button.parentElement;
      const container = sidebar.parentElement;
      const btnIndex = button.dataset.btnIndex;
      const tabToActivate = container.querySelector(
        `.tab__content[data-tab-index="${btnIndex}"]`
      );

      sidebar.querySelectorAll(".tab__btn").forEach((btn) => {
        btn.classList.remove("tab__btn--active");
      });
      container.querySelectorAll(".tab__content").forEach((tab) => {
        tab.classList.remove("tab__content--active");
      });
      button.classList.add("tab__btn--active");
      tabToActivate.classList.add("tab__content--active");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
});