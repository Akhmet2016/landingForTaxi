<?php
    $name = $_POST['name'];
    $telephone = $_POST['telephone'];
    $city = $_POST['city'];
    $check = $_POST['check'];
    $msg = "Новая заявка на сайте http://yandextaxistr.ru/ \nИмя: $name \nТелефон: $telephone \nГород: $city";
    $token = '5284639003:AAELLfqtfGjEp5n7gBDlsffsungQCv_M-8M';
    $chatId = '753257878';
    $response = file_get_contents('https://api.telegram.org/bot' . $token . '/sendMessage?chat_id=' . $chatId . '&text=' . urlencode($msg));
    $responseDecode = json_decode($response, true);
    if ($responseDecode !== null && isset($responseDecode['ok']) && $responseDecode['ok'] === true) {
        echo true;
    } else {
        echo false;
    }
?>