var btnMenu = document.getElementById("btnMenu")

btnMenu.addEventListener('click', function () {
    document.getElementById("myDropdown").classList.toggle("show");

})

var info = document.querySelector(".info")

window.addEventListener('scroll', function () {
    
  
    if (window.scrollY >= 0) {
       
        info.style.opacity = 1;
        info.style.transition = '2s';

    }

})

function myFunction(x) {
    x.classList.toggle("change");
  }



  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  var items = document.querySelectorAll(".timeline li");

// code for the isElementInViewport function

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      items[i].classList.add("in-view");
    }
  }
}

window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);

