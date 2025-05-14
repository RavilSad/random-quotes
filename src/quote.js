import { toggleFavoriteBtnHandler } from './favorite.js';
import { generateRandomInt } from './utils/math.js';
import { favoriteBtn } from '../index.js';

function generateRandomQuote(quotes, favoriteQuotes, setCurrentQuote) {
  const randomQuote = getRandomQuote(quotes);
  if (favoriteQuotes.find((quote) => quote.id === randomQuote.id)) {
    randomQuote.isFavorite = true;
  }
  setCurrentQuote(randomQuote);
  showQuote(randomQuote);
}

function showQuote(quote) {
  const { id, text, author } = quote;
  const quoteElement = document.getElementById('quote');
  const quoteTextElement = document.getElementById('quote-text');
  const quoteAuthorElement = document.getElementById('author');
  quoteTextElement.textContent = text;
  quoteAuthorElement.textContent = author;
  quoteElement.dataset.currentQuoteId = id;
  toggleFavoriteBtnHandler(quote, favoriteBtn);
}

function findQuoteById(quotes, id) {
  return quotes.find((quote) => quote.id === id);
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

export { generateRandomQuote, showQuote, findQuoteById };
