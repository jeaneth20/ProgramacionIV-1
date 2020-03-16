<?php
    //ECHO E SLO MISMO QUE MSG O CONSOLE

    $nombre = $_GET['nombre'];
    date_default_timezone_set('America/El_salvador');
    echo 'Hola '. $nombre .' Desde el Servidor'.date('d-m-y H:i:s');
?>