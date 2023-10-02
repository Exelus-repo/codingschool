<?php

declare(strict_types=1);

function echoWithBreaks(mixed $value, bool $dump = false): void {
    if($dump) {
        echo "<pre>", var_dump($value) ,"</pre>";
    } else {
        echo "<br />$value<br />";
    }
}