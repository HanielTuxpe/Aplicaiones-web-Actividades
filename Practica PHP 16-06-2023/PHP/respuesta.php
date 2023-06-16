<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Página Principal</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' href='./CSS/normalize.css'>
    <link rel='stylesheet' type='text/css' href='./CSS/style.css'>
</head>
<body>
    <?php
        $nombre=$_POST['Name'];
        $usuario = $_POST['User'];
        $correo = $_POST['E-mail'];
        $DateBirth = $_POST['DateB'];
        $Number = $_POST['Num'];
        $RFCT = $_POST['RFC'];
        $contra = $_POST['psswd'];
        $contracon = $_POST['psswdc'];
        
        echo('Tu registro ha sido existoso. Acontinuación tus datos.');
    ?>
        <br><br>
        <table border="1">
            <tr>
                <td> Nombre Completo </td>
                <td> <?php echo($nombre); ?> </td>
            <tr>
                <td> Usuario </td>
                <td> <?php echo($usuario); ?> </td>
            <tr>
                <td> E-mail </td>
                <td> <?php echo($correo); ?> </td>
            <tr>
                <td> Fecha de Nacimiento </td>
                <td> <?php echo($DateBirth); ?> </td>
            <tr>                
                <td> Número Telefónico </td>
                <td> <?php echo($Number); ?> </td>
            <tr>                
                <td> RFC </td>
                <td> <?php echo($RFCT); ?> </td>
            <tr>                
                <td> Contraseña </td>
                <td> <?php echo($contra); ?> </td>
            <tr>                
                <td> Contraseña confirmada </td>
                <td> <?php echo($contracon); ?> </td>
            </tr>
        </table>
</body>
</html>