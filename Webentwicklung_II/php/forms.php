<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP und Formulare</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 800px;
      margin: auto;
    }
    h1, h2 {
      color: #333;
    }
    form {
      background-color: #f2f2f2;
      padding: 20px;
      border-radius: 5px;
      margin-bottom: 20px;
    }
    label {
      display: block;
      margin-bottom: 10px;
    }
    input[type="text"], input[type="submit"] {
      width: 100%;
      padding: 5px;
      margin-bottom: 10px;
    }
    input[type="submit"] {
      background-color: #333;
      color: #fff;
      border: none;
    }
    .output {
      background-color: #ddd;
      padding: 20px;
      border-radius: 5px;
    }
  </style>
</head>
<body>

  <h1>PHP und Formulare</h1>

  <h2>HTML-Formular</h2>
  <form action="" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">

    <label for="email">E-Mail:</label>
    <input type="text" id="email" name="email">

    <input type="submit" value="Absenden">
  </form>

  <h2>PHP-Ausgabe</h2>
  <?php
  // Überprüfen, ob das Formular abgeschickt wurde
  if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["name"], $_POST["email"])) {
    // Formulardaten verarbeiten
    $name = $_POST["name"];
    $email = $_POST["email"];

    // Ausgabe der Formulardaten
    echo "<div class='output'>";
    echo "Hallo, " . $name . "!<br>";
    echo "Deine E-Mail-Adresse lautet: " . $email;
    echo "</div>";
  }
  ?>

</body>
</html>
