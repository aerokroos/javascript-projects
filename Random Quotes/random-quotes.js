async function getQuote() {
  await fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let randomQuote = Math.floor(Math.random() * data.length);
      document.getElementById("quote").innerHTML =
        '"' + data[randomQuote].text + '"';
      document.getElementById("author").innerHTML =
        "-" + data[randomQuote].author;
    });
}
