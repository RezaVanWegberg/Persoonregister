<?php
    $error = [];

    if ($_SERVER['REQUEST_METHOD'] == "POST"){


        foreach($_POST as $key => $value){
            if (!$value) {
                $error[$key] = "$key is niet ingevuld";
            } else {
                $_POST[$key] = test_input($value);
            }
        };
    } else {
    };


function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="Persoonregister.css">
</head>

<body>
    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">
        
    <div class="vraag">
        <label for="getal">Wat is je favoriete getal? </label>
        <input type="text" name="getal" id="getal" value="<?php echo isset($_POST['getal']) ? $_POST['getal'] : '' ?>">
        <!-- <span style="color:red">*</span> -->
        <br>
        <?php if(array_key_exists("getal", $error)){ ?>
            <p style="color:red"> je hebt dit veld niet ingevuld </p>
            <?php } ?>
            
        </div>
        <div class="submit-button"  >
            <input id="submit" type="submit" value="Versturen">
            
        </div>
    </form>

    <script>
    var getal = <?php echo json_encode(($_POST['getal'])); ?>;
    console.log("test " + getal);
    </script>



    <div id="container"></div>
    <script src="Persoonregister.js"></script>

</body>

</html>