function deleteFavotiteCard(quote, setCurrentQuote, btn) {
  if (quote.id) {
    setCurrentQuote(quote, true, false);
    hideFavoriteCard(quote.id);
    const currentQuoteId = document.querySelector('[data-current-quote-id]')
      ?.dataset.currentQuoteId;
    if (quote.id === currentQuoteId) {
      toggleFavoriteIconBtn(quote.isFavorite, btn);
    }
  }
}

function toggleFavoriteBtnHandler(quote, btn) {
  showToggleFavoriteBtn(btn);
  toggleFavoriteIconBtn(quote.isFavorite, btn);
}

function showToggleFavoriteBtn(btn) {
  btn.style.display = 'inline-block';
}

function toggleFavoriteIconBtn(isFavorite, toggleFavoriteBtn) {
  toggleFavoriteBtn.classList.toggle('fa', isFavorite);
  toggleFavoriteBtn.classList.toggle('far', !isFavorite);
}

function toggleFavorite(quote, setCurrentQoute, btn, favoritesContainer) {
  const changeFavoriteFlag = true;
  setCurrentQoute(quote, changeFavoriteFlag);
  toggleFavoriteIconBtn(quote.isFavorite, btn);

  if (quote.isFavorite) {
    showFavoriteCard(quote, favoritesContainer);
  } else {
    hideFavoriteCard(quote.id);
  }
}

function showFavoriteCard(quote, container) {
  const { id, text, author } = quote;
  const favoriteCardElement = document.createElement('div');
  favoriteCardElement.classList.add('favoriteCard');
  favoriteCardElement.dataset.favoriteQuoteId = id;
  favoriteCardElement.innerHTML = `
  <div class='favorite-card-content'>
  <p>${text}</p>
  <p class='author'> ${author}</p>
  </div>
  <button class='delete-btn'>Delete
  <i class="fa fa-trash-alt"></i></button>`;
  container.appendChild(favoriteCardElement);
}

function hideFavoriteCard(id) {
  const card = document.querySelector(`[data-favorite-quote-id="${id}"]`);
  if (card) {
    card.remove();
  }
}

function hideToggleFavoriteBtn(btn) {
  btn.style.display = 'None';
}

export {
  toggleFavoriteBtnHandler,
  toggleFavorite,
  hideToggleFavoriteBtn,
  deleteFavotiteCard,
  showFavoriteCard,
};
