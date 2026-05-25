const carrusel = document.getElementById("carrusel");

    document.getElementById("next").addEventListener("click", () => {
      carrusel.scrollBy({
        left: 800,
        behavior: "smooth"
      });
    });

    document.getElementById("prev").addEventListener("click", () => {
      carrusel.scrollBy({
        left: -800,
        behavior: "smooth"
      });
    });