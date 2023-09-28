<?php 

declare(strict_types=1);

require_once('./functions.php');

function echoWithBreaks(mixed $value, bool $dump = false): void {
    if($dump) {
        echo "<pre>", var_dump($value) ,"</pre>";
    } else {
        echo "<br />$value<br />";
    }
}

$array = array("Škoda", "Audi", "Peugeot");

// přidání prvku -> array_push
array_push($array, "Toyota");
array_push($array, "GMC");

echoWithBreaks($array, true);

// cyklické procházení pole
$arrayCount = count($array);

for($i = 0; $i < $arrayCount; $i++) {
    if($i === 2) {
        break;
    }
    echo "<strong>$array[$i]</strong><br />";
}

for($i = 0; $i < $arrayCount; $i++) {
    if($i % 2 === 0) {
        continue;
    }
    echo "<em>$array[$i]</em><br />";
}

// for(i; i < array.length; i++) {
//     ...
// }

// array_slice -> vytvoření řezu z pole
$newArray = array_slice($array, 1, 3);

echoWithBreaks($newArray, true);

$array2 = ["Škoda", "Audi", "Peugeot"];
// ruční přiřazení indexu ->používat s opatrností!
$array2[5] = "Citroen";

echo "<br /> $array2[1]<br />";

echoWithBreaks($array2, true);

$assocArray = ["czech" => "Škoda", "german" => "Audi", "french" => "Peugeot"];

array_push($assocArray, "Toyota");

echoWithBreaks($assocArray, true);

// pracujeme pouze s hodnotou
foreach($assocArray as $car) {
    echo "<em>$car</em><br />";
}

// pracujeme s hodnotou i klíčem (indexem)
foreach($assocArray as $key => $car) {
    echo "<em>$key</em> - <strong>$car</strong><br />";
}

echo "<br /><br />", $assocArray["french"], " ", count($assocArray);

// jak projít assoc pole pomocí for loop
// pomocné pole indexů $indexes = ["czech", ...]
// $znacky_assoc[$indexes[$i]]

// $array = ["czech" => "Škoda", "czech" => "Audi", "french" => "Peugeot"]

// 3d pole
$heatmapData = [
    [[1,7,6],[75,63,5]],
    [[1,7,6],[75,63,5]],
    [[1,7,6],[75,63,5]],
];

// přístup k hodnotě
echoWithBreaks($heatmapData[1], true);
echoWithBreaks($heatmapData[1][0], true);
echoWithBreaks($heatmapData[1][0][2]);

// 2d pole
$cars = [
    "skoda" => ["Octavia", "Superb"],
    "peugeot" => ["308", "306"],
    "Audi" => ["A3", "Q6"]
];

foreach($cars as $key => $models) {
    echo "<em>$key</em> - ";

    foreach($models as $model) {
        echo "<em>$model</em> ";
    }

    echo "<br />";
}

echoWithBreaks($cars["skoda"], true);
echoWithBreaks($cars["skoda"][1]);

$string = "Nějaký řetězec s mezerami.";

echoWithBreaks($string);

$arrayFromString = explode(" ", $string);

echoWithBreaks($arrayFromString, true);

$newString = implode("<br />", $arrayFromString);

echoWithBreaks($newString);

echoString(15);
