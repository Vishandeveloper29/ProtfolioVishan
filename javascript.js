const menutoggle = document.getElementById("menutoggle");
const navbar = document.getElementById("navbar");
const closenav = document.getElementById("closenav");
const navbuttons = document.querySelectorAll(".nav-btn");

menutoggle.addEventListener("click", () => {
  navbar.classList.add("show");
});

closenav.addEventListener("click", () => {
  navbar.classList.remove("show");
});

navbuttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    navbar.classList.remove("show");
  });
});

document.querySelectorAll("downloadBtn").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "Vishan_dev_CV.pdf";
  link.download = "Vishan_dev_CV.pdf";
  link.click();
});
