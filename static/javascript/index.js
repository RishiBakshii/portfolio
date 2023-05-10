let menuIcon=document.querySelector('#hamburger-menu')
let navMenu=document.querySelector('#nav-menu')
let overlay=document.querySelector('#overlay')

// click listerner on hamburger menu for openning the nav bar
menuIcon.onclick= ()=> {
    menuIcon.classList.toggle('bx-x')
    navMenu.classList.toggle('change')
    overlay.classList.toggle("isvisible")

}

// scroll detection -> for closing the navbar
window.onscroll = function() {
    // navMenu.style.display='none'
    menuIcon.classList.remove('bx-x')
    navMenu.classList.remove('change')
    overlay.classList.remove("isvisible")
  };
  


// Attach a touchstart event listener to the document object
navMenu.addEventListener("touchstart", function(event) {
  // Check if the touch event occurred outside of the object
  if (!navMenu.contains(event.navMenu)) {
    // prompt("hello")
  }

});



