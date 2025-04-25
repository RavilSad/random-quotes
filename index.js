import quotes from './src/Data/quotes.js';
import { generateRandomQuote } from './src/quote.js';
import {
  toggleFavorite,
  hideToggleFavoriteBtn,
  deleteFavotiteCard,
} from './src/favorite.js';

let currentQuote = null;

const favoriteBtn = document.getElementById('favorite-btn');
const favoritesContainer = document.getElementById('favorite-container');
const quoteBtn = document.getElementById('new-quote');

function setCurrentQuote(quote) {
  currentQuote = quote;
}

hideToggleFavoriteBtn(favoriteBtn);

favoritesContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-btn')) {
    const card = event.target.closest('.favoriteCard');
    const cardId = card.dataset.favoriteQuoteId;
    const quote = quotes.find((card) => card.id === cardId);
    deleteFavotiteCard(quote, favoriteBtn);
  }
});

quoteBtn.addEventListener('click', () =>
  generateRandomQuote(quotes, setCurrentQuote)
);

favoriteBtn.addEventListener('click', () =>
  toggleFavorite(currentQuote, favoriteBtn, favoritesContainer)
);

export { favoriteBtn };
