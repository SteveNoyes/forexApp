const forexData = 'htttp://data.fixer.io/api/latest?access_key=2eb41420d59a1ea8886f9c60e92117f8&symbols=USD,GBP';

fetch(forexData)
  .then( (data) => data.json())
  .then( (parse) => generateHTML(parse))

const generateHTML = (data) => {
  const html = `
    <h2 class='title'>GBP/USD</h2>
    <p class='base'>${data.base}</p>
    <p class="timestamp">${data.date}</p>
    <p class>${data.rates.GBP}</p>
    <p>${data.rates.USD}</p>
  `
  const test = document.querySelector('.generateHTML');
  test.innerHTML = html;
}

// base: "EUR"
// date: "2020-10-14"
// rates:
// GBP: 0.902794
// USD: 1.17426
// __proto__: Object
// success: true
// timestamp: 1602715445
// __proto__: Object
