<!DOCTYPE html>
<html lang="de">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Arrays und Schleifen</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
        }

        h1,
        h2 {
            padding: 20px;
        }

        h1 {
            background-color: #007bff;
            color: white;
            margin: 0;
        }

        h2 {
            background-color: #f8f9fa;
            border-bottom: 1px solid #dee2e6;
        }

        main {
            padding: 20px;
        }

        pre {
            background-color: #f8f9fa;
            border: 1px solid #dee2e6;
            padding: 10px;
            margin: 10px 0;
            overflow-x: auto;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }

        th,
        td {
            padding: 10px;
            border: 1px solid #dee2e6;
        }

        th {
            background-color: #007bff;
            color: white;
        }
    </style>
</head>

<body>
    <header>
        <h1>PHP Arrays und Schleifen</h1>
    </header>

    <main>
        <h2>Arrays in PHP</h2>

        <p>
            Arrays sind eine der grundlegenden Datenstrukturen in der Programmierung und ermöglichen es Ihnen, mehrere Werte in einer einzigen Variablen zu speichern. In PHP gibt es drei Arten von Arrays:
        </p>

        <ul>
            <li>Indexierte Arrays: Bei indexierten Arrays beginnen die Indizes bei 0, und jeder Wert im Array hat einen eindeutigen numerischen Index.</li>
            <li>Assoziative Arrays: Assoziative Arrays verwenden benutzerdefinierte Schlüssel anstelle von numerischen Indizes. Jeder Wert im Array ist mit einem eindeutigen Schlüssel verknüpft.</li>
            <li>Multidimensionale Arrays: Multidimensionale Arrays sind Arrays, die weitere Arrays enthalten. Sie können mehrere Ebenen von Arrays haben, um komplexe Datenstrukturen zu erstellen.</li>
        </ul>

        <h2>Array-Deklaration in PHP</h2>

        <p>
            In PHP können Sie Arrays mit der folgenden Syntax deklarieren:
        </p>

        <pre>
// Indexiertes Array
$indexedArray = [1, 2, 3, 4, 5];

// Assoziatives Array
$associativeArray = ['key1' => 'value1', 'key2' => 'value2', 'key3' => 'value3'];

// Multidimensionales Array
$multidimensionalArray = [
    ['John', 'Doe', 'john@example.com'],
    ['Jane', 'Doe', 'jane@example.com'],
    ['Jim', 'Carrey', 'jim@example.com'],
    // ...
];
        </pre>

        <h2>Schleifen und Arrays</h2>

        <p>
            Schleifen sind in der Programmierung unerlässlich, um wiederholte Aufgaben auszuführen. In PHP können Sie die <code>for</code>, <code>foreach</code>, <code>while</code> und <code>do-while</code>-Schleifen verwenden. Bei der Arbeit mit Arrays ist die <code>foreach</code>-Schleife besonders nützlich, da sie speziell für das Durchlaufen von Arrays entwickelt wurde.
        </p>

        <p>
            Die <code>foreach</code>-Schleife hat die folgende Syntax:
        </p>

        <pre>
foreach (array_expression as $value)
    statement
        </pre>

        <p>
            Sie können auch den Schlüssel (Index) jedes Wertes im Array abrufen, indem Sie die folgende Syntax verwenden:
        </p>

        <pre>
foreach (array_expression as $key => $value)
    statement
        </pre>

        <h2>Multidimensionale Arrays und Schleifen</h2>

        <p>
            Bei der Arbeit mit multidimensionalen Arrays können Sie geschachtelte <code>foreach</code>-Schleifen verwenden, um die Werte in den eingebetteten Arrays zu durchlaufen. Hier ist ein Beispiel für das Durchlaufen eines multidimensionalen Arrays mit geschachtelten <code>foreach</code>-Schleifen:
        </p>

        <pre>
$multidimensionalArray = [
    ['John', 'Doe', 'john@example.com'],
    ['Jane', 'Doe', 'jane@example.com'],
    ['Jim', 'Carrey', 'jim@example.com'],
    // ...
];

foreach ($multidimensionalArray as $row) {
    foreach ($row as $cell) {
        echo $cell . ' ';
    }
    echo '<br>';
}
        </pre>

        <h2>Beispiel: Tabelle mit PHP und Arrays erstellen</h2>

        <p>
            Hier ist ein Beispiel, wie Sie eine HTML-Tabelle mit PHP und einem multidimensionalen Array erstellen können:
        </p>

        <pre>
&lt;!DOCTYPE html&gt;
&lt;html lang="de"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Meine erste PHP-Tabelle&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;?php
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
        echo '&lt;table border="1" cellpadding="10"&gt;';

        // Fügt eine Kopfzeile zur Tabelle hinzu
        $header = ['Vorname', 'Nachname', 'E-Mail'];
        echo '&lt;thead&gt;&lt;tr&gt;';
        foreach ($header as $item) {
            echo '&lt;th&gt;' . $item . '&lt;/th&gt;';
        }
        echo '&lt;/tr&gt;&lt;/thead&gt;';

        // Erstellt den Körper der Tabelle
        echo '&lt;tbody&gt;';
        foreach ($data as $row) {
            echo '&lt;tr&gt;';
            foreach ($row as $cell) {
                echo '&lt;td&gt;' . $cell . '&lt;/td&gt;';
            }
            echo '&lt;/tr&gt;';
        }
        echo '&lt;/tbody&gt;';

        // Beendet die Tabelle
        echo '&lt;/table&gt;';
    ?&gt;
&lt;/body&gt;
&lt;/html&gt;
        </pre>

        <h2>Ergebnis</h2>

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
        ?>
    </main>

    <footer>
        <p>
            Erstellt von <a href="M. Haberland">Ihr Name</a>
        </p>
    </footer>
</body>

</html>
