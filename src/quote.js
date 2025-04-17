import quotes from './Data/quotes.js';
import { toggleFavoriteBtnHandler } from './favorite.js';
import { generateRandomInt } from './utils.js';

let currentQuote = null;
function generateRandomQuote() {
  const randomQuote = getRandomQuote(quotes);
  currentQuote = randomQuote;
  showQuote(randomQuote);
}

function showQuote(quote) {
  const { text, author } = quote;
  const quoteElement = document.getElementById('quote-text');
  const quoteAuthorElement = document.getElementById('author');
  quoteElement.textContent = text;
  quoteAuthorElement.textContent = author;
  toggleFavoriteBtnHandler();
}

let currentIndex = -1;
function getRandomQuote(quotes) {
  let randomIndex;
  do {
    randomIndex = generateRandomInt(quotes.length);
  } while (randomIndex === currentIndex); // Повторяем, пока индекс совпадает
  currentIndex = randomIndex; // Обновляем текущий индекс
  return quotes[randomIndex];
}

export { generateRandomQuote, currentQuote };
