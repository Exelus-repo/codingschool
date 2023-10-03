<?php

declare(strict_types=1);

include('../php-helpers/functions.php');

session_start();

function dayCzech(string $day): string 
{
    return match ($day) {
        'Mon' => 'Pondělí',
        'Tue' => 'Úterý',
        'Wed' => 'Středa',
        'Thu' => 'Čtvrtek',
        'Fri' => 'Pátek',
        'Sat' => 'Sobota',
        'Sun' => 'Neděle',
        default => 'Neznámý den',
    };
}

echoWithBreaks(date('j. m. Y - G:i'));

date_default_timezone_set('Europe/Prague');

echoWithBreaks(date('j. m. Y - G:i'));

echoWithBreaks(date('D - F'));

echoWithBreaks(dayCzech(date('D')));

echoWithBreaks(mktime(11, 14, 54, 8, 12, 2014));

echoWithBreaks(
    readfile('test.txt')
);


echoWithBreaks(implode('<br />', file('test.txt')));

echoWithBreaks(file('test.txt'), true);
echoWithBreaks(file('test.txt', FILE_IGNORE_NEW_LINES), true);
echoWithBreaks(file('test.txt', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES), true);

if(isset($_COOKIE['cookieName'])) {
    // přístup ke cookies přes superglobání promennou $_COOKIE
    echoWithBreaks($_COOKIE['cookieName']);    
} else {    
    // nastavení cookie
    setcookie(
        'cookieName',
        'cokoli co potřebujeme uložit u uživatele v PC',
        time() + 600,
    );
}

$_SESSION['test'] = 'testování SESSION';

echoWithBreaks($_SESSION, true);

// filtrace -> backendové validace vstupu

// echoWithBreaks(filter_list(), true);

$result = filter_var('email@ema*il.com', FILTER_VALIDATE_EMAIL);

echoWithBreaks($result, true);
