<?php

declare(strict_types=1);

include('../php-helpers/functions.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="form.php?klic=testování" method="get">
        <input type="text" name="username" required />
        <input type="password" name="pass">
        <input type="submit" value="Přihlásit" />
    </form>
    <?php
        echoWithBreaks('$_POST:');
        echoWithBreaks($_POST, true);

        echoWithBreaks('$_GET:');
        echoWithBreaks($_GET, true);        

        echoWithBreaks('$_REQUEST:');
        echoWithBreaks($_REQUEST, true);
    ?>
</body>
</html>