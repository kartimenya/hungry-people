const menuIcon = document.getElementsByClassName('menu__icon')[0],
      menuBbody = document.getElementsByClassName('menu__body')[0],
      headerLogo = document.getElementsByClassName('header__logo')[0]

menuIcon.addEventListener('click', () =>{
  menuIcon.classList.toggle("active");
  menuBbody.classList.toggle("active");
  headerLogo.classList.toggle("active");
});



let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("item"),
        dots = document.getElementsByClassName("slider-dots_item"),
        i

    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
