const products = document
  .getElementById("products")
  .querySelectorAll(".product");

let checkbox = document.getElementById("night-checkbox");
checkbox.checked = false;

function check() {
  if (checkbox.checked == true) {
    nightMode();
  } else {
    lightMode();
  }
}

function nightMode() {
  let i;
  document.getElementById("nav").style.backgroundColor = "#1f1f1f";
  document.body.style.backgroundColor = "#121212";

  for (i = 0; i < products.length; i++) {
    products[i].style.boxShadow = "5px 10px #e7e7e7";
    products[i].style.backgroundColor = "#1f1f1f";
    products[i].children[1].style.color = "white";
    products[i].children[2].style.color = "white";
    products[i].children[3].style.backgroundColor = "#580bd8";
  }
}

function lightMode() {
  let i;
  document.getElementById("nav").style.backgroundColor = "#580bd8";
  document.body.style.backgroundColor = "white";

  for (i = 0; i < products.length; i++) {
    products[i].style.boxShadow = "5px 10px black";
    products[i].style.backgroundColor = "white";
    products[i].children[1].style.color = "black";
    products[i].children[2].style.color = "black";
    products[i].children[3].style.backgroundColor = "#580bd8";
  }
}
