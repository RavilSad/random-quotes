import quotes from './quotes.js';

const quoteElement = document.getElementById('quote-text');
const quoteAuthorElement = document.getElementById('author');
const quoteBtn = document.getElementById('new-quote');
const toggleFavoriteBtn = document.getElementById('toggle-favorite');
const favoritesContainer = document.getElementById('favorite-container');

let currentIndex = -1;
function getRandomQuote() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === currentIndex); // Повторяем, пока индекс совпадает
  currentIndex = randomIndex; // Обновляем текущий индекс
  const quote = quotes[randomIndex];
  const { text: quoteText, author: quoteAuthorText } = quote;
  quoteElement.textContent = quoteText;
  quoteAuthorElement.textContent = quoteAuthorText;

  toggleFavoriteBtn.textContent = quote.isFavorite
    ? 'Remove from favorite'
    : 'Add to favorite';

  toggleFavoriteBtn.style.display = 'inline-block';
}

function toggleFavorite() {
  const quote = quotes[currentIndex];
  quote.isFavorite = !quote.isFavorite;
  toggleFavoriteBtn.textContent = quote.isFavorite
    ? 'Remove from favorite'
    : 'Add to favorite';

  if (quote.isFavorite) {
    const favoriteCardElement = document.createElement('div');
    favoriteCardElement.classList.add('favoriteCard');
    favoriteCardElement.innerHTML = `<p>${quote.text}</p>
    <p class='author'> ${quote.author}</p>`;
    favoritesContainer.appendChild(favoriteCardElement);
  } else {
    const favoriteCards = document.querySelectorAll('.favoriteCard');
    console.log(favoriteCards);
    favoriteCards.forEach((card) => {
      if (card.textContent.includes(quote.text)) {
        card.remove();
      }
    });
  }
}

const hiFunc = () => console.log('Surprise my boy');
quoteElement.addEventListener('click', hiFunc);

quoteBtn.addEventListener('click', getRandomQuote);
toggleFavoriteBtn.addEventListener('click', toggleFavorite);
