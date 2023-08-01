// toggle class Active hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Toggle class active search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const subMenu1 = document.querySelector(".sub-menu-1");
const subMenu2 = document.querySelector(".sub-menu-2");
const subMenu3 = document.querySelector(".sub-menu-3");
const subMenu4 = document.querySelector(".sub-menu-4");

// const textButton2 = document.querySelector(".text-content-2");

document.querySelector("#search-btn").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

document.querySelector("#nav-products").onclick = (e) => {
  subMenu1.classList.toggle("active");
  e.preventDefault();
};

document.querySelector("#nav-brands").onclick = (e) => {
  subMenu2.classList.toggle("active");
  e.preventDefault();
};

document.querySelector("#nav-industry").onclick = (e) => {
  subMenu3.classList.toggle("active");
  e.preventDefault();
};

document.querySelector("#nav-application").onclick = (e) => {
  subMenu4.classList.toggle("active");
  e.preventDefault();
};

// document.querySelector("#info").onclick = (e) => {
//   textButton1.classList.toggle("active");
//   e.preventDefault();
// };

// document.querySelector(".btn-collapse-2").onclick = (e) => {
//   textButton2.classList.toggle("active");
//   e.preventDefault();
// };

// click diluar element
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-btn");
const sm = document.querySelector("#nav-products");
const sm2 = document.querySelector("#nav-brands");
const sm3 = document.querySelector("#nav-industry");
const sm4 = document.querySelector("#nav-application");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sm.contains(e.target) && !subMenu1.contains(e.target)) {
    subMenu1.classList.remove("active");
  }

  if (!sm2.contains(e.target) && !subMenu2.contains(e.target)) {
    subMenu2.classList.remove("active");
  }

  if (!sm3.contains(e.target) && !subMenu3.contains(e.target)) {
    subMenu3.classList.remove("active");
  }

  if (!sm4.contains(e.target) && !subMenu4.contains(e.target)) {
    subMenu4.classList.remove("active");
  }
});

// Deskripsi produk dan catalog -> muncul
const textButton = document.querySelectorAll(".detail-button a");
const textShow = document.querySelectorAll(".detail-button .text");

const showCard = (e) => {
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");

  textShow.forEach((text) => {
    text.classList.add("hide");

    if (
      text.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === ""
    ) {
      text.classList.remove("hide");
      e.preventDefault();
    }
  });
};

textButton.forEach((a) => a.addEventListener("click", showCard));
