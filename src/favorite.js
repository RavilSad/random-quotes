function toggleFavoriteBtnHandler(quote, btn) {
  showToggleFavoriteBtn(btn);
  toggleFavoriteIconBtn(quote.isFavorite, btn);
}

function toggleFavorite(quote, btn, favoritesContainer) {
  quote.isFavorite = !quote.isFavorite;
  toggleFavoriteIconBtn(quote.isFavorite, btn);

  if (quote.isFavorite) {
    showFavoriteCard(quote, favoritesContainer);
  } else {
    hideFavoriteCard(quote.id);
  }
}

function toggleFavoriteIconBtn(isFavorite, toggleFavoriteBtn) {
  toggleFavoriteBtn.classList.toggle('fa', isFavorite);
  toggleFavoriteBtn.classList.toggle('far', !isFavorite);
}

function showToggleFavoriteBtn(btn) {
  btn.style.display = 'inline-block';
}

function hideToggleFavoriteBtn(btn) {
  btn.style.display = 'None';
}

function showFavoriteCard(quote, container) {
  const { id, text, author } = quote;
  const favoriteCardElement = document.createElement('div');
  favoriteCardElement.classList.add('favoriteCard');
  favoriteCardElement.dataset.quoteId = id;
  favoriteCardElement.innerHTML = `<p>${text}</p>
  <p class='author'> ${author}</p>`;
  container.appendChild(favoriteCardElement);
}

function hideFavoriteCard(id) {
  const card = document.querySelector(`[data-quote-id="${id}"]`);
  if (card) {
    card.remove();
  }
}

export { toggleFavoriteBtnHandler, toggleFavorite, hideToggleFavoriteBtn };
