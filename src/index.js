import "./styles.scss"

document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel__track");

    for (let i = 1; i <= 17; i++) {
        const logoItem = document.createElement("div");
        logoItem.classList.add("carousel__item");

        const img = document.createElement("img");
        img.src = `assets/zaufali_nam_${i}.png`;
        img.alt = `Logo ${i}`;

        logoItem.appendChild(img);
        track.appendChild(logoItem);
    }

    const clone = track.innerHTML;
    track.innerHTML += clone;

});


window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".nav__fixed");
    if (window.scrollY > 34) {
      navbar.style.top = "0"; 
    } else {
      navbar.style.top = "34px"; 
    }
});
