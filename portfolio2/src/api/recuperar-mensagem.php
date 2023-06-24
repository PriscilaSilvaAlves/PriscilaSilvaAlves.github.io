<?php
    header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Access-Control-Allow-Origin: http://192.168.18.92:3000");

    $connection = new mysqli("localhost", "root", "123456", "portfolio");
    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit;
    }else{
        $sql = "SELECT * FROM mensagens;";
        $response = mysqli_query($connection, $sql);
        $connection->close();
        
        for($i=0; $registro=mysqli_fetch_array($response); $i++){
            $array[$i]["id"] = $registro["id"];
            $array[$i]["nome"] = $registro["nome"];
            $array[$i]["email"] = $registro["email"];
            $array[$i]["assunto"] = $registro["assunto"];
            $array[$i]["mensagem"] = $registro["mensagem"];
        }

        echo json_encode($array);
    }

?>