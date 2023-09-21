<?php
$world = 'World';

// Interopace proměnné v řetezci se složenými uvozovkami
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