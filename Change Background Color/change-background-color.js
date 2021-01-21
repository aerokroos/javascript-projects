const colors = [
  "aliceblue",
  "red",
  "blue",
  "yellow",
  "aqua",
  "aquamarine",
  "black",
  "blueviolet",
  "brown",
  "cadetblue",
  "pink",
  "gray",
  "chartreuse",
  "cyan",
  "darkblue",
  "darkgreen",
  "darkkhaki",
  "darkmagenta",
];

function changeBackgroundColor() {
  let randomColor = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomColor];
}
