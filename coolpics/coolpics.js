const btn =document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

btn.addEventListener("click", toggleMenu);

function toggleMenu() {
    nav.classList.toggle("hide");
    btn.classList.toggle("change");
}

const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.classList.remove("hidden");
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.add("hidden");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightbox.classList.add("hidden");
  }
});
