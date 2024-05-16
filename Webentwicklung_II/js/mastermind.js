// Konstanten
const MAX_GUESSES = 3; // Maximale Anzahl von Vermutungen
const COLORS = ['rot', 'grün', 'blau', 'gelb', 'lila', 'orange']; // Liste der verfügbaren Farben

// Globale Variablen
let secret; // Geheime Kombination
let numGuesses = 0; // Anzahl der Vermutungen
let numColors; // Anzahl der Farben
let lengthSecret; // Länge der geheimen Kombination

// Funktion zum Generieren einer zufälligen geheimen Kombination
function generateSecret() {
  return Array.from({ length: lengthSecret }, () => COLORS[Math.floor(Math.random() * numColors)]);
}

// Funktion zum Vergleichen einer Vermutung mit der geheimen Kombination und Berechnen der Hinweise
function getHints(secret, guess) {
  let correct = 0;
  let wrong = 0;
  const guessCopy = [...guess];
  for (let i = 0; i < lengthSecret; i++) {
    if (guess[i] === secret[i]) {
      correct++;
      guessCopy[i] = null;
    }
  }
  for (let i = 0; i < lengthSecret; i++) {
    if (guessCopy[i] !== null && secret.includes(guessCopy[i])) {
      wrong++;
    }
  }
  return [correct, wrong];
}

// Funktion zum Vergleichen einer Vermutung mit der geheimen Kombination und Anzeigen der Farben an den richtigen Positionen
function getResult(secret, guess) {
  const result = [];
  for (let i = 0; i < lengthSecret; i++) {
    if (guess[i] === secret[i]) {
      result.push(guess[i]);
    } else {
      result.push('-');
    }
  }
  return result.join(' ');
}

// Funktion zum Abgeben einer Vermutung
function makeGuess() {
  const guessInput = document.getElementById('guess');
  const guess = guessInput.value.toLowerCase().split(' ');
  // Überprüfen, ob die Vermutung gültig ist
  if (guess.length !== lengthSecret || guess.some(c => !COLORS.includes(c))) {
    document.getElementById('message').textContent = `Bitte gib eine Kombination aus genau ${lengthSecret} Farben ein. Die verfügbaren Farben sind: ${COLORS.join(', ')}`;
    return;
  }
  // Vergleichen der Vermutung mit der geheimen Kombination und Anzeigen der Ergebnisse in der Tabelle
  const [correct, wrong] = getHints(secret, guess);
  const result = getResult(secret, guess);
  const resultsTable = document.getElementById('results');
  const row = resultsTable.insertRow();
  const guessCell = row.insertCell();
  const correctCell = row.insertCell();
  const wrongCell = row.insertCell();
  const resultCell = row.insertCell();
  guessCell.textContent = guess.join(' ');
  correctCell.textContent = correct;
  wrongCell.textContent = wrong;
  resultCell.textContent = result;
  numGuesses++;
  // Überprüfen, ob die Vermutung korrekt ist oder ob das Spiel vorbei ist
  if (correct === lengthSecret) {
    document.getElementById('message').textContent = "Glückwunsch! Du hast die geheime Kombination erraten.";
    return;
  }
  if (numGuesses === MAX_GUESSES) {
    document.getElementById('message').textContent = `Leider hast du die geheime Kombination nicht erraten. Die richtige Kombination war: ${secret.join(' ')}`;
  }
  guessInput.value = '';
}

// Funktion zum Starten eines neuen Spiels
function newGame() {
  // Lesen der Anzahl der Farben und der Länge der geheimen Kombination aus den Auswahlfeldern
  numColors = parseInt(document.getElementById('numColors').value);
  lengthSecret = parseInt(document.getElementById('lengthSecret').value);
  // Aktualisieren der Anweisungen
  document.getElementById('instructions').textContent = `Ich habe eine geheime Kombination aus ${lengthSecret} Farben erstellt. Die verfügbaren Farben sind: ${COLORS.slice(0, numColors).join(', ')}`;
  // Generieren einer neuen geheimen Kombination
  secret = generateSecret();
  // Zurücksetzen der Tabelle und der Anzahl der Vermutungen
  const resultsTable = document.getElementById('results');
  while (resultsTable.rows.length > 1) {
    resultsTable.deleteRow(1);
  }
  numGuesses = 0;
  // Aktualisieren der Nachricht
  document.getElementById('message').textContent = '';
}

// Starten eines neuen Spiels beim Laden der Seite
newGame();
