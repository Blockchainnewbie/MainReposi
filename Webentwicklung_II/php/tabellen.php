<?php
// Erstellt ein zweidimensionales Array mit 7 Zeilen und 3 Spalten
        $data = [
            ['John', 'Doe', 'john@example.com'],
            ['Jane', 'Doe', 'jane@example.com'],
            ['Jim', 'Carrey', 'jim@example.com'],
            ['Janet', 'Jackson', 'janet@example.com'],
            ['James', 'Bond', 'james@example.com'],
            ['Jessica', 'Alba', 'jessica@example.com'],
            ['Johnny', 'Depp', 'johnny@example.com']
        ];

        // Beginnt die Tabelle und formatiert sie
        echo '<table border="1" cellpadding="10">';

        // Fügt eine Kopfzeile zur Tabelle hinzu
        $header = ['Vorname', 'Nachname', 'E-Mail'];
        echo '<thead><tr>';
        foreach ($header as $item) {
            echo '<th>' . $item . '</th>';
        }
        echo '</tr></thead>';

        // Erstellt den Körper der Tabelle
        echo '<tbody>';
        foreach ($data as $row) {
            echo '<tr>';
            foreach ($row as $cell) {
                echo '<td>' . $cell . '</td>';
            }
            echo '</tr>';
        }
        echo '</tbody>';

        // Beendet die Tabelle
        echo '</table>';