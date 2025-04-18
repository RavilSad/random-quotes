function toggleFavoriteBtnHandler(quote, btn) {
  showToggleFavoriteBtn(btn);
  toggleFavoriteIconBtn(quote.isFavorite, btn);
}

function toggleFavorite(quote, btn, favoritesContainer) {
  quote.isFavorite = !quote.isFavorite;
  const { text, author, isFavorite } = quote;
  toggleFavoriteIconBtn(isFavorite, btn);

  if (isFavorite) {
    showFavoriteCard(text, author, favoritesContainer);
  } else {
    hideFavoriteCard(text);
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

export { toggleFavoriteBtnHandler, toggleFavorite, hideToggleFavoriteBtn };
