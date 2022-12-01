let slideIndice;

// pelas setas
function avancarSlide(n) {
    mostrarSlide(slideIndice += n);
}

// pelas bolinhas
function esteSlide(n) {
    mostrarSlide(slideIndice = n);
}

function mostrarSlide(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let bolinhas = document.getElementsByClassName("bolinha");
    if (n > slides.length){
        slideIndice = 1
    }
    else if (n < 1){
        slideIndice = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < bolinhas.length; i++) {
        bolinhas[i].classList.remove("active")
    }

    slides[slideIndice-1].style.display = "flex";
    bolinhas[slideIndice-1].classList.add("active")
}
