const liList = document.getElementsByClassName("li-list");
const sidebarList = document.getElementById("sidebar-list");
const sideBar = document.getElementById("sidebar");
const siderbarBtn = document.getElementById("sidebar-btn");
const Xbtn = document.getElementById("Xicon");

window.addEventListener("load", function () {
  setTimeout(() => {
    this.document.getElementById("preloader").style.display = "none";
  }, 2500);
});

siderbarBtn.addEventListener("click", function () {
  sideBar.classList.remove("translate-x-full");
  sideBar.classList.add("translate-x-0");
  sideBar.classList.remove("hidden");
});

Xbtn.addEventListener("click", function () {
  sideBar.classList.remove("translate-x-0");
  sideBar.classList.add("translate-x-full");
});
