const images = [
  "images/night.jpg",
  "images/morty.png",
  "images/walk.jpg",
  "images/waterfall.jpg",
];

// Image DOM
let img = document.querySelector("#img");
// Default image
img.src = images[0];

// let time;
let i = 1;

carousel();

async function carousel() {
  await setInterval(changeImage, 3000);
}

function changeImage() {
  if (i < images.length) {
    img.src = images[i];
    i++;
  } else {
    img.src = images[0];
    i = 0;
    if (i < images.length) {
      img.src = images[i];
      i++;
    }
  }
}
