import { currentQuote } from './quote.js';

const toggleFavoriteBtn = document.getElementById('toggle-favorite');
const favoritesContainer = document.getElementById('favorite-container');

hideToggleFavoriteBtn(toggleFavoriteBtn);
toggleFavoriteBtn.addEventListener('click', toggleFavorite);

function toggleFavoriteBtnHandler() {
  showToggleFavoriteBtn(toggleFavoriteBtn);
  toggleFavoriteIcon(currentQuote.isFavorite, toggleFavoriteBtn);
}

function toggleFavorite() {
  const quote = currentQuote;
  quote.isFavorite = !quote.isFavorite;

  toggleFavoriteIcon(quote.isFavorite, toggleFavoriteBtn);

  if (quote.isFavorite) {
    showFavoriteCard(quote.text, quote.author, favoritesContainer);
  } else {
    hideFavoriteCard(quote.text);
  }
}

function toggleFavoriteIcon(isFavorite, toggleFavoriteBtn) {
  toggleFavoriteBtn.classList.toggle('fa', isFavorite);
  toggleFavoriteBtn.classList.toggle('far', !isFavorite);
}

function showToggleFavoriteBtn(btn) {
  btn.style.display = 'inline-block';
}

function hideToggleFavoriteBtn(btn) {
  btn.style.display = 'None';
}

function showFavoriteCard(quote, author, container) {
  const favoriteCardElement = document.createElement('div');
  favoriteCardElement.classList.add('favoriteCard');
  favoriteCardElement.innerHTML = `<p>${quote}</p>
  <p class='author'> ${author}</p>`;
  container.appendChild(favoriteCardElement);
}

function hideFavoriteCard(quote) {
  const favoriteCards = document.querySelectorAll('.favoriteCard');
  favoriteCards.forEach((card) => {
    if (card.textContent.includes(quote)) {
      card.remove();
    }
  });
}

export { toggleFavoriteBtnHandler };
