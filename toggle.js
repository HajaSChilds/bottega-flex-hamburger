function myFunction() {
  var x = document.getElementById("toggle");
  if (screen.width > 780) {
      x.style.display = "flex";

  }else if (x.style.display == "none" && x.screen.display == "none"){
       x.style.display = "flex";  
     
  } else  {
    x.style.display = "none";
  }

} 


 /*const navHamburger = document.querySelector('#hamburger');
    hamburger.addEventListener('click', (e) => {
        navHamburger.parentElement.classList.toggle_btn('active');
    }*/