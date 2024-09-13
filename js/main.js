/* document.addEventListener('DOMContentLoaded', function() {
    let e = document.getElementById("logo")
    e.remove()
}, false); */

new WOW().init();

// ---------------- preloader -------------------- //

var loader = document.getElementById("preloader");
/* loader.style.display = "none"; */
/* window.addEventListener("load", function(){
    loader.style.display = "none";
}) */

const width = window.innerWidth;
const imagenMobile = document.getElementById("imagenMobile");
const mySplineViewer = document.getElementById("splineBox");
mySplineViewer.addEventListener("load-complete", (e) => {

  console.log(width)
  if(width < 1000){
    mySplineViewer.style.display = "none";
    imagenMobile.style.display = "block"
  }
  loader.classList.add("fadeOut");

  loader.addEventListener("animationend", () => {
    loader.style.display = "none";
  });
  
  let logo = document.querySelector("#splineBox").shadowRoot.querySelector("#logo")
  logo.remove()

});

/* setTimeout(function () {
  mySplineViewer.addEventListener("load-complete", (e) => {

    loader.classList.add("fadeOut");

    loader.addEventListener("animationend", () => {
      loader.style.display = "none";
    });

  });
}, 2000); */
