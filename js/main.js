const menu = document.getElementById("menu");
const menuBtn = document.querySelector('.menu-btn')

let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        menu.classList.add("active");
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        menu.classList.remove("active");
    }
});

// scroll animation
// $(document).ready(function(){
//     $(window).scroll(function(){
//         $(".text").each(function(){
//             var offset = $(this).offset().top;
//             var scroll = $(window).scrollTop();
//             var opacity = 1 - (scroll - offset) / 250;
//             $(this).css("opacity", opacity);
//             });
//         });
//     });
window.onscroll = function() {
    var scrollPos = window.pageYOffset;
    var textElement = document.querySelector(".text");
    textElement.style.opacity = 1 - scrollPos/100;
  };
  

// $(document).ready(function(){
//     $(window).scroll(function(){
//         if($(".text1").scrollTop() > -300){
//             $(".text1").css("opacity", 1 - $(window).scrollTop() / 150);
//         }
//     })
// })

// Project slide animation
// const track = document.getElementsById("track");

// window.onmousedown = e => {
//     track.dataset.mouseDownAt = e.clientX;
// }

// window.onmouseup = () => {
//     track.dataset.mouseDownAt = "0";
//     track.dataset.prevPercentage = track.dataset.percentage;
// }

// window.onmousemove = e => {
//     if(track.dataset.mouseDownAt === "0") return;

//     const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
//         maxDelta = window.innerWidth / 2;

//     const percentage = (mouseDelta / maxDelta) * -100;
//         nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

//     track.dataset.percentage = nextPercentage;

//     track.style.transform = 'translate(${nextPercentage}%, -50%)';

//     for(const image of track.getElementsByClassName("image")) {
//         image.style.objectPosition = '${nextPercentage + 100} 50%'
//     }
// }