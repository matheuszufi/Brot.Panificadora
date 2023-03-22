<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $assunto = $_POST["assunto"];
    $mensagem = $_POST["mensagem"];
    $para = "matheuszufi@gmail.com";
    $cabecalho = "From: $nome <$email>";
    if (mail($para, $assunto, $mensagem, $cabecalho)) {
        echo "O e-mail foi enviado com sucesso.";
    } else {
        echo "Ocorreu um erro ao enviar o e-mail. Por favor, tente novamente mais tarde.";
    }
}
?>