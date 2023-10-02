<?php

declare(strict_types=1);

include('../php-helpers/functions.php');

echo '<a href="form.php">Formulář</a>';

// funkce - předání argumentu hodnotou
function powerOfTwo(int $number): int {
    return $number * $number; // $number**2
}

$number = 5;

echoWithBreaks($number);

$numberPow = powerOfTwo($number);

echoWithBreaks($number);
echoWithBreaks($numberPow);


// funkce - předání argumentu odkazem -> POZOR modifikujemek předanou proměnnou
function powerOfTwoWithPointer(int &$number): int {
    return $number = $number**2;
}

echoWithBreaks($number);

$numberPow = powerOfTwoWithPointer($number);

echoWithBreaks($number);
echoWithBreaks($numberPow);

// Přednastavené konstanty
echoWithBreaks(PHP_VERSION);
echoWithBreaks(E_ERROR);
echoWithBreaks(PHP_OS);

// echoWithBreaks(get_defined_constants(), true);

echoWithBreaks($_SERVER, true);
