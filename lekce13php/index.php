<?php
$world = 'World';

// Interpolace proměnné v řetezci se složenými uvozovkami
echo "Hello $world!";

echo '<br />';

// U jednoduchých uvozovek interpolace nefunguje
echo 'Hello $world!';

echo '<br />';
// Konkatenace (zřetězení)
echo 'Hello ' . $world . '!';

echo '<br />';
// Postupné vypsání řetězců
echo 'Hello ', $world, '!'; // <- je rychlejší než konkatenace i iterpolace

// <input type="text" name="name" /> -> přístup k formulářovým polím přes POST
// $_POST['name'];

// okaz.php?search=klicovaslova&dalsiKlic=hodnota -> přístup ke query stringu přes GET
// $_GET['search'];

// mocina
$cislo = 12;

echo 12**2;
