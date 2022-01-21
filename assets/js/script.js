var btnMenu = document.getElementById("btnMenu")

btnMenu.addEventListener('click', function () {
    document.getElementById("myDropdown").classList.toggle("show");

})


info.addEventListener('scroll', function () {
    
    position = window.scrollY;
    if (position >= 0) {
        info.style.opacity = 1;
        info.style.transition = '2s';

    }

})

function myFunction(x) {
    x.classList.toggle("change");
  }