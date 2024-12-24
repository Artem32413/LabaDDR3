
<?php
/*require_once('db.php');
$login = $_POST['login'];
$pass = $_POST['pass'];
$repeatpass = $_POST['repeatpass'];
$email = $_POST['email'];

if (empty($login) || empty($pass) || empty($repeatpass) || empty($email)) {
    echo "Заполните все поля";
} else
{
    if($pass != $repeatpass) {
        echo "Пароли не совпадают";
    } else {
        $sql = "INSERT INTO `users_1` (login,pass,email) VALUES ('$login', '$pass', '$email')";
        if ($conn -> query($sql) === TRUE) 
        {
            header('Location: ../profile1/profile.html');
        }
        else {
            echo "Ошибка: " . $conn->error;
        }
    }
} */

require_once('db.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $login = $_POST['login'];
    $password = $_POST['password'];
    $confirmPassword = $_POST['confirmPassword'];

    if ($password !== $confirmPassword) {
        echo "Пароли не совпадают";
    } else {

        $login = mysqli_real_escape_string($conn, $login);

        $sql = "SELECT * FROM users WHERE login='$login'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            echo "Пользователь с таким логином уже существует";
        } else {

            $insertSql = "INSERT INTO users (login, password) VALUES ('$login', '$password')";
            if ($conn->query($insertSql) === TRUE) {

                header('Location: ../../profile1/profile.html');
                exit();
            } else {
                echo "Ошибка при регистрации: " . $conn->error;
            }
        }
    }
}
?>