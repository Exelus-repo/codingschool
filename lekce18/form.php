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
    <form action="form.php" method="post" enctype="multipart/form-data">
        <div class="file-inputs">
            <div>
                <input type="text" name="filename[]">
                <input type="file" name="file[]" accept="image/*">
            </div>
        </div>
        <button class="add-inputs" type="button">Přidat další obrázek</button>
        <button class="remove-inputs" type="button">Odebrat poslední obrázek</button>
        <input type="submit" value="Odeslat">
    </form>

    <?php 
        echoWithBreaks('$_FILES:');
        echoWithBreaks($_FILES, true);
        echoWithBreaks('$_POST:');
        echoWithBreaks($_POST, true);

        if(isset($_FILES['file'])) {
            
            $filesCount = count($_FILES['file']['name']);

            for($i = 0; $i < $filesCount; $i++) {
                if(isset($_POST['filename'][$i])) {
                    $newName = stripslashes(
                        htmlspecialchars($_POST['filename'][$i])
                    );
        
                    $extension = pathinfo($_FILES['file']['name'][$i], PATHINFO_EXTENSION);
                    
                    // samotné uložení dočasného souboru -> přesun do trvalého umístení na disku
                    move_uploaded_file($_FILES['file']['tmp_name'][$i], "uploads/$newName.$extension");
                    echoWithBreaks('Soubor ' . ($i + 1) . ' byl nahrán');
                } else {
                    echoWithBreaks('Soubor ' . ($i + 1) . ' nebyl zoracován, protože nebylo zadáno jméno');
                }
            }

        } else {
            echoWithBreaks('Nebyl zvolen žádný soubor');
        }
    ?>

    <script src="js/script.js"></script>
</body>
</html>