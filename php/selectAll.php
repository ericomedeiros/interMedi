<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT id_remedio, rem_name FROM remedio";
$result = $conn->query($sql);

$json = mysqli_fetch_all($result,MYSQLI_ASSOC);


echo json_encode($json);
$conn->close();
?>