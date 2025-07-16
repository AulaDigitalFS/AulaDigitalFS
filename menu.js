
document.querySelectorAll(".submenu-toggle").forEach(button => {
  button.addEventListener("click", function (e) {
    e.stopPropagation();
    const parent = this.parentElement;
    parent.classList.toggle("open");

    document.querySelectorAll(".dropdown").forEach(item => {
      if (item !== parent) item.classList.remove("open");
    });
  });
});

document.addEventListener("click", function () {
  document.querySelectorAll(".dropdown").forEach(item => {
    item.classList.remove("open");
  });
});
