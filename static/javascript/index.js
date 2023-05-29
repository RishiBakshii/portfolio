document.addEventListener('DOMContentLoaded', function() {

  let menuIcon=document.querySelector('#hamburger-menu')
  let navMenu=document.querySelector('#nav-menu')
  let splashScreen=document.getElementById("splash-screen")
  let splashText=document.getElementById("splashText")


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
    }

  });


  // const texts = ["Data-Cleaning",'PreProcessing','Exploratory Data Analysis','Feature Engineering','Modelling'];

  // // Counter for tracking the current text
  // let counter = 0;

  // // Function to update the dynamic text
  // function updateText() {
  //   splashText.textContent = texts[counter];

  //   // Increment the counter
  //   counter = (counter + 1) % texts.length;
  // }

  // // Set interval to update the text every 2 seconds (2000 milliseconds)
  // setInterval(updateText, 200);

});



