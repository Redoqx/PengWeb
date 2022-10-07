<?php
    $id = $_GET['idProduct'];
    $nego = $_GET['nego'];
    if(!$nego) $nego="Harga Awal";
    switch($id){
        case 1:
            header("Location: LenovoIdeapad.html?penawaran=$nego");
            break;
        case 2:
            header("Location: AcerSwift3.html?penawaran=$nego");
            break;
    }
?>