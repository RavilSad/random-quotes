function toggleFavoriteIcon(isFavorite, toggleFavoriteBtn) {
  toggleFavoriteBtn.classList.toggle('fa', isFavorite);
  toggleFavoriteBtn.classList.toggle('far', !isFavorite);
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

export { toggleFavoriteIcon, showFavoriteCard, hideFavoriteCard };
