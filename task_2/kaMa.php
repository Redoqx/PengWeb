<?php
    $id = $_GET['idProduct'];
    $nego = $_GET['nego'];
    if(!isset($nego)) $nego="Harga Awal";
    switch($id){
        case 1:
            header("Location: LenovoIdeapad.html?penawaran=$nego");
            break;
    }
?>