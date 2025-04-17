import { generateRandomQuote } from './src/quote.js';

const quoteBtn = document.getElementById('new-quote');
quoteBtn.addEventListener('click', generateRandomQuote);
