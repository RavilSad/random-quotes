import quotes from './src/Data/quotes.js';
import { generateRandomQuote, findQuoteById, showQuote } from './src/quote.js';
import {
  localStorageSetItem,
  localStorageGetItem,
} from './src/utils/localStorage.js';
import {
  toggleFavorite,
  hideToggleFavoriteBtn,
  deleteFavotiteCard,
  showFavoriteCard,
} from './src/favorite.js';

const CURRENT_QUOTE_KEY = 'currentQuote';
const FAVORITE_QUOTES_KEY = 'favoriteQuotes';

let currentQuote = null;
const favoriteQuotes = [];

const favoriteBtn = document.getElementById('favorite-btn');
const favoritesContainer = document.getElementById('favorite-container');
const quoteBtn = document.getElementById('new-quote');

function setCurrentQuote(
  quote,
  changeLocalStorage = false,
  overrideFavorite = null
) {
  if (changeLocalStorage) {
    if (overrideFavorite !== null) {
      quote.isFavorite = overrideFavorite;
    } else {
      quote.isFavorite = !quote.isFavorite;
    }

    const index = favoriteQuotes.findIndex(
      (favoriteQuote) => favoriteQuote.id === quote.id
    );

    if (quote.isFavorite) {
      if (index === -1) {
        favoriteQuotes.push({ ...quote });
      }
    } else {
      if (index !== -1) {
        favoriteQuotes.splice(index, 1);
      }
    }
    localStorageSetItem(FAVORITE_QUOTES_KEY, favoriteQuotes);
  }
  currentQuote = quote;
  localStorageSetItem(CURRENT_QUOTE_KEY, quote);
}

function localStorageInit() {
  const localStorageQuote = localStorageGetItem(CURRENT_QUOTE_KEY);
  if (localStorageQuote) {
    showQuote(localStorageQuote);
    const quote = findQuoteById(quotes, localStorageQuote.id);
    quote.isFavorite = localStorageQuote.isFavorite;
    currentQuote = quote;
  }

  const localStorageFavoriteQuotes = localStorageGetItem(FAVORITE_QUOTES_KEY);
  if (localStorageFavoriteQuotes) {
    localStorageFavoriteQuotes.forEach((quote) => {
      favoriteQuotes.push(quote);
      showFavoriteCard(quote, favoritesContainer);
    });
  }
}

hideToggleFavoriteBtn(favoriteBtn);

favoritesContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-btn')) {
    const card = event.target.closest('.favoriteCard');
    const cardId = card.dataset.favoriteQuoteId;
    const quote = quotes.find((card) => card.id === cardId);
    deleteFavotiteCard(quote, setCurrentQuote, favoriteBtn);
  }
});

quoteBtn.addEventListener('click', () =>
  generateRandomQuote(quotes, favoriteQuotes, setCurrentQuote)
);

favoriteBtn.addEventListener('click', () =>
  toggleFavorite(currentQuote, setCurrentQuote, favoriteBtn, favoritesContainer)
);

window.addEventListener('load', localStorageInit);

export { favoriteBtn };
