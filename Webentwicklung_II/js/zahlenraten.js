/* Pseudocode:

1. Wähle eine zufällige Zahl zwischen 1 und 100 aus und speichere sie in einer Variablen `secretNumber`.
2. Setze die maximale Anzahl an Versuchen auf 5 und speichere sie in einer Variablen `maxAttempts`.
3. Initialisiere eine Variable `attempts` auf 0, um die Anzahl der Versuche des Benutzers zu speichern.
4. Definiere eine Funktion `checkGuess()`, die ausgeführt wird, wenn der Benutzer auf die Schaltfläche "Tipp abgeben" klickt.
5. In `checkGuess()`:
    a. Erhalte den Wert des Eingabefelds und speichere ihn in einer Variablen `userGuess`.
    b. Erhöhe die Anzahl der Versuche um 1.
    c. Wenn `userGuess` gleich `secretNumber` ist, zeige eine Nachricht an, dass der Benutzer gewonnen hat und beende das Spiel.
    d. Wenn `attempts` gleich `maxAttempts` ist, zeige eine Nachricht an, dass der Benutzer verloren hat und beende das Spiel.
    e. Berechne den absoluten Unterschied zwischen `userGuess` und `secretNumber` und speichere ihn in einer Variablen `difference`.
    f. Wenn `difference` kleiner oder gleich 10 ist, zeige eine Nachricht an, dass der Tipp "heiß" ist.
    g. Wenn `difference` kleiner oder gleich 20 ist, zeige eine Nachricht an, dass der Tipp "sehr warm" ist.
    h. Wenn `difference` kleiner oder gleich 30 ist, zeige eine Nachricht an, dass der Tipp "lauwarm" ist.
    i. Wenn `difference` kleiner oder gleich 40 ist, zeige eine Nachricht an, dass der Tipp "warm" ist.
    j. Wenn `difference` kleiner oder gleich 50 ist, zeige eine Nachricht an, dass der Tipp "kalt" ist.
    k. Wenn `difference` größer als 50 ist, zeige eine Nachricht an, dass der Tipp "eiskalt" ist.
    l. Zeige eine Nachricht an, die dem Benutzer sagt, wie viele Versuche noch übrig sind.
6. Füge eine Tabelle hinzu, die die verschiedenen Nachrichten und ihre Bedeutungen anzeigt.
7. Füge CSS hinzu, um die Tabelle mittig auszurichten.
8. Füge CSS hinzu, um das Eingabefeld nach Spielende zu löschen.*/


// Erzeuge eine zufällige Zahl zwischen 1 und 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

// Setze die maximale Anzahl an Versuchen auf 5
const maxAttempts = 5;

// Initialisiere die Anzahl der Versuche mit 0
let attempts = 0;

// Definiere die Funktion zum Überprüfen des Benutzereingabewerts
function checkGuess() {
    // Erhalte den Benutzereingabewert und konvertiere ihn in eine Ganzzahl
    const userGuess = parseInt(document.getElementById('guessInput').value);

    // Erhöhe die Anzahl der Versuche um 1
    attempts++;

    // Überprüfe, ob der Benutzereingabewert mit der geheimen Zahl übereinstimmt
    if (userGuess === secretNumber) {
        // Wenn ja, zeige eine Glückwunschmeldung an
        alert('Glückwunsch! Du hast die Zahl erraten!');

        // Lösche den Inhalt des Eingabefelds
        document.getElementById('guessInput').value = '';

        // Setze die Anzahl der Versuche zurück auf 0
        attempts = 0;
    }
    // Überprüfe, ob die maximale Anzahl an Versuchen erreicht ist
    else if (attempts === maxAttempts) {
        // Wenn ja, zeige eine Nachricht mit der richtigen Antwort an
        alert(`Leider hast du nicht gewonnen. Die gesuchte Zahl war ${secretNumber}`);

        // Lösche den Inhalt des Eingabefelds
        document.getElementById('guessInput').value = '';

        // Setze die Anzahl der Versuche zurück auf 0
        attempts = 0;
    }
    // Wenn die Eingabe ungültig ist oder nicht mit der geheimen Zahl übereinstimmt
    else {
        // Berechne den absoluten Unterschied zwischen der Eingabe und der geheimen Zahl
        let difference = Math.abs(userGuess - secretNumber);

        // Bestimme die Temperatur-Nachricht basierend auf dem Unterschied
        let message;
        if (difference <= 10) {
            message = 'heiß';
        } else if (difference <= 20) {
            message = 'sehr warm';
        } else if (difference <= 30) {
            message = 'lauwarm';
        } else if (difference <= 40) {
            message = 'warm';
        } else if (difference <= 50) {
            message = 'kalt';
        } else {
            message = 'eiskalt';
        }

        // Zeige eine Nachricht mit dem Tipp und der verbleibenden Anzahl an Versuchen an
        alert(`Dein Tipp ist ${message}. Du hast noch ${maxAttempts - attempts} Versuche übrig.`);
    }
}

// Definiere die Funktion zum Zurücksetzen des Spiels
function resetGame() {
    // Erzeuge eine neue zufällige Zahl
    secretNumber = Math.floor(Math.random() * 100) + 1;

    // Setze die Anzahl der Versuche zurück auf 0
    attempts = 0;

    // Lösche den Inhalt des Eingabefelds
    document.getElementById('guessInput').value = '';
}



        
   

