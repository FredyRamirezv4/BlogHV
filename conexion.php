<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "bloghv";

// Crear una nueva conexión
$connexion = new mysqli($servername, $username, $password, $dbname);

// Verificar si hay errores en la conexión
if ($connexion->connect_error) {
    die("Error de conexión: " . $connexion->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $telefono = $_POST["telefono"];
    $empresa = $_POST["empresa"];
    $direccion = $_POST["direccion"];
    $nit = $_POST["nit"];
    $mensaje = $_POST["mensaje"];

    // Crear la consulta SQL para insertar los datos en la tabla
    $sql = "INSERT INTO tabla_datos (nombre, correo, telefono, empresa, direccion, nit, mensaje) VALUES ('$nombre', '$correo', '$telefono', '$empresa', '$direccion', '$nit', '$mensaje')";

    // Ejecutar la consulta y verificar si fue exitosa
    if ($connexion->query($sql) === TRUE) {
        echo "<div class= >Los datos se han guardado correctamente.</div>";
        echo "<script>setTimeout(function() { window.close(); }, 3000)</script>";
    } else {
        echo "Error al guardar los datos: " . $connexion->error;
    }
}

// Cerrar la conexión
$connexion->close();
?>

