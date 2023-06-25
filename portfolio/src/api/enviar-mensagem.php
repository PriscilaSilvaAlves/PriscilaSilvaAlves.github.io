<?php 
    header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Access-Control-Allow-Origin: http://192.168.18.92:3000");

    $connection = new mysqli("localhost", "root", "123456", "portfolio");
    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit;
    }else{
        $nome = $_POST["nome"];
        $email = $_POST["email"];
        $mensagem = $_POST["mensagem"];
        $assunto = $_POST["assunto"];

        $sql = "INSERT INTO mensagens (nome, email, assunto, mensagem) VALUES ('$nome', '$email', '$assunto', '$mensagem');";
        mysqli_query($connection, $sql);
        $connection->close();
        
        echo "Dados enviados";
    }
?>