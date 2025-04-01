const quotes = [
  {
    text: "Believe you can and you're halfway there.",
    author: 'Theodore Roosevelt',
  },
  {
    text: 'Act as if what you do makes a difference. It does.',
    author: 'William James',
  },
  {
    text: 'Success is not final, failure is not fatal: it is the courage to continue that counts.',
    author: 'Winston Churchill',
  },
];

const quoteElement = document.getElementById('quote-text');
const quoteBtn = document.getElementById('new-quote');

let index;
function getRandomQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  while (randomIndex === index) {
    randomIndex = Math.floor(Math.random() * quotes.length);
  }
  index = randomIndex;
  const quote = quotes[randomIndex];
  quoteElement.innerText = `"${quote.text} - ${quote.author}"`;
}

const hiFunc = () => console.log('HihiHIHI');
quoteElement.addEventListener('click', hiFunc);

quoteBtn.addEventListener('click', getRandomQuote);

// Load the first quote
// getRandomQuote();
