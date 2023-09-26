<?php
// tyto bumeme mít uložené bezpečně v .env souboru
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// pokud vlkádáme prvního uživatele (administrátora) do DB -> je tento způsob OK
$sql = "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('John', 'Doe', 'john@example.com')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}


// pokud bychom data pro vložení uživatele do DB dostali zvenčí (tzn. přes form apod.)
// tak chceme vždy použít prepared statement
$statement = $conn->prepare('INSERT INTO MyGuests (firstname, lastname, email) VALUES (?, ?, ?)');
$statement->bind_param('sss', $_POST['firstname'], $_POST['lastname'], $_POST['email']);

$statement->execute();

// data pro select bereme z URL -> posts.php?id=525 => posts.php?id=525;SELECT * FROM users WHERE 1=1;
$statement = $conn->prepare('SELECT * FROM posts WHERE id=?');
$statement->bind_param('s', $_GET['id']);

$statement->execute();

// data bereme z Cookie
$statement = $conn->prepare('SELECT * FROM users WHERE access_token=?');
$statement->bind_param('s', $_COOKIE['access_token']);

$statement->execute();

$conn->close();

$_2d_array = [
    [hodnoty ve sloupcích],
    [hodnoty ve sloupcích],
    [hodnoty ve sloupcích],
    [hodnoty ve sloupcích],
];
