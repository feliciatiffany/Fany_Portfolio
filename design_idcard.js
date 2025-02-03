// white animation
const whiteOverlay = document.getElementById('white-overlay');


window.addEventListener('load', () => {
  setTimeout(() => {
    whiteOverlay.style.opacity = '0'; // Fade out
    setTimeout(() => {
      whiteOverlay.style.display = 'none'; 
    }, 1500); //fade-out duration
  }); 
});



const loader = document.getElementById('loader');
const home = document.getElementById("home-link");

// Add event listener for "about-link"
home.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default link behavior

  // Circle expand animation
  loader.style.clipPath = "circle(150% at 50% 50%)";

  // Shining effect
  setTimeout(() => {
    loader.style.opacity = "0";

    // Redirect to the next page after fade-out
    setTimeout(() => {
      window.location.href = "index.html";
    }); 
  }, 2000); // Wait for circle expand
});



const logosmall = document.getElementById("logosmall");

// Add event listener for "about-link"
logosmall.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default link behavior

  // Circle expand animation
  loader.style.clipPath = "circle(150% at 50% 50%)";

  // Shining effect
  setTimeout(() => {
    loader.style.opacity = "0";

    // Redirect to the next page after fade-out
    setTimeout(() => {
      window.location.href = "index.html";
    }); 
  }, 2000); // Wait for circle expand
});


