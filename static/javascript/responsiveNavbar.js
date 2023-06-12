document.addEventListener('DOMContentLoaded',function(){

    const menuIcon=document.getElementById("hamburger-menu")
    const navbar=document.getElementById("navbar")


    menuIcon.addEventListener("click",function(){
        navbar.classList.toggle("show")
        menuIcon.classList.toggle("bx-x")
    })


    window.onscroll = function() {
        menuIcon.classList.remove('bx-x')
        navbar.classList.remove('show')
      };


})