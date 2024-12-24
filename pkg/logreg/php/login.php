<?php
/*require_once('db.php');

$login = $_POST['login'];
$pass = $_POST['pass'];

if (empty($login) || empty($pass)) {
    echo "Заполните все поля.";
} else {
    $sql = "SELECT * FROM users_1 WHERE login = '$login' AND pass = '$pass'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            header('Location: ../profile1/profile.html');
        }
    } else {
        echo "error";
    }
}*/


require_once('db.php');

    $login = $_POST['login'];
    $password = $_POST['password'];

    $login = mysqli_real_escape_string($conn, $login);

    $sql = "SELECT * FROM users WHERE login='$login' AND password= '$password' ";
    $result = $conn->query($sql);

    if($result->num_rows > 0){
        while($row = $result->fetch_assoc()){
            
            header('Location: ../../profile1/profile.html');
            exit();
        }
        } else {
            echo "Нет такого пользователя";
        }

?>