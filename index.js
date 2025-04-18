import quotes from './src/Data/quotes.js';
import { generateRandomQuote } from './src/quote.js';
import { toggleFavorite, hideToggleFavoriteBtn } from './src/favorite.js';

let currentQuote = null;

const favoriteBtn = document.getElementById('favorite-btn');
const favoritesContainer = document.getElementById('favorite-container');
const quoteBtn = document.getElementById('new-quote');

function setCurrentQuote(quote) {
  currentQuote = quote;
}

hideToggleFavoriteBtn(favoriteBtn);

quoteBtn.addEventListener('click', () =>
  generateRandomQuote(quotes, setCurrentQuote)
);

favoriteBtn.addEventListener('click', () =>
  toggleFavorite(currentQuote, favoriteBtn, favoritesContainer)
);

export { favoriteBtn };
