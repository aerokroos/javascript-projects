const images = [
  "images/chick.jpeg",
  "images/king.jpeg",
  "images/mcqueen.jpeg",
  "images/sally.jpeg",
];

const image = document.getElementById("image");

// Default image
image.src = images[0];

let i = 0;
let size = images.length - 1;

function prev() {
  if (i === 0) {
    i = size;
    image.src = images[i];
  } else {
    i--;
    image.src = images[i];
  }
}

function next() {
  if (i < size) {
    i++;
    image.src = images[i];
  } else {
    i = 0;
    image.src = images[i];
  }
}
