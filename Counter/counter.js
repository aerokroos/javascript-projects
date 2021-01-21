let count = document.getElementById("count");

function checkNumber(number) {
  if (Math.sign(parseInt(number)) === 1) {
    count.style.color = "green";
  } else if (Math.sign(parseInt(number)) === -1) {
    count.style.color = "red";
  } else if (Math.sign(parseInt(number)) === 0) {
    count.style.color = "black";
  }
}

function add() {
  count.innerHTML = parseInt(count.innerHTML) + 1;
  checkNumber(count.innerHTML);
}

function sub() {
  count.innerHTML = parseInt(count.innerHTML) - 1;
  checkNumber(count.innerHTML);
}
