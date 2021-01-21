const hex_values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function hexChangeBackgroundColor() {
  let hex = "#";
  let i;

  for (i = 0; i < 6; i++) {
    const color_hex_code = Math.floor(Math.random() * hex_values.length);
    hex += hex_values[color_hex_code];
  }
  document.body.style.backgroundColor = hex;
  document.getElementById("color").innerHTML = hex;
}
