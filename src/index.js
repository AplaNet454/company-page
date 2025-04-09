import "./styles.scss";

document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".carousel__track");

  for (let i = 1; i <= 21; i++) {
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

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let formData = new FormData(this);
    document.getElementById("contact-form").reset();


    fetch("/mail.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {  // Sprawdzenie, czy odpowiedź ma status 200-299
          document.getElementById("message-info").innerText = "Dziękujemy za wysłanie wiadomości. Skontaktujemy się tak szybko jak to możliwe!";

        } else {
          throw new Error('Błąd odpowiedzi serwera');
        }
      })
      .catch((error) => {
        document.getElementById("message-info").innerText = "Upss! Coś poszło nie tak! Spróbuj pownownie lub skontaktuj sie z nami bezpośrdenio 693 418 350.";
        console.error("Błąd:", error);
      });
  });



  document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".nav__burger");
    const navList = document.querySelector(".nav__list");
  
    burger.addEventListener("click", function () {
      this.classList.toggle("active");
      navList.classList.toggle("active");
    });
  
    document.querySelectorAll(".nav__list a").forEach((link) => {
      link.addEventListener("click", function () {
        burger.classList.remove("active");
        navList.classList.remove("active");
      });
    });
  });
