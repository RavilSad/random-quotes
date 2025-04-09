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
  {
    text: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
  },
  {
    text: 'You miss 100% of the shots you don’t take.',
    author: 'Wayne Gretzky',
  },
  {
    text: 'It does not matter how slowly you go as long as you do not stop.',
    author: 'Confucius',
  },
  {
    text: 'The best way to predict the future is to create it.',
    author: 'Peter Drucker',
  },
  {
    text: 'Do what you can, with what you have, where you are.',
    author: 'Theodore Roosevelt',
  },
  {
    text: "I have not failed. I've just found 10,000 ways that won't work.",
    author: 'Thomas Edison',
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: 'John Lennon',
  },
];

const quoteElement = document.getElementById('quote-text');
const quoteAuthorElement = document.getElementById('author');
const quoteBtn = document.getElementById('new-quote');

let index;
function getRandomQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  while (randomIndex === index) {
    randomIndex = Math.floor(Math.random() * quotes.length);
  }
  index = randomIndex;
  const quote = quotes[randomIndex];
  const { text: quoteText, author: quoteAuthorText } = quote;
  quoteElement.textContent = quoteText;
  quoteAuthorElement.textContent = quoteAuthorText;
}

const hiFunc = () => console.log('Surprise my boy');
quoteElement.addEventListener('click', hiFunc);

quoteBtn.addEventListener('click', getRandomQuote);

// Load the first quote
// getRandomQuote();
