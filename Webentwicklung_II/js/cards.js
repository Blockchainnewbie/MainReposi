const cards = [
    '🍎', '🍌', '🍓', '🍊', '🍋', '🍇',
    '🍕', '🌭', '🌮', '🍔', '🍟', '🍩',
    '🍎', '🍌', '🍓', '🍊', '🍋', '🍇',
    '🍕', '🌭', '🌮', '🍔', '🍟', '🍩'
  ];
  
  let flippedCards = [];
  let matchedCards = [];
  
  const gameBoard = document.getElementById('game-board');
  
  // Shuffle the cards
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  
  // Create the card elements and add event listeners
  for (let i = 0; i < cards.length; i++) {
    const card = document.createElement('div');
    card.className = 'card';
    card.textContent = '?';
    card.addEventListener('click', flipCard);
    gameBoard.appendChild(card);
  }
  
  function flipCard() {
    if (flippedCards.length === 2 || matchedCards.includes(this)) return;
  
    this.textContent = cards[this.id];
    this.className = 'card flipped';
    flippedCards.push(this);
  
    if (flippedCards.length === 2) {
      setTimeout(checkMatch, 1000);
    }
  }
  
  function checkMatch() {
    const [card1, card2] = flippedCards;
    if (card1.textContent === card2.textContent) {
      matchedCards.push(card1, card2);
      flippedCards = [];
      if (matchedCards.length === cards.length) {
        alert('Congratulations! You won!');
      }
    } else {
      card1.textContent = '?';
      card2.textContent = '?';
      card1.className = 'card';
      card2.className = 'card';
      flippedCards = [];
    }
  }